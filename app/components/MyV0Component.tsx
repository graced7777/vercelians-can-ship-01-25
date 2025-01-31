import { Sparkles, Star, Heart, Sun, Cloud, MoonStar } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-200 via-purple-300 to-blue-300">
      <header className="p-5 bg-white bg-opacity-30 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-purple-800">Unicorns & Rainbows</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="#" className="text-pink-700 hover:text-pink-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-pink-700 hover:text-pink-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-pink-700 hover:text-pink-900">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#" className="text-pink-700 hover:text-pink-900">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-900 mb-4">Welcome to the Magical World</h2>
          <p className="text-xl text-purple-800">Where unicorns dance and rainbows shine!</p>
          <Sparkles className="inline-block text-yellow-400 w-8 h-8 mt-4" />
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Star className="w-12 h-12 text-yellow-500" />}
            title="Starlight Dreams"
            description="Experience the magic of unicorn dreams under a starlit sky."
          />
          <FeatureCard
            icon={<Heart className="w-12 h-12 text-pink-500" />}
            title="Love & Friendship"
            description="Discover the power of friendship and love in our enchanted realm."
          />
          <FeatureCard
            icon={<Sun className="w-12 h-12 text-orange-400" />}
            title="Rainbow Adventures"
            description="Embark on colorful adventures across the rainbow bridge."
          />
        </section>
      </main>

      <footer className="bg-white bg-opacity-30 backdrop-blur-md p-5 text-center">
        <p className="text-purple-800">© 2025 Unicorns & Rainbows. Sprinkled with magic and love.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Cloud className="text-blue-400" />
          <MoonStar className="text-indigo-400" />
          <Star className="text-yellow-400" />
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white bg-opacity-50 backdrop-blur-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-purple-800 mb-2">{title}</h3>
      <p className="text-purple-700">{description}</p>
    </div>
  )
}

