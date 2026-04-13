import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { NavLink } from "./NavLink";

const links = [
    { label: "Home", href: "/" },
    { label: "The Problem", href: "/problem" },
    { label: "What is Rabies?", href: "/what-is-rabies" },
    { label: "First Aid", href: "/first-aid" },
    { label: "WikiHow", href: "/wikihow" }, // Added right here
    { label: "Prevention", href: "/prevention" },
    { label: "Get Help", href: "/get-help" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
            <div className="container flex items-center justify-between h-16">
                <NavLink to="/" className="flex items-center gap-2">
                    <img
                        src={logo}
                        alt="Ra-Byes! logo"
                        className="h-10 w-auto"
                    />
                    <span className="font-heading font-bold text-xl text-primary">
                        Ra-Byes!
                    </span>
                </NavLink>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    {links.map((l) => (
                        <NavLink
                            key={l.href}
                            to={l.href}
                            className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                            activeClassName="text-primary"
                        >
                            {l.label}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {open && (
                <div className="md:hidden border-t border-border bg-background pb-4">
                    {links.map((l) => (
                        <NavLink
                            key={l.href}
                            to={l.href}
                            onClick={() => setOpen(false)}
                            className="block px-6 py-3 text-sm font-medium hover:text-primary text-muted-foreground"
                            activeClassName="text-primary bg-primary/5"
                        >
                            {l.label}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;