import { HTMLAttributes, forwardRef } from 'react'

export interface labelProps extends HTMLAttributes<HTMLLabelElement> {}

const Label = forwardRef<HTMLLabelElement, labelProps>(
  ({ children, ...props }, ref) => {
    return (
      <label ref={ref} {...props}>
        {children}
      </label>
    )
  },
)

Label.displayName = 'Label'

export { Label }
