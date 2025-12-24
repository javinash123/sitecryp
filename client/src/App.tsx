import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Features from "@/pages/Features";
import CaseStudies from "@/pages/CaseStudies";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about">
          {() => (
            <>
              <Navbar />
              <main className="flex-grow">
                <About />
              </main>
              <Footer />
            </>
          )}
        </Route>
        <Route path="/features">
          {() => (
            <>
              <Navbar />
              <main className="flex-grow">
                <Features />
              </main>
              <Footer />
            </>
          )}
        </Route>
        <Route path="/case-studies">
          {() => (
            <>
              <Navbar />
              <main className="flex-grow">
                <CaseStudies />
              </main>
              <Footer />
            </>
          )}
        </Route>
        <Route path="/contact">
          {() => (
            <>
              <Navbar />
              <main className="flex-grow">
                <Contact />
              </main>
              <Footer />
            </>
          )}
        </Route>
        <Route path="/faq">
          {() => (
            <>
              <Navbar />
              <main className="flex-grow">
                <FAQ />
              </main>
              <Footer />
            </>
          )}
        </Route>
        <Route path="/privacy">
          {() => (
            <>
              <Navbar />
              <main className="flex-grow">
                <Privacy />
              </main>
              <Footer />
            </>
          )}
        </Route>
        <Route path="/terms">
          {() => (
            <>
              <Navbar />
              <main className="flex-grow">
                <Terms />
              </main>
              <Footer />
            </>
          )}
        </Route>
        <Route>
          {() => (
            <>
              <Navbar />
              <main className="flex-grow">
                <NotFound />
              </main>
              <Footer />
            </>
          )}
        </Route>
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
