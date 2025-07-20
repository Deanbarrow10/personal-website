const id = "t845.md";
						const collection = "products";
						const slug = "t845";
						const body = "";
						const data = {title:"ZDNS",description:"DNSSEC Validation for ZDNS Query",main:{id:1,content:"Elevate your DNS security with the ZDNS Validation Tool, a cutting-edge solution for verifying DNS records using the DNSSEC chain of trust. This powerful tool seamlessly integrates with ZDNS queries, providing robust authentication of DNS responses and safeguarding against DNS spoofing and cache poisoning attacks. By efficiently validating the entire chain from the queried domain to the root zone, the ZDNS Validation Tool ensures the authenticity and integrity of your DNS data, fortifying your digital infrastructure against evolving cyber threats.\n",imgCard:
						new Proxy({"src":"/_astro/key.DuKG-f37.avif","width":600,"height":400,"format":"avif","fsPath":"/Users/deanbarrow/Projects/personal-website/src/images/key.avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/deanbarrow/Projects/personal-website/src/images/key.avif";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/deanbarrow/Projects/personal-website/src/images/key.avif");
							return target[name];
						}
					})
					,imgMain:
						new Proxy({"src":"/_astro/key.DuKG-f37.avif","width":600,"height":400,"format":"avif","fsPath":"/Users/deanbarrow/Projects/personal-website/src/images/key.avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/deanbarrow/Projects/personal-website/src/images/key.avif";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/deanbarrow/Projects/personal-website/src/images/key.avif");
							return target[name];
						}
					})
					,imgAlt:"Mockup boxes of machine screws set"},tabs:[{id:"tabs-with-card-item-1",dataTab:"#tabs-with-card-1",title:"Description"},{id:"tabs-with-card-item-2",dataTab:"#tabs-with-card-2",title:"Specifications"},{id:"tabs-with-card-item-3",dataTab:"#tabs-with-card-3",title:"Blueprints"}],longDescription:{title:"ZDNS: Speed at a Security Cost",subTitle:"ZDNS queries offer enhanced speed and efficiency compared to traditional DNS queries by recycling UDP connections. However, this comes with a significant drawback - the lack of DNSSEC validation, potentially compromising the security and integrity of domain name resolutions.\n",btnTitle:"See above for more info",btnURL:"#"},descriptionList:[{title:"ZDNS Records",subTitle:"JSON-formatted data providing essential DNS information including IP addresses, domain names, and record types. These structured records enable efficient parsing and analysis of DNS query results."},{title:"DNSSEC Queries",subTitle:"When executed with the 'dnssec' flag, ZDNS queries retrieve RRSIG (Resource Record Signature) data. This includes critical security details such as the hash algorithm, key tag, signer name, and digital signature, forming the basis for DNSSEC validation."},{title:"Public Key Verification",subTitle:"DNSSEC employs public key cryptography to verify DNS records. This process involves matching the signature's hash output using the public key, then comparing it to a hash of the DNS records generated with the specified algorithm. This cryptographic chain ensures data integrity and authenticity."}],specificationsLeft:[{title:"RRset Request",subTitle:"Retrieves the desired Resource Record set along with its corresponding RRSIG record for comprehensive validation."},{title:"DNSKEY Retrieval",subTitle:"Obtains DNSKEY records containing public ZSK and KSK, accompanied by their RRSIG for the DNSKEY RRset."},{title:"ZSK Verification",subTitle:"Performs cryptographic verification of the RRSIG for the requested RRset using the public Zone Signing Key (ZSK)."},{title:"KSK Verification",subTitle:"Executes cryptographic verification of the RRSIG for the DNSKEY RRset using the public Key Signing Key (KSK)."}],specificationsRight:[{title:"RRSIG Validity Check",subTitle:"Examines the validity period of RRSIG records to ensure they are current and trustworthy."},{title:"Delegation Chain Validation",subTitle:"Validates the authentication chain by traversing the delegation chain up to the TLD zone."},{title:"DS Record Comparison",subTitle:"Checks public DNSKEY RRs against DS records in each parent zone for continuity of trust."},{title:"Error Handling",subTitle:"Returns a non-nil err value and an empty result set in case of any validation errors, ensuring robust error reporting."}],blueprints:{first:
						new Proxy({"src":"/_astro/zdns-one.B4d9T40T.avif","width":1298,"height":476,"format":"avif","fsPath":"/Users/deanbarrow/Projects/personal-website/src/images/zdns-one.avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/deanbarrow/Projects/personal-website/src/images/zdns-one.avif";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/deanbarrow/Projects/personal-website/src/images/zdns-one.avif");
							return target[name];
						}
					})
					,second:
						new Proxy({"src":"/_astro/zdns-two.BuRWcDYZ.avif","width":1578,"height":1208,"format":"avif","fsPath":"/Users/deanbarrow/Projects/personal-website/src/images/zdns-two.avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/deanbarrow/Projects/personal-website/src/images/zdns-two.avif";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/deanbarrow/Projects/personal-website/src/images/zdns-two.avif");
							return target[name];
						}
					})
					}};
						const _internal = {
							type: 'content',
							filePath: "/Users/deanbarrow/Projects/personal-website/src/content/products/t845.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
