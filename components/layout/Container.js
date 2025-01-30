import cn from "@/lib/cn";
const baseStyles = "container mx-auto";
const Container = ({ children, className }) => {
    return <div className={cn(baseStyles, className)}>{children}</div>;
};

export default Container;
