
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import PlansPage from "./views/ContactPage";
import NotFound from "./views/NotFound";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/planes" element={<PlansPage />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </>
  );
}

export default App;
