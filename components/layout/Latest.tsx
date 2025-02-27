import Link from "next/link"
import Button from "../elements/Button"

import { Kiwi_Maru } from "next/font/google"

const maruFont = Kiwi_Maru({
  weight: "400",
  subsets: ["latin"],
})

type LatestProps = {
  page?: boolean;
};

export default function Latest({ page }: LatestProps) {
  return (
    <article className="max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto relative w-full px-3 md:px-6 pt-12 lg:py-20">
      <div className="prose-sm md:prose-md lg:prose-lg">
        <h1 className={maruFont.className + "max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto"}>過去の活動</h1>
        <div className="flex flex-col gap-y-4">
          <p>まだないよ</p>
          {!page && (
            <Link href="/gallery"><Button variant="secondary" className="w-full">もっと見る...</Button></Link>
          )}
        </div>
      </div>
    </article>
  )
}