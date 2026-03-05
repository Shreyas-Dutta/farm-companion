import { createRoot } from "react-dom/client";
import App from "./App.tsx";
<<<<<<< HEAD
import { AuthProvider } from "./hooks/useAuth";
import { LanguageProvider } from "./hooks/useLanguage";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </AuthProvider>,
);
=======
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
>>>>>>> aa7cc908cefec79602e0ee60a1f2137c1671efe8
