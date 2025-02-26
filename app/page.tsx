import Navbar from "../components/layout/Navbar"
import Hero from "../components/layout/Hero"
import About from "../components/layout/About"
import Discord from "../components/layout/Discord"
import Latest from "../components/layout/Latest"
import Footer from "../components/layout/Footer"
import Layer from "../components/layout/Layer"
import Banner from "../components/layout/Baner"
import NoiseAI from "../components/layout/NoiseAI"


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Discord />
      <Latest />
      <Banner />
      <NoiseAI />
      <Footer />
      <div className="fixed bottom-0"><Layer /></div>
    </>
  )
}