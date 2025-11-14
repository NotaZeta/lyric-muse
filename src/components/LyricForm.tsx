import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Loader2 } from "lucide-react";

interface LyricFormProps {
  onGenerate: (data: FormData) => void;
  isLoading: boolean;
}

export interface FormData {
  genre: string;
  mood: string;
  theme: string;
  style: string;
}

const LyricForm = ({ onGenerate, isLoading }: LyricFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    genre: "",
    mood: "",
    theme: "",
    style: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-card rounded-2xl border border-border">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="genre">Genere Musicale</Label>
          <Select value={formData.genre} onValueChange={(value) => setFormData({ ...formData, genre: value })}>
            <SelectTrigger id="genre">
              <SelectValue placeholder="Scegli un genere" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pop">Pop</SelectItem>
              <SelectItem value="rock">Rock</SelectItem>
              <SelectItem value="hip-hop">Hip-Hop/Rap</SelectItem>
              <SelectItem value="indie">Indie</SelectItem>
              <SelectItem value="electronic">Electronic</SelectItem>
              <SelectItem value="r&b">R&B</SelectItem>
              <SelectItem value="country">Country</SelectItem>
              <SelectItem value="jazz">Jazz</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="mood">Mood/Emozione</Label>
          <Select value={formData.mood} onValueChange={(value) => setFormData({ ...formData, mood: value })}>
            <SelectTrigger id="mood">
              <SelectValue placeholder="Che atmosfera vuoi?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="happy">Felice/Energico</SelectItem>
              <SelectItem value="sad">Malinconico/Triste</SelectItem>
              <SelectItem value="romantic">Romantico</SelectItem>
              <SelectItem value="angry">Rabbia/Ribelle</SelectItem>
              <SelectItem value="reflective">Riflessivo</SelectItem>
              <SelectItem value="party">Festa/Club</SelectItem>
              <SelectItem value="chill">Rilassato/Chill</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="theme">Tema/Argomento</Label>
          <Input
            id="theme"
            placeholder="es. amore perduto, successo, libertà..."
            value={formData.theme}
            onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="style">Stile/Note Aggiuntive</Label>
          <Textarea
            id="style"
            placeholder="Descrivi lo stile che desideri (es. metafore complesse, linguaggio diretto, rime baciate...)"
            value={formData.style}
            onChange={(e) => setFormData({ ...formData, style: e.target.value })}
            className="min-h-[100px]"
          />
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-gradient-musical hover:opacity-90 transition-opacity"
        disabled={isLoading || !formData.genre || !formData.mood}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Generando...
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4 mr-2" />
            Genera Testo
          </>
        )}
      </Button>
    </form>
  );
};

export default LyricForm;
