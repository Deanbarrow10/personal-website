import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { r as removeBase, i as isRemotePath, V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_Cm8qrbO7.mjs';
import { a as createComponent, i as renderUniqueStylesheet, j as renderScriptElement, k as createHeadAndContent, r as renderTemplate, d as renderComponent, u as unescapeHTML } from './astro/server_B8C3cij_.mjs';
import 'kleur/colors';
import * as devalue from 'devalue';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc) || imageSrc.startsWith("/")) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  params.set("importer", filePath);
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://screwfast.uk", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = rawEntry.filePath ? updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap) : rawEntry.data;
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/en/post-1.md": () => import('./post-1_CcWpo-By.mjs'),"/src/content/blog/en/post-2.md": () => import('./post-2_B9BwpQ81.mjs'),"/src/content/blog/en/post-3.md": () => import('./post-3_DKc0A6qf.mjs'),"/src/content/blog/fr/post-1.md": () => import('./post-1_Dl9hbERM.mjs'),"/src/content/blog/fr/post-2.md": () => import('./post-2_B3rzCeUp.mjs'),"/src/content/blog/fr/post-3.md": () => import('./post-3_DfIskIIR.mjs'),"/src/content/docs/advanced/technical-specifications.mdx": () => import('./technical-specifications_ZugE0DSt.mjs'),"/src/content/docs/construction/custom-solutions.mdx": () => import('./custom-solutions_CXbxiNsO.mjs'),"/src/content/docs/construction/project-planning.mdx": () => import('./project-planning_DKfnBE2_.mjs'),"/src/content/docs/construction/safety.mdx": () => import('./safety_BuwY35ky.mjs'),"/src/content/docs/construction/service-overview.mdx": () => import('./service-overview_nI3nsaNQ.mjs'),"/src/content/docs/de/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DtXiitdz.mjs'),"/src/content/docs/de/guides/getting-started.mdx": () => import('./getting-started_Bdyg2N09.mjs'),"/src/content/docs/de/guides/intro.mdx": () => import('./intro_BM62_wnM.mjs'),"/src/content/docs/de/welcome-to-docs.mdx": () => import('./welcome-to-docs_CUX2mgXI.mjs'),"/src/content/docs/es/guides/first-project-checklist.mdx": () => import('./first-project-checklist_JeX9eHvH.mjs'),"/src/content/docs/es/guides/getting-started.mdx": () => import('./getting-started_JxlR2e_5.mjs'),"/src/content/docs/es/guides/intro.mdx": () => import('./intro_B6Bp5wnV.mjs'),"/src/content/docs/es/welcome-to-docs.mdx": () => import('./welcome-to-docs_CjjwMOcF.mjs'),"/src/content/docs/fa/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CZWBJMAo.mjs'),"/src/content/docs/fa/guides/getting-started.mdx": () => import('./getting-started_ZxutdsXI.mjs'),"/src/content/docs/fa/guides/intro.mdx": () => import('./intro_B37pSjfJ.mjs'),"/src/content/docs/fa/welcome-to-docs.mdx": () => import('./welcome-to-docs_Caz-s1MI.mjs'),"/src/content/docs/fr/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BhLPPs3q.mjs'),"/src/content/docs/fr/guides/getting-started.mdx": () => import('./getting-started_CVOqdJLs.mjs'),"/src/content/docs/fr/guides/intro.mdx": () => import('./intro_CsQFTWjs.mjs'),"/src/content/docs/fr/welcome-to-docs.mdx": () => import('./welcome-to-docs_BfylazWQ.mjs'),"/src/content/docs/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CBCjesbT.mjs'),"/src/content/docs/guides/getting-started.mdx": () => import('./getting-started_BHr46Y4D.mjs'),"/src/content/docs/guides/intro.mdx": () => import('./intro_DUxh4vZL.mjs'),"/src/content/docs/ja/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DuTJQpgw.mjs'),"/src/content/docs/ja/guides/getting-started.mdx": () => import('./getting-started_DpCnIeoR.mjs'),"/src/content/docs/ja/guides/intro.mdx": () => import('./intro_CXpU09t2.mjs'),"/src/content/docs/ja/welcome-to-docs.mdx": () => import('./welcome-to-docs_DMoRzJFX.mjs'),"/src/content/docs/tools/equipment-care.mdx": () => import('./equipment-care_C4JVk1g9.mjs'),"/src/content/docs/tools/tool-guides.mdx": () => import('./tool-guides_jNOhEl-u.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('./welcome-to-docs_DhDy9Nzi.mjs'),"/src/content/docs/zh-cn/guides/first-project-checklist.mdx": () => import('./first-project-checklist_B6okt9M1.mjs'),"/src/content/docs/zh-cn/guides/getting-started.mdx": () => import('./getting-started_JHSN9W8m.mjs'),"/src/content/docs/zh-cn/guides/intro.mdx": () => import('./intro_DTgXbMqJ.mjs'),"/src/content/docs/zh-cn/welcome-to-docs.mdx": () => import('./welcome-to-docs_BWx6JLVN.mjs'),"/src/content/insights/en/insight-1.md": () => import('./insight-1_DuSb89sX.mjs'),"/src/content/insights/en/insight-2.md": () => import('./insight-2_D1L_l_hI.mjs'),"/src/content/insights/en/insight-3.md": () => import('./insight-3_BJ6UqpiH.mjs'),"/src/content/insights/fr/insight-1.md": () => import('./insight-1_DJbruBqh.mjs'),"/src/content/insights/fr/insight-2.md": () => import('./insight-2_BlhI-8gh.mjs'),"/src/content/insights/fr/insight-3.md": () => import('./insight-3_DS7HDx9r.mjs'),"/src/content/products/a765.md": () => import('./a765_DAORkZR1.mjs'),"/src/content/products/b203.md": () => import('./b203_BGXAu1lJ.mjs'),"/src/content/products/f303.md": () => import('./f303_unPs8sQu.mjs'),"/src/content/products/t845.md": () => import('./t845_DI5gnOfp.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"docs":{"type":"content","entries":{"welcome-to-docs":"/src/content/docs/welcome-to-docs.mdx","advanced/technical-specifications":"/src/content/docs/advanced/technical-specifications.mdx","construction/custom-solutions":"/src/content/docs/construction/custom-solutions.mdx","construction/safety":"/src/content/docs/construction/safety.mdx","construction/project-planning":"/src/content/docs/construction/project-planning.mdx","construction/service-overview":"/src/content/docs/construction/service-overview.mdx","es/welcome-to-docs":"/src/content/docs/es/welcome-to-docs.mdx","de/welcome-to-docs":"/src/content/docs/de/welcome-to-docs.mdx","fa/welcome-to-docs":"/src/content/docs/fa/welcome-to-docs.mdx","fr/welcome-to-docs":"/src/content/docs/fr/welcome-to-docs.mdx","guides/first-project-checklist":"/src/content/docs/guides/first-project-checklist.mdx","guides/getting-started":"/src/content/docs/guides/getting-started.mdx","guides/intro":"/src/content/docs/guides/intro.mdx","ja/welcome-to-docs":"/src/content/docs/ja/welcome-to-docs.mdx","tools/tool-guides":"/src/content/docs/tools/tool-guides.mdx","tools/equipment-care":"/src/content/docs/tools/equipment-care.mdx","zh-cn/welcome-to-docs":"/src/content/docs/zh-cn/welcome-to-docs.mdx","es/guides/first-project-checklist":"/src/content/docs/es/guides/first-project-checklist.mdx","es/guides/getting-started":"/src/content/docs/es/guides/getting-started.mdx","es/guides/intro":"/src/content/docs/es/guides/intro.mdx","de/guides/first-project-checklist":"/src/content/docs/de/guides/first-project-checklist.mdx","de/guides/getting-started":"/src/content/docs/de/guides/getting-started.mdx","de/guides/intro":"/src/content/docs/de/guides/intro.mdx","fa/guides/first-project-checklist":"/src/content/docs/fa/guides/first-project-checklist.mdx","fa/guides/getting-started":"/src/content/docs/fa/guides/getting-started.mdx","fa/guides/intro":"/src/content/docs/fa/guides/intro.mdx","ja/guides/first-project-checklist":"/src/content/docs/ja/guides/first-project-checklist.mdx","ja/guides/getting-started":"/src/content/docs/ja/guides/getting-started.mdx","ja/guides/intro":"/src/content/docs/ja/guides/intro.mdx","zh-cn/guides/first-project-checklist":"/src/content/docs/zh-cn/guides/first-project-checklist.mdx","zh-cn/guides/getting-started":"/src/content/docs/zh-cn/guides/getting-started.mdx","zh-cn/guides/intro":"/src/content/docs/zh-cn/guides/intro.mdx","fr/guides/first-project-checklist":"/src/content/docs/fr/guides/first-project-checklist.mdx","fr/guides/getting-started":"/src/content/docs/fr/guides/getting-started.mdx","fr/guides/intro":"/src/content/docs/fr/guides/intro.mdx"}},"products":{"type":"content","entries":{"a765":"/src/content/products/a765.md","b203":"/src/content/products/b203.md","f303":"/src/content/products/f303.md","t845":"/src/content/products/t845.md"}},"blog":{"type":"content","entries":{"en/post-1":"/src/content/blog/en/post-1.md","en/post-2":"/src/content/blog/en/post-2.md","en/post-3":"/src/content/blog/en/post-3.md","fr/post-1":"/src/content/blog/fr/post-1.md","fr/post-2":"/src/content/blog/fr/post-2.md","fr/post-3":"/src/content/blog/fr/post-3.md"}},"insights":{"type":"content","entries":{"en/insight-1":"/src/content/insights/en/insight-1.md","en/insight-2":"/src/content/insights/en/insight-2.md","en/insight-3":"/src/content/insights/en/insight-3.md","fr/insight-1":"/src/content/insights/fr/insight-1.md","fr/insight-2":"/src/content/insights/fr/insight-2.md","fr/insight-3":"/src/content/insights/fr/insight-3.md"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/en/post-1.md": () => import('./post-1_D25azpYV.mjs'),"/src/content/blog/en/post-2.md": () => import('./post-2_XOuCoXjZ.mjs'),"/src/content/blog/en/post-3.md": () => import('./post-3_WdFt2M-F.mjs'),"/src/content/blog/fr/post-1.md": () => import('./post-1_DshWHkcz.mjs'),"/src/content/blog/fr/post-2.md": () => import('./post-2_CDSXDUHz.mjs'),"/src/content/blog/fr/post-3.md": () => import('./post-3_BNF7gF_m.mjs'),"/src/content/docs/advanced/technical-specifications.mdx": () => import('./technical-specifications_Ca4Nf3AM.mjs'),"/src/content/docs/construction/custom-solutions.mdx": () => import('./custom-solutions_D5176AqC.mjs'),"/src/content/docs/construction/project-planning.mdx": () => import('./project-planning_DI0mhC__.mjs'),"/src/content/docs/construction/safety.mdx": () => import('./safety_CBuu52dR.mjs'),"/src/content/docs/construction/service-overview.mdx": () => import('./service-overview_kTdptsJD.mjs'),"/src/content/docs/de/guides/first-project-checklist.mdx": () => import('./first-project-checklist_tsvW8_E1.mjs'),"/src/content/docs/de/guides/getting-started.mdx": () => import('./getting-started_DHQ1hJWN.mjs'),"/src/content/docs/de/guides/intro.mdx": () => import('./intro_Cncsxf15.mjs'),"/src/content/docs/de/welcome-to-docs.mdx": () => import('./welcome-to-docs_BE5IUagn.mjs'),"/src/content/docs/es/guides/first-project-checklist.mdx": () => import('./first-project-checklist_7K6Z6SW9.mjs'),"/src/content/docs/es/guides/getting-started.mdx": () => import('./getting-started_B1HWu0OH.mjs'),"/src/content/docs/es/guides/intro.mdx": () => import('./intro_Bz4DyTJR.mjs'),"/src/content/docs/es/welcome-to-docs.mdx": () => import('./welcome-to-docs_UitOuLFW.mjs'),"/src/content/docs/fa/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BqT-1Flr.mjs'),"/src/content/docs/fa/guides/getting-started.mdx": () => import('./getting-started_BOGVE2DL.mjs'),"/src/content/docs/fa/guides/intro.mdx": () => import('./intro_MfA0K49o.mjs'),"/src/content/docs/fa/welcome-to-docs.mdx": () => import('./welcome-to-docs_CS6XChCN.mjs'),"/src/content/docs/fr/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CP4CEade.mjs'),"/src/content/docs/fr/guides/getting-started.mdx": () => import('./getting-started_Blk11usl.mjs'),"/src/content/docs/fr/guides/intro.mdx": () => import('./intro_QOMZxWWy.mjs'),"/src/content/docs/fr/welcome-to-docs.mdx": () => import('./welcome-to-docs_j-0Hnxx0.mjs'),"/src/content/docs/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BTVk7ML_.mjs'),"/src/content/docs/guides/getting-started.mdx": () => import('./getting-started_CD5Ytkae.mjs'),"/src/content/docs/guides/intro.mdx": () => import('./intro_BuJtAbM4.mjs'),"/src/content/docs/ja/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BsqtERvh.mjs'),"/src/content/docs/ja/guides/getting-started.mdx": () => import('./getting-started_uHvvnChn.mjs'),"/src/content/docs/ja/guides/intro.mdx": () => import('./intro_DHcjEY1h.mjs'),"/src/content/docs/ja/welcome-to-docs.mdx": () => import('./welcome-to-docs_iSbRlTr5.mjs'),"/src/content/docs/tools/equipment-care.mdx": () => import('./equipment-care_DPJbQWNW.mjs'),"/src/content/docs/tools/tool-guides.mdx": () => import('./tool-guides_DLPCqphl.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('./welcome-to-docs_ObLjOx2U.mjs'),"/src/content/docs/zh-cn/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DA7C6Rqf.mjs'),"/src/content/docs/zh-cn/guides/getting-started.mdx": () => import('./getting-started_B1ISi9CX.mjs'),"/src/content/docs/zh-cn/guides/intro.mdx": () => import('./intro_w3ZDOOim.mjs'),"/src/content/docs/zh-cn/welcome-to-docs.mdx": () => import('./welcome-to-docs_PWvJWCL9.mjs'),"/src/content/insights/en/insight-1.md": () => import('./insight-1_C2axIkOJ.mjs'),"/src/content/insights/en/insight-2.md": () => import('./insight-2_B8jJTfde.mjs'),"/src/content/insights/en/insight-3.md": () => import('./insight-3_akHyEZVZ.mjs'),"/src/content/insights/fr/insight-1.md": () => import('./insight-1_fXM7iO0D.mjs'),"/src/content/insights/fr/insight-2.md": () => import('./insight-2_DhwwSPPJ.mjs'),"/src/content/insights/fr/insight-3.md": () => import('./insight-3_y_Uezq_1.mjs'),"/src/content/products/a765.md": () => import('./a765_eRRHM97b.mjs'),"/src/content/products/b203.md": () => import('./b203_CNINNADJ.mjs'),"/src/content/products/f303.md": () => import('./f303_DAfNgnyX.mjs'),"/src/content/products/t845.md": () => import('./t845_D_JjKSZG.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { getCollection as g };
