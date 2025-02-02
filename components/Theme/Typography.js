import cn from "@/lib/cn";

const baseStyle = "text-base";

const styles = {
	h1: "text-9xl",
	h2: "text-8xl",
	h3: "text-7xl",
	h4: "text-6xl",
	h5: "text-5xl",
	h6: "text-4xl",
	p: "text-sm",
	span: "text-3xl",
};

export const textPresets = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
	p: "p",
	span: "span",
};

const Text = ({ children, preset, className, ...rest }) => {
	const Tag = textPresets[preset] || "p";

	const appliedStyle = styles[preset] || styles.p;

	return (
		<Tag {...rest} className={cn(baseStyle, appliedStyle, className)}>
			{children}
		</Tag>
	);
};

export default Text;
