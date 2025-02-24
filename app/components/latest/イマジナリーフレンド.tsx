import Image from "next/image"
import Button from "../elements/Button"

export default function イマジナリーフレンド() {
  return (
    <div className="w-full grid place-content-center place-item-center rounded-2xl px-4 relative"> {/*bg-gradient-to-br from-[#E3D2B6] to-[#CB60CA]*/}
      <Image
        src="/background.png"
        alt=""
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        className="rounded-2xl z-1 p-0 m-0 not-prose"
        priority
      />
      <div className="relative max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto sm:grid sm:grid-cols-7 sm:grid-rows-1 sm:gap-4 sm:px-4 z-10 sm:p-10">
        <div className="sm:col-start-1 sm:col-end-6 sm:grid sm:place-content-center sm:place-item-center">
          <Image
            src="/イマジナリーフレンド.svg"
            height={350}
            width={500}
            alt="イマジナリーフレンド"
          />

          <article className="prose-sm text-white opacity-70">
            <p>
              いつもなにか忘れ物したような、物足りない気持ちはどうしてかな
              オペレーティング・ソウル・システムからあなたの孤独感や焦燥感の原因をスキャンし、イマジナリーフレンドを作成するソフトウェアです。
              コンプレックスをisoファイルに焼き付け、イマジナリーフレンドにインストールする事によりイマジナリーフレンドの人格が作られ、対話を楽しむことが出来ます。
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