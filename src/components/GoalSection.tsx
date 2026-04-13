import { Megaphone, Zap, HeartHandshake, Target } from "lucide-react";

const goals = [
  { icon: Megaphone, title: "Raise Awareness", desc: "Educate communities about rabies prevention and first aid." },
  { icon: Zap, title: "Improve Response", desc: "Ensure bite victims act quickly and seek proper medical care." },
  { icon: HeartHandshake, title: "Encourage Treatment", desc: "Remove barriers to accessing free rabies vaccination programs." },
];

const GoalSection = () => (
  <section className="bg-background py-20">
    <div className="container max-w-4xl">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12 flex items-center justify-center gap-3">
        <Target className="text-primary" size={32} /> Our Goals
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {goals.map((g) => (
          <div key={g.title} className="text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <g.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-heading font-bold text-foreground">{g.title}</h3>
            <p className="text-sm text-muted-foreground">{g.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GoalSection;
