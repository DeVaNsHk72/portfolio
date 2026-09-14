import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Recognition from "./components/Recognition";
import Details from "./components/Details";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-4xl px-6">
        <main>
          <Hero />
          <Work />
          <Projects />
          <Recognition />
          <Details />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
