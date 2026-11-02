"use client";

import { useState } from "react";

export default function ContactMap() {
  const [active, setActive] = useState(false);

  return (
    <div
      className="relative w-full h-72 md:h-96"
      onMouseLeave={() => setActive(false)}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6060.761670497439!2d72.80959887680253!3d21.16213168318149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e0595e9345d%3A0x6c431c07da6aa1b3!2sBhatar%20Trade%20Centre!5e1!3m2!1sen!2sin!4v1793604685737!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="SRSP Office Location"
      />
      {!active && (
        <div
          className="absolute inset-0 z-10 cursor-pointer"
          onClick={() => setActive(true)}
        />
      )}
    </div>
  );
}
