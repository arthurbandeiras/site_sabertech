import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Layout from "./Layout";

import Index from "./pages/Index";
import CourseMaterials from "./pages/CourseMaterials";
import Gallery from "./pages/Gallery";
import Actions from "./pages/Actions";
import Courses from "./pages/Courses";
import Team from "./pages/Team";
import Publications from "./pages/Publications";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/cursos" element={<Courses />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/acoes" element={<Actions />} />
            <Route path="/curso/:id" element={<CourseMaterials />} />
            <Route path="/equipe" element={<Team />} />
            <Route path="/publicacoes" element={<Publications />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;