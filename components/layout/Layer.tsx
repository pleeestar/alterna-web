import { Source_Code_Pro } from "next/font/google"

const code = Source_Code_Pro({
  weight: "400",
  subsets: ["latin"],
})


export default function Layer() {
  return (
    <div className={`${code.className} p-8 opacity-60 hidden md:block`}>
      <p>Layer: 8</p>
      <p>Protocol: 8.10 TNOK System</p>
      <p>KMR Control X module</p>
      <p>Debug version: Node SNOK</p>
    </div>
  )
}