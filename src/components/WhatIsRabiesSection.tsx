import { Bug, Dog, Brain, ArrowUpRight, PlayCircle, XCircle, CheckCircle2, ExternalLink, ArrowRight } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";

import step1 from "@/assets/dog.jpg";
import step2 from "@/assets/virus.png";
import step3 from "@/assets/nervousSystem.jpg";
import texture from "../assets/texture1.png";

const steps = [
    { 
        icon: Dog, 
        image: step1, 
        title: "Initial Bite", 
        desc: "The virus enters the body through an animal bite or scratch.",
    },
    { 
        icon: Bug, 
        image: step2, 
        title: "Viral Infection", 
        desc: "The virus begins to multiply at the site of the wound.",
    },
    { 
        icon: Brain, 
        image: step3, 
        title: "Nervous System", 
        desc: "It travels along the nerves to the brain, causing fatal inflammation.",
    },
];

const mythsData = [
    {
        myth: "Rabies cannot be prevented.",
        fact: "Rabies can be prevented by vaccinating dogs and cats. Keeping pets vaccinated helps protect your whole family.",
        source: "WHO",
        url: "https://www.who.int/news-room/fact-sheets/detail/rabies"
    },
    {
        myth: "Rabies is no longer a problem.",
        fact: "Rabies is still present in the Philippines and continues to cause deaths every year. It is more common in areas where pets are not vaccinated.",
        source: "RITM",
        url: "https://ritm.gov.ph/fact-sheet-rabies/"
    },
    {
        myth: "Rabies can be cured once symptoms appear.",
        fact: "Rabies is almost always deadly once signs of illness start. Getting treatment right away after a bite or scratch can stop the disease.",
        source: "WHO",
        url: "https://www.who.int/news-room/fact-sheets/detail/rabies"
    },
    {
        myth: "Rabies is only spread through animal bites.",
        fact: "Rabies can also spread through scratches or when animal saliva gets into an open wound. Even small injuries should be taken seriously.",
        source: "CDC",
        url: "https://www.cdc.gov/rabies/index.html"
    },
    {
        myth: "Washing a bite wound is not helpful.",
        fact: "Washing the wound with soap and water right away helps remove the virus. You still need to go to a health center for proper treatment.",
        source: "WHO",
        url: "https://www.who.int/news-room/fact-sheets/detail/rabies"
    },
    {
        myth: "Rabies vaccines do not last long.",
        fact: "Rabies vaccines work well but need to be given regularly to pets. Keeping up with vaccination schedules keeps protection strong.",
        source: "WHO",
        url: "https://www.who.int/news-room/fact-sheets/detail/rabies"
    },
    {
        myth: "Indoor pets do not need rabies vaccination.",
        fact: "Indoor pets can still get exposed if they escape or meet infected animals. Vaccination adds protection even for pets that stay at home.",
        source: "WHO",
        url: "https://www.who.int/news-room/fact-sheets/detail/rabies"
    },
    {
        myth: "Rabies vaccination is too expensive.",
        fact: "Rabies vaccines are affordable and sometimes free in government programs. Preventing rabies costs much less than treating it.",
        source: "PCO",
        url: "https://pco.gov.ph/news_releases/public-hospitals-give-free-anti-rabies-vaccines-palace/"
    }
];

const WhatIsRabiesSection = () => {
    const { t } = useLanguage();
    return (
    <section 
        id="what-is-rabies" 
        className="relative py-20 px-10 border-y border-[#8DA750]/30 overflow-hidden flex-1 flex flex-col justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${texture})` }}
    >
        {/* Subtle texture overlay for depth */}
        <div className="absolute inset-0 opacity-5 bg-[url('/texture.jpg')] bg-repeat bg-[length:250px] mix-blend-overlay pointer-events-none"></div>

        <div className="container max-w-7xl mx-auto px-4 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">

            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E4EB9C]/10 text-[#E4EB9C] text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-[#E4EB9C]/20">
                    {t("Viral Transmission")}
                </div>
                <h2 className="font-heading text-3xl md:text-5xl font-black text-white flex items-center justify-center gap-3 tracking-tight">
                    {t("What is Rabies?")}
                </h2>
                <p className="text-[#E4EB9C]/80 max-w-2xl mx-auto mt-6 text-lg leading-relaxed font-medium">
                    {t("Rabies is a preventable yet deadly viral disease. Once it enters the nervous system, it becomes 100% fatal.")}
                </p>
            </div>

            {/* Steps Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
                {steps.map((s) => (
                    <div
                        key={s.title}
                        className="group relative bg-white rounded-[2.5rem] p-5 md:p-6 flex flex-col shadow-2xl transition-all duration-300 lg:hover:-translate-y-2 lg:hover:shadow-[#142C14]/50"
                    >
                        {/* Image Container */}
                        <div className="relative w-full h-48 mb-12 rounded-[1.8rem] overflow-hidden bg-slate-100">
                            <img
                                src={s.image}
                                alt={t(s.title)}
                                className="w-full h-full object-cover object-center grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 lg:group-hover:scale-105"
                            />
                            
                            {/* Overlapping Icon Badge */}
                            <div className="absolute bottom-2 left-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border-[6px] border-white z-10 transition-transform duration-300 lg:group-hover:-translate-y-1">
                                <div className="w-full h-full bg-[#E4EB9C]/30 rounded-xl flex items-center justify-center text-[#2D5128] transition-colors lg:group-hover:bg-[#2D5128] lg:group-hover:text-[#E4EB9C]">
                                    <s.icon size={22} strokeWidth={2.5} />
                                </div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="px-3 pb-2 flex-1 flex flex-col">
                            <h3 className="font-heading font-black text-[#142C14] text-xl mb-3 leading-tight transition-colors lg:group-hover:text-[#2D5128]">
                                {t(s.title)}
                            </h3>
                            <p className="text-sm text-[#142C14]/70 leading-relaxed font-medium">
                                {t(s.desc)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Video & Critical Alert Section */}
            <div className="max-w-4xl mx-auto mb-32">
                <div className="bg-[#142C14]/40 backdrop-blur-md border border-[#8DA750]/20 rounded-[3rem] p-8 md:p-12 shadow-2xl">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        
                        {/* Video Frame */}
                        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-black/20 group">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/_hchkrLTr98?rel=0&showinfo=0"
                                title="Rabies - our time to act is now"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* Text Side */}
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-3 text-[#E4EB9C]">
                                <PlayCircle size={20} className="animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{t("Official WHO Briefing")}</span>
                            </div>
                            
                            <h4 className="text-white font-heading font-black text-2xl leading-tight">
                                {t("Understanding the Viral Clock")}
                            </h4>
                            
                            <div className="bg-[#142C14] backdrop-blur-md border border-[#8DA750]/30 shadow-xl rounded-2xl p-5">
                                <p className="text-white text-sm leading-relaxed">
                                    <span className="text-[#E4EB9C] font-black mr-2 uppercase tracking-tighter">{t("Critical Alert:")}</span>
                                    {t("Treatment must begin immediately after a bite. Once physical symptoms appear, it is 100% too late for medical intervention.")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- REVAMPED: Split-Card Myth vs Fact Section --- */}
            <div className="border-t border-white/10 pt-24">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E4EB9C]/10 text-[#E4EB9C] text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-[#E4EB9C]/20">
                        {t("Debunking Misinformation")}
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl font-black text-white flex items-center justify-center gap-3 tracking-tight">
                        {t("Myths vs. Facts")}
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {mythsData.map((m, i) => (
                        <div 
                            key={i} 
                            className="group relative flex flex-col sm:flex-row bg-white rounded-[2rem] overflow-hidden shadow-xl transition-all duration-300 lg:hover:-translate-y-2 lg:hover:shadow-2xl lg:hover:shadow-[#142C14]/50 border border-slate-100"
                        >
                            
                            {/* Visual Bridge Arrow (Desktop only) */}
                            <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full items-center justify-center shadow-lg border border-slate-100 z-20 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-[#2D5128]">
                                <ArrowRight size={16} strokeWidth={3} />
                            </div>

                            {/* Myth Side (Left) */}
                            <div className="bg-red-50/80 p-6 md:p-8 sm:w-1/2 flex flex-col border-b sm:border-b-0 sm:border-r border-red-100/50">
                                <div className="flex items-center gap-2 mb-4">
                                    <XCircle size={20} className="text-red-500" strokeWidth={2.5} />
                                    <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">{t("Myth")}</span>
                                </div>
                                <p className="text-base font-bold text-red-950 leading-snug">
                                    {t(m.myth)}
                                </p>
                            </div>

                            {/* Fact Side (Right) */}
                            <div className="bg-[#f4f7e6] p-6 md:p-8 sm:w-1/2 flex flex-col">
                                <div className="flex items-center gap-2 mb-4">
                                    <CheckCircle2 size={20} className="text-[#2D5128]" strokeWidth={2.5} />
                                    <span className="text-[10px] font-black text-[#2D5128] uppercase tracking-widest">{t("Fact")}</span>
                                </div>
                                <p className="text-sm font-medium text-[#142C14] leading-relaxed flex-1">
                                    {t(m.fact)}
                                </p>
                                
                                {/* Source Link */}
                                <div className="mt-6 pt-4 border-t border-[#8DA750]/20 flex justify-start">
                                    <a 
                                        href={m.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-[#2D5128]/60 hover:text-[#2D5128] transition-colors"
                                    >
                                        {t("Source")}: {t(m.source)} <ExternalLink size={12} strokeWidth={2.5} />
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {/* Section Footer */}
            <div className="mt-20 pt-8 border-t border-[#8DA750]/20 text-center">
                <p className="text-[10px] font-black text-[#E4EB9C]/50 uppercase tracking-[0.3em]">
                    {t("Pathology Data & Guidelines • Official Health Sources")}
                </p>
            </div>

        </div>
    </section>
    );
};

export default WhatIsRabiesSection;