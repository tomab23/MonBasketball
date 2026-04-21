import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="contenu">
      HOME PAGE
      <br />
      <Button onClick={() => navigate("/4")}>404</Button>
      <Button onClick={() => navigate("/dashboard")}>Dashboard test</Button>
      <Button onClick={() => navigate("/form")}>Session form test</Button>
    </div>
  )
}

export default HomePage
