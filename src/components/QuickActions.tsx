import { ScanLine, TrendingUp, Newspaper, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { useLanguage } from "@/hooks/useLanguage";

const actions = [
  {
    icon: ScanLine,
    labels: { en: "Scan crop", hi: "फसल स्कैन", as: "ফসল স্কেন" },
    to: "/scan",
    color: "bg-primary",
  },
  {
    icon: TrendingUp,
    labels: { en: "Prices", hi: "मंडी भाव", as: "বজাৰ মূল্য" },
    to: "/market",
    color: "bg-accent",
  },
  {
    icon: Newspaper,
    labels: { en: "News", hi: "समाचार", as: "খবৰ" },
    to: "/news",
    color: "bg-secondary",
  },
  {
    icon: BookOpen,
    labels: { en: "Tips", hi: "सुझाव", as: "পৰামৰ্শ" },
    to: "/news?tab=tips",
    color: "bg-success",
  },
=======

const actions = [
  { icon: ScanLine, label: "फसल स्कैन", labelEn: "Scan Crop", to: "/scan", color: "bg-primary" },
  { icon: TrendingUp, label: "मंडी भाव", labelEn: "Prices", to: "/market", color: "bg-accent" },
  { icon: Newspaper, label: "समाचार", labelEn: "News", to: "/news", color: "bg-secondary" },
  { icon: BookOpen, label: "सुझाव", labelEn: "Tips", to: "/news?tab=tips", color: "bg-success" },
>>>>>>> aa7cc908cefec79602e0ee60a1f2137c1671efe8
];

const QuickActions = () => {
  const navigate = useNavigate();
<<<<<<< HEAD
  const { language } = useLanguage();

  const title =
    language === "en" ? "Quick actions" : language === "hi" ? "त्वरित कार्य" : "দ্ৰুত কাৰ্য";

  return (
    <div>
      <h2 className="font-semibold text-foreground mb-3 font-hindi">{title}</h2>
=======

  return (
    <div>
      <h2 className="font-semibold text-foreground mb-3">
        <span className="font-hindi">त्वरित कार्य</span>
        <span className="text-muted-foreground text-sm ml-2">Quick Actions</span>
      </h2>
>>>>>>> aa7cc908cefec79602e0ee60a1f2137c1671efe8
      <div className="grid grid-cols-4 gap-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
<<<<<<< HEAD
              key={action.to}
              onClick={() => navigate(action.to)}
              className="flex flex-col items-center gap-1.5 group"
            >
              <div
                className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center text-primary-foreground shadow-sm group-active:scale-95 transition-transform`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-hindi text-foreground leading-tight text-center">
                {action.labels[language]}
=======
              key={action.labelEn}
              onClick={() => navigate(action.to)}
              className="flex flex-col items-center gap-1.5 group"
            >
              <div className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center text-primary-foreground shadow-sm group-active:scale-95 transition-transform`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-hindi text-foreground leading-tight text-center">
                {action.label}
>>>>>>> aa7cc908cefec79602e0ee60a1f2137c1671efe8
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
