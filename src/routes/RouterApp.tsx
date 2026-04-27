import LayoutWithNavbar from "@/components/layout/LayoutWithNavbar"
import AuthPage from "@/pages/AuthPage"
import Dashboard from "@/pages/Dashboard"
import DiaryPage from "@/pages/DiaryPage"
import HomePage from "@/pages/HomePage"
import NotFoundPage from "@/pages/errors/NotFoundPage"
import ProfilePage from "@/pages/ProfilePage"
import SessionFormPage from "@/pages/SessionFormPage"
import SessionPage from "@/pages/SessionPage"
import StatsPage from "@/pages/StatsPage"
import { Route, Routes, useLocation } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import ShoesPage from "@/pages/ShoesPage"

const RouterApp = () => {
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      {/* PUBLIC */}
      <Route path="/" element={<AuthPage />} />
      <Route path="/*" element={<NotFoundPage />} />

      {/* PRIVATE */}
      <Route element={<LayoutWithNavbar />}>
        <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
        <Route path="/session" element={<PrivateRoute><SessionPage /></PrivateRoute>} />
        <Route path="/diary" element={<PrivateRoute><DiaryPage /></PrivateRoute>} />
        <Route path="/stats" element={<PrivateRoute><StatsPage /></PrivateRoute>} />
        <Route path="/shoes" element={<PrivateRoute><ShoesPage /></PrivateRoute>} />
      </Route>
      <Route path="/form" element={<PrivateRoute><SessionFormPage /></PrivateRoute>} />
      <Route path="/form/:id" element={<PrivateRoute><SessionFormPage /></PrivateRoute>} />

      {/* TEST */}
      <Route path="/dashboard" element={<Dashboard />} />
      
    </Routes>
  )
}

export default RouterApp
