import { AlertTriangle, EyeOff, HeartCrack } from "lucide-react";

import problem1 from "/public/problem1.jpg";
import problem2 from "/public/problem2.jpg";
import problem3 from "/public/problem3.jpg";

const cards = [
    {
        icon: AlertTriangle,
        image: problem1,
        title: "A Persistent Local Threat",
        desc: "Rabies remains an active national health problem. The Department of Health reported 426 rabies cases in 2024, and a total of 1,750 deaths from 2020 to 2024."
    },
    {
        icon: EyeOff,
        image: problem2,
        title: "Dangerous Misinformation",
        desc: "Many hide bite incidents due to fear or misunderstanding. A recent tragic case of a 13-year-old girl in Manila who hid her bite emphasizes the urgent need for health education."
    },
    {
        icon: HeartCrack,
        image: problem3,
        title: "100% Fatal, 100% Preventable",
        desc: "Once symptoms appear, the disease is virtually 100% fatal. However, immediate washing of bite wounds and prompt post-exposure prophylaxis are critical in preventing death."
    },
];

const ProblemSection = () => (
    <section id="problem" className="bg-slate-50 py-24 border-t border-slate-100 overflow-hidden">
        <div className="container max-w-6xl px-4 animate-in fade-in slide-in-from-bottom-8 duration-700">

            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4EB9C]/50 text-[#2D5128] text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                    Current Crisis
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-black text-slate-900 flex items-center justify-center gap-3">
                    The Problem
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
                    Rabies remains one of the most neglected tropical diseases, disproportionately affecting vulnerable communities in the Philippines.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {cards.map((c) => (
                    <div
                        key={c.title}
                        className="group bg-white rounded-3xl p-8 flex flex-col shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:shadow-[#142C14]/5 hover:-translate-y-1 hover:border-[#8DA750]/50"
                    >
                        <div className="w-full h-48 bg-slate-100 rounded-2xl mb-8 overflow-hidden">
                            <img
                                src={c.image}
                                alt={c.title}
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        <h3 className="font-heading font-black text-slate-900 text-xl mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#E4EB9C]/40 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-[#2D5128] text-[#2D5128] group-hover:text-[#E4EB9C]">
                    <c.icon size={20} />
                </span>
                            {c.title}
                        </h3>

                        <p className="text-sm text-slate-500 leading-relaxed flex-1">
                            {c.desc}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-16 pt-8 border-t border-slate-200/60 text-center">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                    Global Health Burden • Southeast Asia Region
                </p>
            </div>

        </div>
    </section>
);

export default ProblemSection;