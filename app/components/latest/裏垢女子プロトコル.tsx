import Image from "next/image"
import Button from "../elements/Button"

export default function 裏垢女子プロトコル() {
  return (
    <div className="bg-gradient-to-br from-[#E3D2B6] to-[#CB60CA] w-full grid place-content-center place-item-center rounded-2xl px-4">
      <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto sm:grid sm:grid-cols-7 sm:grid-rows-1 sm:gap-4 sm:px-4">
        <div className="hidden col-start-1 col-end-3 sm:grid place-content-center place-item-center">
          <Image
            src="/裏垢女子プロトコルpackage.png"
            height={500}
            width={500}
            alt="パッケージ"
          />
        </div>
        <div className="sm:col-start-3 sm:col-end-8 sm:grid sm:place-content-center sm:place-item-center sm:p-10">
          <Image
            src="/裏垢女子プロトコル.svg"
            height={350}
            width={500}
            alt="裏垢女子プロトコル"
          />

          <article className="prose-sm opacity-50">
            <p>
              飯食ってうんこするために生きている。
              オペレーティング・ソウル・システムからあなたの孤独感や焦燥感の原因をスキャンし、裏垢女子としての体験を提供するソフトウェアです。
              裏垢女子としてツイッターを使用することにより、MTP症候群の症状を緩和し、進行を遅らせることが出来ます。
              詳しくはデバイスでオルタナ処方管理局システムにログインするか、Discordでご確認ください。
            </p>
          </article>

          <div className="flex gap-4 py-5">
            <Button variant="primary">ギャラリー</Button>
            <Button variant="secondary">Discordで見る</Button>
          </div>
        </div>
      </div>
    </div>
  )
}