import React, { useEffect } from 'react';

const Form = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
    script.type = 'text/javascript';
    script.async = true;

    script.onload = () => {
        console.log('script loaded')
      if (window.hbspt) {
        window.hbspt.forms.create({
            region: "eu1",
            portalId: "144614304",
            formId: "3e58dc2b-c4b6-44ff-8acc-7fb850c8ff98"
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup the script element to avoid memory leaks
      document.body.removeChild(script);
    };
  }, []);
};

export default Form;
