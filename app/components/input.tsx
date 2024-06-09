import { HTMLProps, forwardRef } from 'react'

export interface inputProps extends HTMLProps<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, inputProps>(
  ({ type, className, ...props }, ref) => {
    return (
      <input
        className={`border border-gray-200 p-[15px] rounded-xl ${className}`}
        ref={ref}
        type={type}
        {...props}
      ></input>
    )
  },
)

Input.displayName = 'input'
export { Input }
