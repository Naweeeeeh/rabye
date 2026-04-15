import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, MapPin, Droplets, Info } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const AIChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { role: "assistant", content: "Hello! I am the Ra-Byes! AI. I can help you understand rabies, explain emergency first aid, or locate the nearest Animal Bite Treatment Center." }
    ]);

    const scrollRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [messages]);

    const processAIResponse = (query: string) => {
        const text = query.toLowerCase();

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

        if (text.includes("bite") || text.includes("wash") || text.includes("first aid") || text.includes("scratch") || text.includes("bleeding")) {
            return "Wash the wound thoroughly with soap and running water for at least 15 minutes. This physically removes the virus and reduces infection risk by up to 90%. Afterward, apply povidone-iodine or alcohol, and go to an Animal Bite Treatment Center within 24 hours. Do NOT apply garlic or toothpaste.";
        }

        if (text.includes("rabies") || text.includes("deadly") || text.includes("fatal") || text.includes("what is")) {
            return "Rabies is a viral disease that is virtually 100% fatal once clinical symptoms develop. However, it is 100% preventable through timely wound cleaning and vaccination (post-exposure prophylaxis).";
        }

        if (text.includes("prevent") || text.includes("pet") || text.includes("dog")) {
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
            setMessages(prev => [...prev, { role: "assistant", content: aiReply }]);
        }, 600);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
            {isOpen && (
                <div className="mb-4 w-[350px] sm:w-[380px] h-[550px] bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">

                    <div className="bg-slate-900 p-5 text-white flex items-center justify-between shadow-md z-10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-900/50 border border-green-700 flex items-center justify-center">
                                <Bot size={22} className="text-green-400" />
                            </div>
                            <div>
                                <p className="font-heading font-black text-base leading-none tracking-wide">Ra-Byes! Assistant</p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Health Navigator</p>
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
                                    "max-w-[85%] p-4 text-sm leading-relaxed shadow-sm",
                                    m.role === "user"
                                        ? "bg-green-600 text-white rounded-2xl rounded-tr-sm"
                                        : "bg-white text-slate-700 rounded-2xl rounded-tl-sm border border-slate-100"
                                )}>
                                    {m.content}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Quick Actions (Chips) */}
                    <div className="px-4 py-3 border-t border-slate-100 flex gap-2 overflow-x-auto no-scrollbar bg-white">
                        <button onClick={() => handleSend("Where is the nearest ABC?")} className="whitespace-nowrap bg-white hover:bg-green-50 text-slate-600 hover:text-green-700 text-xs font-bold px-4 py-2 rounded-full border border-slate-200 hover:border-green-300 transition-all flex items-center gap-1.5 shadow-sm active:scale-95">
                            <MapPin size={14} /> Find Clinic
                        </button>
                        <button onClick={() => handleSend("What is the first aid for a bite?")} className="whitespace-nowrap bg-white hover:bg-green-50 text-slate-600 hover:text-green-700 text-xs font-bold px-4 py-2 rounded-full border border-slate-200 hover:border-green-300 transition-all flex items-center gap-1.5 shadow-sm active:scale-95">
                            <Droplets size={14} /> First Aid
                        </button>
                        <button onClick={() => handleSend("Tell me about rabies")} className="whitespace-nowrap bg-white hover:bg-green-50 text-slate-600 hover:text-green-700 text-xs font-bold px-4 py-2 rounded-full border border-slate-200 hover:border-green-300 transition-all flex items-center gap-1.5 shadow-sm active:scale-95">
                            <Info size={14} /> Rabies Info
                        </button>
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-slate-100 bg-slate-50 flex gap-3">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            placeholder="Ask about first aid..."
                            className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all shadow-sm"
                        />
                        <button onClick={() => handleSend()} className="bg-green-600 text-white p-3 rounded-xl hover:bg-green-700 shadow-md active:scale-95 transition-all">
                            <Send size={20} />
                        </button>
                    </div>
                </div>
            )}

            {/* Floating Action Button (More Noticeable) */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 border-4 border-white",
                    isOpen 
                        ? "bg-slate-900 text-white shadow-lg rotate-90 hover:scale-105" 
                        : "bg-green-600 text-white shadow-xl shadow-green-900/20 hover:scale-105 hover:bg-green-700 hover:shadow-green-900/30 active:scale-95"
                )}
            >
                {/* Noticeable Red Notification Dot (Only when closed) */}
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