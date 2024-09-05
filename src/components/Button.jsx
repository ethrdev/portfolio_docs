import Link from 'next/link'
import clsx from 'clsx'

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
      />
    </svg>
  )
}

const variantStyles = {
  primary:
    'rounded py-1 px-3 text-teal-400 ring-1 ring-inset ring-teal-400/20 hover:bg-teal-400/10 hover:text-teal-300 hover:ring-teal-300',
  secondary:
    'rounded py-1 px-3  bg-neutral-800/40 text-[#757575] ring-1 ring-inset ring-neutral-800 hover:bg-neutral-800 hover:text-[#757575]',
  filled:
    'rounded py-1 px-3  bg-teal-500 text-white hover:bg-teal-400',
  outline:
    'rounded py-1 px-3  ring-1 ring-inset  text-[#757575] ring-white/10 hover:bg-white/5 hover:text-white',
  text: ' text-teal-400 hover:text-teal-500',
}

export function Button({
  variant = 'primary',
  className,
  children,
  arrow,
  ...props
}) {
  let Component = props.href ? Link : 'button'

  className = clsx(
    'inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition',
    variantStyles[variant],
    className
  )

  let arrowIcon = (
    <ArrowIcon
      className={clsx(
        'mt-0.5 h-5 w-5',
        variant === 'text' && 'relative top-px',
        arrow === 'left' && '-ml-1 rotate-180',
        arrow === 'right' && '-mr-1'
      )}
    />
  )

  return (
    <Component className={className} {...props}>
      {arrow === 'left' && arrowIcon}
      {children}
      {arrow === 'right' && arrowIcon}
    </Component>
  )
}
