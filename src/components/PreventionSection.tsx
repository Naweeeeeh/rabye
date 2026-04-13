import { Check, ShieldCheck, Dog, Syringe, Users } from "lucide-react";

const pillars = [
    { icon: Syringe, title: "Mass Dog Vaccination", desc: "Routine vaccination of dogs, as a primary strategy in preventing transmission at its source." },
    { icon: Users, title: "Public Education", desc: "Strengthening community-based education and improving access to accurate and reliable health information." },
    { icon: Dog, title: "Responsible Pet Ownership", desc: "A substantial proportion of cases were associated with unvaccinated animals or those with uncertain vaccination status, emphasizing gaps in responsible pet ownership." },
];

const items = [
    "Vaccinate your pets against rabies every year.",
    "Avoid approaching stray or unfamiliar animals.",
    "Teach children not to tease or provoke dogs while they are eating or sleeping.",
    "Report stray animal sightings to local barangay health authorities.",
    "Supervise children around animals at all times.",
    "Keep your pets leashed in public spaces to prevent unwanted contact.",
];

const PreventionSection = () => (
    <section className="bg-white py-20 flex-1 flex flex-col justify-center">
        <div className="container max-w-5xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#2D5128] text-center mb-4 flex items-center justify-center gap-3">
                <ShieldCheck className="text-[#2D5128]" size={32} /> Prevention & Control
            </h2>
            <p className="text-center text-[#142C14]/75 mb-12 max-w-2xl mx-auto">
                Effective rabies prevention requires a coordinated, multi-sectoral strategy involving mass dog vaccination, improved access to PEP, and strengthened public health education.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
                {pillars.map((p) => (
                    <div key={p.title} className="bg-[#2D5128]/5 rounded-xl p-6 border border-[#2D5128]/20 text-center">
                        <div className="w-12 h-12 rounded-full bg-[#2D5128]/10 flex items-center justify-center mx-auto mb-4">
                            <p.icon className="text-[#2D5128]" size={24} />
                        </div>
                        <h3 className="font-heading font-bold text-[#142C14] mb-2">{p.title}</h3>
                        <p className="text-xs text-[#142C14]/75">{p.desc}</p>
                    </div>
                ))}
            </div>

            <div className="bg-[#E4EB9C]/30 border border-[#8DA750]/40 rounded-xl p-8 shadow-sm max-w-3xl mx-auto">
                <h3 className="font-heading font-bold text-xl mb-6 text-center text-[#142C14]">What You Can Do Today</h3>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                    {items.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#537B2F] flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="text-white" size={14} />
                            </div>
                            <p className="text-sm text-[#142C14]">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default PreventionSection;