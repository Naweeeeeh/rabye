import { ArrowRight, Bug, Dog, Brain } from "lucide-react";

const steps = [
    { icon: Dog, title: "Exposure", desc: "Animal bite or scratch breaks the skin, allowing the virus to enter." },
    { icon: Bug, title: "Incubation", desc: "The virus replicates in the muscle and enters the nervous system." },
    { icon: Brain, title: "Infection", desc: "The virus travels to the brain, where clinical symptoms finally manifest." },
];

const WhatIsRabiesSection = () => (
    <section className="bg-white py-20 flex-1 flex flex-col justify-center">
        <div className="container max-w-5xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#2D5128] text-center mb-6 flex items-center justify-center gap-3">
                Understanding Rabies
            </h2>

            <div className="bg-[#E4EB9C]/30 border border-[#8DA750]/40 rounded-xl p-8 mb-16 shadow-sm">
                <p className="text-[#142C14]/75 text-lg mb-4 leading-relaxed">
                    Rabies is a deadly viral disease that becomes almost universally fatal once clinical symptoms develop, yet it is entirely preventable through timely and proper interventions such as immediate wound cleaning and post-exposure prophylaxis.
                </p>
                <p className="text-[#142C14]/75 leading-relaxed mb-4">
                    A major challenge in combating rabies is that widespread misconceptions, treatment delays, and knowledge gaps continue to bring about avoidable deaths. A study published in The Lancet Regional Health illustrates how fear, misinformation, and limited knowledge about rabies transmission can lead individuals to disregard or conceal bite incidents.
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
                {steps.map((s, i) => (
                    <div key={s.title} className="flex items-center gap-4">
                        <div className="bg-[#E4EB9C]/30 rounded-xl p-8 text-center w-56 shadow-sm border border-[#8DA750]/40">
                            <div className="w-14 h-14 rounded-full bg-[#2D5128]/10 flex items-center justify-center mx-auto mb-4">
                                <s.icon className="text-[#2D5128]" size={28} />
                            </div>
                            <h3 className="font-heading font-bold text-lg text-[#142C14] mb-2">{s.title}</h3>
                            <p className="text-sm text-[#142C14]/75">{s.desc}</p>
                        </div>
                        {i < steps.length - 1 && (
                            <ArrowRight className="text-[#2D5128]/30 hidden md:block flex-shrink-0" size={32} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default WhatIsRabiesSection;