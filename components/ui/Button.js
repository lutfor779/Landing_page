import cn from "@/lib/cn";
const baseStyles = "bg-primary text-white py-1 px-4";
const Button = ({ children, className, ...rest }) => {
    return (
        <button {...rest} className={cn(baseStyles, className)}>
            {children}
        </button>
    );
};

export default Button;
