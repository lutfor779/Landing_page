import { COMPANY_NAME } from "@/constants/portfolioData";
import Container from "./Container";

const Header = () => {
    return (
        <div className=" shadow-sm mb-4">
            <Container>
                <div className="flex justify-between py-4">
                    <h1 className="text-2xl font-bold text-primary">
                        {COMPANY_NAME}
                    </h1>
                </div>
            </Container>
        </div>
    );
};

export default Header;
