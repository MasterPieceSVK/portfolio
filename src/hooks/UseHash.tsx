"use client";
import { useState, useEffect } from "react";

export function useHash() {
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.hash);
  }, []);

  return hash;
}
