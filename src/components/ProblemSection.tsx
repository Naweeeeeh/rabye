import { AlertTriangle, EyeOff, HeartCrack } from "lucide-react";

const cards = [
  { icon: AlertTriangle, title: "Widespread Threat", desc: "Rabies is still a major public health issue in the Philippines and many parts of Asia and Africa." },
  { icon: EyeOff, title: "Lack of Awareness", desc: "Many people don't know the proper first aid steps after an animal bite, leading to preventable deaths." },
  { icon: HeartCrack, title: "Preventable Deaths", desc: "With proper wound care and timely vaccination, rabies is 100% preventable — yet thousands still die each year." },
];

const ProblemSection = () => (
  <section id="problem" className="bg-card py-20">
    <div className="container">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-4 flex items-center justify-center gap-3">
        <AlertTriangle className="text-primary" size={32} /> The Problem
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Rabies remains one of the most neglected tropical diseases, disproportionately affecting vulnerable communities.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div key={c.title} className="bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
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
