"use client";
import { store } from "@/app/store";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<Provider store={store}>
			<ThemeProvider attribute='class'>{children}</ThemeProvider>
		</Provider>
	);
}
