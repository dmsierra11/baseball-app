import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewsPage from "./pages/NewsPage";
import StatisticsPage from "./pages/StatisticsPage";
import ResultsPage from "./pages/ResultsPage";
import ContactPage from "./pages/ContactPage";
import NewsItem from "./pages/news/NewsItem";
import { ResponsiveAppBar, Container } from "fantasy-baseball-ui";

const pages = [
  {
    label: "Noticias",
    path: "/news",
  },
];

const App: React.FC = () => (
  <Router>
    <ResponsiveAppBar logo="SoftballTotal" pages={pages} />
    <Container maxWidth="xl" sx={{ padding: 2 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsItem />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Container>
  </Router>
);

export default App;
