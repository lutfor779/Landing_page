import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { COMPANY_NAME } from "@/constants/portfolioData";
import cn from "@/lib/cn";
import { icons } from "@/utils/icons";
import { images } from "@/utils/images";
import Image from "next/image";

const Test = () => {
    let isError = false;
    return (
        <Section>
            <Container>
                <h2 className="text-8xl bg-amber-600 text-white">
                    {COMPANY_NAME}
                </h2>
                <h1
                    className={cn("text-5xl", {
                        "bg-red-400 text-white": isError,
                        "bg-green-400 text-white": !isError,
                    })}
                >
                    Test Checkout
                </h1>
                <Image
                    alt="demo_bg"
                    width={500}
                    height={300}
                    src={images.demoBg}
                />
                <Image alt="star" width={50} height={50} src={icons.star} />

                <h1 className="text-5xl font-">Font JAKARTA</h1>
            </Container>
        </Section>
    );
};

export default Test;
