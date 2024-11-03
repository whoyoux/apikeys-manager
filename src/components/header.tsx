import { ThemeModeToggle } from "./theme-mode-toggle";

export default function Header() {
	return (
		<header className="flex items-center justify-between px-4 py-6 border-b">
			<h1 className="font-semibold font-mono">apikeys</h1>
			<ThemeModeToggle />
		</header>
	);
}
