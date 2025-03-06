import Banner from "../../components/layout/Banner"

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "圏外/仮初めの界隈 - バナー同盟",
};

export default function BannerPage() {
  return (
    <div className="mt-12">
      <Banner page={true} />
    </div>
  )
}