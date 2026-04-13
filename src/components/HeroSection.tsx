import heroImg from "@/assets/heroimg.png";
import { ShieldCheck, Users, Dog, AlertCircle, ArrowRight, ExternalLink } from "lucide-react";
import { NavLink } from "react-router-dom";

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

const   HeroSection = () => (
  <section className="bg-background pb-16 md:pb-24 pt-5">
    <div className="container grid md:grid-cols-2 gap-12 items-center">
      
      {/* Left Column: Text & CTAs */}
      <div className="space-y-6 animate-fade-in-up py-4">
        {/* Subtle Urgent Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider">
          <AlertCircle size={14} /> Immediate Action Required
        </div>
        
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
          Rabies is <span className="text-green-600">Fatal</span>. <br/>
          Your Action Now is the Only Cure.
        </h1>
        
        <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
          Symptoms don’t show up immediately, but by the time they do, it is <strong>100% too late</strong>. If you’ve been bitten or scratched, do not wait. Follow these emergency steps now.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          {/* Emergency Button - Grass Green with Pulse */}
          <NavLink
              to="/first-aid"
              className="relative group w-full sm:w-[280px] h-14 inline-flex items-center justify-center rounded-xl bg-green-600 text-white font-bold transition-all hover:bg-green-700 hover:shadow-xl hover:shadow-green-900/20 active:scale-[0.98]"
            >
              {/* Pulse Indicator: Refined with a white border for a cleaner "badge" look */}
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 border-2 border-white bg-red-500 shadow-sm"></span>
              </span>
              
              Emergency Bite First Aid
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </NavLink>

            {/* Secondary Outlined Button */}
            <NavLink
              to="/get-help"
              className="w-full sm:w-[280px] h-14 inline-flex items-center justify-center rounded-xl border-2 border-green-600 text-green-600 font-bold transition-all hover:bg-green-50 active:scale-[0.98]"
            >
              Find Vaccination Centers
            </NavLink>
        </div>
      </div>

      {/* Right Column: Image with Frame */}
      <div className="relative w-full h-[550px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl group border-1 border-white-400">
        <img 
          src={heroImg} 
          alt="Immediate medical care for animal bites" 
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 text-white text-sm font-medium bg-black/20 backdrop-blur-md px-4 py-2 rounded-lg">
          Local Health Unit Vaccination Drive
        </div>
      </div>

    </div>

    {/* Bottom Stats Section */}
        <div className="container mt-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((s) => (
            <a 
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-2xl p-6 md:p-8 flex items-center gap-5 shadow-sm border border-slate-100 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden active:scale-[0.98]"
            >
                {/* Neater Icon Box with Hover Color Flip */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center transition-colors group-hover:bg-green-600">
                <s.icon className="text-green-600 transition-colors group-hover:text-white" size={24} />
                </div>
                
                {/* Slate Typography for Authority */}
                <div className="flex flex-col">
                <p className="font-heading font-black text-2xl md:text-3xl text-slate-900 leading-none mb-1.5">
                    {s.value}
                </p>
                <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest pr-6 leading-snug">
                    {s.label}
                </p>
                </div>

                {/* Clean External Link Indicator */}
                <ExternalLink 
                size={18} 
                className="absolute top-5 right-5 text-slate-200 group-hover:text-green-600 transition-colors" 
                />
            </a>
            ))}
        </div>
        </div>
  </section>
);

export default HeroSection;