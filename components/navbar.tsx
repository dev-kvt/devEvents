// components/Navbar.tsx   (or .jsx if you don’t use TypeScript)
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="p-4 bg-sky-500 shadow-md">
      <nav className="flex items-center justify-between max-w-7xl mask-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icons/logo.png"
            alt="DevEvent logo"
            width={24}
            height={24}
            className="object-contain"
          />
          <span className="font-bold text-lg">DevEvent</span>
        </Link>

        {/* Menu */}
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/events" className="hover:text-blue-600 transition-colors">
              Events
            </Link>
          </li>
          <li>
            <Link href="/create" className="hover:text-blue-600 transition-colors">
              Create Event
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;