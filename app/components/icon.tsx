import { type SVGProps } from 'react'
import { type IconName } from '@/types/name'

export { IconName }

type IconProps = Readonly<{
  name: IconName
  children?: React.ReactNode
  childrenClassName?: string
}>

export function Icon({
  name,
  children,
  childrenClassName,
  ...props
}: SVGProps<SVGSVGElement> & IconProps) {
  if (children) {
    return (
      <span
        className={`inline-flex items-center text-sm gap-1 ${childrenClassName}`}
      >
        <Icon name={name} {...props} />
        {children}
      </span>
    )
  }

  return (
    <svg {...props}>
      <use href={`./icons/sprite.svg#${name}`}></use>
    </svg>
  )
}
