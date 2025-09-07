import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Signup from "./components/Signup";
import ChatBot from "./components/ChatBot";
import SmartIrrigation from "./components/SmartIrrigation";
import WaterLevelAndWasteManagementPlanner from "./components/WaterLevelAndWasteManagementPlanner";
import PestAttackPrediction from "./components/PestAttackPrediction";
import AIPestDetection from "./components/AIPestDetection";
import ClimatePrediction from "./components/ClimatePrediction";
import MachineRental from "./components/MachineRental";
import PlantDiseaseDetection from "./components/PlantDiseaseDetection";
import Policies from "./components/policy";
import Lender from "./components/Lender";
import Receiver from "./components/Receiver";
import Header from "./components/Header";
import Potato from "./components/Potato";
import BellPepper from "./components/BellPepper";
import Tomato from "./components/tomato";
import FarmProfitability from "./components/FarmProfitability";
// import PlantDiseaseHeatMap from "./components/PlantDiseaseHeatMap";
import "./styles/App.css";
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 p-3 rounded-full bg-primary-light dark:bg-primary-dark text-white hover:bg-opacity-80 transition-all duration-300 shadow-lg"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
    </button>
  );
};

const AppContent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const { isDark } = useTheme();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("authToken");
  };

  const ShowHeader = () => {
    const location = useLocation();
    return !["/auth", "/signup"].includes(location.pathname) ? (
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
    ) : null;
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen bg-background-light dark:bg-background-dark">Loading...</div>;
  }

  return (
    <div className={`min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300`}>
      <Router>
        <ShowHeader />
        <Routes>
          <Route path="/auth" element={<Auth onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/machine-rental/lender" element={isAuthenticated ? <Lender /> : <Navigate to="/auth" />} />
          <Route path="/machine-rental/receiver" element={isAuthenticated ? <Receiver /> : <Navigate to="/auth" />} />
          <Route path="/machine-rental" element={isAuthenticated ? <MachineRental /> : <Navigate to="/auth" />} />
          <Route path="/chatbot" element={isAuthenticated ? <ChatBot /> : <Navigate to="/auth" />} />
          <Route path="/smart-irrigation" element={isAuthenticated ? <SmartIrrigation /> : <Navigate to="/auth" />} />
          <Route path="/smart-irrigation/water-level-and-waste-management-planner" element={isAuthenticated ? <WaterLevelAndWasteManagementPlanner /> : <Navigate to="/auth" />} />
          <Route path="/smart-irrigation/pest-attack-prediction" element={isAuthenticated ? <PestAttackPrediction /> : <Navigate to="/auth" />} />
          <Route path="/smart-irrigation/farm-profit" element={isAuthenticated ? <FarmProfitability /> : <Navigate to="/auth" />} />
          {/* <Route path="/smart-irrigation/plant-disease-heat-map" element={isAuthenticated ? <PlantDiseaseHeatMap /> : <Navigate to="/auth" />} /> */}
          <Route path="/ai-pest-detection" element={isAuthenticated ? <AIPestDetection /> : <Navigate to="/auth" />} />
          <Route path="/climate-prediction" element={isAuthenticated ? <ClimatePrediction /> : <Navigate to="/auth" />} />
          <Route path="/plant-disease-detection" element={isAuthenticated ? <PlantDiseaseDetection /> : <Navigate to="/auth" />} />
          <Route path="/plant-disease-detection/potato" element={isAuthenticated ? <Potato /> : <Navigate to="/auth" />} />
          <Route path="/plant-disease-detection/bellpepper" element={isAuthenticated ? <BellPepper /> : <Navigate to="/auth" />} />
          <Route path="/plant-disease-detection/tomato" element={isAuthenticated ? <Tomato /> : <Navigate to="/auth" />} />
          <Route path="/policy" element={isAuthenticated ? <Policies /> : <Navigate to="/auth" />} />
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/auth" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <ThemeToggle />
      </Router>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;