import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";

export type SupportedLanguage = "en" | "hi" | "as";

type LanguageContextValue = {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = "farm-companion-language";
const PROFILE_STORAGE_KEY = "farm-companion-profile";

const isSupported = (lang: string | null | undefined): lang is SupportedLanguage =>
  lang === "en" || lang === "hi" || lang === "as";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>("hi");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (isSupported(stored)) {
        setLanguageState(stored);
        return;
      }

      const profileRaw = localStorage.getItem(PROFILE_STORAGE_KEY);
      if (profileRaw) {
        const profile = JSON.parse(profileRaw) as { language?: string };
        if (isSupported(profile.language)) {
          setLanguageState(profile.language);
          localStorage.setItem(LANGUAGE_STORAGE_KEY, profile.language);
          return;
        }
      }
    } catch {
      // ignore and fall back to default
    }
    setLanguageState("hi");
  }, []);

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
      const profileRaw = localStorage.getItem(PROFILE_STORAGE_KEY);
      if (profileRaw) {
        const profile = JSON.parse(profileRaw) as Record<string, unknown>;
        profile.language = lang;
        localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
      }
    } catch {
      // ignore storage errors
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
};

