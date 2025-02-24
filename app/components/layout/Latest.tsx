import Link from "next/link"
import Button from "../elements/Button"
//日本語のパス名の場合は拡張子を追加
import 裏垢女子プロトコル from "../latest/裏垢女子プロトコル.tsx"
import イマジナリーフレンド from "../latest/イマジナリーフレンド.tsx"

import { Kiwi_Maru } from "next/font/google"

const maruFont = Kiwi_Maru({
  weight: "400",
  subsets: ["latin"],
})

export default function Latest() {
  return (
    <article className="relative w-full px-3 md:px-6 pt-12 lg:py-20">
      <div className="prose-sm md:prose-md lg:prose-lg">
        <h1 className={maruFont.className + "max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto"}>Release latest</h1>
        <div className="flex flex-col gap-y-4">
          <裏垢女子プロトコル />
          <イマジナリーフレンド />
          <Link href="/ギャラリー"><Button variant="secondary" className="w-full">もっと見る ギャラリーへ</Button></Link>
        </div>
      </div>
    </article>
  )
}