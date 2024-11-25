import TallyForm from "@/components/TallyForm";
import Data from "../../eventsList.json";

export function generateStaticParams() {
  return Data.map((event) => ({
    params: { slug: event.url },
  }));
}

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
