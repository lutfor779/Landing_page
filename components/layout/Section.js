import cn from "@/lib/cn";

const Section = ({ children, className }) => (
	<section className={cn("py-24 ", className)}>{children}</section>
);

export default Section;
