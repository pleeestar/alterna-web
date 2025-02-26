// components/ui/Button.tsx
import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all'
  
  const variantStyles = {
    primary: 'bg-white text-gray-800 hover:bg-white/50 focus:ring-white/40 text-sm md:text-base',
    secondary: 'bg-gray-200/20 text-gray-800 border hover:bg-white/50 focus:ring-white/40 text-sm md:text-base',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 text-sm md:text-base',
  }

  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  }

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
