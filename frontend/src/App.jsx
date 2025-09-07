import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./components/Home";
// AUTHENTICATION COMMENTED OUT - Auth components disabled
// import Auth from "./components/Auth";
// import Signup from "./components/Signup";
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
  // AUTHENTICATION COMMENTED OUT - Auth state and logic disabled
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [loading, setLoading] = useState(true);
  const { isDark } = useTheme();

  // AUTHENTICATION COMMENTED OUT - Auth effects disabled
  /*
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
  */

  const ShowHeader = () => {
    const location = useLocation();
    // AUTHENTICATION COMMENTED OUT - Always show header, no auth checks
    // return !["/auth", "/signup"].includes(location.pathname) ? (
    //   <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
    // ) : null;
    return <Header />;
  };

  // AUTHENTICATION COMMENTED OUT - No loading state needed
  // if (loading) {
  //   return <div className="flex items-center justify-center min-h-screen bg-background-light dark:bg-background-dark">Loading...</div>;
  // }

  return (
    <div className={`min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300`}>
      <Router>
        <ShowHeader />
        <Routes>
          {/* AUTHENTICATION COMMENTED OUT - Auth routes disabled */}
          {/* <Route path="/auth" element={<Auth onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} /> */}
          {/* AUTHENTICATION COMMENTED OUT - All routes now accessible without auth */}
          <Route path="/machine-rental/lender" element={<Lender />} />
          <Route path="/machine-rental/receiver" element={<Receiver />} />
          <Route path="/machine-rental" element={<MachineRental />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/smart-irrigation" element={<SmartIrrigation />} />
          <Route path="/smart-irrigation/water-level-and-waste-management-planner" element={<WaterLevelAndWasteManagementPlanner />} />
          <Route path="/smart-irrigation/pest-attack-prediction" element={<PestAttackPrediction />} />
          <Route path="/smart-irrigation/farm-profit" element={<FarmProfitability />} />
          {/* <Route path="/smart-irrigation/plant-disease-heat-map" element={<PlantDiseaseHeatMap />} /> */}
          <Route path="/ai-pest-detection" element={<AIPestDetection />} />
          <Route path="/climate-prediction" element={<ClimatePrediction />} />
          <Route path="/plant-disease-detection" element={<PlantDiseaseDetection />} />
          <Route path="/plant-disease-detection/potato" element={<Potato />} />
          <Route path="/plant-disease-detection/bellpepper" element={<BellPepper />} />
          <Route path="/plant-disease-detection/tomato" element={<Tomato />} />
          <Route path="/policy" element={<Policies />} />
          <Route path="/" element={<Home />} />
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