import Header from "./Header";
import Main from "./Main";
import SideNav from "./sections/SideNav";

export default function Hero() {
  return (
    <>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 lg:px-24 lg:py-0">
        <SideNav isHome />
        <div className="lg:flex lg:justify-between lg:gap-4 p-20">
          <Header />
          <Main />
        </div>
      </div>
    </>
  );
}
