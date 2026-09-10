import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

import Home from './pages/Home'
import Registro from './pages/Registro'
import ProgramaFomento from './pages/ProgramaFomento'
import Convocatorias from './pages/Convocatorias'
import Tramites from './pages/Tramites'
import EventosExternos from './pages/EventosExternos'
import OrganosRepresentacion from './pages/OrganosRepresentacion'
import Comite from './pages/Comite'
import Consejo from './pages/Consejo'
import Multimedia from './pages/Multimedia'
import MaterialApoyo from './pages/MaterialApoyo'
import VideosOSC from './pages/VideosOSC'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/programa-de-fomento" element={<ProgramaFomento />} />
        <Route path="/programa-de-fomento/convocatorias-y-resultados" element={<Convocatorias />} />
        <Route path="/programa-de-fomento/tramites" element={<Tramites />} />
        <Route path="/programa-de-fomento/eventos-externos" element={<EventosExternos />} />
        <Route path="/organos-de-representacion" element={<OrganosRepresentacion />} />
        <Route path="/organos-de-representacion/comite" element={<Comite />} />
        <Route path="/organos-de-representacion/consejo" element={<Consejo />} />
        <Route path="/multimedia" element={<Multimedia />} />
        <Route path="/multimedia/material-de-apoyo" element={<MaterialApoyo />} />
        <Route path="/multimedia/videos-oscs" element={<VideosOSC />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
