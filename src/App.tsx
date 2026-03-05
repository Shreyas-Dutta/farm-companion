import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import News from "./pages/News";
import Market from "./pages/Market";
import Scan from "./pages/Scan";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import BottomNav from "./components/BottomNav";
import Login from "./pages/Login";
import RequireAuth from "./components/RequireAuth";
import ProfileSetup from "./pages/ProfileSetup";
import { useAuth } from "./hooks/useAuth";

const queryClient = new QueryClient();

const AppShell = () => {
  const { user } = useAuth();
  const location = useLocation();

  const showBottomNav = user && location.pathname !== "/login";

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile-setup"
          element={
            <RequireAuth>
              <ProfileSetup />
            </RequireAuth>
          }
        />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Index />
            </RequireAuth>
          }
        />
        <Route
          path="/news"
          element={
            <RequireAuth>
              <News />
            </RequireAuth>
          }
        />
        <Route
          path="/market"
          element={
            <RequireAuth>
              <Market />
            </RequireAuth>
          }
        />
        <Route
          path="/scan"
          element={
            <RequireAuth>
              <Scan />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showBottomNav && <BottomNav />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
