import { ArrowRight, Bug, Dog, Brain } from "lucide-react";

const steps = [
  { icon: Dog, title: "Bite", desc: "Animal bite or scratch breaks the skin" },
  { icon: Bug, title: "Infection", desc: "Rabies virus enters through the wound" },
  { icon: Brain, title: "Brain", desc: "Virus travels to the brain via nerves" },
];

const WhatIsRabiesSection = () => (
  <section id="what-is-rabies" className="bg-background py-20">
    <div className="container">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-4 flex items-center justify-center gap-3">
        <Bug className="text-primary" size={32} /> What is Rabies?
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Rabies is a deadly viral disease that attacks the central nervous system. It is spread through the saliva of infected animals, most commonly through bites.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
        {steps.map((s, i) => (
          <div key={s.title} className="flex items-center gap-4">
            <div className="bg-card rounded-xl p-8 text-center w-48 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <s.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-1">{s.title}</h3>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <ArrowRight className="text-secondary hidden md:block flex-shrink-0" size={28} />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatIsRabiesSection;
