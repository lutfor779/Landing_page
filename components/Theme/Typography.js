import cn from "@/lib/cn";

const baseStyle = "text-sm md:text-base";

const styles = {
	heading: " text-2xl md:text-3xl",
	title: "text-xl md:text-2xl",
	subtitle: "text-lg md:text-xl",
	caption: "font-monospace",
	base: baseStyle,
	small: "text-xs md:text-sm ",
	extraSmall: "text-[0.625rem] md:text-xs",
};

const defaultElement = {
	heading: "h1",
	title: "h2",
	subtitle: "h4",
	caption: "h6",
	base: "p",
	small: "p",
	extraSmall: "p",
};

export const textPresets = {
	heading: "heading",
	title: "title",
	subtitle: "subtitle",
	caption: "caption",
	base: "base",
	small: "small",
	extraSmall: "extraSmall",
};

const Text = ({
	children,
	preset = "base",
	className,
	as: Element,
	...rest
}) => {
	const appliedStyle = styles[preset] || baseStyle;
	const Tag = Element || defaultElement[preset] || "p";

	return (
		<Tag
			{...rest}
			className={cn(baseStyle, appliedStyle, className, "text-xs")}
		>
			{children}
		</Tag>
	);
};

export default Text;
