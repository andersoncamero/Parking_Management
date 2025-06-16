import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Login } from "./components/pages/Login";

import "./App.css";
import { AuthProvider } from "./context/AuthConstext";
import { MainLayout } from "./components/layout/MainLayout";
import { DashboardPage } from "./components/pages/DashboardPage";

export const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<MainLayout/>}>
            <Route index element={<DashboardPage/>} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};
