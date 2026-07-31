"use client";

import React, { useEffect, useState } from "react";

export default function AnimatedWrapper({ children, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`${isVisible ? "animate-page-fade" : "opacity-0"} ${className}`}>
      {children}
    </div>
  );
}
