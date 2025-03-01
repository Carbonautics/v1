import React, { SVGProps } from "react";
import type { IconTypes } from "./Icon.types";
import { ICONS } from "./Icon.constants";

type IconProps = {
  icon: IconTypes;
  props?: SVGProps<SVGSVGElement>;
};

export default function Icon({ icon, props }: IconProps): React.ReactNode {
  const svgContent = React.createElement(ICONS[icon]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}>
      {svgContent}
    </svg>
  );
}
