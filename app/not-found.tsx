// pages/404.tsx
import Link from "next/link";
import Button from "../components/elements/Button"


export default function Custom404() {
  return (
    <div className="px-6 prose-sm md:prose-md lg:prose-lg grid place-content-center place-items-center w-screen h-screen text-center">
      <h1>404 - ページが見つかりません</h1>
      <p>お探しのページは存在しないか、作者の怠惰で作られていないか、移動された可能性があります。</p>
      <Link href="/" className="mt-5">
        <Button variant="secondary">ホームに戻る</Button>
      </Link>
    </div>
  );
}