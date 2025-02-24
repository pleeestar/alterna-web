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
    { href: "/mtp", label: "MTP症候群とは" },
    { href: "/detail", label: "オルタナ薬剤一覧" },
    { href: "/gallery", label: "ギャラリー" },
    { href: "/spring", label: "春" },
    { href: "/summer", label: "夏" },
    { href: "/autumn", label: "秋" },
    { href: "/winter", label: "冬" },
    { href: "/event", label: "祭り" },
    { href: "/banner", label: "バナー同盟" },
    { href: "/diary", label: "日記(乙女の日記は見ちゃダメ)" },
  ],
  Social: [
    { href: "/", label: "Youtube" },
    { href: "/", label: "Discord" },
    { href: "/", label: "Twitter" },
    { href: "/", label: "Bluesky" },
    { href: "/", label: "Github" },
    { href: "mailto:pleeestar@aol.com", label: "mail: pleeestar@aol.com" },
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
    <footer className="relative w-full px-6 max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto grid md:grid-cols-3 md:grid-rows-5 pb-20 pt-9">
      <div className="pt-4 md:pt-0 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-6">
        <Image
          src="/footer-logo.svg"
          height={100}
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
  )
}
