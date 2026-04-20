import LayoutWithNavbar from "@/components/layout/LayoutWithNavbar"
import AuthPage from "@/pages/AuthPage"
import DiaryPage from "@/pages/DiaryPage"
import HomePage from "@/pages/HomePage"
import NotFoundPage from "@/pages/NotFoundPage"
import ProfilePage from "@/pages/ProfilePage"
import SessionFormPage from "@/pages/SessionFormPage"
import SessionPage from "@/pages/SessionPage"
import StatsPage from "@/pages/StatsPage"
import { Route, Routes, useLocation } from "react-router-dom"

const RouterApp = () => {
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      {/* PUBLIC */}
      <Route path="/" element={<AuthPage />} />
      <Route path="/*" element={<NotFoundPage />} />

      {/* PRIVATE */}
      <Route element={<LayoutWithNavbar />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/form" element={<SessionFormPage />} />
        <Route path="/session" element={<SessionPage />} />
        <Route path="/diary" element={<DiaryPage />} />
        <Route path="/stats" element={<StatsPage />} />
      </Route>
    </Routes>
  )
}

export default RouterApp
