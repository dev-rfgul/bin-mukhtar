'use client'

import React, { useEffect } from 'react';

const MyCognitoFormComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.cognitoforms.com/f/seamless.js";
    script.async = true;
    script.setAttribute("data-key", "x4wEMXs2NUuDvfF5tbl5Cg");
    script.setAttribute("data-form", "7");
    
    // Find the container div in the current component
    const container = document.getElementById('cognito-form-container');
    container.appendChild(script);

    return () => {
      container.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h2></h2>
      <div id="cognito-form-container" className="cognito neumorphism "></div> {/* Container for the form */}
    </div>
  );
};

export default MyCognitoFormComponent;
