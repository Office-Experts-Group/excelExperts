"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AboutUs() {
  const router = useRouter();

  useEffect(() => {
    window.location.href = "https://www.officeexperts.com.au/about-us";
  }, []);

  return null;
}
