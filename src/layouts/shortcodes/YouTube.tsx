import React from "react";
import YouTube from "react-youtube";

type Props = {
  id: string;
  title: string;
};

export default function Youtube({ id, title }: Props) {
  const opts = {
    width: "100%",
    height: "390",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="overflow-hidden rounded-lg">
      <YouTube videoId={id} opts={opts} />
    </div>
  );
}