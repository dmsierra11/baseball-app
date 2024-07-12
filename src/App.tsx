import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import NewsPage from "./pages/NewsPage";
// import StatisticsPage from './pages/StatisticsPage';
// import ResultsPage from './pages/ResultsPage';
// import StandingsPage from './pages/StandingsPage';
import { ResponsiveAppBar, Container } from "fantasy-baseball-ui";
// import reactLogo from "./assets/LMS.png";

const pages = ['Noticias', 'Calendario', 'Resultados', 'Equipos'];
const settings = ['Inicia Sesión'];

const App: React.FC = () => (
  <Router>
    <ResponsiveAppBar logo={'SoftballReference'} pages={pages} settings={settings} />
    <Container maxWidth="xl" sx={{ padding: 2 }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<NewsPage />} />
        {/* <Route path="/statistics" element={<StatisticsPage />} /> */}
        {/* <Route path="/results" element={<ResultsPage />} /> */}
        {/* <Route path="/standings" element={<StandingsPage />} /> */}
      </Routes>
    </Container>
  </Router>
);

export default App;