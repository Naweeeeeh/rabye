import { CheckCircle2, AlertTriangle, AlertOctagon, Info, ShieldAlert } from "lucide-react";

import category1 from "/public/category1.jpg";
import category2 from "/public/category2.jpg";
import category3 from "/public/category3.jpg";
import animalbite from "/public/animalbite.jpg";
import animalscratch from "/public/animalscratch.jpg";
import lickonopenwound from "/public/lickonopenwound.jpg";
import salivaexposure from "/public/salivaexposure.jpg";
import batexposure from "/public/batexposure.jpg";
import texture from "../assets/texture.png";

const WikiHowSection = () => (
    <section 
        id="guidelines" 
        className="relative py-24 px-10 border-y border-[#8DA750]/30 overflow-hidden flex-1 flex flex-col justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${texture})` }}
    >
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('/texture.jpg')] bg-repeat bg-[length:250px] mix-blend-overlay pointer-events-none"></div>

        <div className="container max-w-7xl mx-auto px-4 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">

            {/* Section Header */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E4EB9C]/10 text-[#E4EB9C] text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-[#E4EB9C]/20">
                    Official Reference
                </div>
                <h2 className="font-heading text-3xl md:text-5xl font-black text-white flex items-center justify-center gap-3 tracking-tight mb-4">
                    Exposure & First Aid Guidelines
                </h2>
                <p className="text-center text-[#E4EB9C]/80 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                    Philippine national classification guidelines and step-by-step responses for different animal exposure scenarios.
                </p>
            </div>

            {/* Part 1: Classification */}
            <h3 className="font-heading font-black text-2xl mb-8 text-white flex items-center gap-3 border-b border-white/10 pb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#E4EB9C]/20 text-[#E4EB9C] text-sm">1</span>
                Exposure Scenarios (PH Classification)
            </h3>

            <div className="grid md:grid-cols-3 gap-8 mb-24">
                {/* Category I */}
                <div className="group relative bg-white rounded-[2.5rem] p-6 flex flex-col shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[#142C14]/50">
                    <div className="relative w-full h-48 mb-8 rounded-[1.8rem] overflow-hidden bg-slate-50 border border-slate-100 p-2">
                        {/* Image: No Grayscale */}
                        <img src={category1} alt="Category I Exposure" className="w-full h-full object-cover object-center rounded-[1.2rem] transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    
                    <div className="px-2 flex flex-col flex-1">
                        {/* Inline Icon & Title */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#E4EB9C]/40 flex items-center justify-center text-[#2D5128] transition-colors group-hover:bg-[#2D5128] group-hover:text-[#E4EB9C]">
                                <CheckCircle2 size={20} strokeWidth={2.5} />
                            </div>
                            <h4 className="font-heading font-black text-[#142C14] text-xl leading-tight group-hover:text-[#2D5128] transition-colors">
                                Category I
                            </h4>
                        </div>

                        <ul className="text-sm text-[#142C14]/70 space-y-3 mb-8 list-disc pl-5 font-medium flex-1">
                            <li>Touching or feeding animals</li>
                            <li>Lick on <strong className="text-[#142C14] font-black">intact skin</strong></li>
                        </ul>
                        <div className="mt-auto bg-[#8DA750]/20 text-[#2D5128] text-[10px] font-black uppercase tracking-wider px-4 py-3 rounded-xl w-fit border border-[#8DA750]/30">
                            No vaccine needed
                        </div>
                    </div>
                </div>

                {/* Category II */}
                <div className="group relative bg-white rounded-[2.5rem] p-6 flex flex-col shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[#142C14]/50">
                    <div className="relative w-full h-48 mb-8 rounded-[1.8rem] overflow-hidden bg-slate-50 border border-slate-100 p-2">
                        {/* Image: No Grayscale */}
                        <img src={category2} alt="Category II Exposure" className="w-full h-full object-cover object-center rounded-[1.2rem] transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    
                    <div className="px-2 flex flex-col flex-1">
                        {/* Inline Icon & Title */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                                <AlertTriangle size={20} strokeWidth={2.5} />
                            </div>
                            <h4 className="font-heading font-black text-[#142C14] text-xl leading-tight group-hover:text-[#2D5128] transition-colors">
                                Category II
                            </h4>
                        </div>

                        <ul className="text-sm text-[#142C14]/70 space-y-3 mb-8 list-disc pl-5 font-medium flex-1">
                            <li><strong className="text-[#142C14] font-black">Nibbling of uncovered skin</strong></li>
                            <li>Minor scratches (no bleeding)</li>
                        </ul>
                        <div className="mt-auto bg-orange-100 text-orange-700 text-[10px] font-black uppercase tracking-wider px-4 py-3 rounded-xl w-fit border border-orange-200">
                            Needs Vaccine
                        </div>
                    </div>
                </div>

                {/* Category III */}
                <div className="group relative bg-white rounded-[2.5rem] p-6 flex flex-col shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[#142C14]/50">
                    <div className="relative w-full h-48 mb-8 rounded-[1.8rem] overflow-hidden bg-slate-50 border border-slate-100 p-2">
                        {/* Image: No Grayscale */}
                        <img src={category3} alt="Category III Exposure" className="w-full h-full object-cover object-center rounded-[1.2rem] transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    
                    <div className="px-2 flex flex-col flex-1">
                        {/* Inline Icon & Title */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                                <AlertOctagon size={20} strokeWidth={2.5} />
                            </div>
                            <h4 className="font-heading font-black text-[#142C14] text-xl leading-tight group-hover:text-[#2D5128] transition-colors">
                                Category III
                            </h4>
                        </div>

                        <ul className="text-sm text-[#142C14]/70 space-y-3 mb-8 list-disc pl-5 font-medium flex-1">
                            <li>Bites that <strong className="text-[#142C14] font-black">break the skin</strong></li>
                            <li>Scratches with bleeding</li>
                            <li>Lick on <strong className="text-[#142C14] font-black">open wound</strong></li>
                            <li>Saliva in <strong className="text-[#142C14] font-black">eyes/mouth/nose</strong></li>
                            <li>Bat exposure</li>
                        </ul>
                        <div className="mt-auto bg-red-100 text-red-700 text-[10px] font-black uppercase tracking-wider px-4 py-3 rounded-xl w-fit border border-red-200">
                            Needs Vaccine + RIG
                        </div>
                    </div>
                </div>
            </div>

            {/* Part 2: Step-by-Step */}
            <h3 className="font-heading font-black text-2xl mb-8 text-white flex items-center gap-3 border-b border-white/10 pb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#E4EB9C]/20 text-[#E4EB9C] text-sm">2</span>
                Step-by-Step Scenarios
            </h3>

            <div className="space-y-8">

                {/* Main Animal Bite Scenario */}
                <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-2xl transition-all duration-300 hover:shadow-[#142C14]/50 group relative">
                    
                    {/* Inline Icon in Title */}
                    <h4 className="font-heading font-black text-2xl mb-8 text-[#142C14] flex items-center gap-4">
                        <div className="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <ShieldAlert size={22} strokeWidth={2.5} />
                        </div>
                        Scenario 1: Animal Bite (Dog/Cat/Monkey)
                    </h4>

                    <div className="relative w-full h-64 md:h-96 rounded-[1.8rem] overflow-hidden bg-slate-50 border border-slate-100 p-2 mb-10">
                        {/* Image: No Grayscale */}
                        <img src={animalbite} alt="First Aid Step-by-Step" className="w-full h-full object-cover object-center rounded-[1.2rem] transition-transform duration-700 group-hover:scale-105" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 px-2">
                        <ul className="space-y-6 text-sm text-[#142C14]/70">
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center font-black text-[#142C14]/50">1</span>
                                <div>
                                    <strong className="text-[#142C14] block text-base mb-1 font-black">Ensure safety first.</strong>
                                    Move away from the animal. Prevent further injury.<br/>
                                    <span className="text-[#8DA750] block mt-2 font-bold italic">Rationale: Avoid repeated exposure.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#E4EB9C]/50 flex items-center justify-center font-black text-[#2D5128]">2</span>
                                <div>
                                    <strong className="text-[#142C14] block text-base mb-1 font-black">Immediate wound washing (CRITICAL).</strong>
                                    Wash with soap and running water for 15 minutes. If no running water, use any clean water available continuously.<br/>
                                    <span className="text-[#8DA750] block mt-2 font-bold italic">Rationale: Physically removes virus before it enters nerves. Can reduce infection risk by up to 90%.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center font-black text-[#142C14]/50">3</span>
                                <div>
                                    <strong className="text-[#142C14] block text-base mb-1 font-black">Encourage slight bleeding.</strong>
                                    If minor wound, encourage slight bleeding. Do NOT aggressively squeeze.<br/>
                                    <span className="text-[#8DA750] block mt-2 font-bold italic">Rationale: Helps flush contaminants.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center font-black text-[#142C14]/50">4</span>
                                <div>
                                    <strong className="text-[#142C14] block text-base mb-1 font-black">Apply antiseptic.</strong>
                                    Preferred: Povidone-iodine. Alternatives: alcohol, chlorhexidine.<br/>
                                    <span className="text-[#8DA750] block mt-2 font-bold italic">Rationale: Inactivates virus locally.</span>
                                </div>
                            </li>
                        </ul>

                        <div className="space-y-6 flex flex-col">
                            <ul className="space-y-6 text-sm text-[#142C14]/70 flex-1">
                                <li className="flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center font-black text-[#142C14]/50">5</span>
                                    <div>
                                        <strong className="text-[#142C14] block text-base mb-1 font-black">Cover loosely.</strong>
                                        Cover loosely with clean dressing. Avoid tight bandaging.
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center font-black text-[#142C14]/50">6</span>
                                    <div>
                                        <strong className="text-[#142C14] block text-base mb-1 font-black">Go to nearest ABTC ASAP.</strong>
                                        You may receive Anti-rabies vaccine, Rabies Immunoglobulin (RIG) for severe wounds, and Tetanus toxoid.
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center font-black text-[#142C14]/50">7</span>
                                    <div>
                                        <strong className="text-[#142C14] block text-base mb-1 font-black">Observe the animal.</strong>
                                        Confine and observe for 14 days.<br/>
                                        <span className="text-[#8DA750] block mt-2 font-bold italic">If animal remains healthy, it may influence continuation of treatment.</span>
                                    </div>
                                </li>
                            </ul>

                            {/* Warning Box - High Contrast */}
                            <div className="bg-red-50 border border-red-100 p-6 rounded-2xl mt-8">
                                <strong className="text-red-700 font-black flex items-center gap-2 mb-3 text-lg">
                                    <AlertTriangle size={20} /> DO NOT DO THIS:
                                </strong>
                                <ul className="list-disc pl-5 space-y-2 text-red-900/80 text-sm font-medium">
                                    <li>Apply traditional remedies (toothpaste, garlic, oil)</li>
                                    <li>Burn or cauterize the wound</li>
                                    <li>Immediately suture (unless medically necessary)</li>
                                </ul>
                                <span className="text-red-700/60 font-black text-[10px] block mt-4 uppercase tracking-wider">Rationale: These trap the virus inside.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Secondary Scenarios Grid */}
                <div className="grid lg:grid-cols-2 gap-8">

                    {/* Scenario 2 */}
                    <div className="group relative bg-white rounded-[2.5rem] p-6 flex flex-col shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[#142C14]/50">
                        <div className="relative w-full h-48 mb-8 rounded-[1.8rem] overflow-hidden bg-slate-50 border border-slate-100 p-2">
                            {/* Image: No Grayscale */}
                            <img src={animalscratch} alt="Scenario 2: Scratch" className="w-full h-full object-cover object-center rounded-[1.2rem] transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="px-2 flex flex-col flex-1">
                            {/* Inline Number & Title */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#142C14]/60 transition-colors group-hover:bg-[#142C14] group-hover:text-white">
                                    <span className="font-heading font-black text-lg">2</span>
                                </div>
                                <h4 className="font-heading font-black text-[#142C14] text-xl leading-tight group-hover:text-[#2D5128] transition-colors">
                                    Scenario 2: Animal Scratch
                                </h4>
                            </div>
                            
                            <ul className="space-y-3 text-sm text-[#142C14]/70 flex-1 font-medium">
                                <li><strong className="text-[#142C14] font-black mr-2">Step 1:</strong> Wash immediately (15 minutes).</li>
                                <li><strong className="text-[#142C14] font-black mr-2">Step 2:</strong> Apply antiseptic.</li>
                                <li><strong className="text-[#142C14] font-black mr-2">Step 3:</strong> Assess: No bleeding (Cat II) or With bleeding (Cat III).</li>
                                <li><strong className="text-[#142C14] font-black mr-2">Step 4:</strong> Seek medical care. Vaccination usually required.</li>
                            </ul>
                            <div className="mt-6 bg-[#E4EB9C]/20 p-4 rounded-xl border border-[#8DA750]/30 text-xs font-bold text-[#2D5128] flex items-start gap-3">
                                <Info size={16} className="text-[#537B2F] flex-shrink-0" />
                                <span>Philippine note: Even "minor scratches" are treated cautiously due to high rabies prevalence.</span>
                            </div>
                        </div>
                    </div>

                    {/* Scenario 3 */}
                    <div className="group relative bg-white rounded-[2.5rem] p-6 flex flex-col shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[#142C14]/50">
                        <div className="relative w-full h-48 mb-8 rounded-[1.8rem] overflow-hidden bg-slate-50 border border-slate-100 p-2">
                            {/* Image: No Grayscale */}
                            <img src={lickonopenwound} alt="Scenario 3: Lick on Open Wound" className="w-full h-full object-cover object-center rounded-[1.2rem] transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="px-2 flex flex-col flex-1">
                            {/* Inline Number & Title */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#142C14]/60 transition-colors group-hover:bg-[#142C14] group-hover:text-white">
                                    <span className="font-heading font-black text-lg">3</span>
                                </div>
                                <h4 className="font-heading font-black text-[#142C14] text-xl leading-tight group-hover:text-[#2D5128] transition-colors">
                                    Scenario 3: Lick on Open Wound
                                </h4>
                            </div>

                            <ul className="space-y-3 text-sm text-[#142C14]/70 flex-1 font-medium">
                                <li><strong className="text-[#142C14] font-black mr-2">Step 1:</strong> Flush wound thoroughly (15 minutes).</li>
                                <li><strong className="text-[#142C14] font-black mr-2">Step 2:</strong> Apply antiseptic.</li>
                                <li><strong className="text-[#142C14] font-black mr-2">Step 3:</strong> Seek urgent care.</li>
                            </ul>
                            <div className="mt-6 bg-red-50 p-4 rounded-xl border border-red-100 text-xs font-bold text-red-700 flex items-start gap-3">
                                <AlertOctagon size={16} className="flex-shrink-0" />
                                <span>Automatically Category III. Requires RIG + vaccine.</span>
                            </div>
                        </div>
                    </div>

                    {/* Scenario 4 */}
                    <div className="group relative bg-white rounded-[2.5rem] p-6 flex flex-col shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[#142C14]/50">
                        <div className="relative w-full h-48 mb-8 rounded-[1.8rem] overflow-hidden bg-slate-50 border border-slate-100 p-2">
                            {/* Image: No Grayscale */}
                            <img src={salivaexposure} alt="Scenario 4: Saliva Exposure" className="w-full h-full object-cover object-center rounded-[1.2rem] transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="px-2 flex flex-col flex-1">
                            {/* Inline Number & Title */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#142C14]/60 transition-colors group-hover:bg-[#142C14] group-hover:text-white">
                                    <span className="font-heading font-black text-lg">4</span>
                                </div>
                                <h4 className="font-heading font-black text-[#142C14] text-xl leading-tight group-hover:text-[#2D5128] transition-colors">
                                    Scenario 4: Saliva to Eyes/Mouth
                                </h4>
                            </div>

                            <ul className="space-y-4 text-sm text-[#142C14]/70 flex-1 font-medium">
                                <li>
                                    <strong className="text-[#142C14] font-black block mb-1">Step 1: Immediate irrigation.</strong>
                                    <span className="block ml-2">• Eyes: flush with clean water/saline.</span>
                                    <span className="block ml-2">• Mouth: rinse repeatedly, spit out.</span>
                                </li>
                                <li><strong className="text-[#142C14] font-black mr-2">Step 2:</strong> Avoid rubbing or touching.</li>
                                <li><strong className="text-[#142C14] font-black mr-2">Step 3:</strong> Seek urgent care.</li>
                            </ul>
                            <div className="mt-6 bg-red-50 p-4 rounded-xl border border-red-100 text-xs font-bold text-red-700 flex items-start gap-3">
                                <AlertOctagon size={16} className="flex-shrink-0" />
                                <span>Considered Category III exposure.</span>
                            </div>
                        </div>
                    </div>

                    {/* Scenario 5 & 6 */}
                    <div className="group relative bg-white rounded-[2.5rem] p-6 flex flex-col shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[#142C14]/50">
                        <div className="relative w-full h-48 mb-8 rounded-[1.8rem] overflow-hidden bg-slate-50 border border-slate-100 p-2">
                            {/* Image: No Grayscale */}
                            <img src={batexposure} alt="Scenario 5 & 6: Bat Exposure and Cuts" className="w-full h-full object-cover object-center rounded-[1.2rem] transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="px-2 flex flex-col flex-1">
                            {/* Inline Number & Title */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#142C14]/60 transition-colors group-hover:bg-[#142C14] group-hover:text-white">
                                    <span className="font-heading font-black text-lg">5</span>
                                </div>
                                <h4 className="font-heading font-black text-[#142C14] text-xl leading-tight group-hover:text-[#2D5128] transition-colors">
                                    Scenario 5: Bat Exposure
                                </h4>
                            </div>

                            <ul className="space-y-6 text-sm text-[#142C14]/70 flex-1 font-medium">
                                <li>
                                    <strong className="text-[#142C14] font-black block mb-2 text-base">Bat Exposure Rule:</strong>
                                    Assume exposure if a bat is found in the room of a sleeping person, child, or mentally impaired individual. Do NOT rely on visible bite marks. Always treated as Category III.
                                </li>
                                <li className="pt-4 border-t border-slate-100">
                                    <strong className="text-[#142C14] font-black block mb-2 text-base">Handling Animals with Cuts:</strong>
                                    Wash thoroughly (15 minutes), apply antiseptic, assess wound exposure, and consult healthcare provider.
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
);

export default WikiHowSection;