import Header from "./Header";
import Main from "./Main";

export default function Hero() {
  return (
    <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <Main />
        </div>
      </div>
    </div>
  );
}
