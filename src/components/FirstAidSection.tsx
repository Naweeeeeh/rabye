import { Droplets, ShieldPlus, Hospital, Syringe, ArrowRight, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../lib/LanguageContext";

import fa1 from "@/assets/wash-dog-bite-wound.png";
import fa2 from "@/assets/antiseptic-img.png";
import fa3 from "@/assets/medical-help.png";
import fa4 from "@/assets/get-vaccinated.png";
import texture from "@/assets/texture.png";

const steps = [
    {
        icon: Droplets,
        image: fa1,
        title: "Wash the Wound",
        desc: "Wash with soap and running water for at least 15 minutes. This is the single most effective way to flush the virus out.",
        num: "01"
    },
    {
        icon: ShieldPlus,
        image: fa2,
        title: "Apply Antiseptic",
        desc: "Use povidone-iodine (Betadine) or 70% alcohol. Do not cover the wound with a bandage or stitches.",
        num: "02"
    },
    {
        icon: Hospital,
        image: fa3,
        title: "Seek Medical Help",
        desc: "Go immediately to the nearest Animal Bite Treatment Center (ABTC) or hospital for a professional assessment.",
        num: "03"
    },
    {
        icon: Syringe,
        image: fa4,
        title: "Get Vaccinated",
        desc: "Follow the full PEP (Post-Exposure Prophylaxis) schedule. Missing a single shot can be fatal.",
        num: "04"
    },
];

const FirstAidSection = () => {
    const { t } = useLanguage();
    return (
    <section
        id="first-aid"
        className="relative py-20 px-10 border-y border-[#8DA750]/30 overflow-hidden flex-1 flex flex-col justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${texture})` }}
    >
        <div
            className="absolute inset-0 opacity-5 bg-repeat mix-blend-overlay pointer-events-none"
            style={{ backgroundImage: `url(${texture})`, backgroundSize: '250px' }}
        ></div>

        <div className="container max-w-7xl mx-auto px-4 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">

            <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-5xl font-black text-white flex items-center justify-center gap-3 tracking-tight">
                    {t("First Aid After a Bite")}
                </h2>
                <p className="text-[#E4EB9C]/80 max-w-xl mx-auto mt-6 text-lg leading-relaxed font-medium">
                    {t("The first 15 minutes decide the outcome. Follow these medical protocols")}
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                {steps.map((s) => (
                    <div
                        key={s.num}
                        className="group relative bg-white rounded-[2.5rem] p-5 md:p-6 flex flex-col shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[#142C14]/50 cursor-pointer"
                    >
                        <span className="absolute top-8 right-8 text-5xl font-black text-[#142C14]/5 group-hover:text-[#2D5128]/10 transition-colors z-20">
                            {s.num}
                        </span>

                        <div className="relative w-full h-48 mb-12 rounded-[1.8rem] overflow-hidden bg-slate-100">
                            <img
                                src={s.image}
                                alt={s.title}
                                className="w-full h-full object-cover object-center grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                            />

                            <div className="absolute bottom-2 left-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border-[6px] border-white z-10 group-hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-full h-full bg-[#E4EB9C]/30 rounded-xl flex items-center justify-center text-[#2D5128] transition-colors group-hover:bg-[#2D5128] group-hover:text-[#E4EB9C]">
                                    <s.icon size={22} strokeWidth={2.5} />
                                </div>
                            </div>
                        </div>

                        <div className="px-3 pb-2 flex-1 flex flex-col">
                            <h3 className="font-heading font-black text-[#142C14] text-xl mb-3 leading-tight group-hover:text-[#2D5128] transition-colors">
                                {t(s.title)}
                            </h3>
                            <p className="text-sm text-[#142C14]/70 leading-relaxed font-medium flex-1">
                                {t(s.desc)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center gap-6">
                <NavLink
                    to="/get-help"
                    className="group relative inline-flex items-center justify-center rounded-2xl bg-[#2D5128] text-[#E4EB9C] font-black px-10 py-5 text-sm uppercase tracking-widest hover:bg-[142C14] transition-all shadow-xl shadow-[537B2F]-900/40 active:scale-[0.98]"
                >
                    <MapPin className="mr-2 h-5 w-5" />
                    {t("Find Nearest Treatment Center")}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </NavLink>

            </div>
        </div>
    </section>
    );
};

export default FirstAidSection;