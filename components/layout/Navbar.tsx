"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import React, { JSX } from 'react'

import { Kiwi_Maru } from "next/font/google"

const maruFont = Kiwi_Maru({
  weight: "400",
  subsets: ["latin"],
})

type NavItem = {
  label: string
  href: string
  /*isButton?: boolean*/
  md?: boolean
  en: boolean
}

const navItems: NavItem[] = [
  { label: "春", href: "/spring", en: false, md: false },
  { label: "夏", href: "/summer", en: false, md: false },
  { label: "秋", href: "/autumn", en: false, md: false },
  { label: "冬", href: "/winter", en: false, md: false },
  { label: "Noise AI", href: "/noiseai", en: true, md: true },
  { label: "過去の活動", href: "/gallary", en: false, md: true },
  { label: "バナー同盟", href: "/banner", en: false, md: true },
  { label: "参加する", href: "https://discord.gg/NbNqpDWERX", en: false, md: true },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  // 高階関数: 状態を切り替えるトグルハンドラ
  const toggleMenu = () => setIsOpen((prev) => !prev)

  // 再帰関数: メニューリンクを描画
  const renderNavItems = (items: NavItem[], isMobile: boolean = false): JSX.Element[] => {
    return items.map(({ label, href, /*isButton,*/ en, md }, index) => (
      <Link key={index} href={href} className={`${isMobile ? 'block px-4 py-2 text-xl opacity-65' : 'px-4'} ${en ? '' : maruFont.className} ${md ? '' : 'block md:hidden xl:block'}`}>
        {label}
      </Link>
    ))
  }

  // スクロール時に背景色を変更するためのEffect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) { //window.innerHeight * 0.9
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white border-b-2 ' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/title-logo.svg" width={200} height={25} objectFit="contain" alt="アトラス" />
            </Link>
          </div>

          {/* デスクトップ用ナビ */}
          {/*<div className={`hidden md:flex space-x-6 text-xl`}>
            {renderNavItems(navItems.filter(item => !item.isButton))}
          </div>
          */}

          <div className={`hidden md:flex space-x-6 text-xl`}>
            {renderNavItems(navItems.filter(item => item))}
          </div>

          {/* アクションボタン */}
          {/*<div className="hidden md:flex space-x-4">
            {renderNavItems(navItems.filter(item => item.isButton))}
          </div>
          */}

          {/* モバイル用ハンバーガー */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isOpen && (
        <div className="md:hidden shadow-lg animate-slide-down bg-white h-[100vh]">
          {renderNavItems(navItems, true)}
        </div>
      )}
    </nav>
  )
}
