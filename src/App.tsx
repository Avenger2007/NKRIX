import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AccessGate } from "@/components/AccessGate";
import { BootSequence } from "@/components/BootSequence";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { GlitchOverlay } from "@/components/GlitchOverlay";

export interface VisitorInfo {
  name: string;
  organization: string;
  purpose: string;
}

type Phase = "gate" | "boot" | "portfolio";

function App() {
  const [phase, setPhase] = useState<Phase>("gate");
  const [visitorInfo, setVisitorInfo] = useState<VisitorInfo | null>(null);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    const saved = sessionStorage.getItem("nkrix_clearance");
    if (saved) {
      try {
        const info = JSON.parse(saved) as VisitorInfo;
        setVisitorInfo(info);
        setPhase("portfolio");
      } catch {
        sessionStorage.removeItem("nkrix_clearance");
      }
    }
  }, []);

  const handleClearanceGranted = (info: VisitorInfo) => {
    setVisitorInfo(info);
    setPhase("boot");
  };

  const handleBootComplete = () => {
    if (visitorInfo) {
      sessionStorage.setItem("nkrix_clearance", JSON.stringify(visitorInfo));
    }
    setPhase("portfolio");
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
        {phase === "gate" && (
          <AccessGate onClearanceGranted={handleClearanceGranted} />
        )}
        {phase === "boot" && visitorInfo && (
          <BootSequence visitorInfo={visitorInfo} onComplete={handleBootComplete} />
        )}
        {phase === "portfolio" && visitorInfo && (
          <>
            <CustomCursor />
            <GlitchOverlay />
            <div className="scanlines" />
            <div className="bg-noise" />
            <Navbar visitorInfo={visitorInfo} />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>
            <Footer visitorInfo={visitorInfo} />
          </>
        )}
      </div>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
