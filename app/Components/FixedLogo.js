import React from "react";

const FixedLogos = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-4 z-10">
      <a
        href="https://wa.me/923180481998?text=Hello How May I Help You?"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="./images/whatsapp.png"
          alt="WhatsApp Logo"
          className="w-12 h-12"
        />
      </a>
      {/* <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="/instagram-logo.png" alt="Instagram Logo" className="w-12 h-12" />
      </a> */}
    </div>
  );
};

export default FixedLogos;
