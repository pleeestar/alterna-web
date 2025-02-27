import { Source_Code_Pro } from "next/font/google"

const code = Source_Code_Pro({
  weight: "400",
  subsets: ["latin"],
})


export default function Layer() {
  return (
    <div className={`${code.className} p-8 opacity-60 hidden xl:block`}>
      <p>Layer: 8</p>
      <p>SNOK Control X module</p>
    </div>
  )
}