import { ShieldAlert, CheckCircle2, AlertTriangle, AlertOctagon, Syringe } from "lucide-react";

import category1 from "/public/category1.jpg";
import category2 from "/public/category2.jpg";
import category3 from "/public/category3.jpg";
import animalbite from "/public/animalbite.jpg";
import animalscratch from "/public/animalscratch.jpg";
import lickonopenwound from "/public/lickonopenwound.jpg";
import salivaexposure from "/public/salivaexposure.jpg";
import batexposure from "/public/batexposure.jpg";

const WikiHowSection = () => (
    <section className="bg-white py-20 flex-1 flex flex-col justify-center">
        <div className="container max-w-5xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#142C14] text-center mb-4">
                WikiHow: Rabies Exposure & First Aid
            </h2>
            <p className="text-center text-[#142C14]/75 mb-12">
                Official Philippine classification guidelines and step-by-step responses for different exposure scenarios.
            </p>

            <h3 className="font-heading font-bold text-xl mb-6 text-[#142C14] flex items-center gap-2">
                Part 1: Exposure Scenarios (PH Classification)
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
                <div className="bg-[#E4EB9C]/30 border border-[#8DA750]/40 rounded-xl p-6 flex flex-col shadow-sm">
                    <div className="w-full h-48 bg-[#8DA750]/20 rounded-lg mb-6 flex items-center justify-center border border-[#8DA750]/30 overflow-hidden">
                        <img
                            src={category1}
                            alt="Category I Exposure"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                    <h4 className="font-heading font-bold text-[#142C14] mb-4 flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-[#2D5128]" /> Category I
                    </h4>
                    <ul className="text-sm text-[#142C14]/75 space-y-2 mb-6 list-disc pl-4">
                        <li>Touching or feeding animals</li>
                        <li>Lick on <strong className="text-[#142C14]">intact skin</strong></li>
                    </ul>
                    <div className="mt-auto bg-[#2D5128]/10 text-[#2D5128] text-xs font-bold px-3 py-2 rounded-lg w-fit">
                        No vaccine needed
                    </div>
                </div>

                <div className="bg-[#8DA750]/20 border border-[#537B2F]/40 rounded-xl p-6 flex flex-col shadow-sm">
                    <div className="w-full h-48 bg-[#537B2F]/20 rounded-lg mb-6 flex items-center justify-center border border-[#537B2F]/30 overflow-hidden">
                        <img
                            src={category2}
                            alt="Category II Exposure"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                    <h4 className="font-heading font-bold text-[#142C14] mb-4 flex items-center gap-2">
                        <AlertTriangle size={18} className="text-[#2D5128]" /> Category II
                    </h4>
                    <ul className="text-sm text-[#142C14]/75 space-y-2 mb-6 list-disc pl-4">
                        <li><strong className="text-[#142C14]">Nibbling of uncovered skin</strong></li>
                        <li>Minor scratches (no bleeding)</li>
                    </ul>
                    <div className="mt-auto bg-[#537B2F]/20 text-[#142C14] text-xs font-bold px-3 py-2 rounded-lg w-fit">
                        Needs anti-rabies vaccine
                    </div>
                </div>

                <div className="bg-[#142C14]/5 border border-[#142C14]/20 rounded-xl p-6 flex flex-col shadow-sm">
                    <div className="w-full h-48 bg-[#142C14]/10 rounded-lg mb-6 flex items-center justify-center border border-[#142C14]/20 overflow-hidden">
                        <img
                            src={category3}
                            alt="Category III Exposure"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                    <h4 className="font-heading font-bold text-[#142C14] mb-4 flex items-center gap-2">
                        <AlertOctagon size={18} className="text-[#142C14]" /> Category III
                    </h4>
                    <ul className="text-sm text-[#142C14]/80 space-y-2 mb-6 list-disc pl-4">
                        <li>Bites that <strong className="text-[#142C14]">break the skin</strong></li>
                        <li>Scratches with bleeding</li>
                        <li>Lick on <strong className="text-[#142C14]">open wound</strong></li>
                        <li>Saliva in <strong className="text-[#142C14]">eyes/mouth/nose</strong></li>
                        <li>Bat exposure</li>
                    </ul>
                    <div className="mt-auto bg-[#142C14]/10 text-[#142C14] text-xs font-bold px-3 py-2 rounded-lg w-fit">
                        Needs Vaccine + RIG
                    </div>
                </div>
            </div>

            <h3 className="font-heading font-bold text-xl mb-6 text-[#142C14] flex items-center gap-2">
                Part 2: Step-by-Step First Aid
            </h3>

            <div className="space-y-6">
                <div className="bg-[#E4EB9C]/30 border border-[#8DA750]/40 rounded-xl p-6 shadow-sm flex flex-col">
                    <h4 className="font-heading font-bold text-xl mb-6 text-[#2D5128]">Scenario 1: Animal Bite (Dog/Cat/Monkey, etc.)</h4>

                    <div className="w-full h-64 md:h-80 bg-[#8DA750]/20 rounded-lg mb-8 border border-[#8DA750]/30 overflow-hidden shadow-sm">
                        <img
                            src={animalbite}
                            alt="First Aid Step-by-Step"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>

                    <ul className="space-y-4 text-sm text-[#142C14]/75">
                        <li><strong className="text-[#142C14]">Step 1: Ensure safety first.</strong> Move away from the animal. Prevent further injury.<br/><span className="text-[#537B2F] block mt-1 font-medium">Rationale: Avoid repeated exposure</span></li>
                        <li><strong className="text-[#142C14]">Step 2: Immediate wound washing (MOST IMPORTANT).</strong> Wash with soap and running water for 15 minutes. If no running water, use any clean water available continuously.<br/><span className="text-[#537B2F] block mt-1 font-medium">Rationale: Physically removes virus before it enters nerves. Can reduce infection risk by up to 90%.</span></li>
                        <li><strong className="text-[#142C14]">Step 3: Encourage slight bleeding.</strong> If minor wound, encourage slight bleeding. Do NOT aggressively squeeze.<br/><span className="text-[#537B2F] block mt-1 font-medium">Rationale: Helps flush contaminants.</span></li>
                        <li><strong className="text-[#142C14]">Step 4: Apply antiseptic.</strong> Preferred: Povidone-iodine. Alternatives: alcohol, chlorhexidine.<br/><span className="text-[#537B2F] block mt-1 font-medium">Rationale: Inactivates virus locally.</span></li>
                        <li><strong className="text-[#142C14]">Step 5: Cover loosely.</strong> Cover loosely with clean dressing. Avoid tight bandaging.</li>
                        <li className="bg-[#142C14]/5 border border-[#142C14]/20 p-4 rounded-lg mt-2">
                            <strong className="text-[#142C14] block mb-2">Step 6: DO NOT DO THIS:</strong>
                            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#142C14]">
                                <li>Apply traditional remedies (toothpaste, garlic, oil)</li>
                                <li>Burn or cauterize</li>
                                <li>Immediately suture (unless medically necessary)</li>
                            </ul>
                            <span className="text-[#537B2F] font-medium block mt-2">Rationale: These increase infection risk or trap virus.</span>
                        </li>
                        <li><strong className="text-[#142C14]">Step 7: Go to nearest ABTC or hospital ASAP.</strong> In the Philippines: Barangay Health Centers often refer to ABTCs. You may receive Anti-rabies vaccine, Rabies Immunoglobulin (RIG) for severe wounds, and Tetanus toxoid ± antibiotics.</li>
                        <li><strong className="text-[#142C14]">Step 8: Observe the animal (if domestic).</strong> Confine and observe for 14 days.<br/><span className="text-[#537B2F] block mt-1 font-medium">If animal remains healthy, it may influence continuation of treatment.</span></li>
                    </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-[#E4EB9C]/30 border border-[#8DA750]/40 rounded-xl p-6 shadow-sm flex flex-col">
                        <div className="w-full h-56 bg-[#8DA750]/20 rounded-lg mb-6 flex items-center justify-center border border-[#8DA750]/30 overflow-hidden">
                            <img
                                src={animalscratch}
                                alt="Scenario 2: Scratch"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <h4 className="font-heading font-bold text-lg mb-4 text-[#2D5128]">Scenario 2: Scratch</h4>
                        <ul className="space-y-2 text-sm text-[#142C14]/75">
                            <li><strong className="text-[#142C14]">Step 1:</strong> Wash immediately (15 minutes).</li>
                            <li><strong className="text-[#142C14]">Step 2:</strong> Apply antiseptic.</li>
                            <li><strong className="text-[#142C14]">Step 3:</strong> Assess: No bleeding (Category II) or With bleeding (Category III).</li>
                            <li><strong className="text-[#142C14]">Step 4:</strong> Seek medical care. Vaccination usually required.</li>
                        </ul>
                        <div className="mt-auto pt-6">
                            <div className="text-xs font-medium bg-[#2D5128]/10 text-[#2D5128] p-3 rounded-lg border border-[#2D5128]/20">
                                <span>Philippine note: Even "minor scratches" are often treated cautiously due to high rabies prevalence.</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#E4EB9C]/30 border border-[#8DA750]/40 rounded-xl p-6 shadow-sm flex flex-col">
                        <div className="w-full h-56 bg-[#8DA750]/20 rounded-lg mb-6 flex items-center justify-center border border-[#8DA750]/30 overflow-hidden">
                            <img
                                src={lickonopenwound}
                                alt="Scenario 3: Lick on Open Wound"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <h4 className="font-heading font-bold text-lg mb-4 text-[#2D5128]">Scenario 3: Lick on Open Wound</h4>
                        <ul className="space-y-2 text-sm text-[#142C14]/75">
                            <li><strong className="text-[#142C14]">Step 1:</strong> Flush wound thoroughly (15 minutes).</li>
                            <li><strong className="text-[#142C14]">Step 2:</strong> Apply antiseptic.</li>
                            <li><strong className="text-[#142C14]">Step 3:</strong> Seek urgent care.</li>
                        </ul>
                        <div className="mt-auto pt-6">
                            <div className="text-xs font-medium bg-[#142C14]/10 text-[#142C14] p-3 rounded-lg border border-[#142C14]/20">
                                <span>Automatically Category III. Requires RIG + vaccine.</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#E4EB9C]/30 border border-[#8DA750]/40 rounded-xl p-6 shadow-sm flex flex-col">
                        <div className="w-full h-56 bg-[#8DA750]/20 rounded-lg mb-6 flex items-center justify-center border border-[#8DA750]/30 overflow-hidden">
                            <img
                                src={salivaexposure}
                                alt="Scenario 4: Saliva Exposure"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <h4 className="font-heading font-bold text-lg mb-4 text-[#2D5128]">Scenario 4: Saliva to Eyes/Mouth/Nose</h4>
                        <ul className="space-y-2 text-sm text-[#142C14]/75">
                            <li><strong className="text-[#142C14]">Step 1: Immediate irrigation.</strong><br/>Eyes: flush with clean water/saline for several minutes.<br/>Mouth: rinse repeatedly, spit out.<br/>Nose: gentle irrigation.</li>
                            <li><strong className="text-[#142C14]">Step 2:</strong> Avoid rubbing or touching.</li>
                            <li><strong className="text-[#142C14]">Step 3:</strong> Seek urgent care.</li>
                        </ul>
                        <div className="mt-auto pt-6">
                            <div className="text-xs font-medium bg-[#142C14]/10 text-[#142C14] p-3 rounded-lg border border-[#142C14]/20">
                                <span>Considered Category III exposure.</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#E4EB9C]/30 border border-[#8DA750]/40 rounded-xl p-6 shadow-sm flex flex-col">
                        <div className="w-full h-56 bg-[#8DA750]/20 rounded-lg mb-6 flex items-center justify-center border border-[#8DA750]/30 overflow-hidden">
                            <img
                                src={batexposure}
                                alt="Scenario 5 & 6: Bat Exposure and Cuts"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <h4 className="font-heading font-bold text-lg mb-4 text-[#2D5128]">Scenario 5 & 6: Bat Exposure & Open Cuts</h4>
                        <ul className="space-y-2 text-sm text-[#142C14]/75 mb-4">
                            <li><strong className="text-[#142C14]">Bat Exposure:</strong> Assume exposure if bat found in room of a sleeping person, child, or mentally impaired individual. Do NOT rely on visible bite marks. Always treated as Category III.</li>
                            <li className="pt-2"><strong className="text-[#142C14]">Handling Animals with Cuts:</strong> Wash thoroughly (15 minutes), apply antiseptic, assess wound exposure, and consult healthcare provider for risk-based decision for vaccination.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default WikiHowSection;