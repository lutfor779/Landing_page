import Image from "next/image";
import Button from "../Theme/Button";
import Text, { textPresets } from "../Theme/Typography";

const ProjectCard = ({ details }) => {
	const { title, categories, image, link } = details;
	return (
		<div className={"relative h-80 md:h-72 rounded-lg overflow-hidden group"}>
			<div className="absolute inset-0 w-full h-full transition-all duration-300 overflow-hidden">
				<Image
					src={image}
					alt={"Project image"}
					className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
					objectFit="cover"
				/>
			</div>

			<div className="bg-black/25 absolute top-0 h-full w-full flex flex-col justify-between p-10 text-white transition-all duration-300 group-hover:bg-primary/75 ">
				<div>
					<Text>{categories[0]}</Text>
					<Text preset={textPresets.subtitle}>{title}</Text>
				</div>

				<Button className="h-12 w-12 p-0 text-center">{">"}</Button>
			</div>
		</div>
	);
};

export default ProjectCard;
