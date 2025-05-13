'use client';

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-black text-xl font-bold">Preston Petersen</div>
        <div className="space-x-6">
          <a href="#hero" className="font-bold text-black hover:text-sky-600">Hero</a>
          <a href="#about" className="font-bold text-black hover:text-sky-600">About</a>
          <a href="#skills" className="font-bold text-black hover:text-sky-600">Skills</a>
          <a href="#projects" className="font-bold text-black hover:text-sky-600">Projects</a>
        </div>
      </div>
    </nav>
  );
}