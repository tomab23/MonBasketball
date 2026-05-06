import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FieldGroup } from "@/components/ui/field"
import type Shoes from "@/models/Shoes"
import { ValidShoeSchema, type ShoeFormValues } from "@/schemas/ShoeSchema"
import { useFormik } from "formik"
import { PenIcon, Trash2 } from "lucide-react"
import { useState } from "react"
import { FormikInputShoe } from "./FormikInputShoe"
import { BasketballIcon } from "@/assets/BasketballIcon"

type Props = {
  shoe: Shoes
}

const DialogEditShoe = ({ shoe }: Props) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const formik = useFormik<ShoeFormValues>({
    initialValues: {
      name: shoe.name,
      color: shoe.color,
      brand: shoe.brand,
      size: shoe.size,
      price: shoe.price,
      date: shoe.date_buy,
    },
    enableReinitialize: true,
    validationSchema: ValidShoeSchema,
    onSubmit: (values) => {
      setLoading(true)
      alert(JSON.stringify(values));

      setOpen(false);
      setLoading(false);
      
    },
  })
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button className="max-sm:text-xs" variant={"secondary"}>
            <PenIcon />
          </Button>
        }
      />

      <DialogContent className="sm:max-w-sm" showCloseButton={false}>
        <form onSubmit={formik.handleSubmit}>
          <DialogHeader>
            <DialogTitle>Modifier la "{shoe.name}"</DialogTitle>
            <DialogDescription>
              Modifier les informations de votre paire de chaussure
            </DialogDescription>
          </DialogHeader>
          <FieldGroup className="mt-5">
            {/* NAME */}
            <FormikInputShoe formik={formik} name={"name"} label="Nom*" placeholder="Nike Kyrie 3"  />
            {/* COLOR / BRAND */}
            <div className="flex gap-3">
              <FormikInputShoe formik={formik} name={"color"} label="Couleur" placeholder="Mamba mentality"  />
              <FormikInputShoe formik={formik} name={"brand"} label="Marque" placeholder="Nike"  />
            </div>
            {/* SIZE / PRICE */}
            <div className="flex gap-3">
              <FormikInputShoe formik={formik} name={"size"} label="Taille" placeholder="45" type="number"  />
              <FormikInputShoe price formik={formik} name={"price"} label="Prix" placeholder="120" type="number"  />
            </div>
            {/* DATE BUY */}
            <FormikInputShoe type="date" formik={formik} name={"date"} label="Date d'achat" />
          </FieldGroup>
          <DialogFooter className="mt-5">
            <Button
              type="button"
              className="max-sm:text-xs sm:mr-16"
              variant={"destructive"}
            >
              <Trash2 />
            </Button>
            <DialogClose render={<Button variant="outline" onClick={() => formik.resetForm()}>Annuler</Button>} />
            <Button type="submit">
              {loading ? <><BasketballIcon className="h-5 w-5 animate-spin" /> Modification...</> : "Modifier la paire"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default DialogEditShoe
