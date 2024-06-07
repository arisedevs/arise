import Main from "./sections/MainSection"
import About from "./sections/About"
import Technologies from "./sections/Technologies"
import Experience from "./sections/Experience"
import Footer from "./sections/Footer"
import BackgroundImage from "./components/BackgroundImage"
import ParticlesComponent from "./components/ParticlesComponent"

export default function Home() {
  return (
    <main className="max-w-[1300px] mx-auto h-auto lg:h-full px-6 sm:px-12 md:px-16 lg:px-20 py-[50px] md:py-[90px]">
      <Main />
      <div className="w-full ml-0 lg:ml-auto">
        <div className="lg:w-[50%] lg:order-last lg:ml-[50%]">
          <About />
          <Technologies />
          <Experience />
          <Footer />
        </div>
      </div>
      <BackgroundImage />
      <ParticlesComponent />
    </main>
  );
}
