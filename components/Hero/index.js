import { images } from "@/assets";
import Image from "next/image";
import Container from "../layout/Container";
import Section from "../layout/Section";
import Button, { buttonPresets } from "../Theme/Button";
import Text, { textPresets } from "../Theme/Typography";

const Hero = () => {
	return (
		<Section className="text-white text-center lg:text-left h-screen  bg-linear-to-bl from-primary to-secondary py-0 md:py-20">
			<Container>
				<div className="flex flex-col lg:flex-row h-full justify-around lg:justify-between items-center gap-4 lg:gap-12">
					{/* Left side content */}
					<div className="order-2 lg:order-1 lg:w-1/2 pb-8 lg:pb-0">
						<Text preset={textPresets.heading} className="font-bold mb-6">
							The Complete Multivendor <br />
							E-Commerce Solution for <br />
							WordPress
						</Text>

						<Text className="mb-11 ">
							The bee's knees cracking goal you mug cack bleeder gutted mate
							amongst barmy hanky panky
						</Text>

						<Button preset={buttonPresets.primary}>Get Started Now</Button>
					</div>

					{/* Right side image */}
					<div className="order-1 lg:order-2 lg:w-1/2">
						<Image
							src={images.hero}
							alt="Website Illustration"
							className="mx-auto lg:ml-0 h-full w-full"
						/>
					</div>
				</div>
			</Container>
		</Section>
	);
};

export default Hero;
