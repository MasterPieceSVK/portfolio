"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClarityScript({ projectId }: { projectId: string }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Clarity.init(projectId);
    }
  }, [projectId]);

  return null;
}
