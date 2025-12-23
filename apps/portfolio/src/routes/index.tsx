import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio-page";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return <Portfolio />;
}
