import { useRef, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";

function App() {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      id="App"
      className="h-full max-w-full bg-white text-slate-400 dark:bg-gray-900 selection:bg-indigo-600 antialiased leading-relaxed"
      ref={divRef}
      onMouseMove={handleMouseMove}>
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(3,105,161,0.15), transparent 80%)`,
        }}
      />
      <Hero />
    </div>
  );
}

export default App;
