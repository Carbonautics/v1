export default function About() {
  return (
    <section
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label={"about"}>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-full px-6 lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          About Me
        </h2>
      </div>
      <div>
        <p className="mb-4">
          I'm an Electronics engineer turned Software Developer. Currently I'm a
          Web Developer <i className="font-style:italic">(Frontend Focused) </i>
          at
          <a
            className="font-medium text-slate-200 hover:text-sky-400 focus-visible:text-sky-400"
            href="https://www.persistent.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Persistent Systems (opens in a new tab)">
            {" Persistent Systems "}
          </a>
          in the BFSI - Payments domain since June-2022.
        </p>
        <p className="mb-4">
          I strive to build applications which users will enjoy using since we
          ourselves could be the user someday. I am actively trying to upskill
          into the Cybersecurity domain over the weekends.
        </p>
        <p className="mb-4">
          During off-work hours, I'm probably playing games, watching videos
          about new tech or riding my motorcycle to the oblivion.
        </p>
      </div>
    </section>
  );
}
