// import SubmitAction from "./SubmitAction";
import ChallengeViewer from "./ChallengeViewer";
import ChallengeSubmit from "./ChallengeSubmit";
import markdownData from "../markdownData.json";
import CrossDetection from "@/components/CrossDetection";

export async function generateStaticParams() {
  return markdownData.map((x) => x.id);
}

export default async function ChallengeDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = markdownData.find((x) => x.id === params.slug);
  return (
    <>
      <CrossDetection className="challenge-viewer py-[30px] sm:py-[40px] md:py-[60px]">
        <ChallengeViewer params={params}></ChallengeViewer>
      </CrossDetection>
      <ChallengeSubmit
        type={data?.submitWithoutCode ? "normal" : "code"}
      ></ChallengeSubmit>
    </>
  );
}
