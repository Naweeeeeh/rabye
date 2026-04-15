import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, MapPin, Droplets, HelpCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useLanguage } from "../lib/LanguageContext";

const AIChatBot = () => {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { role: "assistant", content: t("Hello! I am the Ra-Byes! AI. I can help you understand rabies, explain emergency first aid, or locate the nearest Animal Bite Treatment Center. Choose a question below or type your own!") }
    ]);

    const scrollRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [messages]);

    const processAIResponse = (query: string) => {
        const text = query.toLowerCase();

        // 1. Location and Clinic Routing
        if (text.includes("nearest") || text.includes("location") || text.includes("where") || text.includes("map") || text.includes("clinic") || text.includes("abc")) {
            if (location.pathname === "/get-help") {
                return "You are already on the map page! Just click the 'Use My Location' button above, and the map will calculate the fastest route to the nearest facility for you.";
            } else {
                setTimeout(() => {
                    navigate("/get-help");
                }, 1800);
                return "I can help you find life-saving care. I am redirecting you to our interactive map right now. Once there, just click 'Use My Location' to find the fastest route to the nearest facility!";
            }
        }

        // 2. Emergency First Aid
        if (text.includes("first aid") || (text.includes("wash") && text.includes("wound"))) {
            return "Wash the wound thoroughly with soap and running water for at least 15 minutes. This physically removes the virus and reduces infection risk by up to 90%. Afterward, apply povidone-iodine or alcohol, and go to an Animal Bite Treatment Center within 24 hours. Do NOT apply garlic or toothpaste.";
        }

        // 3. Exact Q&A Integrations
        if (text.includes("what is rabies")) {
            return "Rabies is a viral disease that affects the brain and nervous system. It is caused by the rabies virus from the Lyssavirus genus.";
        }

        if (text.includes("how is rabies spread") || text.includes("spread")) {
            return "Rabies is typically transmitted through the following:\n• Bites from an infected animal (most common)\n• Scratches or saliva exposure to open wounds or mucous membranes";
        }

        if (text.includes("which animals") || text.includes("carry rabies")) {
            return "Common carriers include:\n• Dogs (most common)\n• Cats\n• Other mammals (rare)";
        }

        if (text.includes("symptoms of rabies") || text.includes("symptoms")) {
            return "Early symptoms include:\n• Fever\n• Headache\n• Weakness\n\nAdvanced symptoms include:\n• Anxiety and confusion\n• Difficulty swallowing\n• Excessive salivation\n• Fear of water (hydrophobia)\n• Paralysis";
        }

        if (text.includes("how soon do symptoms appear") || text.includes("how soon")) {
            return "Symptoms may appear anywhere from a few days to several months after exposure, depending on factors such as the location of the bite and the viral load.";
        }

        if (text.includes("is rabies curable") || text.includes("curable")) {
            return "Once clinical symptoms appear, rabies is almost 100% fatal. However, it is preventable if treated early after exposure.";
        }

        if (text.includes("indoor pets") || text.includes("indoor dog") || text.includes("indoor cat")) {
            return "While rare, infection is still possible if indoor pets are exposed to infected animals. Vaccination is therefore still recommended.";
        }

        if (text.includes("lick")) {
            return "There is a risk only if saliva from an infected animal enters an open wound, cut, or mucous membrane.";
        }

        if (text.includes("philippines") || text.includes("common in")) {
            return "Yes, rabies remains a public health concern in the Philippines, with most cases linked to dog bites.";
        }

        // 4. Fallback Prevention / Default
        if (text.includes("prevent")) {
            return "The most effective prevention is vaccinating your pets annually and teaching children not to tease dogs while they eat or sleep. Always supervise children around stray animals.";
        }

        return "I am specifically programmed to assist with Rabies prevention, first aid steps, and navigating to treatment centers. For other inquiries, please contact the DOH hotline at (02) 8651-7800.";
    };

    const handleSend = (forcedQuery?: string) => {
        const textToSend = forcedQuery || input;
        if (!textToSend.trim()) return;

        setMessages(prev => [...prev, { role: "user", content: textToSend }]);
        setInput("");

        setTimeout(() => {
            const aiReply = processAIResponse(textToSend);
            setMessages(prev => [...prev, { role: "assistant", content: t(aiReply) }]);
        }, 600);
    };

    // Array of suggested quick actions so they form a nice scrollable list
    const suggestedPrompts = [
        { label: "Where is the nearest ABC?", icon: MapPin },
        { label: "What is the first aid for a bite?", icon: Droplets },
        { label: "What is Rabies?", icon: HelpCircle },
        { label: "How is Rabies Spread?", icon: HelpCircle },
        { label: "Which Animals Can Carry Rabies?", icon: HelpCircle },
        { label: "What Are the Symptoms of Rabies in Humans?", icon: HelpCircle },
        { label: "How Soon Do Symptoms Appear After Exposure?", icon: HelpCircle },
        { label: "Is Rabies Curable?", icon: HelpCircle },
        { label: "Can Indoor Pets Get Rabies?", icon: HelpCircle },
        { label: "Can Rabies Be Transmitted Through a Lick?", icon: HelpCircle },
        { label: "Is Rabies Common in the Philippines?", icon: HelpCircle }
    ];

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
            {isOpen && (
                <div className="mb-4 w-[350px] sm:w-[380px] h-[550px] bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">

                    {/* Header */}
                    <div className="bg-slate-900 p-5 text-white flex items-center justify-between shadow-md z-10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#8DA750]/20 border border-[#8DA750]/50 flex items-center justify-center">
                                <Bot size={22} className="text-[#E4EB9C]" />
                            </div>
                            <div>
                                <p className="font-heading font-black text-base leading-none tracking-wide">{t("Ra-Byes! Assistant")}</p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{t("Health Navigator")}</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-slate-800 rounded-full p-2 transition-colors text-slate-400 hover:text-white">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Chat Messages Area */}
                    <div ref={scrollRef} className="flex-1 p-5 overflow-y-auto space-y-5 bg-slate-50">
                        {messages.map((m, i) => (
                            <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                                <div className={cn(
                                    "max-w-[85%] p-4 text-sm leading-relaxed shadow-sm whitespace-pre-wrap",
                                    m.role === "user"
                                        ? "bg-[#2D5128] text-white rounded-2xl rounded-tr-sm"
                                        : "bg-white text-slate-700 rounded-2xl rounded-tl-sm border border-slate-100"
                                )}>
                                    {m.content}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Scrollable Quick Actions (Chips) */}
                    <div className="px-4 py-3 border-t border-slate-100 flex gap-2 overflow-x-auto no-scrollbar bg-white">
                        {suggestedPrompts.map((prompt, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleSend(prompt.label)}
                                className="whitespace-nowrap bg-white hover:bg-[#E4EB9C]/20 text-slate-600 hover:text-[#2D5128] text-xs font-bold px-4 py-2 rounded-full border border-slate-200 hover:border-[#8DA750] transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
                            >
                                <prompt.icon size={14} /> {t(prompt.label)}
                            </button>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-slate-100 bg-slate-50 flex gap-3">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            placeholder={t("Type your question here...")}
                            className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#2D5128] focus:border-transparent outline-none transition-all shadow-sm"
                        />
                        <button onClick={() => handleSend()} className="bg-[#2D5128] text-white p-3 rounded-xl hover:bg-[#142C14] shadow-md active:scale-95 transition-all">
                            <Send size={20} />
                        </button>
                    </div>
                </div>
            )}

            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 border-4 border-white",
                    isOpen
                        ? "bg-slate-900 text-white shadow-lg rotate-90 hover:scale-105"
                        : "bg-[#2D5128] text-white shadow-xl shadow-[#142C14]/20 hover:scale-105 hover:bg-[#142C14] hover:shadow-[#142C14]/30 active:scale-95"
                )}
            >
                {!isOpen && (
                    <span className="absolute top-0 right-0 flex h-4 w-4 z-10">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
                    </span>
                )}

                {isOpen ? <X size={28} className="-rotate-90 transition-transform" /> : <MessageCircle size={28} />}
            </button>
        </div>
    );
};

export default AIChatBot;