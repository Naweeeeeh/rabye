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
    <section className="bg-card py-20 flex-1 flex flex-col justify-center">
        <div className="container animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-4 flex items-center justify-center gap-3">
                The Problem
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                Despite being highly preventable, thousands of deaths still occur due to limited awareness, delayed treatment, and insufficient access to accurate information.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
                {cards.map((c) => (
                    <div key={c.title} className="bg-background rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <c.icon className="text-primary" size={22} />
                        </div>
                        <h3 className="font-heading font-bold text-lg text-foreground mb-2">{c.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default ProblemSection;