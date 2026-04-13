import { Droplets, Hospital, Activity, Check } from "lucide-react";

const steps = [
    {
        icon: Droplets,
        title: "Immediate Washing",
        desc: "Thorough washing of wounds with soap and running water can significantly reduce the likelihood of rabies transmission. Wash for at least 15 minutes.",
        num: "01"
    },
    {
        icon: Check,
        title: "Apply Antiseptic",
        desc: "After washing, immediately apply povidone-iodine or an alcohol-based antiseptic to kill remaining viral particles in the wound.",
        num: "02"
    },
    {
        icon: Hospital,
        title: "Seek Medical Help",
        desc: "Go to the nearest Animal Bite Treatment Center. Treatment must begin within 24 hours to be most effective.",
        num: "03"
    },
    {
        icon: Activity,
        title: "Get Vaccinated",
        desc: "Completing the full vaccination series is essential for survival. Do not skip any scheduled doses or medical appointments.",
        num: "04"
    },
];

const FirstAidSection = () => (
    <section className="bg-[#E4EB9C]/10 py-20 flex-1 flex flex-col justify-center">
        <div className="container max-w-5xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#2D5128] text-center mb-4 flex items-center justify-center gap-3">
                <Hospital className="text-[#2D5128]" size={32} /> First Aid After a Bite
            </h2>
            <p className="text-center text-[#142C14]/75 max-w-2xl mx-auto mb-16 text-lg">
                Immediate washing of bite wounds and seeking rapid medical attention are critical for survival.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
                {steps.map((s) => (
                    <div key={s.num} className="bg-[#E4EB9C]/40 border border-[#8DA750]/40 rounded-xl p-6 shadow-sm relative hover:shadow-md transition-shadow">
                        <span className="absolute top-4 right-4 text-4xl font-heading font-extrabold text-[#2D5128]/10">{s.num}</span>
                        <div className="w-12 h-12 rounded-full bg-[#2D5128]/10 flex items-center justify-center mb-5">
                            <s.icon className="text-[#2D5128]" size={24} />
                        </div>
                        <h3 className="font-heading font-bold text-[#142C14] mb-3 text-lg">{s.title}</h3>
                        <p className="text-sm text-[#142C14]/75 leading-relaxed">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default FirstAidSection;