import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
<<<<<<< HEAD
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
>>>>>>> aa7cc908cefec79602e0ee60a1f2137c1671efe8
import Index from "./pages/Index";
import News from "./pages/News";
import Market from "./pages/Market";
import Scan from "./pages/Scan";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import BottomNav from "./components/BottomNav";
<<<<<<< HEAD
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

=======

const queryClient = new QueryClient();

>>>>>>> aa7cc908cefec79602e0ee60a1f2137c1671efe8
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
<<<<<<< HEAD
        <AppShell />
=======
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/news" element={<News />} />
          <Route path="/market" element={<Market />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BottomNav />
>>>>>>> aa7cc908cefec79602e0ee60a1f2137c1671efe8
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
