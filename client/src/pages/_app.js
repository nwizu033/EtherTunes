import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { StateContextProvider } from "@/context";

export default function App({ Component, pageProps }) {
	return (
		<>
			<StateContextProvider>
				<Navbar />
				<Component {...pageProps} />
			</StateContextProvider>
		</>
	);
}
