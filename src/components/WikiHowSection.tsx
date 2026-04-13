import { CheckCircle2, AlertTriangle, AlertOctagon, Info } from "lucide-react";

import category1 from "/public/category1.jpg";
import category2 from "/public/category2.jpg";
import category3 from "/public/category3.jpg";
import animalbite from "/public/animalbite.jpg";
import animalscratch from "/public/animalscratch.jpg";
import lickonopenwound from "/public/lickonopenwound.jpg";
import salivaexposure from "/public/salivaexposure.jpg";
import batexposure from "/public/batexposure.jpg";

const WikiHowSection = () => (
    <section id="guidelines" className="bg-slate-50 py-24 border-t border-slate-100 flex-1 flex flex-col justify-center">
        <div className="container max-w-6xl px-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Section Header */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                    Official Reference
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-black text-green-500 mb-4">
                    Exposure & First Aid Guidelines
                </h2>
                <p className="text-center text-slate-600 max-w-2xl mx-auto text-lg">
                    Philippine national classification guidelines and step-by-step responses for different animal exposure scenarios.
                </p>
            </div>

            {/* Part 1: Classification */}
            <h3 className="font-heading font-black text-2xl mb-8 text-slate-900 flex items-center gap-3 border-b border-slate-200 pb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-100 text-green-700 text-sm">1</span>
                Exposure Scenarios (PH Classification)
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mb-20">
                {/* Category I */}
                <div className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col shadow-sm hover:shadow-xl transition-shadow group">
                    <div className="w-full h-48 bg-slate-100 rounded-2xl mb-8 overflow-hidden group-hover:scale-[1.02] transition-transform">
                        <img src={category1} alt="Category I Exposure" className="w-full h-full object-cover object-center" />
                    </div>
                    <h4 className="font-heading font-black text-slate-900 mb-4 flex items-center gap-2 text-xl">
                        <CheckCircle2 size={24} className="text-green-600" /> Category I
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-3 mb-8 list-disc pl-5">
                        <li>Touching or feeding animals</li>
                        <li>Lick on <strong className="text-slate-900">intact skin</strong></li>
                    </ul>
                    <div className="mt-auto bg-green-50 text-green-700 text-xs font-black uppercase tracking-wider px-4 py-3 rounded-xl w-fit">
                        No vaccine needed
                    </div>
                </div>

                {/* Category II */}
                <div className="bg-white border-2 border-orange-200 rounded-3xl p-8 flex flex-col shadow-sm hover:shadow-xl transition-shadow group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-orange-50 rounded-bl-full -z-10"></div>
                    <div className="w-full h-48 bg-slate-100 rounded-2xl mb-8 overflow-hidden group-hover:scale-[1.02] transition-transform">
                        <img src={category2} alt="Category II Exposure" className="w-full h-full object-cover object-center" />
                    </div>
                    <h4 className="font-heading font-black text-slate-900 mb-4 flex items-center gap-2 text-xl">
                        <AlertTriangle size={24} className="text-orange-500" /> Category II
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-3 mb-8 list-disc pl-5">
                        <li><strong className="text-slate-900">Nibbling of uncovered skin</strong></li>
                        <li>Minor scratches (no bleeding)</li>
                    </ul>
                    <div className="mt-auto bg-orange-50 text-orange-700 text-xs font-black uppercase tracking-wider px-4 py-3 rounded-xl w-fit">
                        Needs Vaccine
                    </div>
                </div>

                {/* Category III */}
                <div className="bg-white border-2 border-red-200 rounded-3xl p-8 flex flex-col shadow-sm hover:shadow-xl transition-shadow group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-red-50 rounded-bl-full -z-10"></div>
                    <div className="w-full h-48 bg-slate-100 rounded-2xl mb-8 overflow-hidden group-hover:scale-[1.02] transition-transform">
                        <img src={category3} alt="Category III Exposure" className="w-full h-full object-cover object-center" />
                    </div>
                    <h4 className="font-heading font-black text-slate-900 mb-4 flex items-center gap-2 text-xl">
                        <AlertOctagon size={24} className="text-red-600" /> Category III
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-3 mb-8 list-disc pl-5">
                        <li>Bites that <strong className="text-slate-900">break the skin</strong></li>
                        <li>Scratches with bleeding</li>
                        <li>Lick on <strong className="text-slate-900">open wound</strong></li>
                        <li>Saliva in <strong className="text-slate-900">eyes/mouth/nose</strong></li>
                        <li>Bat exposure</li>
                    </ul>
                    <div className="mt-auto bg-red-50 text-red-700 text-xs font-black uppercase tracking-wider px-4 py-3 rounded-xl w-fit">
                        Needs Vaccine + RIG
                    </div>
                </div>
            </div>

            {/* Part 2: Step-by-Step */}
            <h3 className="font-heading font-black text-2xl mb-8 text-slate-900 flex items-center gap-3 border-b border-slate-200 pb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-100 text-green-700 text-sm">2</span>
                Step-by-Step First Aid
            </h3>

            <div className="space-y-8">
                
                {/* Main Animal Bite Scenario */}
                <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-lg">
                    <h4 className="font-heading font-black text-2xl mb-8 text-slate-900 flex items-center gap-3">
                        <div className="w-3 h-8 bg-green-600 rounded-full"></div>
                        Scenario 1: Animal Bite (Dog/Cat/Monkey)
                    </h4>

                    <div className="w-full h-64 md:h-96 bg-slate-100 rounded-2xl mb-10 overflow-hidden shadow-inner">
                        <img src={animalbite} alt="First Aid Step-by-Step" className="w-full h-full object-cover object-center" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <ul className="space-y-6 text-sm text-slate-600">
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">1</span>
                                <div>
                                    <strong className="text-slate-900 block text-base mb-1">Ensure safety first.</strong>
                                    Move away from the animal. Prevent further injury.<br/>
                                    <span className="text-green-700 block mt-2 font-medium italic">Rationale: Avoid repeated exposure.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-700">2</span>
                                <div>
                                    <strong className="text-slate-900 block text-base mb-1">Immediate wound washing (CRITICAL).</strong>
                                    Wash with soap and running water for 15 minutes. If no running water, use any clean water available continuously.<br/>
                                    <span className="text-green-700 block mt-2 font-medium italic">Rationale: Physically removes virus before it enters nerves. Can reduce infection risk by up to 90%.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">3</span>
                                <div>
                                    <strong className="text-slate-900 block text-base mb-1">Encourage slight bleeding.</strong>
                                    If minor wound, encourage slight bleeding. Do NOT aggressively squeeze.<br/>
                                    <span className="text-green-700 block mt-2 font-medium italic">Rationale: Helps flush contaminants.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">4</span>
                                <div>
                                    <strong className="text-slate-900 block text-base mb-1">Apply antiseptic.</strong>
                                    Preferred: Povidone-iodine. Alternatives: alcohol, chlorhexidine.<br/>
                                    <span className="text-green-700 block mt-2 font-medium italic">Rationale: Inactivates virus locally.</span>
                                </div>
                            </li>
                        </ul>
                        
                        <div className="space-y-6">
                            <ul className="space-y-6 text-sm text-slate-600">
                                <li className="flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">5</span>
                                    <div>
                                        <strong className="text-slate-900 block text-base mb-1">Cover loosely.</strong>
                                        Cover loosely with clean dressing. Avoid tight bandaging.
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">7</span>
                                    <div>
                                        <strong className="text-slate-900 block text-base mb-1">Go to nearest ABTC ASAP.</strong>
                                        You may receive Anti-rabies vaccine, Rabies Immunoglobulin (RIG) for severe wounds, and Tetanus toxoid.
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">8</span>
                                    <div>
                                        <strong className="text-slate-900 block text-base mb-1">Observe the animal.</strong>
                                        Confine and observe for 14 days.<br/>
                                        <span className="text-green-700 block mt-2 font-medium italic">If animal remains healthy, it may influence continuation of treatment.</span>
                                    </div>
                                </li>
                            </ul>

                            {/* Warning Box */}
                            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl mt-8">
                                <strong className="text-red-900 font-black flex items-center gap-2 mb-3">
                                    <AlertTriangle size={18} /> DO NOT DO THIS:
                                </strong>
                                <ul className="list-disc pl-5 space-y-2 text-red-800 text-sm font-medium">
                                    <li>Apply traditional remedies (toothpaste, garlic, oil)</li>
                                    <li>Burn or cauterize the wound</li>
                                    <li>Immediately suture (unless medically necessary)</li>
                                </ul>
                                <span className="text-red-600/80 font-bold text-xs block mt-4 uppercase tracking-wider">Rationale: These trap the virus inside.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Secondary Scenarios Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                    
                    {/* Scenario 2 */}
                    <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col hover:border-slate-300 transition-colors">
                        <div className="w-full h-56 bg-slate-100 rounded-2xl mb-8 overflow-hidden">
                            <img src={animalscratch} alt="Scenario 2: Scratch" className="w-full h-full object-cover object-center" />
                        </div>
                        <h4 className="font-heading font-black text-xl mb-4 text-slate-900">Scenario 2: Animal Scratch</h4>
                        <ul className="space-y-3 text-sm text-slate-600 flex-1">
                            <li><strong className="text-slate-900 mr-2">Step 1:</strong> Wash immediately (15 minutes).</li>
                            <li><strong className="text-slate-900 mr-2">Step 2:</strong> Apply antiseptic.</li>
                            <li><strong className="text-slate-900 mr-2">Step 3:</strong> Assess: No bleeding (Cat II) or With bleeding (Cat III).</li>
                            <li><strong className="text-slate-900 mr-2">Step 4:</strong> Seek medical care. Vaccination usually required.</li>
                        </ul>
                        <div className="mt-6 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 flex items-start gap-3">
                            <Info size={16} className="text-blue-500 flex-shrink-0" />
                            <span>Philippine note: Even "minor scratches" are treated cautiously due to high rabies prevalence.</span>
                        </div>
                    </div>

                    {/* Scenario 3 */}
                    <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col hover:border-slate-300 transition-colors">
                        <div className="w-full h-56 bg-slate-100 rounded-2xl mb-8 overflow-hidden">
                            <img src={lickonopenwound} alt="Scenario 3: Lick on Open Wound" className="w-full h-full object-cover object-center" />
                        </div>
                        <h4 className="font-heading font-black text-xl mb-4 text-slate-900">Scenario 3: Lick on Open Wound</h4>
                        <ul className="space-y-3 text-sm text-slate-600 flex-1">
                            <li><strong className="text-slate-900 mr-2">Step 1:</strong> Flush wound thoroughly (15 minutes).</li>
                            <li><strong className="text-slate-900 mr-2">Step 2:</strong> Apply antiseptic.</li>
                            <li><strong className="text-slate-900 mr-2">Step 3:</strong> Seek urgent care.</li>
                        </ul>
                        <div className="mt-6 bg-red-50 p-4 rounded-xl border border-red-100 text-xs font-bold text-red-700 flex items-start gap-3">
                            <AlertOctagon size={16} className="flex-shrink-0" />
                            <span>Automatically Category III. Requires RIG + vaccine.</span>
                        </div>
                    </div>

                    {/* Scenario 4 */}
                    <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col hover:border-slate-300 transition-colors">
                        <div className="w-full h-56 bg-slate-100 rounded-2xl mb-8 overflow-hidden">
                            <img src={salivaexposure} alt="Scenario 4: Saliva Exposure" className="w-full h-full object-cover object-center" />
                        </div>
                        <h4 className="font-heading font-black text-xl mb-4 text-slate-900">Scenario 4: Saliva to Eyes/Mouth/Nose</h4>
                        <ul className="space-y-4 text-sm text-slate-600 flex-1">
                            <li>
                                <strong className="text-slate-900 block mb-1">Step 1: Immediate irrigation.</strong>
                                <span className="block ml-2">• Eyes: flush with clean water/saline for several minutes.</span>
                                <span className="block ml-2">• Mouth: rinse repeatedly, spit out.</span>
                                <span className="block ml-2">• Nose: gentle irrigation.</span>
                            </li>
                            <li><strong className="text-slate-900 mr-2">Step 2:</strong> Avoid rubbing or touching.</li>
                            <li><strong className="text-slate-900 mr-2">Step 3:</strong> Seek urgent care.</li>
                        </ul>
                        <div className="mt-6 bg-red-50 p-4 rounded-xl border border-red-100 text-xs font-bold text-red-700 flex items-start gap-3">
                            <AlertOctagon size={16} className="flex-shrink-0" />
                            <span>Considered Category III exposure.</span>
                        </div>
                    </div>

                    {/* Scenario 5 & 6 */}
                    <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col hover:border-slate-300 transition-colors">
                        <div className="w-full h-56 bg-slate-100 rounded-2xl mb-8 overflow-hidden">
                            <img src={batexposure} alt="Scenario 5 & 6: Bat Exposure and Cuts" className="w-full h-full object-cover object-center" />
                        </div>
                        <h4 className="font-heading font-black text-xl mb-4 text-slate-900">Scenario 5 & 6: Bat Exposure & Cuts</h4>
                        <ul className="space-y-6 text-sm text-slate-600 flex-1">
                            <li>
                                <strong className="text-slate-900 block mb-2 text-base">Bat Exposure:</strong> 
                                Assume exposure if a bat is found in the room of a sleeping person, child, or mentally impaired individual. Do NOT rely on visible bite marks. Always treated as Category III.
                            </li>
                            <li className="pt-4 border-t border-slate-100">
                                <strong className="text-slate-900 block mb-2 text-base">Handling Animals with Cuts:</strong> 
                                Wash thoroughly (15 minutes), apply antiseptic, assess wound exposure, and consult healthcare provider for risk-based decision for vaccination.
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </section>
);

export default WikiHowSection;