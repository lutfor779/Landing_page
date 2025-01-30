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
	const assests = {};

	const allDirectory = "../public/";

	const indexFile = "./images.js";

	const walkPublicDirectory = (dir) => {
		fs.readdirSync(dir)
			.filter((i) => !i.startsWith("."))
			.forEach((file) => {
				const fullPath = path.join(dir, file);
				const stats = fs.statSync(fullPath);

				if (stats.isDirectory()) {
					walkPublicDirectory(fullPath);
				} else if (stats.isFile()) {
					assests[camelCaseFileName(file)] =
						"/" + fullPath.replace(allDirectory, "");
				}
			});
	};

	walkPublicDirectory(allDirectory);

	fs.writeFile(
		indexFile,
		"export const images = " + JSON.stringify(assests, null, 2),
		(err) => err && console.log("err", err)
	);

	console.log("images.js file has been generated.");
};

main();
