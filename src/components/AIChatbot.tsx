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
            return "IMMEDIATE ACTION: Wash the wound thoroughly with soap and running water for at least 15 minutes. This physically removes the virus and reduces infection risk by up to 90%. Afterward, apply povidone-iodine or alcohol, and go to an Animal Bite Treatment Center within 24 hours. Do NOT apply garlic or toothpaste.";
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
        <div className="fixed bottom-24 right-6 z-[100] flex flex-col items-end">
            {isOpen && (
                <div className="mb-4 w-[350px] h-[550px] bg-white border border-[#8DA750]/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">

                    <div className="bg-[#2D5128] p-4 text-white flex items-center justify-between shadow-md">
                        <div className="flex items-center gap-2">
                            <Bot size={22} className="animate-pulse text-[#E4EB9C]" />
                            <div>
                                <p className="font-heading font-bold text-sm leading-none">Ra-Byes! Assistant</p>
                                <p className="text-[10px] text-[#E4EB9C]/80 mt-1">Health Navigator</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 rounded-full p-1 transition-colors">
                            <X size={20} />
                        </button>
                    </div>

                    <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#E4EB9C]/10">
                        {messages.map((m, i) => (
                            <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                                <div className={cn(
                                    "max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm",
                                    m.role === "user"
                                        ? "bg-[#2D5128] text-white rounded-tr-none"
                                        : "bg-white text-[#142C14] rounded-tl-none border border-[#8DA750]/30"
                                )}>
                                    {m.content}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="px-4 py-2 border-t border-[#8DA750]/30 flex gap-2 overflow-x-auto no-scrollbar bg-white">
                        <button onClick={() => handleSend("Where is the nearest ABC?")} className="whitespace-nowrap bg-[#E4EB9C]/30 hover:bg-[#E4EB9C]/60 text-[#2D5128] text-[11px] font-bold px-3 py-1.5 rounded-full border border-[#8DA750]/40 transition-colors flex items-center gap-1">
                            <MapPin size={12} /> Find Clinic
                        </button>
                        <button onClick={() => handleSend("What is the first aid for a bite?")} className="whitespace-nowrap bg-[#E4EB9C]/30 hover:bg-[#E4EB9C]/60 text-[#2D5128] text-[11px] font-bold px-3 py-1.5 rounded-full border border-[#8DA750]/40 transition-colors flex items-center gap-1">
                            <Droplets size={12} /> First Aid
                        </button>
                        <button onClick={() => handleSend("Tell me about rabies")} className="whitespace-nowrap bg-[#E4EB9C]/30 hover:bg-[#E4EB9C]/60 text-[#2D5128] text-[11px] font-bold px-3 py-1.5 rounded-full border border-[#8DA750]/40 transition-colors flex items-center gap-1">
                            <Info size={12} /> Rabies Info
                        </button>
                    </div>

                    <div className="p-4 border-t border-[#8DA750]/30 bg-white flex gap-2">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            placeholder="Ask about first aid..."
                            className="flex-1 bg-[#E4EB9C]/10 border border-[#8DA750]/40 rounded-xl px-4 py-2 text-sm text-[#142C14] placeholder:text-[#142C14]/40 focus:ring-2 focus:ring-[#537B2F] outline-none transition-all"
                        />
                        <button onClick={() => handleSend()} className="bg-[#2D5128] text-white p-2.5 rounded-xl hover:bg-[#142C14] active:scale-95 transition-all">
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            )}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-[#2D5128] text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-all active:scale-95 border-4 border-white"
            >
                {isOpen ? <X size={30} /> : <MessageCircle size={30} />}
            </button>
        </div>
    );
};

export default AIChatBot;