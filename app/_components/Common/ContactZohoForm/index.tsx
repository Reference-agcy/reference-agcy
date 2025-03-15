"use client";

import { useEffect } from "react";
import { html } from "./zohoForm";

function ContactZohoForm() {
  useEffect(() => {
    const formContainer = document.getElementById("contact-form");
    const jquery = document.getElementById("jquery");

    if (formContainer) {
      formContainer.innerHTML = html;

      // Create and inject jQuery script if not already present
      if (!jquery) {
        const jqueryScript = document.createElement("script");
        jqueryScript.id = "jquery";
        jqueryScript.src =
          "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js";
        jqueryScript.async = true;
        document.body.appendChild(jqueryScript);
      }
    }
  }, []);

  return <div id="contact-form" />;
}

export default ContactZohoForm;
