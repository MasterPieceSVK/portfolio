import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function animationClasses(delayCoefficient: number) {
  return `motion-scale-in-[0] motion-blur-in-[10px] motion-duration-[1.13s] motion-duration-[1.3s]/scale motion-delay-[${
    0.2 * delayCoefficient
  }s]/scale motion-duration-[1.3s]/blur motion-delay-[${
    0.4 * delayCoefficient
  }s]/blur`;
}
