import Navigation from './components/Navigation'
import SlideDeck from './components/SlideDeck'
import PreShow from './components/PreShow'
import Countdown from './components/Countdown'
import IntroStory from './components/IntroStory'
import Hero from './components/Hero'
import Scenario from './components/Scenario'
import CinematicReveal from './components/CinematicReveal'
import Architecture from './components/Architecture'
import Simulation from './components/Simulation'
import AnomalyDetection from './components/AnomalyDetection'
import FaceRecognition from './components/FaceRecognition'
import Results from './components/Results'
import Limitations from './components/Limitations'
import Team from './components/Team'
import References from './components/References'
import Footer from './components/Footer'
import { SlideDeckProvider } from './context/SlideDeckContext'

const SLIDES = [
  { id: 'preshow',      label: 'Pré-show',    component: PreShow },
  { id: 'countdown',   label: 'Início',       component: Countdown },
  { id: 'story',       label: 'História',     component: IntroStory },
  { id: 'hero',        label: 'Título',       component: Hero },
  { id: 'cinematic',   label: 'Reveal',       component: CinematicReveal },
  { id: 'scenario',    label: 'Cenário',      component: Scenario },
  { id: 'architecture',label: 'Arquitectura', component: Architecture },
  { id: 'simulation',  label: 'Simulação',    component: Simulation },
  { id: 'anomaly',     label: 'Módulo 01',    component: AnomalyDetection },
  { id: 'face',        label: 'Módulo 02',    component: FaceRecognition },
  { id: 'results',     label: 'Resultados',   component: Results },
  { id: 'limitations', label: 'Limites',      component: Limitations },
  { id: 'team',        label: 'Equipa',       component: Team },
  { id: 'references',  label: 'Referências',  component: References },
  { id: 'footer',      label: 'Fim',          component: Footer },
]

export default function App() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-white text-paper-100">
      <SlideDeckProvider slides={SLIDES}>
        <Navigation />
        <SlideDeck slides={SLIDES} />
      </SlideDeckProvider>
    </div>
  )
}
