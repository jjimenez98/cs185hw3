import userEvent from "@testing-library/user-event";
import { useEffect } from "react";
import video1 from "../videos/big_buck_bunny.mp4";
import video2 from "../videos/Source_out.mp4";
import video3 from "../videos/trailer.mp4";

function Video() {
  return (
    <div>
      <section className="video">
        <div className="row">
          <div className="col-1-of-3">
            <video
              src={video1}
              height="300"
              width="400"
              type="audio/mp4"
              controls
            ></video>
          </div>
          <div className="col-1-of-3">
            <video
              src={video2}
              height="300"
              width="400"
              type="audio/mp4"
              controls
            ></video>
          </div>
          <div className="col-1-of-3">
            <video
              src={video3}
              height="300"
              width="400"
              type="audio/mp4"
              controls
            ></video>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Video;
