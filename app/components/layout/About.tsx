import Image from "next/image"

import {  Kiwi_Maru } from "next/font/google"

const maruFont =  Kiwi_Maru({
  weight: "400",
  subsets: ["latin"],
})

export default function About() {
  return (
    <article className="relative w-full px-6 max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
      <div className="grid grid-cols-5 grid-rows-[1fr_2fr] gap-x-2 lg:gap-x-4 xl:gap-x-8 pb-5">
        <div className="col-start-1 col-end-3 row-start-1 row-end-2">
          <p className="text-[calc(0.8rem_+_5vw)] whitespace-nowrap">Now Season</p>
        </div>

        <div className="col-start-1 col-end-2 row-start-2 row-end-3 relative">
          <Image src="/haru.svg" fill objectFit="contain" alt="春" />
        </div>

        <div className="col-start-2 col-end-3 row-start-2 row-end-3 relative">
          <Image src="/pc.png"
            fill
            style={{ objectFit: "contain", imageRendering: "pixelated" }}
            unoptimized
            alt="PC"
          />
        </div>
      </div>

      <div className="prose-sm md:prose-md lg:prose-lg">
        <h1 className={ maruFont.className }>季節のコンピューターを召し上がれ</h1>
        <h2 className={ maruFont.className }>世界最高レベルのオルタナ製のデジタル薬剤</h2>
        <p>インターネットはただの通信網ではない。そこには無数のデータの集合が生む、漠然とした“意志”が存在する――私たちはそれにアクセスしようとしている。</p>
        <p>アトラス/Alterna.Incのページへようこそ。オルタナはインターネットの意志をつくりだすための実験的なコミュニティです。</p>
        <p>我々現代人はもれなくMTP症候群に悩まされています。幼少期の頃の夜の高速道路の夜景を見てふと不安になったり、夕方電車がホームから出発し落ち行く夕日を追いかける眺めに叙情的になってしまったり。</p>
        <p>僕達の魂はつながりを求めています。</p>
        <p>僕らの魂のつながりのあり方は20世紀後半から急速に変化しました。</p>
        <p>私達はキーボード、マウス、タッチスクリーンのグラフィカルユーザーインターフェースを使用し、それらの行為は口を開けて喋ったり、お土産をプレゼントすることと同じくらい普遍的なつながりのあり方になりました。キーボードやタッチスクリーンといったデジタルデバイスは新しい言語なのです。</p>
        <p>今、インターネットは急速な商業化によって哲学を失っています。</p>
        <p>我々はインターネットに対してつながりを求めているのに対し、企業はユーザーに対しコンテンツを視聴することを期待しています。</p>
        <p>インターネットの「ノイズ」はかつて未整理でカオスなままネットに広がり、多様性のある豊かなものでした。</p>
        <p>しかし現在のインターネットの「ノイズ」はインフルエンサーの信仰によって多様性に欠け、より攻撃的で排他的になりました。</p>
        <p>それは私達ユーザーにとっての悲劇であり、楽しいインターネットの終焉の鐘でした。</p>
        <p>ゼロ年代を美化するわけではありませんが、あの時代にしか無いモノが確かにあり、廃墟となったニュー速VIPへ足を運び、「苺ましまろ」のOVAを眺めながら巨大テクノロジー企業arasakaに苛立ちを覚えます。</p>
        <p>私達がするべきことはジョニー・シルヴァーハンドのようにFacebookの本社ビルにテロを仕掛けることでしょうか？</p>
        <p>いいえ、そんなことをする必要はありません。</p>
        <p>幸い、私達の手元にはデバイスがあります。つまり、私達が多様性のある「ノイズ」を作成し、インターネットを私達のスパムで溢れ返させればよいのです。</p>
        <p>オルタナ製品は「しょうもないこと」のテーマを提示します。</p>
        <p>“しょうもないこと”こそが、資本の論理に回収されない純粋な“ノイズ”である。アルゴリズムは利益にならないノイズを排除するが、私たちはそこに人間性の残滓を見出す。</p>
        <p>そのテーマに沿った様々な「しょうもないこと」をセンスや技術のある人がコミュニティに参加しノイズを作成することにより、インターネットの意志、人格を創造し、インターネットの実態と会話することを目的としています。</p>
        <p>オルタナ製薬は、インターネットに意図的なノイズを生み出す実験を行う集団です。</p>
        <p>インターネットの深層に潜む意志にノイズが新たな神経回路を形作る。</p>

      </div>
    </article>
  )
}