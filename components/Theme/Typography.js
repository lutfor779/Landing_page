import cn from "@/lib/cn";

const baseStyle = "text-base";

const styles = {
	bigTitle: "text-3xl",
	title: "text-2xl",
	subtitle: "text-xl",
	caption: "font-monospace",
	base: baseStyle,
	small: "text-sm",
	extraSmall: "text-xs",
};

const defaultElement = {
	bigTitle: "h1",
	title: "h2",
	subtitle: "h4",
	caption: "h6",
	base: "p",
	small: "p",
	extraSmall: "p",
};

export const textPresets = {
	bigTitle: "bigTitle",
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
		<Tag {...rest} className={cn(baseStyle, appliedStyle, className)}>
			{children}
		</Tag>
	);
};

export default Text;
