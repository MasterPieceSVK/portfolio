import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function animationClasses(delayCoefficient: number) {
//   return `motion-scale-in-[0] motion-blur-in-[10px] motion-duration-[1.13s] motion-duration-[1.3s]/scale motion-delay-[${
//     0.2 * delayCoefficient
//   }s]/scale motion-duration-[1.3s]/blur motion-delay-[${
//     0.4 * delayCoefficient
//   }s]/blur`;
// }

export function animationClasses(delayCoefficient: number) {
  const delay = [0.38, 0.56, 0.69, 0.8, 0.87, 0.99][delayCoefficient];
  const duration = [1.13, 0.94, 0.81, 0.7, 0.63, 0.51][delayCoefficient];

  return `motion-scale-in-[0.7] motion-translate-x-in-[0%] motion-translate-y-in-[50%] motion-blur-in-[10px] motion-duration-[1.13s] motion-duration-[0.96s]/scale motion-delay-[0.17s]/scale motion-duration-[0.99s]/translate motion-delay-[0.14s]/translate motion-duration-[${1.13}s]/blur motion-delay-[${0.38}s]/blur  motion-ease-spring-bouncy`;
}
