import { useEffect } from "react";

function Image() {
  useEffect(() => {
    var images = document.getElementById("images");
    console.log("popup");
    console.log(images);

    images.addEventListener("click", function () {
      console.log("images click");
      var popup = document.getElementById("popup");
      document.getElementById("popup-content-image").src = "download.jpeg";
      popup.className = popup.className.replace("popup", "");
      popup.className += "popup1";
    });

    //
    var images2 = document.getElementById("images2");
    console.log("popup");
    console.log(images2);

    images2.addEventListener("click", function () {
      console.log("images click");
      var popup = document.getElementById("popup");
      document.getElementById("popup-content-image").src = "download1.jpeg";
      popup.className = popup.className.replace("popup", "");
      popup.className += "popup1";
    });

    //
    var images3 = document.getElementById("images3");
    console.log("popup");
    console.log(images3);

    images3.addEventListener("click", function () {
      console.log("images click");
      var popup = document.getElementById("popup");
      document.getElementById("popup-content-image").src = "download2.jpeg";
      popup.className = popup.className.replace("popup", "");
      popup.className += "popup1";
    });

    //
    var images4 = document.getElementById("images4");
    console.log("popup");
    console.log(images4);

    images4.addEventListener("click", function () {
      console.log("images click");
      var popup = document.getElementById("popup");
      document.getElementById("popup-content-image").src = "download3.jpeg";
      popup.className = popup.className.replace("popup", "");
      popup.className += "popup1";
    });

    //
    var images5 = document.getElementById("images5");
    console.log("popup");
    console.log(images5);

    images5.addEventListener("click", function () {
      console.log("images click");
      var popup = document.getElementById("popup");
      document.getElementById("popup-content-image").src = "download4.jpeg";
      popup.className = popup.className.replace("popup", "");
      popup.className += "popup1";
    });

    //
    var images6 = document.getElementById("images6");
    console.log("popup");
    console.log(images6);

    images6.addEventListener("click", function () {
      console.log("images click");
      var popup = document.getElementById("popup");
      document.getElementById("popup-content-image").src = "download5.jpeg";
      popup.className = popup.className.replace("popup", "");
      popup.className += "popup1";
    }); //
    var images7 = document.getElementById("images7");
    console.log("popup");
    console.log(images7);

    images7.addEventListener("click", function () {
      console.log("images click");
      var popup = document.getElementById("popup");
      document.getElementById("popup-content-image").src = "download2.jpeg";
      popup.className = popup.className.replace("popup", "");
      popup.className += "popup1";
    }); //
    var images8 = document.getElementById("images8");
    console.log("popup");
    console.log(images8);

    images8.addEventListener("click", function () {
      console.log("images click");
      var popup = document.getElementById("popup");
      document.getElementById("popup-content-image").src = "download1.jpeg";
      popup.className = popup.className.replace("popup", "");
      popup.className += "popup1";
    }); //

    // var close_btn = document.getElementById("popup-content-close");
    // console.log("popup");
    // console.log(images);

    // close_btn.addEventListener("click", function () {
    //   console.log("images click");
    //   var popup = document.getElementById("popup");
    //   popup.className = popup.className.replace("popup1", "");
    //   popup.className += "popup";
    // });

    var close_btn1 = document.getElementById("popup-content-click");

    close_btn1.addEventListener("click", function () {
      console.log("images click");
      var popup = document.getElementById("popup");
      popup.className = popup.className.replace("popup1", "");
      popup.className += "popup";
    });
  });
  return (
    <div>
      <section className="image">
        <div id="popup" className="popup">
          <div id="popup-content-click" className="popup-content-click"></div>
          <div className="popup-content">
            <img id="popup-content-image" className="popup-content-images" />
          </div>
        </div>
        <div className="row">
          <div className="row1">
            <div className="col-1-of-3">
              <img id="images" className="images" src="download.jpeg" />
            </div>
            <div className="col-1-of-3">
              <img id="images2" className="images" src="download1.jpeg" />
            </div>
          </div>
          <div className="row1">
            <div className="col-1-of-3">
              <img id="images3" className="images" src="download2.jpeg" />
            </div>
            <div className="col-1-of-3">
              <img id="images7" className="images" src="download2.jpeg" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row1">
            <div className="col-1-of-3">
              <img id="images4" className="images" src="download3.jpeg" />
            </div>
            <div className="col-1-of-3">
              <img id="images5" className="images" src="download4.jpeg" />
            </div>
          </div>
          <div className="row1">
            <div className="col-1-of-3">
              <img id="images6" className="images" src="download5.jpeg" />
            </div>
            <div className="col-1-of-3">
              <img id="images8" className="images" src="download1.jpeg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Image;
