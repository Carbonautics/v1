import { icons } from "../components/Icons";

declare global {
  type IconTypes = keyof typeof icons;
}
