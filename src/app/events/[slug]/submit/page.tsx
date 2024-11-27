import TallyForm from "@/components/TallyForm";
import Data from "../../eventsList.json";
import { genMeta } from "@/utils/route";

export const generateMetadata = genMeta(({ params: { slug } }) => ({
  titleSuffix: "Event Submission",
  relativeURL: `/events/${slug}/submit`,
}));

export function generateStaticParams() {
  return Data.map((event) => ({
    params: { slug: event.url },
  }));
}

const SubmissionPage = ({ params: { slug } }: { params: { slug: string } }) => {
  const searchEvents = Data.find((events) => events.url.includes(slug));

  return (
    <TallyForm
      tallyUrl={searchEvents?.submissionLink}
      title="Submit your Alchemy mini hack!"
    />
  );
};

export default SubmissionPage;
