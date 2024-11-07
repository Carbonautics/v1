type MainSectionProps = {
  title: string;
};

export default function MainSection({ title }: MainSectionProps) {
  return (
    <section
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label={title}>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          {title}
        </h2>
      </div>
      <div>
        <p>About me Details here</p>
      </div>
    </section>
  );
}
