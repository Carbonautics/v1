import clsx from "clsx";
import { useEffect } from "react";
import { SidePositions } from "../../utils/enums";

type SideProps = {
  isHome: boolean;
  position: keyof typeof SidePositions;
  children: React.ReactNode;
};

export default function Side({ isHome, position, children }: SideProps) {
  useEffect(() => {
    if (!isHome) return;
  }, [isHome]);

  const styleClassMd = clsx(
    position === SidePositions.left ? "right-auto left-5" : "left-auto right-5"
  );
  return (
    <div
      className={`fixed w-10 bottom-0 z-10 text-slate-200 hidden md:block ${styleClassMd}`}>
      {children}
    </div>
  );
}
