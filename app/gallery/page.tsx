import Latest from "../../components/layout/Latest"

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "圏外/仮初めの界隈 - 過去の活動",
};

export default function galleryPage() {
  return (
    <div className="mt-12">
      <Latest page={true} />
    </div>
  )
}
