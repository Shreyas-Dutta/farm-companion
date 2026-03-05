import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Leaf } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage, type SupportedLanguage } from "@/hooks/useLanguage";

type SupportedLanguage = "en" | "hi" | "as";

type LocalProfile = {
  name: string;
  age: string;
  sex: string;
  language: string;
};

const STORAGE_KEY = "farm-companion-profile";

const ProfileSetup = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();

  const [form, setForm] = useState<LocalProfile>({
    name: "",
    age: "",
    sex: "",
    language: "",
  });

  const resolveLanguage = (lang: string | undefined): SupportedLanguage => {
    if (lang === "en" || lang === "hi" || lang === "as") {
      return lang;
    }
    if (language === "en" || language === "hi" || language === "as") {
      return language;
    }
    // default to Hindi for new users
    return "hi";
  };

  const STRINGS: Record<
    SupportedLanguage,
    {
      title: string;
      description: string;
      nameLabel: string;
      namePlaceholder: string;
      ageLabel: string;
      agePlaceholder: string;
      sexLabel: string;
      languageLabel: string;
      submit: string;
    }
  > = {
    en: {
      title: "Complete your profile",
      description: "For better recommendations, we need a few basic details about you.",
      nameLabel: "Name",
      namePlaceholder: "Full name",
      ageLabel: "Age",
      agePlaceholder: "Age in years",
      sexLabel: "Sex",
      languageLabel: "Preferred language",
      submit: "Continue",
    },
    hi: {
      title: "अपना प्रोफ़ाइल पूरा करें",
      description: "बेहतर सुझावों के लिए हम आपसे कुछ मूलभूत जानकारी पूछ रहे हैं।",
      nameLabel: "नाम",
      namePlaceholder: "अपना पूरा नाम लिखें",
      ageLabel: "उम्र",
      agePlaceholder: "उम्र (वर्षों में)",
      sexLabel: "सेक्स",
      languageLabel: "पसंदीदा भाषा",
      submit: "आगे बढ़ें",
    },
    as: {
      title: "আপোনাৰ প্ৰ'ফাইল সম্পূৰ্ণ কৰক",
      description: "উত্তম পৰামৰ্শৰ বাবে আপুনি কিছুমান বেসিক তথ্য দিয়ক।",
      nameLabel: "নাম",
      namePlaceholder: "আপোনাৰ সম্পূৰ্ণ নাম লিখক",
      ageLabel: "বয়স",
      agePlaceholder: "বয়স (বছৰত)",
      sexLabel: "লিংগ",
      languageLabel: "প্ৰিয় ভাষা",
      submit: "আগবঢ়ক",
    },
  };

  const currentLanguage = resolveLanguage(form.language || language);
  const t = STRINGS[currentLanguage];

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as LocalProfile;
      setForm(parsed);
    } else if (user) {
      setForm((prev) => ({
        ...prev,
        name: user.displayName || "",
      }));
    }
  }, [user]);

  const handleChange =
    (field: keyof LocalProfile) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (field === "language") {
        const nextLang = e.target.value as SupportedLanguage;
        if (nextLang === "en" || nextLang === "hi" || nextLang === "as") {
          setLanguage(nextLang);
        }
      }
    };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-emerald-50 to-background px-6">
      <div className="max-w-sm w-full space-y-8">
        <div className="flex flex-col items-center space-y-3">
          <div className="h-14 w-14 rounded-2xl bg-emerald-600 flex items-center justify-center shadow-lg">
            <Leaf className="h-8 w-8 text-emerald-50" />
          </div>
          <div className="text-center space-y-1">
            <h1 className="text-2xl font-bold tracking-tight font-hindi text-emerald-900">
              {t.title}
            </h1>
            <p className="text-sm text-muted-foreground">{t.description}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-background/80 backdrop-blur border border-emerald-100 rounded-2xl shadow-sm p-6 space-y-4"
        >
          <div className="space-y-1">
            <Label htmlFor="name" className="font-hindi">
              {t.nameLabel}
            </Label>
            <Input
              id="name"
              value={form.name}
              onChange={handleChange("name")}
              required
              placeholder={t.namePlaceholder}
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="age" className="font-hindi">
              {t.ageLabel}
            </Label>
            <Input
              id="age"
              type="number"
              min={10}
              max={100}
              value={form.age}
              onChange={handleChange("age")}
              required
              placeholder={t.agePlaceholder}
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="sex" className="font-hindi">
              {t.sexLabel}
            </Label>
            <select
              id="sex"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={form.sex}
              onChange={handleChange("sex")}
              required
            >
              <option value="" disabled>
                {currentLanguage === "en" ? "Select" : currentLanguage === "hi" ? "चुनें" : "বাছনি কৰক"}
              </option>
              <option value="male">Male / पुरुष / পুৰুষ</option>
              <option value="female">Female / महिला / মহিলা</option>
              <option value="other">Other / अन्य / অন্য</option>
              <option value="prefer_not_to_say">
                Prefer not to say / नहीं बताना चाहते / নক'ব খোজো নহয়
              </option>
            </select>
          </div>

          <div className="space-y-1">
            <Label htmlFor="language" className="font-hindi">
              {t.languageLabel}
            </Label>
            <select
              id="language"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={form.language}
              onChange={handleChange("language")}
              required
            >
              <option value="" disabled>
                {currentLanguage === "en" ? "Select" : currentLanguage === "hi" ? "चुनें" : "বাছনি কৰক"}
              </option>
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
              <option value="as">অসমীয়া</option>
            </select>
          </div>

          <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
            {t.submit}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetup;

