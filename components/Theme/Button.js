import cn from "@/lib/cn";

const baseStyle =
	"cursor-pointer text-white text-sm font-medium py-3 px-9 rounded-full border border-2 transition-all duration-300 ease-in capitalize";

const buttonStyles = {
	primary:
		"bg-primary border-primary hover:bg-accent hover:border-accent hover:text-black",
	secondary: "border border-blue-500 text-blue-500 hover:bg-blue-100",
	disabled: "cursor-not-allowed opacity-50",
};

export const buttonPresets = {
	primary: "primary",
	secondary: "secondary",
};

const Button = ({ children, preset, disabled = false, className, ...rest }) => {
	const appliedStyles = cn(
		baseStyle,
		buttonStyles[preset] || "",
		className,
		disabled && buttonStyles.disabled
	);

	return (
		<button {...rest} disabled={disabled} className={appliedStyles}>
			{children}
		</button>
	);
};

export default Button;
