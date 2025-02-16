import { images } from "@/assets";
import Image from "next/image";
import Container from "../layout/Container";
import Section from "../layout/Section";
import Button, { buttonPresets } from "../Theme/Button";
import Text, { textPresets } from "../Theme/Typography";

const Intro = () => {
	return (
		<Section className="bg-light text-center lg:text-left" id="about">
			<Container>
				<div className="h-full grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-12">
					{/* Left side image */}
					<div>
						<Image
							src={images.demoBg}
							alt="About us"
							className="mx-auto lg:ml-0 w-full"
						/>
					</div>

					{/* Right side content */}
					<div>
						<Text preset={textPresets.caption}>Who we are</Text>
						<Text preset={textPresets.title}>
							Selling Digital Astriol Designs
						</Text>
						<Text preset={textPresets.subtitle}>
							We know that good design means good business.
						</Text>
						<Text className="my-6 md:my-8">
							The little rotter bugger all mate golly gosh twit horse play some
							dodgy chav, cack blatant are you taking the piss at public school
							cor blimey guvnor I, the BBC chinwag Oxford telling Richard brolly
							lost the plot old crikey.
						</Text>
						<Button preset={buttonPresets.primary}>More About Us</Button>
					</div>
				</div>
			</Container>
		</Section>
	);
};

export default Intro;
