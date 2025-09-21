import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/styles/global.css";
import { HeroHeader } from "@/components/header";
import ErrorReporter from "./global-error";

export const metadata: Metadata = {
	title: "Next.js application",
	description: "Learning new things...",
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang="en" className="dark">
			<body>
				<HeroHeader />
				<ErrorReporter />
				{children}
			</body>
		</html>
	);
};

export default HomeLayout;
