import cn from "@/lib/cn";

const baseStyle =
	"text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400";

const disabledStyle = "";

export const inputPresets = {
	input: "input",
	textArea: "textArea",
};

const Input = ({ preset, disabled = false, className, ...rest }) => {
	const appliedStyles = cn(baseStyle, className, disabled && disabledStyle);

	switch (preset) {
		case inputPresets.textArea:
			return (
				<textarea {...rest} disabled={disabled} className={appliedStyles} />
			);
		default:
			return <input {...rest} disabled={disabled} className={appliedStyles} />;
	}
};

export default Input;
