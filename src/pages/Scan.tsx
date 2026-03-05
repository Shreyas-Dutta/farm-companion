import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Upload, ArrowLeft, Loader2, Leaf, AlertTriangle, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

type ScanResult = {
  plantName: string;
  plantNameHi: string;
  confidence: number;
  healthStatus: "healthy" | "diseased" | "stressed";
  disease?: string;
  diseaseHi?: string;
  description: string;
  descriptionHi: string;
  treatment?: string;
  treatmentHi?: string;
};

const Scan = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setSelectedImage(ev.target?.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;
    setIsAnalyzing(true);

    // Mock analysis for now — will be replaced with Lovable Cloud edge function
    await new Promise((resolve) => setTimeout(resolve, 2500));

    setResult({
      plantName: "Wheat (Triticum aestivum)",
      plantNameHi: "गेहूं",
      confidence: 94,
      healthStatus: "diseased",
      disease: "Yellow Rust",
      diseaseHi: "पीला रतुआ",
      description: "Yellow rust is a fungal disease that affects wheat crops. It appears as yellow-orange pustules on leaves.",
      descriptionHi: "पीला रतुआ एक कवक रोग है जो गेहूं की फसल को प्रभावित करता है। पत्तियों पर पीले-नारंगी दाने दिखाई देते हैं।",
      treatment: "Apply Propiconazole 25% EC @ 0.1% or Tebuconazole 25.9% EC spray.",
      treatmentHi: "प्रोपिकोनाजोल 25% EC @ 0.1% या टेबुकोनाजोल 25.9% EC का छिड़काव करें।",
    });
    setIsAnalyzing(false);
  };

  const handleReset = () => {
    setSelectedImage(null);
    setResult(null);
  };

  const getHealthColor = (status: string) => {
    switch (status) {
      case "healthy": return "text-success";
      case "diseased": return "text-destructive";
      case "stressed": return "text-warning";
      default: return "text-muted-foreground";
    }
  };

  const getHealthLabel = (status: string) => {
    switch (status) {
      case "healthy": return { hi: "स्वस्थ", en: "Healthy" };
      case "diseased": return { hi: "रोगग्रस्त", en: "Diseased" };
      case "stressed": return { hi: "तनावग्रस्त", en: "Stressed" };
      default: return { hi: "अज्ञात", en: "Unknown" };
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="bg-primary text-primary-foreground px-4 pt-10 pb-4">
        <div className="max-w-lg mx-auto">
          <button onClick={() => navigate(-1)} className="mb-2">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold font-hindi flex items-center gap-2">
            <Leaf className="w-5 h-5" />
            फसल स्कैनर
          </h1>
          <p className="text-xs opacity-80">AI Crop Health Scanner</p>
        </div>
      </header>

      <div className="max-w-lg mx-auto px-4 mt-4 space-y-4">
        {!selectedImage ? (
          <Card className="border-2 border-dashed border-primary/30">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-10 h-10 text-primary" />
              </div>
              <h2 className="font-semibold font-hindi text-foreground mb-1">फसल की फोटो अपलोड करें</h2>
              <p className="text-xs text-muted-foreground mb-6">Upload a photo of your crop for AI analysis</p>

              <div className="flex flex-col gap-3">
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full rounded-xl"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  <span className="font-hindi">गैलरी से चुनें</span>
                  <span className="text-xs ml-2 opacity-70">Gallery</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full rounded-xl"
                >
                  <Camera className="w-4 h-4 mr-2" />
                  <span className="font-hindi">कैमरा खोलें</span>
                  <span className="text-xs ml-2 opacity-70">Camera</span>
                </Button>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleImageSelect}
                className="hidden"
              />
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Image Preview */}
            <Card className="overflow-hidden border border-border">
              <img
                src={selectedImage}
                alt="Selected crop"
                className="w-full h-56 object-cover"
              />
              <CardContent className="p-3 flex gap-2">
                {!result && (
                  <Button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    className="flex-1 rounded-xl"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        <span className="font-hindi">विश्लेषण हो रहा है...</span>
                      </>
                    ) : (
                      <>
                        <Leaf className="w-4 h-4 mr-2" />
                        <span className="font-hindi">विश्लेषण करें</span>
                        <span className="text-xs ml-1 opacity-70">Analyze</span>
                      </>
                    )}
                  </Button>
                )}
                <Button variant="outline" onClick={handleReset} className="rounded-xl">
                  <span className="font-hindi text-xs">नया स्कैन</span>
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            {result && (
              <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Plant ID */}
                <Card className="border border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-semibold font-hindi">🌱 पहचान | Identification</h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">
                        {result.confidence}% विश्वास
                      </span>
                    </div>
                    <p className="text-lg font-bold font-hindi text-foreground">{result.plantNameHi}</p>
                    <p className="text-sm text-muted-foreground">{result.plantName}</p>
                  </CardContent>
                </Card>

                {/* Health Status */}
                <Card className="border border-border">
                  <CardContent className="p-4">
                    <h3 className="text-sm font-semibold font-hindi mb-2">🏥 स्वास्थ्य स्थिति | Health</h3>
                    <div className={`flex items-center gap-2 ${getHealthColor(result.healthStatus)}`}>
                      {result.healthStatus === "healthy" ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertTriangle className="w-5 h-5" />
                      )}
                      <span className="font-semibold font-hindi">
                        {getHealthLabel(result.healthStatus).hi} ({getHealthLabel(result.healthStatus).en})
                      </span>
                    </div>
                    {result.disease && (
                      <div className="mt-2 bg-destructive/10 rounded-lg p-3">
                        <p className="text-sm font-semibold text-destructive font-hindi">{result.diseaseHi}</p>
                        <p className="text-xs text-muted-foreground">{result.disease}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Description */}
                <Card className="border border-border">
                  <CardContent className="p-4">
                    <h3 className="text-sm font-semibold font-hindi mb-2">📋 विवरण | Details</h3>
                    <p className="text-sm font-hindi text-foreground leading-relaxed">{result.descriptionHi}</p>
                    <p className="text-xs text-muted-foreground mt-2 italic">{result.description}</p>
                  </CardContent>
                </Card>

                {/* Treatment */}
                {result.treatment && (
                  <Card className="border border-primary/30 bg-primary/5">
                    <CardContent className="p-4">
                      <h3 className="text-sm font-semibold font-hindi mb-2">💊 उपचार | Treatment</h3>
                      <p className="text-sm font-hindi text-foreground leading-relaxed">{result.treatmentHi}</p>
                      <p className="text-xs text-muted-foreground mt-2 italic">{result.treatment}</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Scan;
