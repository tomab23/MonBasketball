import { CardShoes } from "@/components/features/shoes/CardShoes"
import DialogAddShoe from "@/components/features/shoes/DialogAddShoe"
import Header from "@/components/layout/Header"
import { useShoes } from "@/hooks/useShoes"
import { Euro, SportShoe } from "lucide-react"

const ShoesPage = () => {
  const { shoes, totalPrice } = useShoes()

  return (
    <div className="contenu">
      <Header title="Mes chaussures">
        {/* <Button
          className="max-sm:text-xs"
          variant={"default"}
          onClick={() => ""}
        >
          <PlusCircle /> Ajouter une paire
        </Button> */}
        <DialogAddShoe />
      </Header>

      <div className="mt-3 flex gap-5">
        <div className="flex gap-1.5">
          <SportShoe />
          {shoes.length}
        </div>

        <div className="flex gap-0.5">
          <Euro />
          {totalPrice}
        </div>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-4 max-sm:grid-cols-1 max-sm:gap-2">
        {shoes.map((shoes) => (
          <CardShoes shoes={shoes} key={shoes.id} />
        ))}
      </div>
    </div>
  )
}

export default ShoesPage
