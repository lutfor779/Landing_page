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
	const assests = [];
	const assests2 = {};

	const allDirectory = "../assets";

	const indexFile = "./index.js";
	const indexFile2 = "./test.js";

	const walkPublicDirectory = (dir) => {
		fs.readdirSync(dir)
			.filter((i) => !i.startsWith(".") && !i.includes(".js"))
			.forEach((file) => {
				const fullPath = path.join(dir, file);
				const stats = fs.statSync(fullPath);

				if (stats.isDirectory()) {
					walkPublicDirectory(fullPath);
				} else if (stats.isFile()) {
					assests2[camelCaseFileName(file)] =
						"." + fullPath.replace(allDirectory, "");
					assests.push(
						`export { default as ${camelCaseFileName(
							file
						)} } from ".${fullPath.replace(allDirectory, "")}";`
					);
				}
			});
	};

	walkPublicDirectory(allDirectory);

	const allFiles = assests.join("\n");

	fs.writeFile(indexFile, allFiles, (err) => err && console.log("err", err));
	fs.writeFile(
		indexFile2,
		"export const images = " + JSON.stringify(assests2, null, 2),
		(err) => err && console.log("err", err)
	);

	console.log("index.js file has been generated.");
};

main();
