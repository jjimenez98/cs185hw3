import { useEffect } from "react";
import image1 from "../images/download.jpeg";
import image2 from "../images/download1.jpeg";
import image3 from "../images/download2.jpeg";
import image4 from "../images/download3.jpeg";
import image5 from "../images/download4.jpeg";
import image6 from "../images/download5.jpeg";
import image7 from "../images/download5.jpeg";

function Image() {
  useEffect(() => {
    var images = document.getElementById("images");
    console.log("popup");
    console.log(images);

    images.addEventListener("click", function () {
      console.log("images click");
      var popup = document.getElementById("popup");
      document.getElementById("popup-content-image").src = image1;
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
      document.getElementById("popup-content-image").src = image2;
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
      document.getElementById("popup-content-image").src = image2;
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
      document.getElementById("popup-content-image").src = image4;
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
      document.getElementById("popup-content-image").src = image5;
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
      document.getElementById("popup-content-image").src = image6;
      popup.className = popup.className.replace("popup", "");
      popup.className += "popup1";
    }); //
    var images7 = document.getElementById("images7");
    console.log("popup");
    console.log(images7);

    images7.addEventListener("click", function () {
      console.log("images click");
      var popup = document.getElementById("popup");
      document.getElementById("popup-content-image").src = image3;
      popup.className = popup.className.replace("popup", "");
      popup.className += "popup1";
    }); //
    var images8 = document.getElementById("images8");
    console.log("popup");
    console.log(images8);

    images8.addEventListener("click", function () {
      console.log("images click");
      var popup = document.getElementById("popup");
      document.getElementById("popup-content-image").src = image7;
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
              <img id="images" className="images" src={image1} />
            </div>
            <div className="col-1-of-3">
              <img id="images2" className="images" src={image2} />
            </div>
          </div>
          <div className="row1">
            <div className="col-1-of-3">
              <img id="images3" className="images" src={image2} />
            </div>
            <div className="col-1-of-3">
              <img id="images7" className="images" src={image3} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row1">
            <div className="col-1-of-3">
              <img id="images4" className="images" src={image4} />
            </div>
            <div className="col-1-of-3">
              <img id="images5" className="images" src={image5} />
            </div>
          </div>
          <div className="row1">
            <div className="col-1-of-3">
              <img id="images6" className="images" src={image6} />
            </div>
            <div className="col-1-of-3">
              <img id="images8" className="images" src={image7} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Image;
