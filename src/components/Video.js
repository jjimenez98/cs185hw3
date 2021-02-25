import userEvent from "@testing-library/user-event";
import { useEffect } from "react";

function Video() {
  return (
    <div>
      <section className="video">
        <div className="row">
          <div className="col-1-of-3">
            <video
              src="images/big_buck_bunny.mp4"
              height="300"
              width="400"
              type="audio/mp4"
              controls
            ></video>
          </div>
          <div className="col-1-of-3">
            <video
              src="images/trailer.mp4"
              height="300"
              width="400"
              type="audio/mp4"
              controls
            ></video>
          </div>
          <div className="col-1-of-3">
            <video
              src="images/Source_out.mp4"
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
