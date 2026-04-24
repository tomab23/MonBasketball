import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/AuthContext";
import { stringToDate } from "@/helpers/DateFormat";
import { useSession } from "@/hooks/useSession";
import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { sessions } = useSession();

  return (
    <div className="contenu">
      HOME PAGE
      <br />
      <Button onClick={() => navigate("/4")}>404</Button>
      <Button onClick={() => navigate("/dashboard")}>Dashboard test</Button>
      <Button onClick={() => navigate("/form")}>Session form test</Button>

      <br /><br /><br />
      Nombre de sessions depuis le <i>{stringToDate(user?.created_at)}</i> : <b>{sessions.length}</b>
    </div>
  )
}

export default HomePage
