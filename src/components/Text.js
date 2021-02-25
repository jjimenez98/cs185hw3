import { useEffect } from "react";

function Text() {
  return (
    <div>
      <section className="text">
        <form>
          <div className="text-first">
            <div className="text-first-box">
              <div className="text-first-box-label">
                <label className="firstname" for="firstname">
                  First Name:
                </label>
              </div>
              <div className="text-first-box-input">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="firstname"
                ></input>
              </div>
            </div>

            <div className="text-first-box">
              <div className="text-first-box-label">
                <label className="lastname" for="lastname">
                  Last Name:
                </label>
              </div>
              <div className="text-first-box-input">
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="lastname"
                ></input>
              </div>
            </div>
          </div>
          <div className="text-second">
            <div className="text-second-header">
              <h2>Favorite Movie</h2>
            </div>
            <div className="text-second-radio">
              <div className="text-second-radio-input">
                <input type="radio" name="movie" value="Avengers"></input>
                <label className="text-label-avengers" for="Avengers">
                  Avengers
                </label>
              </div>
              <div className="text-second-radio-input">
                <input type="radio" name="movie" value="darkknight"></input>
                <label className="text-label-darkknight" for="darkknight">
                  Dark Knight
                </label>
              </div>
              <div className="text-second-radio-input">
                <input type="radio" name="movie" value="tenet"></input>
                <label className="text-label-tenet" for="tenet">
                  Tenet
                </label>
              </div>
            </div>
          </div>
          <div className="text-done">
            <input className="submit" type="submit" value="Done"></input>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Text;
