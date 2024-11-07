import MainSection from "./MainSection";

export default function Main() {
  const mockData = [{ title: "About" }];
  return (
    <main className="pt-24 lg:w-1/2 lg: py-24">
      {mockData.map((section) => {
        return <MainSection title={section.title} />;
      })}
    </main>
  );
}
