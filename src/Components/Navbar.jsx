import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-800">Ramli</h1>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-red-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-red-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-red-600 transition">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-red-600 transition">
              Contact
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}