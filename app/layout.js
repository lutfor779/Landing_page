import Header from "@/components/layout/Header2";
import "@/styles/globals.css";

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`antialiased`}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
