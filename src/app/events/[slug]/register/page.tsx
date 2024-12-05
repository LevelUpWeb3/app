import TallyForm from "@/components/TallyForm";
import Data from "../../eventsList.json";
import { genMeta } from "@/utils/route";

export function generateStaticParams() {
  return Data.map((event) => ({
    params: { slug: event.url },
  }));
}

export const generateMetadata = genMeta(({ params: { slug } }) => ({
  titleSuffix: "Event Registration",
  relativeUrl: `events/${slug}/register`,
}));

const RegistrationPage = ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const searchEvents = Data.find((events) => events.url.includes(slug));

  return (
    <TallyForm
      tallyUrl={searchEvents?.registrationLink}
      title="Register for Alchemy mini hack!"
    />
  );
};

export default RegistrationPage;
