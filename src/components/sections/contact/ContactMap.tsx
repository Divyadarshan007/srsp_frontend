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
        src="https://www.google.com/maps?q=Bhatar+Trade+Center,Bhatar,Surat,Gujarat+395017&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
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
