import ContentViewer from "./ContentViewer";
import CrossDetection from "@/components/CrossDetection";
import markdownData from "../markdownData.json";

export async function generateStaticParams() {
  return markdownData.map((x) => x.id);
}

export default async function ContentDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <CrossDetection className="py-[30px] sm:py-[40px] md:py-[60px]">
      <ContentViewer params={params} />
    </CrossDetection>
  );
}
