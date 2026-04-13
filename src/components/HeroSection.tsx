import heroImg from "@/assets/hero-illustration.png";
import { ShieldCheck, Users, Dog } from "lucide-react";

const stats = [
  { icon: ShieldCheck, value: "59,000", label: "Deaths annually worldwide" },
  { icon: Users, value: "40%", label: "Of victims are children" },
  { icon: Dog, value: "99%", label: "Caused by dog bites" },
];

const HeroSection = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="container grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 animate-fade-in-up">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight">
          Protect Yourself from Rabies — Act Fast, Stay Safe
        </h1>
        <p className="text-muted-foreground text-lg max-w-lg">
          Rabies is preventable but almost always fatal once symptoms appear. Learn what to do immediately after a dog bite.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <a href="#first-aid" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground font-semibold px-6 py-3 text-sm hover:opacity-90 transition-opacity">
            What To Do After a Bite
          </a>
          <a href="#get-help" className="inline-flex items-center justify-center rounded-lg border-2 border-primary text-primary font-semibold px-6 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
            Find Treatment Centers
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={heroImg} alt="Person caring for a vaccinated dog with medical symbol" width={1024} height={768} className="w-full max-w-md" />
      </div>
    </div>
    <div className="container mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-card rounded-xl p-6 flex items-center gap-4 shadow-sm">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <s.icon className="text-primary" size={22} />
            </div>
            <div>
              <p className="font-heading font-bold text-2xl text-primary">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
