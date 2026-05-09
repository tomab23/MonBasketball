import EnjuryCard from "@/components/features/enjurys/EnjuryCard"
import Header from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { useEnjury } from "@/hooks/useEnjury"
import { HospitalIcon, RefreshCcw } from "lucide-react"

const EnjuryPage = () => {
    const { enjurys } = useEnjury();

  return (
    <div className="contenu">
      <Header title="Mes blessures">
        <Button>Add new enjury</Button>
      </Header>

      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-5">
          <div className="flex gap-1.5">
            <HospitalIcon />
            {enjurys.length} 
          </div>

          {/* <div className="flex gap-0.5">
          <Euro />
          {totalPrice}
        </div> */}

          <RefreshCcw
            className="h-4 w-4 hover:scale-110 hover:cursor-pointer"
            onClick={() => window.location.reload()}
          />
        </div>

        <p>Filtre années</p>
      </div>

      <div className="mt-5 flex flex-col items-center gap-3 max-sm:mt-5">
        {enjurys.map((enjury) => (
            <EnjuryCard key={enjury.id} enjury={enjury} />
        ))}
      </div>
    </div>
  )
}

export default EnjuryPage
