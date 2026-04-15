import heroImg from "@/assets/heroimg.png";
import { ShieldCheck, Users, Dog, ArrowRight, ExternalLink } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../lib/LanguageContext";

const stats = [
    {
        icon: ShieldCheck,
        value: "59,000",
        label: "Rabies Deaths annually worldwide",
        href: "https://rabiesalliance.org/about/our-story/rabies#:~:text=An%20estimated%2059%2C000%20people%20die,from%20medical%20and%20veterinary%20services."
    },
    {
        icon: Users,
        value: "40%",
        label: "Of Rabies victims are children under 15",
        href: "https://www.who.int/news-room/fact-sheets/detail/rabies#:~:text=Key%20facts,fatal%20in%20100%25%20of%20cases."
    },
    {
        icon: Dog,
        value: "99%",
        label: "OF RABIES CASES IN HUMANS caused by dog bites",
        href: "https://www.woah.org/en/disease/rabies/#:~:text=With%20a%20fatality%20rate%20of,towards%20a%20rabies%2Dfree%20future."
    },
];

const HeroSection = () => {
    const { t, language } = useLanguage();
    return (
    <section className="bg-white pb-16 md:pb-24 pt-8 overflow-hidden relative">

        <div className="container px-4">

            <div className="grid md:grid-cols-2 gap-12 items-center">

                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 py-4">

                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight">
                    <span 
                        className={`font-black tracking-tighter bg-gradient-to-r from-[#142C14] to-[#537B2F] bg-clip-text text-transparent ${language === "CEB" ? "text-3xl md:text-4xl lg:text-5xl" : ""}`}
                        style={{ WebkitTextStroke: "1.2px transparent" }} // This forces the browser to thicken the stroke
                    >
                        {t("Rabies is Fatal.")}
                    </span> 
                    <br/>
                    <span className="font-extrabold text-slate-800 tracking-tight">
                        {t("Your Action Now is the Only Cure.")}
                    </span>
                </h1>


                    <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
                        {t("Symptoms don’t show up immediately, but by the time they do, it is")} <strong className="text-slate-900">{t("100% too late")}</strong>. {t("If you’ve been bitten or scratched,")} <span className="text-[#142C14] font-black uppercase tracking-wider">{t("DO NOT WAIT")}</span>. {t("Follow these emergency steps now.")}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <NavLink
                            to="/first-aid"
                            className="relative group w-full sm:w-[280px] h-14 inline-flex items-center justify-center rounded-xl bg-[#2D5128] text-white font-bold transition-all hover:bg-[#142C14] hover:shadow-xl hover:shadow-[#142C14]/20 active:scale-[0.98]"
                        >
                            <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-4 w-4 border-2 border-white bg-red-500 shadow-sm"></span>
                            </span>

                            {t("ACT NOW: Bite Protocol")}
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </NavLink>

                        <NavLink
                            to="/get-help"
                            className="w-full sm:w-[280px] h-14 inline-flex items-center justify-center rounded-xl border-2 border-[#2D5128] text-[#2D5128] font-bold transition-all hover:bg-[#E4EB9C]/30 hover:border-[#142C14] hover:text-[#142C14] active:scale-[0.98]"
                        >
                            {t("Find Vaccination Centers")}
                        </NavLink>
                    </div>
                </div>

                {/* Hero Image - Animated with delay */}
                <div className="relative w-full h-[400px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl group border border-slate-100 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
                    <img
                        src={heroImg}
                        alt="Immediate medical care for animal bites"
                        fetchPriority="high"
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white text-sm font-medium bg-[#142C14]/40 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                        {t("Local Health Unit Vaccination Drive")}
                    </div>
                </div>

            </div>

            {/* Bottom Stats Section - Animated with longer delay */}
            <div className="mt-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {stats.map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-white rounded-2xl p-6 md:p-8 flex items-center gap-5 shadow-sm border border-slate-100 hover:border-[#8DA750]/50 hover:shadow-xl hover:shadow-[#142C14]/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden active:scale-[0.98]"
                        >
                            {/* Neater Icon Box with Hover Color Flip */}
                            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#E4EB9C]/40 flex items-center justify-center transition-colors group-hover:bg-[#2D5128]">
                                <s.icon className="text-[#2D5128] transition-colors group-hover:text-[#E4EB9C]" size={24} />
                            </div>

                            {/* Slate Typography for Authority */}
                            <div className="flex flex-col">
                                <p className="font-heading font-black text-2xl md:text-3xl text-slate-900 leading-none mb-1.5">
                                    {s.value}
                                </p>
                                <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest pr-6 leading-snug">
                                    {t(s.label)}
                                </p>
                            </div>

                            <ExternalLink
                                size={18}
                                className="absolute top-5 right-5 text-slate-200 group-hover:text-[#2D5128] transition-colors"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </section>
    );
};

export default HeroSection;