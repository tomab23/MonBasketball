// components/ShoeCard.tsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { stringToDate } from "@/helpers/StringToDate"
import type Shoes from "@/models/Shoes"
import { Separator } from "./ui/separator"
import { PenIcon } from "lucide-react"
import chaussure from "../assets/icons/chaussure.png"

interface ShoeCardProps {
  shoes: Shoes
  //   onSelect?: (shoe: Shoes) => void
}

export function CardShoes({ shoes }: ShoeCardProps) {
  return (
    <Card className="flex-row items-center justify-between overflow-hidden border-neutral-800 py-3 pr-2 transition-colors duration-200 hover:border-amber-500 dark:bg-neutral-900">
      <div className="flex gap-2">
        {/* IMAGE */}
        <div className="ml-1 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center max-sm:h-10 max-sm:w-10">
            <img
              src={chaussure}
              alt="Icon chaussure par smashingstocks"
              title="Icon par smashingstocks"
              className="block max-h-full max-w-full object-contain select-none"
              draggable={false}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <Separator orientation="vertical" />
        <div className="flex flex-col gap-1">
          {/* BRAND & NAME */}
          <div className="ml-1 flex items-center gap-2">
            <h3 className="truncate text-base leading-tight font-bold tracking-wide uppercase">
              {shoes.name}
            </h3>
            <p className="text-xs font-medium tracking-widest text-primary uppercase dark:text-amber-400">
              {shoes.brand}
            </p>
          </div>

          {/* COLOR / SIZE / PRICE */}
          <div className="flex items-center gap-0.5">
            {shoes.color && (
              <span
                className="w-fit max-w-40 truncate rounded-md border border-neutral-700 px-2 py-1 text-xs max-sm:max-w-28 dark:bg-neutral-800 dark:text-muted-foreground"
                title={shoes.color}
              >
                <span className="font-medium">{shoes.color}</span>
              </span>
            )}
            {shoes.size && (
              <span className="rounded-md border border-neutral-700 px-2 py-1 text-xs dark:bg-neutral-800 dark:text-muted-foreground">
                Taille{" "}
                <span>
                  <b>{shoes.size}</b>
                </span>
              </span>
            )}
            {shoes.price && (
              <span className="rounded-md border border-neutral-700 px-2 py-1 text-xs dark:bg-neutral-800 dark:text-muted-foreground">
                <span className="">
                  {" "}
                  <b>
                    {shoes.price.toLocaleString("fr-FR", {
                      style: "currency",
                      currency: "EUR",
                      maximumFractionDigits: 0,
                    })}
                  </b>
                </span>
              </span>
            )}
          </div>
          <p className="ml-1 text-xs text-muted-foreground italic">
            achat le {stringToDate(shoes.date_buy)}
          </p>
        </div>
      </div>
      {/* BUTTON */}
      <Button className="max-sm:text-xs" variant={"secondary"}>
        <PenIcon />
      </Button>
    </Card>
  )
}
