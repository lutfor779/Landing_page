import { images } from "@/assets";
import Container from "../layout/Container";
import Section from "../layout/Section";
import Text, { textPresets } from "../Theme/Typography";
import ProjectCard from "./Card";

const projects = [
	{
		title: "Creative Tropical",
		categories: ["Website Design", "Design"],
		image: images.demoBg,
		link: "#",
	},
	{
		title: "Bronze Age",
		categories: ["Creative"],
		image: images.demoBg,
		link: "#",
	},
	{
		title: "Brown Tabby Manbatty",
		categories: ["Design"],
		image: images.demoBg,
		link: "#",
	},
	{
		title: "California’s New",
		categories: ["Creative"],
		image: images.demoBg,
		link: "#",
	},
	{
		title: "Snowflake Says",
		categories: ["Marketing"],
		image: images.demoBg,
		link: "#",
	},
	{
		title: "Clear Glass Light Bulb",
		categories: ["Technology"],
		image: images.demoBg,
		link: "#",
	},
];

const Projects = () => {
	const categories = [
		"See All",
		...new Set(projects.flatMap((item) => item.categories)),
	];

	return (
		<Section>
			<Container>
				<div className="text-center lg:text-left">
					<Text preset={textPresets.caption}>Projects</Text>
					<Text preset={textPresets.title}>Latest works</Text>
				</div>

				<div className="my-6 md:my-10 flex flex-col md:flex-row gap-3 md:gap-12 items-center justify-center lg:justify-end uppercase">
					{categories.slice(0, 5).map((i) => (
						<Text preset={textPresets.small} key={i}>
							{i}
						</Text>
					))}
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
					{projects.slice(0, 6).map((item, index) => (
						<ProjectCard details={item} key={index} />
					))}
				</div>
			</Container>
		</Section>
	);
};

export default Projects;
