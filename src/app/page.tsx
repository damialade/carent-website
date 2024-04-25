import Hero from "./components/modules/hero";
import Solutions from "./components/modules/solutions";
import AboutUs from "./components/modules/about-us";
import Features from "./components/modules/features";
import Intergrations from "./components/modules/intergrations";
import How from "./components/modules/how";
import Testimonials from "./components/modules/testimonials";
import Schedule from "./components/modules/schedule";
import FooterNav from "./components/modules/footer-nav";
import Footer from "./components/modules/footer";
import Copyright from "./components/modules/copyright";

export default function Home() {
  return (
    <main>
      <Hero />
      <Solutions />
      <AboutUs />
      <Features />
      <Intergrations />
      <How />
      <Testimonials />
      <Schedule />
      <FooterNav />
      <Footer />
      <Copyright />
    </main>
  );
}
