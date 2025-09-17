import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Next.js application",
	description: "Learning new things...",
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};

export default HomeLayout;
