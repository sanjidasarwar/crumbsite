import Header from "./components/Header/Header";

import PageIllustration from "./components/PageIllustration/PageIllustration";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import Tabs from "./components/Tabs/Tabs";
import Process from "./components/Process/Process";
import PricingTables from "./components/PricingTables/PricingTables";
import Testimonials from "./components/Testimonials/Testimonials";
import Features from "./components/Features/Features";
import Cta from "./components/Cta/Cta";

import Footer from "./components/Footer/Footer";

import testimonialsData from "../../data/data";
import Products from "./components/Products/Products";

export default function Home() {
  return (
    <div>
      <main>
        <div className="overflow-hidden">
          <Header />
          <PageIllustration />
          <Hero />
          <Stats />
          <Products />
          <Tabs />
          <Process />
          <PricingTables />
          <Testimonials data={testimonialsData} />
          <Features />
          <Cta />
        </div>
      </main>
      <Footer />
    </div>
  );
}
