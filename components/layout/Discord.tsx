import Button from "../elements/Button"
import { Kiwi_Maru } from "next/font/google";
import Image from "next/image"
import Link from "next/link"

const maruFont = Kiwi_Maru({
  weight: "400",
  subsets: ["latin"],
});

/*const DiscordFrame = () => {
  return (
    <iframe
      src="https://discord.com/widget?id=1344346212480061460&theme=dark"
      width="350"
      height="500"
      style={{ border: "none", backgroundColor: "transparent" }} // 修正
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    ></iframe>
  );
};*/

export default function Discord() {
  return (
    <>
      <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto prose-sm md:prose-md lg:prose-lg my-6 px-6 pt-8 lg:pt-16">
        <h1 className={`${maruFont.className} max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto`}>ディスコードに参加</h1>
        <div className="grid place-content-center pt-5 lg:p-5 lg:pt-7">
          <div className="relative w-full aspect-[1.615/1]">
            {/* 背景画像 */}
            <Image
              src="/discord.png"
              fill
              className="absolute object-cover z-[-1] !m-0"
              alt="ディスコードに参加"
            />

            {/* グリッドレイアウト */}
            <div className="grid grid-cols-2 grid-rows-5 w-full h-full place-items-center relative">
              <div className="col-start-1 col-end-3 row-start-4 row-end-5 w-[90vw] grid place-content-center place-items-center">
                <div className="hidden lg:flex lg:gap-4 z-10">
                  <Link href="/notfound-404"><Button variant="primary">Get Started</Button></Link>
                  <Link href="https://discord.com/invite/NbNqpDWERX"><Button variant="secondary">Discordに参加</Button></Link>
                </div>

                <Button variant="secondary" className="block lg:hidden z-10">Discordに参加</Button>
                <p className="text-center opacity-50 text-sm md:text-base !m-0 pt-2 hidden md:block"><span className="hidden lg:inline">@_@ Alterna.Inc </span>System9@友達Protocol</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
