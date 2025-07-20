import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B8C3cij_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Particle Physics Research","description":"Dark Photon and Doubly Charged Higgs Boson","main":{"id":2,"content":"Introducing my particle physics research at Fermilab, where I dove into the mysteries of Dark Photons and the elusive Doubly Charged Higgs Boson. Using advanced techniques like Pythia simulations and CMS data analysis, I worked to develop our understanding of multi-lepton final states.\n","imgCard":"@/images/higgs.avif","imgMain":"@/images/higgs.avif","imgAlt":"Mockup boxes of assorted screw set"},"tabs":[{"id":"tabs-with-card-item-1","dataTab":"#tabs-with-card-1","title":"Description"},{"id":"tabs-with-card-item-2","dataTab":"#tabs-with-card-2","title":"Specifications"},{"id":"tabs-with-card-item-3","dataTab":"#tabs-with-card-3","title":"Blueprints"}],"longDescription":{"title":"Cutting-Edge Particle Physics Research","subTitle":"Exploring the frontiers of physics through Dark Photon and Doubly Charged Higgs Boson experimentation at Fermilab. Using advanced techniques and data analysis, we're pushing the boundaries of our understanding of fundamental particles and forces.\n","btnTitle":"Learn more about my research","btnURL":"#"},"descriptionList":[{"title":"Dark Photon Analysis","subTitle":"Conducting Run III analyses on Dark Photons using Pythia simulations and advanced data processing techniques."},{"title":"Doubly Charged Higgs Search","subTitle":"Investigating multi-lepton final states to detect the elusive Doubly Charged Higgs boson, potentially reshaping our understanding of the universe."},{"title":"Advanced Data Analysis","subTitle":"Utilizing CMS data and custom c++ algorithms to optimize lepton cuts and implement trigger efficiencies for various particles."}],"specificationsLeft":[{"title":"Research Facility","subTitle":"Conducted at Fermilab, one of the world's leading particle physics laboratories."},{"title":"Experimental Approach","subTitle":"Employing CMS detector data and Pythia simulations to search for new fundamental particles."},{"title":"Analysis Techniques","subTitle":"Utilizing Linux-based data processing to produce histograms based on criteria such as delta R and lepton reconstruction."},{"title":"Focus Areas","subTitle":"Specializing in Dark Photons and Doubly Charged Higgs searches in multi-lepton final states."}],"tableData":[{"feature":["Specification","Value"],"description":[["Particle","Doubly Charged Higgs"],["Electric Charge","+2 or -2"],["Mass (GeV)","100"],["Spin","0"],["Decay Modes","Same-sign leptons"]]}],"blueprints":{"first":"@/images/particle-two.avif","second":"@/images/particle-three.avif"},"slug":"a765"};
				const file = "/Users/deanbarrow/Projects/personal-website/src/content/products/a765.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
