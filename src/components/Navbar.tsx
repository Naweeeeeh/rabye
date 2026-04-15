import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { NavLink } from "./NavLink";
import { useLanguage } from "../lib/LanguageContext";

// Logically ordered user journey
const links = [
    { label: "Home", href: "/" },
    { label: "The Problem", href: "/problem" },
    { label: "What is Rabies?", href: "/what-is-rabies" },
    { label: "Prevention", href: "/prevention" },
    { label: "First Aid", href: "/first-aid" },
    { label: "QikiHow", href: "/wikihow" },
    { label: "Get Help", href: "/get-help", isCta: false },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-[#8DA750]/20 shadow-sm flex flex-col transition-all">
            
            {/* Main Navbar Container - Reduced padding to slim it down */}
            <div className="container max-w-7xl mx-auto px-4 py-2 md:py-3 flex items-center justify-between">

                {/* Left: Branding */}
                <NavLink to="/" className="flex items-center gap-3 group transition-opacity hover:opacity-90">
                    <img
                        src={logo}
                        alt="Ra-Byes! logo"
                        className="h-8 md:h-9 w-auto" /* Scaled down slightly */
                    />
                    <span className="font-heading font-black text-xl md:text-2xl text-[#2d5128] tracking-tight">
                    <span className="font-heading font-black text-xl md:text-2xl text-[#2d5128] tracking-tight">
                        Ra-Byes!
                    </span>
                    </span>
                </NavLink>

                {/* Right: Tagline & Desktop Navigation */}
                <div className="hidden lg:flex flex-col items-end gap-1.5"> {/* Tightened gap */}
                    
                    {/* Fancy Tagline - Scaled text size slightly to save vertical space */}
                    <span className="font-heading font-black text-lg bg-gradient-to-r from-[#142C14] to-[#537B2F] bg-clip-text text-transparent tracking-tight">
                        {t("SAYING GOODBYE TO RABIES, ONE BITE AT A TIME.")}
                    </span>

                    {/* Desktop Links */}
                    <div className={`flex items-center ${language === "CEB" ? "gap-3 lg:gap-4" : "gap-6"}`}>
                        {links.map((l) => (
                            <NavLink
                                key={l.href}
                                to={l.href}
                                className={
                                    l.isCta
                                        ? `relative flex items-center gap-2 ${language === "CEB" ? "text-[9.5px] px-3" : "text-[11px] px-5"} font-black uppercase tracking-wider bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-all shadow-md shadow-red-200 active:scale-[0.98]`
                                        : `relative ${language === "CEB" ? "text-[12px] lg:text-[13px]" : "text-sm"} font-bold text-[#142C14]/70 transition-colors hover:text-[#2D5128]`
                                }
                                activeClassName={l.isCta ? "" : "text-[#2D5128] border-b-2 border-[#8DA750]"}
                            >
                                {l.isCta && (
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                    </span>
                                )}
                                {t(l.label)}
                            </NavLink>
                        ))}
                        
                        {/* Language Toggle Switch */}
                        <div className="flex items-center gap-2 ml-2">
                            <span className={`text-xs font-bold transition-colors ${language === "EN" ? "text-[#2D5128]" : "text-[#142C14]/40"}`}>EN</span>
                            <button
                                onClick={toggleLanguage}
                                className="relative inline-flex h-6 w-12 items-center rounded-full bg-[#E4EB9C]/40 border-2 border-[#8DA750]/30 transition-colors focus:outline-none focus:ring-2 focus:ring-[#8DA750] focus:ring-offset-2"
                                aria-label="Toggle language"
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-[#2D5128] transition-transform duration-300 ease-in-out ${
                                        language === "CEB" ? "translate-x-6" : "translate-x-1"
                                    }`}
                                />
                            </button>
                            <span className={`text-xs font-bold transition-colors ${language === "CEB" ? "text-[#2D5128]" : "text-[#142C14]/40"}`}>CEB</span>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Toggle with Notification Dot */}
                <button
                    className="lg:hidden relative p-2 text-[#142C14] transition-colors hover:bg-[#E4EB9C]/30 rounded-xl"
                    onClick={() => setOpen(!open)}
                >
                    {!open && (
                        <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5 z-10">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 border border-white"></span>
                        </span>
                    )}
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Tagline - Thinner padding */}
            <div className="lg:hidden w-full text-center py-1.5 bg-gradient-to-r from-white via-[#E4EB9C]/30 to-white border-t border-[#8DA750]/10 shadow-inner">
                <span className="font-heading font-black text-xs text-[#2D5128] tracking-wide">
                    {t("SAYING GOODBYE TO RABIES, ONE BITE AT A TIME.")}
                </span>
            </div>

            {/* Mobile Navigation Dropdown - Removed glassmorphism here too */}
            {open && (
                <div className="lg:hidden border-t border-[#8DA750]/20 bg-white shadow-xl absolute top-full w-full">
                    <div className="flex flex-col p-4 space-y-1">
                        {links.map((l) => (
                            <NavLink
                                key={l.href}
                                to={l.href}
                                onClick={() => setOpen(false)}
                                className={
                                    l.isCta
                                        ? `flex items-center justify-center gap-3 w-full mt-4 mb-2 py-3.5 ${language === "CEB" ? "text-xs" : "text-sm"} font-black uppercase tracking-widest bg-red-600 text-white rounded-xl shadow-lg shadow-red-100 active:scale-[0.95]`
                                        : `block px-4 py-3.5 ${language === "CEB" ? "text-[13px]" : "text-sm"} font-bold text-[#142C14]/80 hover:text-[#2D5128] hover:bg-[#E4EB9C]/30 rounded-xl transition-all`
                                }
                                activeClassName={l.isCta ? "" : "text-[#2D5128] bg-[#E4EB9C]/40"}
                            >
                                {t(l.label)}
                            </NavLink>
                        ))}

                        {/* Mobile Language Toggle */}
                        <div className="flex items-center justify-between px-4 py-4 mt-2 border-t border-[#8DA750]/20">
                            <span className="text-sm font-bold text-[#142C14]/80">Language</span>
                            <div className="flex items-center gap-3">
                                <span className={`text-xs font-bold transition-colors ${language === "EN" ? "text-[#2D5128]" : "text-[#142C14]/40"}`}>EN</span>
                                <button
                                    onClick={toggleLanguage}
                                    className="relative inline-flex h-7 w-14 items-center rounded-full bg-[#E4EB9C]/40 border-2 border-[#8DA750]/30 transition-colors focus:outline-none"
                                >
                                    <span
                                        className={`inline-block h-5 w-5 transform rounded-full bg-[#2D5128] transition-transform duration-300 ease-in-out ${
                                            language === "CEB" ? "translate-x-7" : "translate-x-1"
                                        }`}
                                    />
                                </button>
                                <span className={`text-xs font-bold transition-colors ${language === "CEB" ? "text-[#2D5128]" : "text-[#142C14]/40"}`}>CEB</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;