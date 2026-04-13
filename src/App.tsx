import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Layout from "./components/Layout";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import WhatIsRabiesSection from "./components/WhatIsRabiesSection";
import FirstAidSection from "./components/FirstAidSection";
import WikiHowSection from "./components/WikiHowSection"; // New Import
import PreventionSection from "./components/PreventionSection";
import GetHelpSection from "./components/GetHelpSection";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
    const [coords, setCoords] = useState<[number, number] | null>(null);

    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                    <Routes>
                        <Route element={<Layout />}>
                            <Route path="/" element={<HeroSection />} />
                            <Route path="/problem" element={<ProblemSection />} />
                            <Route path="/what-is-rabies" element={<WhatIsRabiesSection />} />
                            <Route path="/first-aid" element={<FirstAidSection />} />
                            <Route path="/wikihow" element={<WikiHowSection />} /> {/* New Route */}
                            <Route path="/prevention" element={<PreventionSection />} />
                            <Route
                                path="/get-help"
                                element={<GetHelpSection onLocationFound={(c) => setCoords(c)} />}
                            />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </TooltipProvider>
        </QueryClientProvider>
    );
};

export default App;