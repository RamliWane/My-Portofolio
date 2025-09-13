import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center mt-6 sticky z-50">
      <div className="bg-white shadow-lg rounded-xl px-8 py-3 flex items-center justify-between max-w-4xl w-full">
        <h1 className="text-xl font-bold text-gray-800">Ramli</h1>

        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-purple-700 transition font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-purple-700 transition font-semibold">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-purple-700 transition font-semibold">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-purple-700 transition font-semibold">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}