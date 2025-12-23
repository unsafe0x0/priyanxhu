import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <div className="text-sm text-muted-foreground">theme</div>;
	}

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<button
			type="button"
			onClick={toggleTheme}
			className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
		>
			{theme}
		</button>
	);
}
