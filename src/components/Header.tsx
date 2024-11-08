export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Pratik Nadgouda
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Senior Software Engineer
        </h2>
        <p className="mt-4 max-w-s leading-normal">
          Building Secure & Engaging applications
        </p>
      </div>
    </header>
  );
}
