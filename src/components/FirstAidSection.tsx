import { Droplets, ShieldPlus, Hospital, Syringe, Info, ArrowRight, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";

// ⚠️ Add these images to your src/assets folder!
import fa1 from "@/assets/logo.png";
import fa2 from "@/assets/logo.png";
import fa3 from "@/assets/logo.png";
import fa4 from "@/assets/logo.png";

const steps = [
    { icon: Droplets, image: fa1, title: "Wash the Wound", desc: "Wash with soap and running water for at least 15 minutes.", num: "01" },
    { icon: ShieldPlus, image: fa2, title: "Apply Antiseptic", desc: "Apply povidone-iodine or alcohol-based antiseptic to the area.", num: "02" },
    { icon: Hospital, image: fa3, title: "Seek Medical Help", desc: "Go to the nearest Animal Bite Treatment Center (ABTC).", num: "03" },
    { icon: Syringe, image: fa4, title: "Get Vaccinated", desc: "Complete the full course of PEP vaccination shots.", num: "04" },
];

const FirstAidSection = () => (
    <section id="first-aid" className="bg-slate-50 py-16 overflow-hidden">
        <div className="container px-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="text-center mb-10">
                <h2 className="font-heading text-3xl md:text-4xl font-black text-slate-900 flex items-center justify-center gap-3">
                    <Hospital className="text-[#2D5128]" size={32} />
                    First Aid After a Bite
                </h2>
                <p className="text-slate-600 max-w-xl mx-auto mt-3 text-base md:text-lg">
                    The first 15 minutes are critical. Follow these steps immediately.
                </p>
            </div>

            <div className="max-w-xl mx-auto mb-10 bg-white border-l-4 border-[#2D5128] shadow-sm rounded-r-xl p-4 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#E4EB9C]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Info className="text-[#2D5128]" size={18} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-0.5">Medical Advisory</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Wound cleaning reduces viral load. Do not wait for symptoms before seeking care.
                    </p>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto mb-12">
                {steps.map((s) => (
                    <div key={s.num} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 relative group hover:border-[#8DA750]/50 transition-all flex flex-col">

            <span className="absolute top-4 right-6 text-4xl font-black text-slate-100 group-hover:text-[#E4EB9C]/70 transition-colors z-10">
              {s.num}
            </span>

                        {/* Image Banner */}
                        <div className="w-full h-32 bg-slate-200 rounded-2xl mb-6 overflow-hidden shadow-inner relative z-0">
                            <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>

                        <div className="w-12 h-12 rounded-xl bg-[#E4EB9C]/40 flex items-center justify-center mb-4">
                            <s.icon className="text-[#2D5128]" size={24} />
                        </div>
                        <h3 className="font-heading font-bold text-slate-900 mb-2 text-base">{s.title}</h3>
                        <p className="text-xs text-slate-500 leading-relaxed flex-1">{s.desc}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center gap-3">
                <NavLink
                    to="/get-help"
                    className="group w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-[#2D5128] text-white font-bold px-8 py-3.5 text-sm hover:bg-[#142C14] transition-all shadow-md active:scale-[0.98]"
                >
                    <MapPin className="mr-2 h-4 w-4" />
                    Find Treatment Center
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </NavLink>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                    Available 24/7 in most units
                </p>
            </div>
        </div>
    </section>
);

export default FirstAidSection;