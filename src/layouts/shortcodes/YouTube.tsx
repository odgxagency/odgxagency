type Props = {
  id: string;
  title: string;
};

export default function Youtube({ id, title }: Props) {
  return (
    <div className="overflow-hidden rounded-lg">
      <iframe
        width="100%"
        height="400"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );