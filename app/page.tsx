import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Faq from "./components/Faq";
import Pricing from "./components/Pricing";
import Cta from "./components/Cta";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<div className="px-[20px] lg:container lg:px-20 mx-auto">
				<Features />
				<Faq />
				<Pricing />
				<Cta />
			</div>
		</div>
	);
}
