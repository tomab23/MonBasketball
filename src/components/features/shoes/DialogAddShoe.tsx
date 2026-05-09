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
import { ValidShoeSchema, type ShoeFormValues } from "@/schemas/ShoeSchema"
import { useFormik } from "formik"
import { PlusCircle } from "lucide-react"
import { FormikInputShoe } from "./FormikInputShoe"
import { useState } from "react"
import { BasketballIcon } from "@/assets/BasketballIcon"
import { useShoe } from "@/hooks/useShoe"

type Props = {
  sessionForm?: boolean
}
const DialogAddShoe = ({ sessionForm }: Props) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addShoe } = useShoe();
  const formik = useFormik<ShoeFormValues>({
    initialValues: {
      name: "",
      color: "",
      brand: "",
      size: null,
      price: null,
      date: "",
    },
    enableReinitialize: true,
    validationSchema: ValidShoeSchema,
    onSubmit: async (values, { resetForm}) => {
      setLoading(true)
      try {
        await addShoe(
          values.name,
          values.brand,
          values.size,
          values.price,
          values.date,
          values.color
        )
        setOpen(false) // ne se ferme qu'en cas de succès
      } catch (err) {
        // TODO Dialog edit shoe Error
        // l'erreur est déjà gérée dans le hook (setError)
        // tu peux ajouter un log ou un toast ici si besoin
        console.error(err)
      }
      setLoading(false)
      resetForm()
    },
  })
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button
            className="max-sm:text-xs"
            variant={sessionForm ? "link" : "default"}
          >
            {!sessionForm && <PlusCircle />} Ajouter une paire
          </Button>
        }
      />
      <DialogContent className="sm:max-w-sm" showCloseButton={false}>
        <form onSubmit={formik.handleSubmit}>
          <DialogHeader>
            <DialogTitle>Ajouter une chaussure</DialogTitle>
            <DialogDescription>
              Ajouter votre nouvelle paire de chaussure
            </DialogDescription>
          </DialogHeader>
          <FieldGroup className="mt-5">
            {/* NAME */}
            <FormikInputShoe formik={formik} name={"name"} label="Nom*" placeholder="Nike Kyrie 3"  />
            {/* COLOR */}
            <FormikInputShoe formik={formik} name={"color"} label="Couleur" placeholder="Mamba mentality"  />
            {/* BRAND / SIZE / PRICE */}
            <div className="flex gap-2">
             <FormikInputShoe formik={formik} name={"brand"} label="Marque" placeholder="Nike" className="flex-1/6"  />
              <FormikInputShoe formik={formik} name={"size"} label="Taille" placeholder="45" type="number" className="flex-1"  />
              <FormikInputShoe price formik={formik} name={"price"} label="Prix" placeholder="120" type="number" className="flex-1/12"  />
            </div>
            {/* DATE BUY */}
            <FormikInputShoe type="date" formik={formik} name={"date"} label="Date d'achat" />
          </FieldGroup>
          <DialogFooter className="mt-5">
            <DialogClose render={<Button variant="outline" onClick={() => formik.resetForm()}>Annuler</Button>} />
            <Button type="submit">
              {loading ? <><BasketballIcon className="h-5 w-5 animate-spin" /> Ajout de la paire... </>: "Ajouter la paire"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default DialogAddShoe
