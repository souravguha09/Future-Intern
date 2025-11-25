import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center text-center">
      <section className="relative w-full bg-gradient-to-r from-nikeBlack to-nikeRed text-white py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            NIKE REIMAGINED
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Designed with AI inspiration — innovation meets style.
          </p>
          <button className="bg-white text-nikeBlack font-semibold px-6 py-3 rounded-full hover:bg-nikeGray transition">
            Explore Collection
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-nikeBlack">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["Air Zoom", "React Infinity", "Pegasus Turbo"].map((name, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg hover:scale-105 transition overflow-hidden">
              <Image
                src={`https://via.placeholder.com/400x250.png?text=${encodeURIComponent(name)}`}
                width={400}
                height={250}
                alt={name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="font-semibold text-xl mb-2">{name}</h3>
                <p className="text-gray-600 mb-3">AI-inspired comfort and style.</p>
                <button className="bg-nikeRed text-white px-4 py-2 rounded-lg hover:bg-red-700">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-nikeBlack text-white py-16 px-6 w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">AI-Powered Rebranding</h2>
          <p className="text-lg mb-8">
            Our design uses AI-generated concepts via <strong>Adobe Firefly</strong> to redefine Nike’s color schemes and patterns, blending modern energy with timeless sport aesthetics.
          </p>
          <div className="flex justify-center">
            <Image
              src="https://via.placeholder.com/500x200.png?text=AI+Logo+Concept"
              width={500}
              height={200}
              alt="AI Generated Logo"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <footer className="bg-nikeGray py-6 text-sm text-gray-700 w-full text-center border-t">
        © 2025 Nike Reimagined | Designed by Sourav Guha
      </footer>
    </main>
  );
}