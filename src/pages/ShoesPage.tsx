import { CardShoe } from "@/components/features/shoes/CardShoe"
import DialogAddShoe from "@/components/features/shoes/DialogAddShoe"
import Header from "@/components/layout/Header"
import { useShoe } from "@/hooks/useShoe"
import { Euro, RefreshCcw, SportShoe } from "lucide-react"

const ShoesPage = () => {
  const { shoes, totalPrice } = useShoe()

  return (
    <div className="contenu">
      <Header title="Mes chaussures">
        <DialogAddShoe />
      </Header>

      <div className="mt-3 flex gap-5 items-center">
        <div className="flex gap-1.5">
          <SportShoe />
          {shoes.length}
        </div>

        <div className="flex gap-0.5">
          <Euro />
          {totalPrice}
        </div>

        <RefreshCcw className="w-4 h-4 hover:scale-110 hover:cursor-pointer" onClick={() => window.location.reload()} />
      </div>

      <div className="mt-2 grid grid-cols-2 gap-4 max-sm:grid-cols-1 max-sm:gap-2">
        {shoes.map((shoe) => (
          <CardShoe shoe={shoe} key={shoe.id} />
        ))}
      </div>
    </div>
  )
}

export default ShoesPage
