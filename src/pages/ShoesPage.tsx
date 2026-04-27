import { CardShoes } from "@/components/CardShoes"
import Header from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { useShoes } from "@/hooks/useShoes"
import { Euro, PlusCircle, SportShoe } from "lucide-react"

const ShoesPage = () => {
    const { shoes, totalPrice } = useShoes()

  return (
    <div className="contenu">
      <Header title="Mes chaussures">
        <Button
          className="max-sm:text-xs"
          variant={"default"}
          onClick={() => ""}
        >
          <PlusCircle /> Ajouter une paire
        </Button>
      </Header>


      <div className="flex gap-5 mt-3">
        <div className="flex gap-1.5">
            <SportShoe />
            {shoes.length}
        </div>

        <div className="flex gap-0.5">
             <Euro />
             {totalPrice}
        </div>
      </div>

      <div className="mt-2 grid grid-cols-2 max-sm:grid-cols-1 gap-4 max-sm:gap-2">
        {shoes.map((shoes) => (
            <CardShoes shoes={shoes} key={shoes.id} />
        ))}
      </div>
    </div>
  )
}

export default ShoesPage
