import React, { useEffect } from "react";

function Email() {
  useEffect(() => {
    var submit = document.getElementById("form-submit");
    var group = document.getElementById("form-error");

    submit.addEventListener("click", () => {
      console.log("form submit clicked");
      var input = document.getElementById("form-email").value;
      var inputf = document.getElementById("form-email");

      console.log(input);
      function validateEmail(email) {
        if (email.slice(-2) == "co") {
          return false;
        } else {
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(String(email).toLowerCase());
        }
      }

      const i = validateEmail(input);
      if (i) {
        group.className = group.className.replace("error-message", "");
        group.className = group.className.replace("1", "");
        group.className = group.className.replace("success-message", "");
        group.className = group.className.replace("1", "");
        group.className += "success-message";
        document.getElementById("form-error").innerHTML =
          "Email successfully recorded";
        console.log("Email successfully recorded");
      } else {
        group.className = group.className.replace("success-message", "");
        group.className = group.className.replace("error-message", "");
        group.className = group.className.replace("1", "");
        group.className += "error-message1";
        document.getElementById("form-error").innerHTML =
          "Invalid email address.";
        console.log("Invalid email address.");
      }
    });
  });

  return (
    <div>
      <section className="email">
        <div className="form">
          <div id="input-group" className="input-group">
            <label>Email *</label>
            <input
              className="form-email"
              id="form-email"
              type="text"
              name="value"
            />
            <div id="form-error" className="error-message">
              Email is a required field.
            </div>
            <input
              id="form-submit"
              className="form-submit"
              type="submit"
              value="Submit Now!"
            ></input>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Email;
