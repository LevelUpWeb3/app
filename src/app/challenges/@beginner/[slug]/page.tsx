import { Mdx } from "@/components/Mdx";
import { allContents } from "contentlayer/generated";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getContentFromParams(slug: string) {
  const content = allContents.find((content) => content.slugAsParams === slug);

  console.log(content);
  if (!content) notFound();

  return content;
}

const page = async ({ params }: PageProps) => {
  const content = await getContentFromParams(params.slug);

  return (
    <div>
      <Mdx code={content.body.code} />
    </div>
  );
};

export default page;
