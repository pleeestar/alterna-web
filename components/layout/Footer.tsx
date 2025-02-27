import Image from "next/image"
import Link from "next/link"

type LinkItem = {
  href: string
  label: string
}

type Links = {
  [key: string]: LinkItem[]
}

const links: Links = {
  Home: [
    { href: "/", label: "第一試験ノイズ研究所" },
    { href: "/spring", label: "春" },
    { href: "/summer", label: "夏" },
    { href: "/autumn", label: "秋" },
    { href: "/winter", label: "冬" },
    { href: "/noiseai", label: "Noise AI" },
    //{ href: "/event", label: "祭り" },
    { href: "/gallery", label: "過去の活動" },
    { href: "/banner", label: "バナー同盟" },
    //{ href: "/diary", label: "日記(乙女の日記は見ちゃダメ)" },
  ],
  Social: [
    { href: "/", label: "Youtube" },
    { href: "https://discord.com/invite/NbNqpDWERX", label: "Discord" },
    { href: "/", label: "Twitter" },
    { href: "/", label: "Bluesky" },
    { href: "https://github.com/pleeestar/alterna-web", label: "Github" },
    { href: "mailto:pleeestar@aol.com", label: "mail: pleeestar@aol.com" },
  ],
  制作: [
    { href: "#", label: "web技術: pleeestar" },
    { href: "#", label: "企画: pleeestar" },
    { href: "#", label: "ディスコ運営: nono3436" },
    { href: "#", label: "音響: same pman" },
  ],
}

type LinkSectionProps = {
  title: string
  items: LinkItem[]
}

const LinkSection: React.FC<LinkSectionProps> = ({ title, items }) => (
  <div>
    <h2 className="text-xl font-bold">{title}</h2>
    <div className="opacity-65 text-base flex flex-col mt-2">
      {items.map(({ href, label }) => (
        <Link key={label} href={href} className="hover:underline">
          {label}
        </Link>
      ))}
    </div>
  </div>
)

export default function Footer() {
  return (
    <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
      <footer className="relative w-full px-6 grid md:grid-cols-3 md:grid-rows-5 pb-20 pt-9">
        <div className="pt-4 md:pt-0 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-6">
          <Image
            src="/footer-logo.svg"
            height={200}
            width={200}
            alt="オルタナ/Alterna.Inc"
          />
        </div>

        {Object.entries(links).map(([section, items], index) => (
          <div key={section} className={`pt-4 md:pt-0 md:col-start-${index + 2} md:col-end-${index + 3} md:row-start-1 md:row-end-6`}>
            <LinkSection title={section} items={items} />
          </div>
        ))}
      </footer>
      <div>
        <p className="opacity-50">
          11 years have already passed and here we are, trying to escape to the times when we had no idea what the world was about, when we just spent ours days being happily ignorants. I don&apos;t wish to go back but being a better person hoping that humanity acts the same way. - 平成37年2月27日丘people
        </p>
      </div>
    </div>
  )
}
