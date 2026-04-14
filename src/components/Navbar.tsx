import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { NavLink } from "./NavLink";

// Logically ordered user journey
const links = [
    { label: "Home", href: "/" },
    { label: "The Problem", href: "/problem" },
    { label: "What is Rabies?", href: "/what-is-rabies" },
    { label: "Prevention", href: "/prevention" },
    { label: "First Aid", href: "/first-aid" },
    { label: "WikiHow", href: "/wikihow" },
    { label: "Get Help", href: "/get-help", isCta: false },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
            <div className="container flex items-center justify-between h-16 px-4 max-w-7xl mx-auto">

                <NavLink to="/" className="flex items-center gap-2 group transition-opacity hover:opacity-90">
                    <img
                        src={logo}
                        alt="Ra-Byes! logo"
                        className="h-9 w-auto"
                    />
                    <span className="font-heading font-black text-xl text-green-600 tracking-tight">
                        Ra-Byes!
                    </span>
                </NavLink>

                <div className="hidden lg:flex items-center gap-8">
                    {links.map((l) => (
                        <NavLink
                            key={l.href}
                            to={l.href}
                            className={
                                l.isCta
                                    ? "relative flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-red-600 text-white px-5 py-2.5 rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-100 active:scale-[0.98]"
                                    : "text-sm font-bold text-slate-500 transition-colors hover:text-green-600"
                            }
                            activeClassName={l.isCta ? "" : "text-green-600"}
                        >
                            {l.isCta && (
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                </span>
                            )}
                            {l.label}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Menu Toggle with Notification Dot */}
                <button
                    className="lg:hidden relative p-2 text-slate-900 transition-colors hover:bg-slate-100 rounded-lg"
                    onClick={() => setOpen(!open)}
                >
                    {!open && (
                        <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5 z-10">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 border border-white"></span>
                        </span>
                    )}
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            {open && (
                <div className="lg:hidden border-t border-slate-100 bg-white shadow-xl absolute w-full">
                    <div className="flex flex-col p-4 space-y-1">
                        {links.map((l) => (
                            <NavLink
                                key={l.href}
                                to={l.href}
                                onClick={() => setOpen(false)}
                                className={
                                    l.isCta
                                        ? "flex items-center justify-center gap-3 w-full mt-4 mb-2 py-3.5 text-sm font-black uppercase tracking-widest bg-red-600 text-white rounded-xl shadow-lg shadow-red-100 active:scale-[0.95]"
                                        : "block px-4 py-3 text-sm font-bold text-slate-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all"
                                }
                                activeClassName={l.isCta ? "" : "text-green-600 bg-green-50"}
                            >
                                {l.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;