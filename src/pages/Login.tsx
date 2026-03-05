import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Leaf, LogIn } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

type LocationState = {
  from?: {
    pathname?: string;
  };
};

const PROFILE_STORAGE_KEY = "farm-companion-profile";

const Login = () => {
  const { user, loading, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const state = (location.state as LocationState) || {};
  const from = state.from?.pathname || "/";

  const hasCompleteProfile = (raw: string | null): boolean => {
    if (!raw) return false;
    try {
      const parsed = JSON.parse(raw) as {
        name?: string;
        age?: string;
        sex?: string;
        language?: string;
      };
      return Boolean(parsed.name && parsed.age && parsed.sex && parsed.language);
    } catch {
      return false;
    }
  };

  useEffect(() => {
    if (user) {
      const savedProfile = localStorage.getItem(PROFILE_STORAGE_KEY);
      if (!hasCompleteProfile(savedProfile)) {
        // Clear any old or partial profile so user is always asked again
        localStorage.removeItem(PROFILE_STORAGE_KEY);
        navigate("/profile-setup", { replace: true });
      } else {
        navigate(from, { replace: true });
      }
    }
  }, [user, from, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-emerald-50 to-background px-6">
      <div className="max-w-sm w-full space-y-8">
        <div className="flex flex-col items-center space-y-3">
          <div className="h-14 w-14 rounded-2xl bg-emerald-600 flex items-center justify-center shadow-lg">
            <Leaf className="h-8 w-8 text-emerald-50" />
          </div>
          <div className="text-center space-y-1">
            <h1 className="text-2xl font-bold tracking-tight font-hindi text-emerald-900">
              खेती साथी में आपका स्वागत है
            </h1>
            <p className="text-sm text-muted-foreground">
              सुरक्षित रूप से अपने{" "}
              <span className="font-semibold">Google (Gmail)</span> खाते से लॉगिन करें।
            </p>
          </div>
        </div>

        <div className="bg-background/80 backdrop-blur border border-emerald-100 rounded-2xl shadow-sm p-6 space-y-6">
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="font-hindi">
              लॉगिन करने से आप अपनी{" "}
              <span className="font-semibold text-foreground">फसलें, स्कैन इतिहास</span> और{" "}
              <span className="font-semibold text-foreground">व्यक्तिगत सुझाव</span> सुरक्षित रूप से देख
              सकेंगे।
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>आपका ईमेल और प्रोफ़ाइल केवल आपके खाते की पहचान के लिए उपयोग होगा।</li>
              <li>आपका डेटा Firebase के साथ सुरक्षित रूप से संग्रहित किया जाएगा।</li>
            </ul>
          </div>

          <Button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700"
            onClick={loginWithGoogle}
            disabled={loading}
          >
            <LogIn className="h-4 w-4" />
            {loading ? "लॉगिन हो रहा है..." : "Google (Gmail) से लॉगिन करें"}
          </Button>

          <p className="text-[11px] text-center text-muted-foreground">
            लॉगिन करते समय आप हमारी{" "}
            <span className="underline underline-offset-2">गोपनीयता नीति</span> और{" "}
            <span className="underline underline-offset-2">सेवा की शर्तों</span> से सहमत होते हैं।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

