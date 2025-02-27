/*import Link from "next/link"
import Button from "../elements/Button"
import { Kiwi_Maru } from "next/font/google"
import Image from "next/image"

const maruFont = Kiwi_Maru({
  weight: "400",
  subsets: ["latin"],
})

const banner = [
  {"images": "/banners/ExampleBanner.png", "link": "x.com", "alt": "もやし屋さんだよ。"},
]

export default function Banner() {
  return (
    <article className="max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto relative w-full px-3 md:px-6 pt-12 lg:py-20">
      <div className="prose-sm md:prose-md lg:prose-lg">
        <h1 className={maruFont.className}>バナー同盟</h1>
        <div className="flex flex-col gap-y-4">
          <div className="space-y-4 border rounded-lg p-4 bg-[#FFFBF5]">
            {//いめーじMyBaner.pngで、他のバナーは例を除いて別のディレクトリ}
            <h2 className={`${maruFont.className} mt-0`}>同盟の参加方法</h2>
            <p className="text-xs lg:text-sm my-2">自分のオリジナルバナーをDiscordの専用チャンネルにうpするとバナー同盟に掲載されます。ツイッターのヘッダー画像として「本サイトのバナー」と自分のオリジナルバナーを使って参加しよう！</p>
            <h3 className="my-2">Example: <span className="text-xs lg:text-sm opacity-55">(画像は1500x500でアップロード)</span></h3>
            <Image
              src="/ExampleBanner.png"
              width={700}
              height={700}
              className="m-0 rounded-lg mx-auto"
              alt="例のバナー"
            />
          </div>
          <p className="text-xs lg:text-sm my-2">
            キノコタケノコ.comはリンクフリーです。
            ホームページ(https://www.キノコタケノコ.com)へのバナーは下のをお使いください
            m(_ _)m
          </p>
          <Image
            src="/MyBanner.png"
            width={700}
            height={700}
            className="m-0 rounded-lg mx-auto"
            alt="当サイトのバナー"
          />


          <Link href="/ギャラリー"><Button variant="secondary" className="w-full">もっと見る...</Button></Link>
        </div>
      </div>
    </article>
  )
}*/

//めちゃくちゃ酔っ払ってるんで無茶苦茶コードかも...ゆるちて★
//まじで頭痛いです　助けて　淫夢ほんへ見ながらコード書くの地獄すぎませんかね...(語録無視)
//まじで気持ち悪い　吐く　コードに日記書くプログラマーの屑

import Link from "next/link";
import Button from "../elements/Button";
import { Kiwi_Maru } from "next/font/google";
import Image from "next/image";

const maruFont = Kiwi_Maru({
  weight: "400",
  subsets: ["latin"],
});

const banners = [
  { images: "/banners/ExampleBanner.png", alt: "例のバナー" },
];

type BannerProps = {
  page?: boolean;
};

export default function Banner({ page }: BannerProps) {
  return (
    <article className="max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto relative w-full px-3 md:px-6 pt-12 lg:py-20">
      <div className="prose-sm md:prose-md lg:prose-lg">
        <h1 className={maruFont.className}>バナー同盟</h1>
        <div className="flex flex-col gap-y-4">
          {/* `page` が `false` または未指定なら説明ブロックを表示 */}
          {page && (
            <div className="space-y-4 border rounded-lg p-4 bg-[#FFFBF5]">
              <h2 className={`${maruFont.className} mt-0`}>同盟の参加方法</h2>
              <p className="text-xs lg:text-sm my-2">
                自分のオリジナルバナーをDiscordの専用チャンネルにうpするとバナー同盟に掲載されます。
                ツイッターのヘッダー画像として「本サイトのバナー」と自分のオリジナルバナーを使って参加しよう！
              </p>
              <h3 className="my-2">
                Example: <span className="text-xs lg:text-sm opacity-55">(画像は1500x500でアップロード)</span>
              </h3>
              <Image
                src="/ExampleBanner.png"
                width={700}
                height={700}
                className="m-0 rounded-lg mx-auto"
                alt="例のバナー"
              />
            </div>
          )}

          {/* 固定のバナー */}
          <p className="text-xs lg:text-sm my-2">
            キノコタケノコ.comはリンクフリーです。
            ホームページ(https://www.キノコタケノコ.com)へのバナーは下のをお使いください
            m(_ _)m
          </p>
          <Image
            src="/MyBanner.png"
            width={700}
            height={700}
            className="m-0 rounded-lg mx-auto"
            alt="当サイトのバナー"
          />

          {/* バナーリストを `page` に応じて切り替え */}
          <div className="border rounded-lg p-4 bg-[#FFFBF5] mx-auto space-y-4">
            {(page ? banners : banners.slice(0, 3)).map((bannerObj, index) => (
              <Image
                key={index}
                src={bannerObj.images}
                width={700}
                height={700}
                className="m-0 rounded-lg mx-auto"
                alt={bannerObj.alt}
              />
            ))}
          </div>

          {/* `page` が `true` じゃないときだけ「もっと見る...」ボタンを表示 */}
          {!page && (
            <Link href="/banner">
              <Button variant="secondary" className="w-full">もっと見る...</Button>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
