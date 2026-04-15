import { AlertTriangle, EyeOff, HeartCrack, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";

import problem1 from "/public/problem1.jpg";
import problem2 from "/public/problem2.jpg";
import problem3 from "/public/problem3.jpg";
import texture from "../assets/texture.png";

const cards = [
    {
        icon: AlertTriangle,
        image: problem1,    
        title: "A Persistent Local Threat",
        desc: "Rabies remains an active national health problem. The Department of Health reported 426 rabies cases in 2024, and a total of 1,750 deaths from 2020 to 2024.",
        href: "https://www.southburnett.qld.gov.au/Living-Here/Resident-Information/Animal-Management/Dangerous-Menacing-Restricted-Dogs"
    },
    {
        icon: EyeOff,
        image: problem2,
        title: "Dangerous Misinformation",
        desc: "Many hide bite incidents due to fear or misunderstanding. A recent tragic case of a 13-year-old girl in Manila who hid her bite emphasizes the urgent need for health education.",
        href: "https://climatepromise.undp.org/news-and-stories/what-are-climate-misinformation-and-disinformation-and-how-can-we-tackle-them"
    },
    {
        icon: HeartCrack,
        image: problem3,
        title: "100% Fatal, Preventable",
        desc: "Once symptoms appear, the disease is virtually 100% fatal. However, immediate washing of bite wounds and prompt post-exposure prophylaxis are critical in preventing death.",
        href: "https://www.who.int/philippines/news/feature-stories/detail/world-rabies-day-rabies-prevention-in-typhoon-yolanda-affected-areas"
    },
];

const ProblemSection = () => {
    const { t } = useLanguage();
    return (
        <section 
            id="problem" 
            className="relative py-16 px-10 border-y border-[#8DA750]/30 overflow-hidden flex-1 flex flex-col justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${texture})` }}
        >
        {/* Gradient Overlay applied on top of the background image */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#142C148/85 via-[#142C14]/75 to-transparent pointer-events-none z-0"></div>
        
        {/* Secondary texture overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('/texture.jpg')] bg-repeat bg-[length:250px] mix-blend-overlay pointer-events-none z-0"></div>

        <div className="container max-w-7xl mx-auto px-4 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">

            {/* Section Header */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E4EB9C]/10 text-[#E4EB9C] text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-[#E4EB9C]/20">
                    {t("Current Crisis")}
                </div>
                <h2 className="font-heading text-3xl md:text-5xl font-black text-white flex items-center justify-center gap-3 tracking-tight">
                    {t("The Problem")}
                </h2>
                <p className="text-[#E4EB9C]/80 max-w-2xl mx-auto mt-6 text-lg leading-relaxed font-medium">
                    {t("Rabies remains one of the most neglected tropical diseases, disproportionately affecting vulnerable communities in the Philippines.")}
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8">
                {cards.map((c) => (
                    <a
                        key={c.title}
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-white rounded-[2.5rem] p-5 md:p-6 flex flex-col shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[#142C14]/50 cursor-pointer text-left"
                    >
                        {/* New: Hyperlink Icon in Top Right */}
                        <div className="absolute top-6 right-6 z-20 w-8 h-8 rounded-full bg-[#E4EB9C]/20 flex items-center justify-center text-[#2D5128] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-12">
                            <ArrowUpRight size={18} strokeWidth={3} />
                        </div>

                        {/* Image Container */}
                        <div className="relative w-full h-56 mb-12 rounded-[1.8rem] overflow-hidden bg-slate-900">
                            {/* Photo Overlay Background to increase visibility against the underlying image */}
                            <div className="absolute inset-0 bg-slate-900/10 pointer-events-none z-10"></div>
                            <img
                                src={c.image}
                                alt={c.title}
                                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                                    c.title === "A Persistent Local Threat" ? "object-top" : "object-center"
                                } grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100`}
                            />
                            
                            {/* The Overlapping Icon Badge */}
                            <div className="absolute bottom-2 left-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border-[6px] border-white z-10 group-hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-full h-full bg-[#E4EB9C]/30 rounded-xl flex items-center justify-center text-[#2D5128] transition-colors group-hover:bg-[#2D5128] group-hover:text-[#E4EB9C]">
                                    <c.icon size={20} strokeWidth={2.5} />
                                </div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="px-3 pb-2 flex-1 flex flex-col">
                            <h3 className="font-heading font-black text-[#142C14] text-xl md:text-2xl mb-4 leading-tight group-hover:text-[#2D5128] transition-colors">
                                {t(c.title)}
                            </h3>
                            <p className="text-sm text-[#142C14]/70 leading-relaxed font-medium flex-1">
                                {t(c.desc)}
                            </p>
                        </div>
                    </a>
                ))}
            </div>

            {/* Footer Note */}
            <div className="mt-20 pt-8 border-t border-[#8DA750]/20 text-center">
                <p className="text-[10px] font-black text-[#E4EB9C]/50 uppercase tracking-[0.3em]">
                    {t("Global Health Burden • Southeast Asia Region")}
                </p>
            </div>

        </div>
    </section>
    );
};

export default ProblemSection;