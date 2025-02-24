import Image from "next/image"
import Button from "../elements/Button"

export default function Hero() {
  return (
    <div className="h-[90vh]">
      <div className="relative w-full h-[85vh] md:h-[70vh]">
        <Image
          src="/background.png"
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />

        {/* オーバーレイ要素 */}
        <div className="absolute inset-0 h-[80vh] grid place-content-center place-item-center lg:grid-cols-8 lg:grid-rows-7">
          {/* キャラクター */}
          <div className="col-start-4 col-end-9 row-start-1 row-end-8 relative z-0 hidden lg:block">
            <Image
              src="/inmukun.png"
              fill
              style={{ objectFit: "contain" }}
              alt=""
            />
          </div>

          {/* ロゴ */}
          <div className="place-content-center p-8 lg:col-start-1 lg:col-end-6 lg:row-start-3 lg:row-end-5 lg:grid z-10">
            <Image
              src="/logo.svg"
              height={500}
              width={500}
              alt="アトラス/Alterna.Inc"
              className="hidden md:block"
            />
            <Image
              src="/logo-sm.svg"
              height={350}
              width={350}
              alt="アトラス/Alterna.Inc"
              className="block md:hidden px-7 mb-20 md:mb-0"
            />
          </div>
          <div className="grid place-content-center place-item-center p-4 gap-4 lg:col-start-2 lg:col-end-5 lg:row-start-5 lg:row-end-6 lg:grid lg:p-4 lg:gap-4 z-20">
            <div className="flex gap-4">
              <Button variant="primary">Get Started</Button>
              <Button variant="secondary">Discordに参加する</Button>
            </div>
            <p className="text-center opacity-50 text-sm md:text-base">@_@ Alterna.Inc System9@友達Protocol</p>
          </div>
        </div>
      </div>
    </div>
  )
}