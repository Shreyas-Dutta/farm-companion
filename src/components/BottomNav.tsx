import { Home, Newspaper, ScanLine, TrendingUp, User } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
<<<<<<< HEAD
import { useLanguage } from "@/hooks/useLanguage";

const navItems = [
  { to: "/", icon: Home, labels: { hi: "होम", en: "Home", as: "হোম" } },
  { to: "/news", icon: Newspaper, labels: { hi: "समाचार", en: "News", as: "খবৰ" } },
  { to: "/scan", icon: ScanLine, labels: { hi: "स्कैन", en: "Scan", as: "স্কেন" }, isCenter: true },
  { to: "/market", icon: TrendingUp, labels: { hi: "मंडी", en: "Market", as: "বজাৰ" } },
  { to: "/profile", icon: User, labels: { hi: "प्रोफ़ाइल", en: "Profile", as: "প্ৰ'ফাইল" } },
=======

const navItems = [
  { to: "/", icon: Home, label: "होम", labelEn: "Home" },
  { to: "/news", icon: Newspaper, label: "समाचार", labelEn: "News" },
  { to: "/scan", icon: ScanLine, label: "स्कैन", labelEn: "Scan", isCenter: true },
  { to: "/market", icon: TrendingUp, label: "मंडी", labelEn: "Market" },
  { to: "/profile", icon: User, label: "प्रोफ़ाइल", labelEn: "Profile" },
>>>>>>> aa7cc908cefec79602e0ee60a1f2137c1671efe8
];

const BottomNav = () => {
  const location = useLocation();
<<<<<<< HEAD
  const { language } = useLanguage();
=======
>>>>>>> aa7cc908cefec79602e0ee60a1f2137c1671efe8

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border safe-bottom">
      <div className="flex items-end justify-around px-2 pt-1 pb-2 max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          const Icon = item.icon;

          if (item.isCenter) {
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className="flex flex-col items-center -mt-5"
              >
                <div
                  className={cn(
                    "w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all",
                    isActive
                      ? "bg-primary text-primary-foreground scale-110"
                      : "bg-primary/90 text-primary-foreground"
                  )}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] mt-1 font-hindi font-medium text-foreground">
<<<<<<< HEAD
                  {item.labels[language]}
=======
                  {item.label}
>>>>>>> aa7cc908cefec79602e0ee60a1f2137c1671efe8
                </span>
              </NavLink>
            );
          }

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className="flex flex-col items-center pt-2 min-w-[56px]"
            >
              <Icon
                className={cn(
                  "w-5 h-5 transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              />
              <span
                className={cn(
                  "text-[10px] mt-1 font-hindi font-medium transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
<<<<<<< HEAD
                {item.labels[language]}
=======
                {item.label}
>>>>>>> aa7cc908cefec79602e0ee60a1f2137c1671efe8
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
