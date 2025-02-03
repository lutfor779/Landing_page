import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button, { buttonPresets } from "@/components/Theme/Button";
import Input from "@/components/Theme/InputField";
import Text, { textPresets } from "@/components/Theme/Typography";
import { COMPANY_NAME } from "@/constants/portfolioData";
import cn from "@/lib/cn";
import { icons } from "@/utils/icons";
import Image from "next/image";

import { images } from "@/assets";

const Test = () => {
	let isError = false;

	return (
		<Section>
			<Container>
				<h2 className="text-8xl bg-amber-600 text-white">{COMPANY_NAME}</h2>
				<h1
					className={cn("text-5xl", {
						"bg-red-500 text-white": isError,
						"bg-green-400 text-white": !isError,
					})}
				>
					Test Checkout
				</h1>
				<Image alt="demo_bg" width={500} height={300} src={images.demoBg} />
				<Image alt="star" height={50} width={50} src={icons.star} />

				{/* should follow it */}
				<Image alt="demo_bg" className="h-80 w-full" src={images.demoBg} />

				<h1 className={cn("text-5xl font-jakarta")}>Font JAKARTA</h1>
				<h1 className={cn("text-5xl font-ibm")}>Font JAKARTA</h1>
				<h1 className={cn("text-5xl font-source-serif ")}>Font JAKARTA</h1>
				<p className={cn("text-5xl font-source-serif")}>Font JAKARTA</p>
				<p className="bg-primary text-secondary text-3xl">
					testing custom color
				</p>

				<Button preset={"primary"}>Button</Button>
				<Button preset={buttonPresets.primary} disabled={true}>
					Button
				</Button>
				<Button preset={buttonPresets.secondary}>Button</Button>
				<Button preset={"secondary"} disabled={true}>
					Button
				</Button>
				<Button>Button</Button>

				<Input placeholder={"testing "} />
				<Input preset={"textArea"} placeholder="text area on here" />

				<Text preset={textPresets.h1}>Hello testing world</Text>
				<Text preset={"h2"}>Hello testing world</Text>
				<Text preset={"h3"}>Hello testing world</Text>
				<Text preset={"h4"}>Hello testing world</Text>
				<Text preset={"h5"}>Hello testing world</Text>
				<Text preset={"h6"}>Hello testing world</Text>
				<Text preset={"p"}>Hello testing world</Text>
				<Text preset={textPresets.span}>Hello testing world</Text>
				<Text className={"text-6xl"}>Hello testing world</Text>

				<a
					href="http://"
					target="_blank"
					rel="noopener noreferrer"
					className="text-3xl"
				>
					link here
				</a>
			</Container>
		</Section>
	);
};

export default Test;
