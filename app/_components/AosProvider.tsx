"use client";

import "aos/dist/aos.css";
import React, { useEffect } from "react";
import AOS from "aos";

interface Props {
  children: React.ReactNode;
}
const AosProvider = ({ children }: Props) => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 900,
    });
  }, []);
  return children;
};

export default AosProvider;
