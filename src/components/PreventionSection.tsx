import { 
    ShieldCheck, 
    Syringe, 
    ShieldAlert, 
    HeartHandshake, 
    PhoneCall, 
    Eye, 
    Link 
} from "lucide-react";

import prev1 from "@/assets/pet-vaccine.png";
import prev2 from "@/assets/avoid-stray-animals.png";
import prev3 from "@/assets/child-with-dog.jpg";
import prev4 from "@/assets/stray-animal-sighting.png";
import prev5 from "@/assets/supervise-children.png";
import prev6 from "@/assets/pet-on-leash.png";

import texture from "../assets/texture2.png";

const items = [
    { 
        title: "Vaccinate your pets regularly", 
        desc: "Ensure your pets receive annual anti-rabies shots. It's the most effective defense for your furry friends and your home.",
        image: prev1,
        icon: Syringe
    },
    { 
        title: "Avoid approaching stray animals", 
        desc: "Keep a safe distance from unknown animals, as they may be unvaccinated or exhibiting unpredictable, defensive behavior.",
        image: prev2,
        icon: ShieldAlert
    },
    { 
        title: "Teach children respect for animals", 
        desc: "Educate kids to never disturb animals while they are eating, sleeping, or nursing to prevent accidental defensive bites.",
        image: prev3,
        icon: HeartHandshake
    },
    { 
        title: "Report stray animal sightings", 
        desc: "Help your community by reporting roaming strays to your local barangay or city veterinarian for proper management.",
        image: prev4,
        icon: PhoneCall
    },
    { 
        title: "Supervise children around pets", 
        desc: "Never leave young children unattended with animals, even familiar household pets, to ensure safety for both child and pet.",
        image: prev5,
        icon: Eye
    },
    { 
        title: "Keep your pets leashed in public", 
        desc: "Maintain control of your pet's movements in shared spaces to avoid unexpected and stressful encounters with strangers.",
        image: prev6,
        icon: Link
    },
];

const PreventionSection = () => (
    <section 
        id="prevention" 
        className="relative py-20 px-10 border-y border-[#8DA750]/30 overflow-hidden flex-1 flex flex-col justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage:`url(${texture})`}}
    >
        {/* Subtle texture overlay for visual depth */}
        <div className="absolute inset-0 opacity-5 bg-[url('/texture.jpg')] bg-repeat bg-[length:250px] mix-blend-overlay pointer-events-none"></div>

        <div className="container max-w-7xl mx-auto px-4 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">

            {/* Section Header */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E4EB9C]/10 text-[#E4EB9C] text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-[#E4EB9C]/20">
                    Safety Protocol
                </div>
                <h2 className="font-heading text-3xl md:text-5xl font-black text-white flex items-center justify-center gap-3 tracking-tight">
                    Prevention is Key
                </h2>
                <p className="text-[#E4EB9C]/80 max-w-2xl mx-auto mt-6 text-lg leading-relaxed font-medium">
                    Simple habits can protect you, your family, and your community from the threat of rabies.
                </p>
            </div>

            {/* Items Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item) => (
                    <div
                        key={item.title}
                        // Hover interactions restricted to lg (desktop) to prevent sticky mobile states
                        className="group relative bg-white rounded-[2.5rem] p-5 md:p-6 flex flex-col shadow-xl transition-all duration-300 lg:hover:-translate-y-2 lg:hover:shadow-2xl"
                    >
                        {/* Image Container */}
                        <div className="relative w-full h-44 mb-10">
                            <div className="w-full h-full rounded-[1.8rem] bg-slate-50 border border-slate-100 p-2">
                                <div className="w-full h-full rounded-[1.2rem] overflow-hidden">
                                    {/* Changed to w-full h-full object-cover object-center to stretch and fill */}
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover object-center transition-transform duration-700 lg:group-hover:scale-105" 
                                    />
                                </div>
                            </div>
                            
                            {/* Overlapping Badge - Positioned perfectly over the border */}
                            <div className="absolute -bottom-4 left-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl border-[6px] border-white z-10 transition-transform duration-300 lg:group-hover:-translate-y-1">
                                <div className="w-full h-full bg-[#E4EB9C]/40 rounded-xl flex items-center justify-center text-[#2D5128] transition-colors lg:group-hover:bg-[#2D5128] lg:group-hover:text-[#E4EB9C]">
                                    <item.icon size={22} strokeWidth={2.5} />
                                </div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="px-2 pb-2">
                            <h3 className="text-lg font-black text-[#142C14] leading-tight mb-3 transition-colors lg:group-hover:text-[#2D5128]">
                                {item.title}
                            </h3>
                            <p className="text-sm text-[#142C14]/70 leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mission Statement Footer */}
            <div className="mt-20 text-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#142C14]/40 backdrop-blur-md border border-[#8DA750]/30 shadow-xl">
                    <ShieldCheck className="text-[#E4EB9C]" size={20} />
                    <p className="text-xs font-black text-white uppercase tracking-[0.2em]">
                        Be a Responsible Pet Owner • Save Lives
                    </p>
                </div>
            </div>

        </div>
    </section>
);

export default PreventionSection;