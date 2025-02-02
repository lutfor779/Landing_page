import cn from "@/lib/cn";

const baseStyle = "cursor-pointer text-white font-bold py-2 px-4 rounded";

const buttonStyles = {
	primary: "bg-blue-500 hover:bg-blue-700",
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
