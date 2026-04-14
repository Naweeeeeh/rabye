import { Bug, Dog, Brain, ArrowUpRight, PlayCircle } from "lucide-react";

// ⚠️ Ensure these paths match your folder structure
import step1 from "@/assets/dog.jpg";
import step2 from "@/assets/virus.png";
import step3 from "@/assets/nervousSystem.jpg";

const steps = [
    { 
        icon: Dog, 
        image: step1, 
        title: "Initial Bite", 
        desc: "The virus enters the body through an animal bite or scratch.",
        href: "/what-is-rabies#transmission"
    },
    { 
        icon: Bug, 
        image: step2, 
        title: "Viral Infection", 
        desc: "The virus begins to multiply at the site of the wound.",
        href: "/what-is-rabies#multiplication"
    },
    { 
        icon: Brain, 
        image: step3, 
        title: "Nervous System", 
        desc: "It travels along the nerves to the brain, causing fatal inflammation.",
        href: "/what-is-rabies#nervous-system"
    },
];

const WhatIsRabiesSection = () => (
    <section 
        id="what-is-rabies" 
        className="relative py-20 px-10 border-y border-[#8DA750]/30 overflow-hidden flex-1 flex flex-col justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/public/texture1.png')" }}
    >
        {/* Subtle texture overlay for depth */}
        <div className="absolute inset-0 opacity-5 bg-[url('/texture.jpg')] bg-repeat bg-[length:250px] mix-blend-overlay pointer-events-none"></div>

        <div className="container max-w-7xl mx-auto px-4 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">

            {/* Section Header */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E4EB9C]/10 text-[#E4EB9C] text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-[#E4EB9C]/20">
                    Viral Transmission
                </div>
                <h2 className="font-heading text-3xl md:text-5xl font-black text-white flex items-center justify-center gap-3 tracking-tight">
                    What is Rabies?
                </h2>
                <p className="text-[#E4EB9C]/80 max-w-2xl mx-auto mt-6 text-lg leading-relaxed font-medium">
                    Rabies is a preventable yet deadly viral disease. Once it enters the nervous system, it becomes 100% fatal.
                </p>
            </div>

            {/* Steps Grid - Matching Problem Section Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
                {steps.map((s) => (
                    <a
                        key={s.title}
                        href={s.href}
                        className="group relative bg-white rounded-[2.5rem] p-5 md:p-6 flex flex-col shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[#142C14]/50 cursor-pointer"
                    >
                        {/* Link Icon in Top Right */}
                        <div className="absolute top-6 right-6 z-20 w-8 h-8 rounded-full bg-[#E4EB9C]/20 flex items-center justify-center text-[#2D5128] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-12">
                            <ArrowUpRight size={18} strokeWidth={3} />
                        </div>

                        {/* Image Container */}
                        <div className="relative w-full h-48 mb-12 rounded-[1.8rem] overflow-hidden bg-slate-100">
                            <img
                                src={s.image}
                                alt={s.title}
                                className="w-full h-full object-cover object-center grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                            />
                            
                            {/* Overlapping Icon Badge */}
                            <div className="absolute bottom-2 left-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border-[6px] border-white z-10 group-hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-full h-full bg-[#E4EB9C]/30 rounded-xl flex items-center justify-center text-[#2D5128] transition-colors group-hover:bg-[#2D5128] group-hover:text-[#E4EB9C]">
                                    <s.icon size={22} strokeWidth={2.5} />
                                </div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="px-3 pb-2 flex-1 flex flex-col">
                            <h3 className="font-heading font-black text-[#142C14] text-xl mb-3 leading-tight group-hover:text-[#2D5128] transition-colors">
                                {s.title}
                            </h3>
                            <p className="text-sm text-[#142C14]/70 leading-relaxed font-medium">
                                {s.desc}
                            </p>
                        </div>
                    </a>
                ))}
            </div>

            {/* Video & Critical Alert Section */}
            <div className="max-w-4xl mx-auto">
                <div className="bg-[#142C14]/40 backdrop-blur-md border border-[#8DA750]/20 rounded-[3rem] p-8 md:p-12 shadow-2xl">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        
                        {/* Video Frame */}
                        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-black/20 group">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/_hchkrLTr98?rel=0&showinfo=0"
                                title="Rabies - our time to act is now"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* Text Side */}
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-3 text-[#E4EB9C]">
                                <PlayCircle size={20} className="animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Official WHO Briefing</span>
                            </div>
                            
                            <h4 className="text-white font-heading font-black text-2xl leading-tight">
                                Understanding the Viral Clock
                            </h4>
                            
                            <div className="bg-red-600/10 border border-red-500/20 rounded-2xl p-5">
                                <p className="text-white text-sm leading-relaxed">
                                    <span className="text-red-500 font-black mr-2 uppercase tracking-tighter">Critical Alert:</span>
                                    Treatment must begin immediately after a bite. Once physical symptoms appear, it is 100% too late for medical intervention.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section Footer */}
            <div className="mt-20 pt-8 border-t border-[#8DA750]/20 text-center">
                <p className="text-[10px] font-black text-[#E4EB9C]/50 uppercase tracking-[0.3em]">
                    Pathology Data • World Health Organization (WHO)
                </p>
            </div>

        </div>
    </section>
);

export default WhatIsRabiesSection;