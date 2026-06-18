import type { HTMLAttributes, ReactNode } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Container({ children, className = '', ...rest }: ContainerProps) {
  return (
    <div
      {...rest}
      className={'mx-auto w-[min(100%-48px,1240px)] ' + className}
    >
      {children}
    </div>
  )
}
