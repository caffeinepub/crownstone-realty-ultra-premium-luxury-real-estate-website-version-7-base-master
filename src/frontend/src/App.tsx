import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Toaster } from "./components/ui/sonner";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FinancePage from "./pages/FinancePage";
import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage";

function Layout() {
  useEffect(() => {
    // Force dark mode on mount
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const propertiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/properties",
  component: PropertiesPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const financeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/finance",
  component: FinancePage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  propertiesRoute,
  aboutRoute,
  contactRoute,
  financeRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      forcedTheme="dark"
    >
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
