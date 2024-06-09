import { useId } from 'react'
import { Input } from './input'
import { Label } from './label'

export function Field({
  labelProps,
  inputProps,
}: {
  labelProps: React.LabelHTMLAttributes<HTMLLabelElement>
  inputProps: React.InputHTMLAttributes<HTMLInputElement>
}) {
  const FallbackId = useId()
  const id = inputProps.id ?? FallbackId
  return (
    <div className="flex flex-col">
      <Label htmlFor={id} {...labelProps} />
      <Input id={id} {...inputProps} />
    </div>
  )
}
