<<<<<<< HEAD
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, MapPin, Mail, Sprout, History, Edit, ChevronRight, Leaf, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

type SupportedLanguage = "en" | "hi" | "as";
type SexCode = "male" | "female" | "other" | "prefer_not_to_say";

type LocalProfile = {
  name: string;
  age: string;
  sex: SexCode | "";
  language: string;
};

const STORAGE_KEY = "farm-companion-profile";
=======
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, MapPin, Mail, Sprout, History, Edit, ChevronRight, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";
>>>>>>> aa7cc908cefec79602e0ee60a1f2137c1671efe8

const myCrops = [
  { name: "गेहूं", nameEn: "Wheat", status: "growing", statusHi: "बढ़ रहा है", health: "healthy", emoji: "🌾", progress: 65 },
  { name: "सरसों", nameEn: "Mustard", status: "flowering", statusHi: "फूल आ रहे हैं", health: "healthy", emoji: "🌻", progress: 80 },
  { name: "चना", nameEn: "Gram", status: "harvesting", statusHi: "कटाई", health: "stressed", emoji: "🫘", progress: 95 },
];

const scanHistory = [
  { crop: "गेहूं - पीला रतुआ", date: "2 मार्च 2026", result: "diseased", confidence: 94 },
  { crop: "सरसों - स्वस्थ", date: "28 फ़रवरी 2026", result: "healthy", confidence: 97 },
  { crop: "चना - तनावग्रस्त", date: "25 फ़रवरी 2026", result: "stressed", confidence: 88 },
];

const Profile = () => {
  const navigate = useNavigate();
<<<<<<< HEAD
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState<LocalProfile | null>(null);

  const resolveLanguage = (lang: string | undefined): SupportedLanguage => {
    if (lang === "en" || lang === "hi" || lang === "as") {
      return lang;
    }
    return "hi";
  };

  const INFO_LABELS: Record<
    SupportedLanguage,
    { age: string; sex: string; language: string; unknownLanguage: string }
  > = {
    en: { age: "Age", sex: "Sex", language: "Language", unknownLanguage: "Unknown" },
    hi: { age: "उम्र", sex: "सेक्स", language: "भाषा", unknownLanguage: "अज्ञात" },
    as: { age: "বয়স", sex: "লিংগ", language: "ভাষা", unknownLanguage: "অজ্ঞাত" },
  };

  const LANGUAGE_NAMES: Record<SupportedLanguage, Record<SupportedLanguage, string>> = {
    en: { en: "English", hi: "हिन्दी", as: "অসমীয়া" },
    hi: { en: "English", hi: "हिन्दी", as: "অসমীয়া" },
    as: { en: "English", hi: "হিন্দী", as: "অসমীয়া" },
  };

  const SEX_VALUE_LABELS: Record<SupportedLanguage, Record<SexCode, string>> = {
    en: {
      male: "Male",
      female: "Female",
      other: "Other",
      prefer_not_to_say: "Prefer not to say",
    },
    hi: {
      male: "पुरुष",
      female: "महिला",
      other: "अन्य",
      prefer_not_to_say: "नहीं बताना चाहते",
    },
    as: {
      male: "পুৰুষ",
      female: "মহিলা",
      other: "অন্য",
      prefer_not_to_say: "নক'ব খোজো নহয়",
    },
  };

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Partial<LocalProfile> & { gender?: string };
        // Migrate older shape with `gender` only
        const migrated: LocalProfile = {
          name: parsed.name ?? "",
          age: parsed.age ?? "",
          sex: (parsed.sex ?? parsed.gender ?? "") as SexCode | "",
          language: parsed.language ?? "",
        };
        setProfile(migrated);
      } catch {
        setProfile(null);
        navigate("/profile-setup", { replace: true });
      }
    } else {
      navigate("/profile-setup", { replace: true });
    }
  }, [navigate]);

  const currentLanguage = resolveLanguage(profile?.language);
  const labels = INFO_LABELS[currentLanguage];
  const languageName =
    profile?.language && LANGUAGE_NAMES[currentLanguage][resolveLanguage(profile.language)];
  const sexText =
    profile?.sex && profile.sex !== ""
      ? SEX_VALUE_LABELS[currentLanguage][profile.sex as SexCode] ?? profile.sex
      : "";
=======
>>>>>>> aa7cc908cefec79602e0ee60a1f2137c1671efe8

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="bg-primary text-primary-foreground px-4 pt-10 pb-6 rounded-b-3xl">
        <div className="max-w-lg mx-auto">
          <button onClick={() => navigate(-1)} className="mb-3">
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <User className="w-8 h-8" />
            </div>
<<<<<<< HEAD
              <div className="flex-1">
                <h1 className="text-lg font-bold font-hindi">
                  {profile?.name || user?.displayName || "कृषक मित्र"}
                </h1>
                <div className="flex items-center gap-1 text-xs opacity-80">
                  <MapPin className="w-3 h-3" />
                  <span className="font-hindi">आपका खेत</span>
                </div>
                <div className="flex items-center gap-1 text-xs opacity-80 mt-0.5">
                  <Mail className="w-3 h-3" />
                  <span>{user?.email}</span>
                </div>
                {profile?.age && (
                  <p className="text-[11px] text-muted-foreground mt-1">
                    {labels.age}: {profile.age}
                    {sexText && ` | ${labels.sex}: ${sexText}`}
                    {profile?.language &&
                      ` | ${labels.language}: ${languageName ?? labels.unknownLanguage}`}
                  </p>
                )}
              </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="text-primary-foreground">
                <Edit className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground"
                onClick={logout}
                title="Logout"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
=======
            <div className="flex-1">
              <h1 className="text-lg font-bold font-hindi">रामलाल शर्मा</h1>
              <div className="flex items-center gap-1 text-xs opacity-80">
                <MapPin className="w-3 h-3" />
                <span className="font-hindi">जयपुर, राजस्थान</span>
              </div>
              <div className="flex items-center gap-1 text-xs opacity-80 mt-0.5">
                <Mail className="w-3 h-3" />
                <span>ramlal@email.com</span>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="text-primary-foreground">
              <Edit className="w-4 h-4" />
            </Button>
>>>>>>> aa7cc908cefec79602e0ee60a1f2137c1671efe8
          </div>
        </div>
      </header>

      <div className="max-w-lg mx-auto px-4 mt-5 space-y-5">
        {/* My Crops */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Sprout className="w-5 h-5 text-primary" />
            <h2 className="font-semibold text-foreground">
              <span className="font-hindi">मेरी फसलें</span>
              <span className="text-muted-foreground text-sm ml-2">My Crops</span>
            </h2>
          </div>
          <div className="space-y-2">
            {myCrops.map((crop) => (
              <Card key={crop.nameEn} className="border border-border">
                <CardContent className="p-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{crop.emoji}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold font-hindi">{crop.name}</h3>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                          crop.health === "healthy" ? "bg-success/10 text-success" :
                          crop.health === "stressed" ? "bg-warning/10 text-warning" :
                          "bg-destructive/10 text-destructive"
                        }`}>
                          {crop.health === "healthy" ? "स्वस्थ" : crop.health === "stressed" ? "तनाव" : "रोग"}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground font-hindi">{crop.statusHi}</p>
                      <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all"
                          style={{ width: `${crop.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Scan History */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <History className="w-5 h-5 text-primary" />
            <h2 className="font-semibold text-foreground">
              <span className="font-hindi">स्कैन इतिहास</span>
              <span className="text-muted-foreground text-sm ml-2">Scan History</span>
            </h2>
          </div>
          <div className="space-y-2">
            {scanHistory.map((scan, i) => (
              <Card key={i} className="border border-border cursor-pointer hover:bg-muted/50 transition-colors">
                <CardContent className="p-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-hindi text-foreground">{scan.crop}</p>
                    <p className="text-xs text-muted-foreground font-hindi">{scan.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-semibold ${
                      scan.result === "healthy" ? "text-success" :
                      scan.result === "stressed" ? "text-warning" :
                      "text-destructive"
                    }`}>
                      {scan.confidence}%
                    </span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
