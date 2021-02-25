import { NavLink } from "react-router-dom";
import { useEffect } from "react";
function Tab() {
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    console.log("dasfdsafdsa");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  useEffect(() => {
    //Get the button
    var mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  });

  return (
    <div>
      <button onClick={topFunction} id="myBtn" title="Go to top">
        Top
      </button>
      <nav className="navigation">
        <NavLink
          to="/text"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
          className="navigation-link"
        >
          Text
        </NavLink>
        <NavLink
          to="/images"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
          className="navigation-link"
        >
          Image
        </NavLink>
        <NavLink
          to="/videos"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
          className="navigation-link"
        >
          Video
        </NavLink>
        <NavLink
          to="/table"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
          className="navigation-link"
        >
          Table
        </NavLink>
        <NavLink
          to="/email"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
          className="navigation-link"
        >
          Email
        </NavLink>
      </nav>
    </div>
  );
}

export default Tab;
