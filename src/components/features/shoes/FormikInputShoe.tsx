import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { Euro } from "lucide-react"

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formik: any
  name: string
  label?: string
  type?: string
  placeholder?: string
  className?: string
  price?: boolean
}

export function FormikInputShoe({
  formik,
  name,
  label,
  type = "text",
  placeholder,
  price,
}: Props) {
  //   const error = formik.touched[name] && formik.errors[name];

  const showError = formik.submitCount > 0 && formik.errors[name]

  return (
    <Field className="gap-2">
      <Label htmlFor={name}>{label}</Label>

      {!price ? (
        <Input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={formik.values[name] ?? ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={cn(
            showError && "border-red-500 focus-visible:ring-red-500"
          )}
        />
      ) : (
        <InputGroup
          className={cn(
            showError && "border-red-500 focus-visible:ring-red-500"
          )}
        >
          <InputGroupInput
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            value={formik.values[name] ?? ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <InputGroupAddon align={"inline-end"}>
            <Euro />
          </InputGroupAddon>
        </InputGroup>
      )}

      {/* {showError && (
        <p className="text-sm text-red-500">
          {formik.errors[name]}
        </p>
      )} */}
    </Field>
  )
}
