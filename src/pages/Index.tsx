import { useState } from "react";
import Hero from "@/components/Hero";
import LyricForm, { FormData } from "@/components/LyricForm";
import LyricDisplay from "@/components/LyricDisplay";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [lyrics, setLyrics] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentFormData, setCurrentFormData] = useState<FormData | null>(null);
  const { toast } = useToast();

  const generateMockLyrics = (data: FormData) => {
    // Mock lyrics generator for demonstration
    const mockLyrics = `[Strofa 1]
Nel silenzio della notte penso a te
Le stelle brillan sopra la città
${data.theme ? `Ogni ${data.theme} mi ricorda chi sei` : "Ogni momento mi ricorda chi sei"}
E il cuore batte forte, non si ferma mai

[Ritornello]
${data.mood === "happy" ? "Balliamo insieme sotto questo cielo" : "Camminiamo insieme in questo cielo scuro"}
${data.mood === "romantic" ? "Con te ogni sogno diventa vero" : "Ogni passo è una nuova sfida vera"}
${data.genre === "hip-hop" ? "Flow che scorre come un fiume in piena" : "Note che volano come ali nel vento"}
La musica ci unisce, siamo una cosa sola

[Strofa 2]
${data.style || "Parole che escono dal profondo del cuore"}
Emozioni che colorano il mondo intero
${data.genre === "rock" ? "Con la chitarra che urla la mia verità" : "Con la melodia che canta la mia storia"}
Questo momento è nostro, è magia pura

[Bridge]
E quando tutto sembra perduto
Troviamo la forza di andare avanti
${data.mood === "sad" ? "Anche nel dolore c'è bellezza" : "La vita è un viaggio incredibile"}
Insieme fino alla fine

[Ritornello]
${data.mood === "happy" ? "Balliamo insieme sotto questo cielo" : "Camminiamo insieme in questo cielo scuro"}
${data.mood === "romantic" ? "Con te ogni sogno diventa vero" : "Ogni passo è una nuova sfida vera"}
${data.genre === "hip-hop" ? "Flow che scorre come un fiume in piena" : "Note che volano come ali nel vento"}
La musica ci unisce, siamo una cosa sola`;

    return mockLyrics;
  };

  const handleGenerate = async (data: FormData) => {
    setIsLoading(true);
    setCurrentFormData(data);
    
    // Simulate API call
    setTimeout(() => {
      const generatedLyrics = generateMockLyrics(data);
      setLyrics(generatedLyrics);
      setIsLoading(false);
      
      toast({
        title: "Testo generato!",
        description: "Il tuo testo è pronto. Puoi modificarlo o rigenerarlo.",
      });
    }, 2000);
  };

  const handleRegenerate = () => {
    if (currentFormData) {
      handleGenerate(currentFormData);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <LyricForm onGenerate={handleGenerate} isLoading={isLoading} />
          </div>
          
          <div>
            {lyrics ? (
              <LyricDisplay lyrics={lyrics} onRegenerate={handleRegenerate} />
            ) : (
              <div className="h-full flex items-center justify-center p-6 bg-card rounded-2xl border border-border border-dashed">
                <p className="text-muted-foreground text-center">
                  Compila il form e genera il tuo primo testo musicale!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
