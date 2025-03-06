import NoiseAI from "../../components/layout/NoiseAI"

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "圏外/仮初めの界隈 - ノイズAI",
};

export default function galleryPage() {
  return (
    <div className="mt-12">
      <NoiseAI page={true} />
    </div>
  )
}
