import { images } from "@/assets";
import Image from "next/image";
import Container from "../layout/Container";
import Section from "../layout/Section";
import Button, { buttonPresets } from "../Theme/Button";
import Text, { textPresets } from "../Theme/Typography";

const GetStarted = () => {
	return (
		<Section className="bg-light text-center lg:text-left">
			<Container className=" hover:scale-105 transition duration-300">
				<div className="bg-[url(https://html.gptheme.com/astriol/media/call-to-action/action_bg.jpg)] h-full grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-12 p-10 text-white rounded-lg">
					{/* Left side content */}
					<div>
						<Text preset={textPresets.heading}>
							Get started with <br />
							Astriol Templates
						</Text>

						<Text className="my-6 md:my-8">
							Daft well fanny around lavatory morish spend a penny gutted mate.
						</Text>
						<Button preset={buttonPresets.primary}>Get Started</Button>
					</div>

					{/* Right side image */}
					<div>
						<Image
							src={images.demoBg}
							alt="About us"
							className="mx-auto lg:ml-0 w-full"
						/>
					</div>
				</div>
			</Container>
		</Section>
	);
};

export default GetStarted;
