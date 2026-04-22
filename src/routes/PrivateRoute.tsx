import { Navigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"
import type { JSX } from "react"
// import { BallonLoader } from "@/components/loaders/BallonLoader"
import { BasketballLoader } from "@/components/loaders/BasketballLoader"

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth()

  if (loading) {
    return <div className="text-center"><BasketballLoader isLoading={true} /></div>
  }

  if (!user) {
    return <Navigate to="/" replace />
  }

  return children
}