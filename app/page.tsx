import Navbar from "./components/layout/Navbar"
import Hero from "./components/layout/Hero"
import About from "./components/layout/About"
import Latest from "./components/layout/Latest"
import Footer from "./components/layout/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Latest />
      <Footer />
    </>
  )
}