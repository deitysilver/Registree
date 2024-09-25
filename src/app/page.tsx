import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <header className="flex justify-center items-center h-12 mt-12 border-white rounded-full border-2 mx-32">
        <h1 className="text-xl">Header</h1>
      </header>

      <main className="flex-grow flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-lg mb-4">Main Content</h2>
        </div>
      </main>

      <footer className="flex justify-center items-center h-12 mb-12 border-white rounded-full border-2 mx-32">
        <p className="text-sm">Footer</p>
      </footer>
    </div>
  );
}
