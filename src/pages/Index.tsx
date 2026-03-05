import WeatherWidget from "@/components/WeatherWidget";
import CropCarousel from "@/components/CropCarousel";
import QuickActions from "@/components/QuickActions";
import { Button } from "@/components/ui/button";
import { ScanLine, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { useLanguage } from "@/hooks/useLanguage";

const Index = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const title =
    language === "en" ? "KisanSathi" : language === "hi" ? "किसान साथी" : "কিষাণ সাথী";
  const scanLabel =
    language === "en"
      ? "Check crop health"
      : language === "hi"
        ? "फसल स्वास्थ्य जांचें"
        : "ফসলৰ স্বাস্থ্য পৰীক্ষা কৰক";
  const subtitle =
    language === "en"
      ? "KisanSathi — Your smart farming companion"
      : language === "hi"
        ? "किसान साथी — आपका स्मार्ट खेती साथी"
        : "KisanSathi — আপোনাৰ স্মাৰ্ট কৃষি সহচৰ";
  const tipTitle =
    language === "en"
      ? "Tip of the day"
      : language === "hi"
        ? "आज का सुझाव"
        : "আজিৰ পৰামৰ্শ";
  const tipBody =
    language === "en"
      ? "Wheat sowing requires 50–60% soil moisture. Timely irrigation can boost yield by up to 20%."
      : language === "hi"
        ? "गेहूं की बुवाई के समय मिट्टी की नमी 50–60% होनी चाहिए। सही समय पर सिंचाई से उपज 20% तक बढ़ सकती है।"
        : "গম বোৱনি সময় মাটিৰ আর্দ্ৰতা ৫০–৬০% হোৱাটো প্ৰয়োজনীয়। সময়মতে সিঞ্চন কৰিলে উৎপাদন ২০% পৰ্যন্ত বৃদ্ধি পায়।";
=======

const Index = () => {
  const navigate = useNavigate();
>>>>>>> aa7cc908cefec79602e0ee60a1f2137c1671efe8

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="bg-primary text-primary-foreground px-4 pt-10 pb-6 rounded-b-3xl">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center gap-2 mb-1">
            <Leaf className="w-6 h-6" />
<<<<<<< HEAD
            <h1 className="text-xl font-bold">{title}</h1>
          </div>
          <p className="text-xs opacity-80">{subtitle}</p>
=======
            <h1 className="text-xl font-bold">किसान साथी</h1>
          </div>
          <p className="text-xs opacity-80">KisanSathi — Your Smart Farming Companion</p>
>>>>>>> aa7cc908cefec79602e0ee60a1f2137c1671efe8

          <div className="mt-5">
            <Button
              onClick={() => navigate("/scan")}
              size="lg"
              className="w-full bg-card text-primary hover:bg-card/90 font-semibold rounded-xl shadow-lg"
            >
              <ScanLine className="w-5 h-5 mr-2" />
<<<<<<< HEAD
              <span className="font-hindi">{scanLabel}</span>
=======
              <span className="font-hindi">फसल स्वास्थ्य जांचें</span>
              <span className="text-xs ml-2 opacity-70">Detect Health</span>
>>>>>>> aa7cc908cefec79602e0ee60a1f2137c1671efe8
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-lg mx-auto px-4 space-y-6 mt-5">
        <WeatherWidget />
        <QuickActions />
        <CropCarousel />

<<<<<<< HEAD
        <div className="bg-secondary rounded-xl p-4">
          <h3 className="text-sm font-semibold text-secondary-foreground font-hindi mb-1">
            💡 {tipTitle}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {tipBody}
=======
        {/* Tip of the Day */}
        <div className="bg-secondary rounded-xl p-4">
          <h3 className="text-sm font-semibold text-secondary-foreground font-hindi mb-1">
            💡 आज का सुझाव
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            गेहूं की बुवाई के समय मिट्टी की नमी 50-60% होनी चाहिए। सही समय पर सिंचाई से उपज 20% तक बढ़ सकती है।
          </p>
          <p className="text-[10px] text-muted-foreground mt-1 italic">
            Wheat sowing requires 50-60% soil moisture. Timely irrigation can boost yield by 20%.
>>>>>>> aa7cc908cefec79602e0ee60a1f2137c1671efe8
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
