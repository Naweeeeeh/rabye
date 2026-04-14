import { Check, ShieldCheck } from "lucide-react";

import prev1 from "@/assets/pet-vaccine.png";
import prev2 from "@/assets/avoid-stray-animals.png";
import prev3 from "@/assets/child-with-dog.jpg";
import prev4 from "@/assets/stray-animal-sighting.png";
import prev5 from "@/assets/supervise-children.png";
import prev6 from "@/assets/pet-on-leash.png";

const items = [
    { title: "Vaccinate your pets regularly", image: prev1 },
    { title: "Avoid approaching stray animals", image: prev2 },
    { title: "Teach children not to tease dogs", image: prev3 },
    { title: "Report stray animal sightings", image: prev4 },
    { title: "Supervise children around animals", image: prev5 },
    { title: "Keep your pets leashed in public", image: prev6 },
];

const PreventionSection = () => (
    <section id="prevention" className="bg-white py-20 border-t border-slate-100 overflow-hidden">
        <div className="container max-w-5xl px-4 animate-in fade-in slide-in-from-bottom-8 duration-700">

            <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-4xl font-black text-slate-900 flex items-center justify-center gap-3">
                    Prevention is Key
                </h2>
                <p className="text-slate-600 max-w-xl mx-auto mt-4 text-lg">
                    Simple habits can protect you, your family, and your community from the threat of rabies.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                    <div
                        key={item.title}
                        className="group bg-slate-50 border border-slate-100 rounded-3xl p-5 transition-all hover:bg-white hover:shadow-xl hover:shadow-[#142C14]/5 hover:border-[#8DA750]/50 flex flex-col"
                    >
                        {/* Image Banner */}
                        <div className="w-full h-40 bg-white rounded-2xl mb-5 overflow-hidden shadow-inner p-4 flex items-center justify-center">
                            <img src={item.image} alt={item.title} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700" />
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E4EB9C]/50 flex items-center justify-center transition-colors group-hover:bg-[#2D5128]">
                                <Check className="text-[#2D5128] transition-colors group-hover:text-[#E4EB9C]" size={18} strokeWidth={3} />
                            </div>
                            <p className="text-sm font-bold text-slate-700 leading-snug pt-1.5">
                                {item.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#E4EB9C]/30 border border-[#8DA750]/30">
                    <span className="w-2 h-2 rounded-full bg-[#2D5128] animate-pulse" />
                    <p className="text-xs font-black text-[#142C14] uppercase tracking-widest">
                        Be a Responsible Pet Owner
                    </p>
                </div>
            </div>

        </div>
    </section>
);

export default PreventionSection;