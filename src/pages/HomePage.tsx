import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="contenu">
      HOME PAGE
      <br />
      <Button onClick={() => navigate("/4")}>404</Button>
    </div>
  )
}

export default HomePage
