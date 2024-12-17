import Link from "next/link";

const Navbar = () => (
    <nav className="p-4 bg-white shadow-md flex justify-between items-center">
        <div className="text-2xl font-bold">E-Shop</div>
        <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
    </nav>
);

export default Navbar;
