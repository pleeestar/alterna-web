import Hero from "../components/layout/Hero"
import About from "../components/layout/About"
import Discord from "../components/layout/Discord"
import Latest from "../components/layout/Latest"
import Footer from "../components/layout/Footer"
import Banner from "../components/layout/Banner"
import NoiseAI from "../components/layout/NoiseAI"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Discord />
      <Latest />
      <Banner />
      <NoiseAI />
      <Footer />
    </>
  )
}