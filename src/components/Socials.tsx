import { uniqueId } from "lodash";
import Icon from "./Icons";
import { socialMediaLinks } from "../static/SocialMediaData";

export default function Socials() {
  return (
    <>
      <ul className="flex flex-col items-center m-0 p-0 after:content-[''] after:h-20 after:block after:my-0 after:mx-auto after:w-px after:bg-slate-200 ">
        {socialMediaLinks.map((social) => (
          <li
            key={uniqueId("social-media-item")}
            className="last-of-type:mb-5 hover:-translate-y-0.5 hover:text-teal-200">
            <a href={social.url} className="p-2.5">
              <Icon
                icon={social.label}
                props={{ width: "size-5", height: "size-5" }}
              />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
