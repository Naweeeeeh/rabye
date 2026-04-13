import { Bug, Dog, Brain, ChevronRight, PlayCircle } from "lucide-react";

const steps = [
  { icon: Dog, title: "Initial Bite", desc: "The virus enters the body through an animal bite or scratch." },
  { icon: Bug, title: "Viral Infection", desc: "The virus begins to multiply at the site of the wound." },
  { icon: Brain, title: "Nervous System", desc: "It travels along the nerves to the brain, causing fatal inflammation." },
];

const WhatIsRabiesSection = () => (
  <section id="what-is-rabies" className="bg-white py-16 border-t border-slate-100">
    <div className="container max-w-6xl px-4">
      
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
          Viral Transmission
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-black text-slate-900 flex items-center justify-center gap-3">
          <Bug className="text-green-600" size={32} /> What is Rabies?
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto mt-4 text-base md:text-lg leading-relaxed">
          Rabies is a preventable yet deadly viral disease. Once it enters the nervous system, it becomes 100% fatal.
        </p>
      </div>

      {/* Video Playback Section - Framed & Centered */}
      {/* Video Playback Section - Reduced from max-w-4xl to max-w-3xl */}


      {/* Path of Infection Diagram */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <div key={s.title} className="flex flex-col lg:flex-row items-center w-full">
            <div className="group bg-slate-50 rounded-2xl p-6 text-center w-full lg:w-72 border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-green-900/5 hover:border-green-200">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                <s.icon className="text-green-600 group-hover:text-white transition-colors" size={24} />
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-base mb-2">{s.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed px-1">{s.desc}</p>
            </div>
            
            {i < steps.length - 1 && (
              <div className="hidden lg:flex flex-1 justify-center">
                <ChevronRight className="text-slate-300" size={24} strokeWidth={1} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Tighter Safety Note */}
      <div className="mt-16 flex justify-center">
        <div className="max-w-xl bg-slate-900 rounded-xl p-5 mb-10 text-center shadow-lg">
          <p className="text-white text-xs md:text-sm font-medium">
            <span className="text-green-400 font-bold mr-2">Critical:</span> 
            Treatment must begin immediately after a bite. Once symptoms appear, it is 100% too late.
          </p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mb-16">
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-slate-100 group">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/_hchkrLTr98?rel=0&showinfo=0"
            title="Rabies - our time to act is now"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 text-slate-400">
          <PlayCircle size={14} />
          <p className="text-[10px] font-bold uppercase tracking-widest">Official WHO Health Briefing</p>
        </div>
      </div>

    </div>
  </section>
);

export default WhatIsRabiesSection;