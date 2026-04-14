import { Droplets, ShieldPlus, Hospital, Syringe, ArrowRight, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";

// ⚠️ Images from /public or /assets
import fa1 from "@/assets/wash-dog-bite-wound.png";
import fa2 from "@/assets/antiseptic-img.png";
import fa3 from "@/assets/medical-help.png";
import fa4 from "@/assets/get-vaccinated.png";

const steps = [
    { 
        icon: Droplets, 
        image: fa1, 
        title: "Wash the Wound", 
        desc: "Wash with soap and running water for at least 15 minutes. This is the single most effective way to flush the virus out.", 
        num: "01" 
    },
    { 
        icon: ShieldPlus, 
        image: fa2, 
        title: "Apply Antiseptic", 
        desc: "Use povidone-iodine (Betadine) or 70% alcohol. Do not cover the wound with a bandage or stitches.", 
        num: "02" 
    },
    { 
        icon: Hospital, 
        image: fa3, 
        title: "Seek Medical Help", 
        desc: "Go immediately to the nearest Animal Bite Treatment Center (ABTC) or hospital for a professional assessment.", 
        num: "03" 
    },
    { 
        icon: Syringe, 
        image: fa4, 
        title: "Get Vaccinated", 
        desc: "Follow the full PEP (Post-Exposure Prophylaxis) schedule. Missing a single shot can be fatal.", 
        num: "04" 
    },
];

const FirstAidSection = () => (
    <section 
        id="first-aid" 
        className="bg-white py-20 px-10 border-y border-[#8DA750]/30 overflow-hidden"
    >
        <div className="container max-w-7xl mx-auto px-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
            
            {/* Header: High Contrast, High Alert */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 text-red-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-red-600/20">
                    Emergency Response
                </div>
                <h2 className="font-heading text-3xl md:text-5xl font-black text-[#142C14] tracking-tight">
                    First Aid After a Bite
                </h2>
                <p className="text-slate-500 max-w-xl mx-auto mt-6 text-lg leading-relaxed font-medium">
                    The first 15 minutes decide the outcome. Follow these medical protocols <span className="text-red-600 font-bold uppercase tracking-tighter">immediately</span>.
                </p>
            </div>

            {/* Steps Grid: Ultra-Clean Utility Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                {steps.map((s) => (
                    <div 
                        key={s.num} 
                        className="group relative bg-slate-50 rounded-[2.5rem] p-6 flex flex-col border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-[#142C14]/10 hover:border-[#8DA750]/50"
                    >
                        {/* Ghost Numbering */}
                        <span className="absolute top-6 right-8 text-5xl font-black text-[#142C14]/5 group-hover:text-[#142C14]/10 transition-colors">
                            {s.num}
                        </span>

                        {/* Image Container */}
                        <div className="relative w-full h-40 mb-10 rounded-[1.8rem] overflow-hidden bg-white shadow-inner p-4 flex items-center justify-center">
                            <img 
                                src={s.image} 
                                alt={s.title} 
                                className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110" 
                            />
                            
                            {/* Step Badge */}
                            <div className="absolute -bottom-2 -left-2 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg border-[6px] border-white z-10">
                                <div className="w-full h-full bg-[#E4EB9C] rounded-xl flex items-center justify-center text-[#2D5128]">
                                    <s.icon size={22} strokeWidth={3} />
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="px-2 flex-1">
                            <h3 className="font-heading font-black text-[#142C14] text-lg mb-2 leading-tight">
                                {s.title}
                            </h3>
                            <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                {s.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Critical Action Area */}
            <div className="flex flex-col items-center gap-6">
                <NavLink
                    to="/get-help"
                    className="group relative inline-flex items-center justify-center rounded-2xl bg-red-600 text-white font-black px-10 py-5 text-sm uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl shadow-red-200 active:scale-[0.98]"
                >
                    <MapPin className="mr-2 h-4 w-4" />
                    Find Nearest Treatment Center
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </NavLink>
                
                <div className="flex items-center gap-3 px-5 py-2 rounded-xl bg-slate-100 border border-slate-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                        Local ABTC Units • Open 24/7
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default FirstAidSection;