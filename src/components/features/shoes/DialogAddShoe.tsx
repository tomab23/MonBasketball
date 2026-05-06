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

type Props = {
  sessionForm?: boolean
}
const DialogAddShoe = ({ sessionForm }: Props) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
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
    onSubmit: (values, { resetForm}) => {
      setLoading(true)
      alert(JSON.stringify(values))

      setOpen(false);
      resetForm()
      setLoading(false);
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
      <DialogContent className="sm:max-w-sm">
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
