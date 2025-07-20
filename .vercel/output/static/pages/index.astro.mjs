/* empty css                                 */
import { a as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_B8C3cij_.mjs';
import 'kleur/colors';
import { a as $$MainLayout } from '../chunks/MainLayout_DJAqc3Wq.mjs';
import { a as $$HeroSection, b as $$ClientsSection, c as $$FeaturesNavs, d as $$FAQ } from '../chunks/FAQ_CJzEDcNY.mjs';
export { renderers } from '../renderers.mjs';

const heroImage = new Proxy({"src":"/_astro/dean-profile.CagvIRJt.avif","width":800,"height":800,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/deanbarrow/Projects/personal-website/src/images/dean-profile.avif";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/deanbarrow/Projects/personal-website/src/images/dean-profile.avif");
							return target[name];
						}
					});

const subTitle = "Answers to common questions about myself";
const faqs = [
	{
		question: "What are you involved with on campus?",
		answer: "I am an organizer for TreeHacks, the world's largest collegiate hackathon. I am also a member of the Jiu Jitsu club and Debate team."
	},
	{
		question: "What are you currently working on?",
		answer: "I am developing a mental health app which combines my passion for tech with my desire to improve mental health."
	},
	{
		question: "What research have you done?",
		answer: "My research experience spans both physics and computer science. During high school, I conducted particle physics research at Fermilab, where I focused on Dark Photons and the Higgs Boson. Subsequently, at Stanford University, I shifted my focus to the realm of cybersecurity. In this field, I have been actively involved in research projects, with a particular emphasis on DNS security. One of my key contributions was the development of a ZDNS validation tool for DNSSEC, which enhances the security and integrity of the Domain Name System."
	},
	{
		question: "How can I best reach you?",
		answer: "The most direct way to connect with me is through email at dbarrow@stanford.edu. I'm always excited to engage in meaningful conversations or simply exchange ideas. Don't hesitate to reach out!"
	},
	{
		question: "What subjects are you most interested in?",
		answer: "I am passionate about the intersection between computer science, mathematics, and entrepreneurship. This forms the basis of my academic pursuits."
	},
	{
		question: "What do you like to do in your free time?",
		answer: "I enjoy playing sports with friends, teaching violin to my students, and building out web apps."
	}
];
const faqs$1 = {
	subTitle: subTitle,
	faqs: faqs
};

const construction = new Proxy({"src":"/_astro/mental-health.DqGAJeUE.avif","width":1920,"height":1097,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/deanbarrow/Projects/personal-website/src/images/mental-health.avif";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/deanbarrow/Projects/personal-website/src/images/mental-health.avif");
							return target[name];
						}
					});

const tools = new Proxy({"src":"/_astro/stanford.DrFw7fcD.avif","width":1200,"height":675,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/deanbarrow/Projects/personal-website/src/images/stanford.avif";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/deanbarrow/Projects/personal-website/src/images/stanford.avif");
							return target[name];
						}
					});

const dashboard = new Proxy({"src":"/_astro/coding.DvkNDipy.avif","width":626,"height":417,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/deanbarrow/Projects/personal-website/src/images/coding.avif";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/deanbarrow/Projects/personal-website/src/images/coding.avif");
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": `Dean Barrow's Personal <span
        class="text-yellow-500 dark:text-yellow-400">Website</span>`, "subTitle": "Computer Science student at Stanford, passionate about building things that matter.", "primaryBtn": "Projects", "primaryBtnURL": "/products", "secondaryBtn": "Contact Me", "secondaryBtnURL": "/contact", "src": heroImage, "alt": "Stack of ScrewFast product boxes containing assorted hardware tools" })} ${renderComponent($$result2, "ClientsSection", $$ClientsSection, { "title": "Experience from Top Programs" })} ${renderComponent($$result2, "FeaturesNavs", $$FeaturesNavs, { "title": `Here's a bit about my <span class="text-yellow-500 dark:text-yellow-400">journey</span>.`, "tabs": [
    {
      heading: "Early Beginnings & Education",
      content: "I was born in a small suburb of Chicago, where my love for problem-solving took root early on. This interest led me to the Illinois Mathematics and Science Academy, where I discovered my passion for technology. Now, I'm at Stanford University, building products that can help people.",
      svg: "tools",
      src: tools,
      alt: "Yellow and black heavy equipment on brown grass field",
      first: true
    },
    {
      heading: "Tech Passion & Skills",
      content: "Technology is more than just a field of study for me\u2014it's a tool for positive change. My passion lies in using tech to address social issues and improve people's lives. I've developed skills in various programming languages and enjoy applying them to create meaningful solutions. Whether it's developing accessible web applications or exploring how AI can enhance education, I'm always looking for ways to leverage technology for the greater good.",
      svg: "dashboard",
      src: dashboard,
      alt: "A screenshot or graphic representation of the intuitive dashboard",
      second: true
    },
    {
      heading: "Entrepreneurial Journey",
      content: "My journey as a builder began in high school when I founded a nonprofit focused on bringing educational resources to marginalized communities. This experience opened my eyes to the power of technology in creating social impact and fostered my passion for solving real-world problems. Throughout my journey, I've honed my skills by building various web applications, each one a step towards creating more impactful solutions. Currently, I'm channeling my experience and passion into developing a mental health app, aiming to make support more accessible and personalized through technology.",
      svg: "house",
      src: construction,
      alt: "Gray metal building frame near tower crane during daytime"
    }
  ] })} ${renderComponent($$result2, "FAQ", $$FAQ, { "title": "Frequently<br />asked questions", "faqs": faqs$1 })} ` })}`;
}, "/Users/deanbarrow/Projects/personal-website/src/pages/index.astro", void 0);

const $$file = "/Users/deanbarrow/Projects/personal-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
