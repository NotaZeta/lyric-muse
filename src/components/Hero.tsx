import { Music2, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden py-20 px-4">
      <div className="absolute inset-0 bg-gradient-musical opacity-20 blur-3xl" />
      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border mb-4">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-muted-foreground">AI-Powered Songwriting Assistant</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-musical bg-clip-text text-transparent leading-tight">
          Lyric Companion
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Il tuo assistente creativo per testi musicali. Genera rime, strofe e ritornelli 
          perfetti per ogni genere e mood.
        </p>
        
        <div className="flex items-center justify-center gap-4 pt-4">
          <Music2 className="w-6 h-6 text-primary animate-pulse" />
          <div className="h-1 w-20 bg-gradient-musical rounded-full" />
          <Music2 className="w-6 h-6 text-secondary animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
