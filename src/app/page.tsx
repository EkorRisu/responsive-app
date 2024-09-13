import Nav from "../components/nav";
import Hero from "../components/hero";
import Mockup from "../components/mockup";
import Info from "../components/info";
import Info2 from "../components/info2";
import Info3 from "../components/info3";
import TestimonialSection from "../components/testimoni/testimoni";
import Footer from "@/components/footer"



export default function Home() {
  return (
    
    <div>
      <Nav />
      <Hero />
      <Mockup />
      <Info />
      <Info2/>
      <Info3/>
      <TestimonialSection/>
      <Footer/>
    </div>
  );
}
