import Link from "next/link";
import MobileMenu from "./MobileMenu"; // Import client component

function Navbar() {
  return (
    <header className="bg-navbar p-4 sticky top-0 left-0 right-0 z-50 shadow-lg">
      <nav className="flex justify-between items-center lg:max-w-4/6 mx-auto">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary hover:text-white transition duration-300">
          Hammad Portfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex gap-6">
            <li><Link href="/" className="navbar-li">Home</Link></li>
            <li><Link href="/#about" className="navbar-li">About</Link></li>
            <li><Link href="/#projects" className="navbar-li">Projects</Link></li>
            <li><Link href="/#skills" className="navbar-li">Skills</Link></li>
            <li><Link href="/#technologies" className="navbar-li">Technologies</Link></li>
            <li><Link href="/#contact" className="navbar-li">Contact</Link></li>
          </ul>
        </div>

        {/* Mobile Menu (Handled by Client Component) */}
        <MobileMenu />
      </nav>
    </header>
  );
}

export default Navbar;