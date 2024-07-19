import Hero from "@/components/Hero"
import FeaturedCourses from "@/components/FeaturedCourses";
import { ChooseUs } from "@/components/ChooseUs";
import { MovingCards } from "@/components/MovingCards";
import Webinars from "@/components/Webinars";
import Instructors  from "@/components/Instructors";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
          <Hero />
          <FeaturedCourses />
          <ChooseUs />
          <MovingCards />
          <Webinars />
          <Instructors />
          <Footer />
        </main>
    </>
  );
}

