import { Card, CardContent } from "@/components/ui/card";
import { Sprout } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const crops = [
  { name: "गेहूं", nameEn: "Wheat", emoji: "🌾", seasonHi: "रबी", seasonEn: "Rabi" },
  { name: "चावल", nameEn: "Rice", emoji: "🍚", seasonHi: "खरीफ", seasonEn: "Kharif" },
  { name: "कपास", nameEn: "Cotton", emoji: "🧶", seasonHi: "खरीफ", seasonEn: "Kharif" },
  { name: "गन्ना", nameEn: "Sugarcane", emoji: "🎋", seasonHi: "वार्षिक", seasonEn: "Annual" },
  { name: "सरसों", nameEn: "Mustard", emoji: "🌻", seasonHi: "रबी", seasonEn: "Rabi" },
  { name: "मक्का", nameEn: "Maize", emoji: "🌽", seasonHi: "खरीफ", seasonEn: "Kharif" },
];

const CropCarousel = () => {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const title =
    language === "en"
      ? "Major crops"
      : language === "hi"
        ? "प्रमुख फसलें"
        : "প্ৰধান ফচল";

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Sprout className="w-5 h-5 text-primary" />
        <h2 className="font-semibold text-foreground font-hindi">{title}</h2>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
        {crops.map((crop) => (
          <Card
            key={crop.nameEn}
            className="min-w-[100px] border border-border hover:border-primary/40 transition-colors cursor-pointer"
          >
            <CardContent className="p-3 text-center">
              <div className="text-3xl mb-1">{crop.emoji}</div>
              <div className="text-sm font-semibold font-hindi">
                {isEnglish ? crop.nameEn : crop.name}
              </div>
              <div className="text-[10px] text-primary mt-1 font-hindi">
                {isEnglish ? crop.seasonEn : crop.seasonHi}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CropCarousel;
