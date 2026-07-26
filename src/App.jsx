import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Results from './components/Results'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Results />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
