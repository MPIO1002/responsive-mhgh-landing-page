import Navbar from "../component/navbar";
import Hero from "../component/hero";
import Content from "../component/content-section";
import Footer from "../component/footer";
import SideAd from "../component/side-ad";

export default function Home() {
  return (
    <div className="relative">
      <div className="relative w-full h-full overflow-hidden">
        <Navbar />
        <Hero />
        <Content />
        <Footer />
        <SideAd />
      </div>
    </div>
  );
}
