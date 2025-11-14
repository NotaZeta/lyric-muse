import { Button } from "@/components/ui/button";
import { Copy, Download, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LyricDisplayProps {
  lyrics: string;
  onRegenerate: () => void;
}

const LyricDisplay = ({ lyrics, onRegenerate }: LyricDisplayProps) => {
  const { toast } = useToast();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(lyrics);
    toast({
      title: "Copiato!",
      description: "Il testo è stato copiato negli appunti",
    });
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([lyrics], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "lyrics.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "Download completato!",
      description: "Il file è stato scaricato",
    });
  };

  return (
    <div className="space-y-4 p-6 bg-card rounded-2xl border border-border">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold bg-gradient-accent bg-clip-text text-transparent">
          Testo Generato
        </h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleCopy}>
            <Copy className="w-4 h-4 mr-2" />
            Copia
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="w-4 h-4 mr-2" />
            Scarica
          </Button>
          <Button variant="outline" size="sm" onClick={onRegenerate}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Rigenera
          </Button>
        </div>
      </div>
      
      <div className="p-6 bg-muted rounded-xl">
        <pre className="whitespace-pre-wrap font-mono text-sm text-foreground leading-relaxed">
          {lyrics}
        </pre>
      </div>
    </div>
  );
};

export default LyricDisplay;
