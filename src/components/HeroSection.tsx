import heroImg from "@/assets/hero-illustration.png";
import { ShieldCheck, Users, Dog, ExternalLink } from "lucide-react";
import { NavLink } from "react-router-dom";

// Added the exact text-highlight URLs provided to the stats array
const stats = [
    {
        icon: ShieldCheck,
        value: "59,000",
        label: "Deaths annually worldwide",
        href: "https://rabiesalliance.org/about/our-story/rabies#:~:text=An%20estimated%2059%2C000%20people%20die,from%20medical%20and%20veterinary%20services."
    },
    {
        icon: Users,
        value: "40%",
        label: "Of victims are children under 15",
        href: "https://www.who.int/news-room/fact-sheets/detail/rabies#:~:text=Key%20facts,fatal%20in%20100%25%20of%20cases."
    },
    {
        icon: Dog,
        value: "99%",
        label: "Caused by dog bites",
        href: "https://www.woah.org/en/disease/rabies/#:~:text=With%20a%20fatality%20rate%20of,towards%20a%20rabies%2Dfree%20future."
    },
];

const HeroSection = () => (
    <section className="bg-background py-16 md:py-24 flex-1 flex flex-col justify-center">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight">
                    Protect Yourself from Rabies — Act Fast, Stay Safe
                </h1>
                <p className="text-muted-foreground text-lg max-w-lg">
                    Rabies is a vaccine-preventable but nearly always fatal viral disease once clinical signs appear. Learn what to do immediately after a dog bite to save a life.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                    <NavLink to="/first-aid" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground font-semibold px-6 py-3 text-sm hover:opacity-90 transition-opacity">
                        What To Do After a Bite
                    </NavLink>
                    <NavLink to="/get-help" className="inline-flex items-center justify-center rounded-lg border-2 border-primary text-primary font-semibold px-6 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                        Find Treatment Centers
                    </NavLink>
                </div>
            </div>
            <div className="flex justify-center animate-in fade-in zoom-in-95 duration-700 delay-150">
                <img src={heroImg} alt="Person caring for a vaccinated dog with medical symbol" width={1024} height={768} className="w-full max-w-md" />
            </div>
        </div>

        <div className="container mt-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((s) => (
                    <a key={s.label}
                 href={s.href}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="group relative bg-card rounded-xl p-6 flex items-center gap-4 shadow-sm border border-border hover:border-primary/40 hover:shadow-md transition-all cursor-pointer overflow-hidden"
            >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <s.icon className="text-primary" size={22} />
                </div>
                <div>
                    <p className="font-heading font-bold text-2xl text-primary">{s.value}</p>
                    <p className="text-sm text-muted-foreground pr-4">{s.label}</p>
                </div>
                <ExternalLink size={16} className="absolute top-4 right-4 text-muted-foreground/30 group-hover:text-primary/60 transition-colors" />
            </a>
            ))}
        </div>
    </div>
</section>
);

export default HeroSection;