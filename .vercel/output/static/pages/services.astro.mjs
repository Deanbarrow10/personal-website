/* empty css                                 */
import { a as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_B8C3cij_.mjs';
import 'kleur/colors';
import { a as $$MainLayout, S as SITE } from '../chunks/MainLayout_DJAqc3Wq.mjs';
import { $ as $$MainSection, a as $$RightSection, b as $$LeftSection, c as $$FeaturesStats } from '../chunks/FeaturesStats_CcALdvP2.mjs';
export { renderers } from '../renderers.mjs';

const harvard = new Proxy({"src":"/_astro/harvard.B3r67_yy.png","width":1200,"height":1168,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/deanbarrow/Projects/personal-website/src/images/harvard.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/deanbarrow/Projects/personal-website/src/images/harvard.png");
							return target[name];
						}
					});

const mit = new Proxy({"src":"/_astro/mit.DWj_cmMb.png","width":1080,"height":866,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/deanbarrow/Projects/personal-website/src/images/mit.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/deanbarrow/Projects/personal-website/src/images/mit.png");
							return target[name];
						}
					});

const commonApp = new Proxy({"src":"/_astro/common-app.dcmRyw7l.jpg","width":1920,"height":853,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/deanbarrow/Projects/personal-website/src/images/common-app.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/deanbarrow/Projects/personal-website/src/images/common-app.jpg");
							return target[name];
						}
					});

const coding = new Proxy({"src":"/_astro/coding.CwXkWlKp.jpg","width":1920,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/deanbarrow/Projects/personal-website/src/images/coding.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/deanbarrow/Projects/personal-website/src/images/coding.jpg");
							return target[name];
						}
					});

const mandelbrot = new Proxy({"src":"/_astro/mandelbrot.70MowR7V.jpg","width":500,"height":375,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/deanbarrow/Projects/personal-website/src/images/mandelbrot.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/deanbarrow/Projects/personal-website/src/images/mandelbrot.jpg");
							return target[name];
						}
					});

const studying = new Proxy({"src":"/_astro/studying.CcrJzfeX.jpg","width":612,"height":612,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/deanbarrow/Projects/personal-website/src/images/studying.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/deanbarrow/Projects/personal-website/src/images/studying.jpg");
							return target[name];
						}
					});

const college = new Proxy({"src":"/_astro/college.e3IbYQC2.jpg","width":1742,"height":980,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/deanbarrow/Projects/personal-website/src/images/college.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/deanbarrow/Projects/personal-website/src/images/college.jpg");
							return target[name];
						}
					});

const graduation = new Proxy({"src":"/_astro/graduation.oobxGA1E.jpg","width":413,"height":360,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/deanbarrow/Projects/personal-website/src/images/graduation.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/deanbarrow/Projects/personal-website/src/images/graduation.jpg");
							return target[name];
						}
					});

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const articles = [
    {
      isRightSection: true,
      title: "Exceptional Academic Background",
      subTitle: "My academic journey has been marked by exceptional achievements, including acceptance into every single Ivy League university, MIT, and Stanford. With a near-perfect SAT score of 1550 (800 in Math, 750 in Reading/Writing), I bring a wealth of personal experience to my tutoring. I've successfully helped numerous students gain admission to top 20 universities, leveraging my firsthand knowledge of the application process.",
      single: false,
      imgOne: harvard,
      imgOneAlt: "Student reviewing college acceptance letters",
      imgTwo: mit,
      imgTwoAlt: "Student studying with tutor"
    },
    {
      isRightSection: false,
      title: "Comprehensive Services",
      subTitle: "I offer a wide range of services tailored to meet your college application needs. These include in-depth essay reviews, intensive SAT exam preparation, comprehensive Common App guidance, and strategic application planning recommendations. For detailed information on package plans, please reach out to me directly at dbarrow@stanford.edu.",
      img: commonApp,
      imgAlt: "Before and after SAT scores improvement",
      btnExists: true,
      btnTitle: "Contact for Package Plans",
      btnURL: "mailto:dbarrow@stanford.edu"
    },
    {
      isRightSection: true,
      title: "Extensive Tutoring Experience",
      subTitle: "My tutoring career began in 2018, covering a wide range of subjects from Algebra to Calculus and coding. I've accumulated over 300 hours of one-on-one SAT tutoring, helping hundreds of high school students significantly improve their scores. My experience spans various institutions, including Homewood-Flossmoor High School and IMSA, providing me with diverse insights into different learning environments and student needs.",
      single: false,
      imgOne: coding,
      imgOneAlt: "Group tutoring session",
      imgTwo: mandelbrot,
      imgTwoAlt: "Bird's eye view of a college campus"
    },
    {
      isRightSection: false,
      title: "Personalized Approach",
      subTitle: "I specialize in one-on-one sessions with high school students aged 14-18, focusing primarily on SAT Math, Reading, and Writing sections. My approach is highly personalized and results-driven. Each session begins with a review of progress and goals, followed by targeted instruction using official SAT materials. I ensure ample time for independent practice, which is crucial for mastery. My methods are continually adjusted based on each student's unique needs and learning style, ensuring optimal results.",
      img: studying,
      imgAlt: "Student and tutor working together on SAT prep"
    },
    {
      isRightSection: true,
      title: "Classroom and Application Expertise",
      subTitle: "In classroom settings, I prioritize creating an engaging and clear learning environment. We work through practice problems together, identifying and improving weak areas while building confidence. Beyond SAT prep, I offer valuable insights into the college application process, drawing from my personal experiences with top-tier universities. This comprehensive approach ensures that students are well-prepared not just for the SAT, but for the entire college application journey.",
      single: false,
      imgOne: college,
      imgOneAlt: "Students in a classroom setting",
      imgTwo: graduation,
      imgTwoAlt: "Student working on college application",
      btnExists: true,
      btnTitle: "Start Your Path to Success",
      btnURL: "#"
    }
  ];
  const pageTitle = `Services | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://yourwebsite.com/services",
    "url": "https://yourwebsite.com/services",
    "name": "Expert College Consulting Services",
    "description": "Comprehensive college consulting services including SAT prep, essay review, and application strategy from an Ivy League graduate.",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://yourwebsite.com",
      "name": "Your College Consulting Business",
      "description": "Expert college admissions consulting and SAT preparation services."
    },
    "inLanguage": "en-US"
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MainSection", $$MainSection, { "title": "Achieve Your College Dreams", "subTitle": "With acceptance to every Ivy League university, MIT, and Stanford, I offer expert guidance to help you navigate the college admissions process and excel in your SAT preparation.", "btnExists": true, "btnTitle": "Schedule a Consultation", "btnURL": "#" })} ${articles.map((article) => {
    return article.isRightSection ? renderTemplate`${renderComponent($$result2, "RightSection", $$RightSection, { "title": article.title, "subTitle": article.subTitle, "single": article.single, "imgOne": article.imgOne, "imgOneAlt": article.imgOneAlt, "imgTwo": article.imgTwo, "imgTwoAlt": article.imgTwoAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}` : renderTemplate`${renderComponent($$result2, "LeftSection", $$LeftSection, { "title": article.title, "subTitle": article.subTitle, "img": article.img, "imgAlt": article.imgAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}`;
  })}${renderComponent($$result2, "FeaturesStats", $$FeaturesStats, { "title": "Success by the Numbers", "subTitle": "My commitment to excellence is reflected in the achievements of my students and my own academic success.", "mainStatTitle": "100%", "mainStatSubTitle": "Ivy League acceptance rate for my college applications", "stats": [
    {
      stat: "1550",
      description: "Personal SAT score"
    },
    {
      stat: "300+",
      description: "Hours of one-on-one SAT tutoring"
    },
    {
      stat: "Hundreds",
      description: "of students helped to improve scores"
    }
  ] })} ` })}`;
}, "/Users/deanbarrow/Projects/personal-website/src/pages/services.astro", void 0);

const $$file = "/Users/deanbarrow/Projects/personal-website/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Services,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
