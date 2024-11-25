import EditorPanel from "./EditorPanel";
import Teaching from "./Teaching";
import markdownData from "../markdownData.json";

export async function generateStaticParams() {
  return markdownData.map((x) => x.id);
}

export default async function SolidityDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = markdownData.find((x) => x.id === params.slug);

  return (
    <>
      <Teaching params={params}></Teaching>
      <EditorPanel data={data} />
    </>
  );
}
