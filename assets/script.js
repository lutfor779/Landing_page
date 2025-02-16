const fs = require("fs");
const path = require("path");

const camelCaseFileName = (fileName) => {
	if (!fileName) {
		return "";
	}

	let namesArr = fileName.replace(/[-_]/g, " ").split(".");
	namesArr.length > 1 && namesArr.pop();
	let spacedName = namesArr.join();

	let words = spacedName.split(" ");

	let camelCase = "";
	for (let i = 0; i < words.length; i++) {
		let word = words[i];
		if (i === 0) {
			camelCase += word.toLowerCase();
		} else {
			camelCase += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		}
	}

	return camelCase;
};

const main = () => {
	const imports = [];
	const exports = [];

	const assetsDirectory = "../assets";

	const indexFile = "./index.js";

	const walkPublicDirectory = (dir) => {
		fs.readdirSync(dir)
			.filter((i) => !i.startsWith(".") && !i.includes(".js"))
			.forEach((file) => {
				const fullPath = path.join(dir, file);
				const stats = fs.statSync(fullPath);

				if (stats.isDirectory()) {
					walkPublicDirectory(fullPath);
				} else if (stats.isFile()) {
					const importName = camelCaseFileName(file);
					const relativePath = "." + fullPath.replace(assetsDirectory, "");

					imports.push(`import ${importName} from "${relativePath}";`);
					exports.push(importName);
				}
			});
	};

	walkPublicDirectory(assetsDirectory);

	const importStatements = imports.join("\n");
	const exportStatement = `export const images = {\n${exports
		.map((exp) => `  ${exp},`)
		.join("\n")}\n};`;

	const fileContent = `${importStatements}\n\n${exportStatement}`;

	fs.writeFile(indexFile, fileContent, (err) => {
		if (err) {
			console.error("Error writing index.js:", err);
		} else {
			console.log("index.js file has been generated.");
		}
	});
};

main();
