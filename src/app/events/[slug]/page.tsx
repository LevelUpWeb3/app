import Data from "../eventsList.json";

// import EventOverview from "./EventOverview";
// import EventSection from "./EventSection";
import EventSubmit from "./EventSubmit";
import EventViewer from "./EventViewer";
import CrossDetection from "@/components/CrossDetection";

export async function generateStaticParams() {
  return Data.filter((x) => x.url.startsWith("events/")).map(
    (x) => x.url.split("/")[1],
  );
}

const HackathonDetailPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const eventData = Data.find((item) => item.url.includes(params.slug));

  return (
    <>
      <CrossDetection className="event-viewer py-[30px] sm:py-[40px] md:py-[60px]">
        <EventViewer params={params}></EventViewer>
      </CrossDetection>
      <EventSubmit
        hackathonId={params.slug}
        buttonText={eventData?.buttonText}
      ></EventSubmit>
    </>
  );
};

export default HackathonDetailPage;
