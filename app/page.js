import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";

export default function Home() {
	return (
		<>
			<Hero />
			<Intro />
			<Projects />
			<GetStarted />
		</>
	);
}
