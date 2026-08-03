import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import PopularCities from "@/components/home/PopularCities";
import FeaturedRooms from "@/components/home/FeaturedRooms";
import WhyChooseUs from "@/components/home/WhyChooseUs";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <PopularCities />
      <FeaturedRooms />
      <WhyChooseUs />
    </>
  );
}

export default Home;