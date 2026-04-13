import { AlertTriangle, EyeOff, HeartCrack } from "lucide-react";

const cards = [
    {
        icon: AlertTriangle,
        title: "A Persistent Local Threat",
        desc: "Rabies remains an active national health problem. The Department of Health reported 426 rabies cases in 2024, and a total of 1,750 deaths from 2020 to 2024."
    },
    {
        icon: EyeOff,
        title: "Dangerous Misinformation",
        desc: "Many hide bite incidents due to fear or misunderstanding. A recent tragic case of a 13-year-old girl in Manila who hid her bite emphasizes the urgent need for health education."
    },
    {
        icon: HeartCrack,
        title: "100% Fatal, 100% Preventable",
        desc: "Once symptoms appear, the disease is virtually 100% fatal. However, immediate washing of bite wounds and prompt post-exposure prophylaxis are critical in preventing death."
    },
];


const ProblemSection = () => (
  // Anchor ID kept as "problem" for programmatic navigation
  <section id="problem" className="bg-slate-50 py-24 border-t border-slate-100">
    <div className="container max-w-6xl px-4">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
          Current Crisis
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-black text-slate-900 flex items-center justify-center gap-3">
          <AlertTriangle className="text-green-600" size={32} /> The Problem
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
          Rabies remains one of the most neglected tropical diseases, disproportionately affecting vulnerable communities in the Philippines.
        </p>
      </div>

      {/* Problem Cards Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((c) => (
          <div 
            key={c.title} 
            className="group bg-white rounded-3xl p-10 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:shadow-green-900/5 hover:-translate-y-1 hover:border-green-200"
          >
            {/* Neat Icon Container */}
            <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-8 transition-colors group-hover:bg-green-600">
              <c.icon className="text-green-600 transition-colors group-hover:text-white" size={24} />
            </div>

            <h3 className="font-heading font-bold text-slate-900 text-xl mb-4">
              {c.title}
            </h3>
            
            <p className="text-sm text-slate-500 leading-relaxed">
              {c.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Section Footnote */}
      <div className="mt-16 pt-8 border-t border-slate-200/60 text-center">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
          Global Health Burden • Southeast Asia Region
        </p>
      </div>

    </div>
  </section>
);

export default ProblemSection;