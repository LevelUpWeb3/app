interface YoutubeEmbedProps {
  id: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({
  id,
}: YoutubeEmbedProps) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <iframe
      style={{
        width: "750px",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="aspect-video"
      src={"https://www.youtube.com/embed/" + id}
      title="YouTube Video Player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);

export default YoutubeEmbed;
