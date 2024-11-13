import { email } from "../../static/SocialMediaData";
import Side from "../Sections/Side";
import Socials from "../Socials";

type SideNavProps = { isHome: boolean };

export default function SideNav({ isHome }: SideNavProps) {
  return (
    <>
      <Side isHome={isHome} position="left">
        <Socials />
      </Side>
      <Side isHome={isHome} position="right">
        <div className="flex flex-col items-center m-0 p-0 after:content-[''] after:h-20 after:block after:my-0 after:mx-auto after:w-px after:bg-slate-200 ">
          <div className="hover:-translate-y-0.5 hover:text-teal-200">
            <a
              href={`mailto:${email}`}
              className="my-5 mx-auto text-xs tracking-widest leading-4 [writing-mode:vertical-lr] font-mono">
              {email}
            </a>
          </div>
        </div>
      </Side>
    </>
  );
}
