import { useEffect } from "react";

import { useSearchParams } from "react-router-dom";

import { useDispatch } from "react-redux";

import { closeMenu } from "../utils/appSlice";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [params] = useSearchParams();

  console.log(params.get("v"));

  return (
    <div className="flex flex-col flex-wrap">
      <div className="pl-10">
        <iframe
          width="1000"
          height="500"
          src={"https://www.youtube.com/embed/" + params.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
