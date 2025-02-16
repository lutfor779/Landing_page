import cn from "@/lib/cn";
const baseStyles = "container mx-auto px-4 md:px-14 h-full";

const Container = ({ children, className }) => (
	<div className={cn(baseStyles, className)}>{children}</div>
);

export default Container;
