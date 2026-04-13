import { Droplets, ShieldPlus, Hospital, Syringe, Info } from "lucide-react";

const steps = [
  { icon: Droplets, title: "Wash the Wound", desc: "Wash thoroughly with soap and running water for at least 15 minutes.", num: "01" },
  { icon: ShieldPlus, title: "Apply Antiseptic", desc: "Apply povidone-iodine or alcohol-based antiseptic to the wound.", num: "02" },
  { icon: Hospital, title: "Seek Medical Help", desc: "Go to the nearest Animal Bite Treatment Center immediately.", num: "03" },
  { icon: Syringe, title: "Get Vaccinated", desc: "Complete the full course of post-exposure prophylaxis (PEP) vaccination.", num: "04" },
];

const FirstAidSection = () => (
  <section id="first-aid" className="bg-card py-20">
    <div className="container">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-4 flex items-center justify-center gap-3">
        <Hospital className="text-primary" size={32} /> First Aid After a Bite
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-6">
        Knowing what to do in the first minutes after a bite can be the difference between life and death.
      </p>

      {/* Urgent banner */}
      <div className="max-w-xl mx-auto mb-12 bg-primary/5 border border-primary/15 rounded-xl p-4 flex items-start gap-3">
        <Info className="text-secondary flex-shrink-0 mt-0.5" size={20} />
        <p className="text-sm text-muted-foreground">
          Early action after a bite is important. Prompt care helps prevent complications and reduces risk of rabies.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {steps.map((s) => (
          <div key={s.num} className="bg-background rounded-xl p-6 shadow-sm relative">
            <span className="absolute top-4 right-4 text-3xl font-heading font-extrabold text-primary/10">{s.num}</span>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <s.icon className="text-primary" size={18} />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-2 text-sm">{s.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FirstAidSection;
