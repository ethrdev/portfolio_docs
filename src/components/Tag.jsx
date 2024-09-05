import clsx from 'clsx'

const variantStyles = {
  medium: 'rounded px-1.5 py-0.5 ring-1 ring-inset',
}

const colorStyles = {
  teal: {
    small: ' text-teal-400',
    medium:
      ' ring-teal-400/30 bg-teal-400/10  text-teal-400',
  },
  sky: {
    small: 'text-sky-500',
    medium:
      ' ring-sky-400/30 bg-sky-400/10 text-sky-400',
  },
  amber: {
    small: 'text-amber-500',
    medium:
      ' ring-amber-400/30 bg-amber-400/10 text-amber-400',
  },
  rose: {
    small: ' text-rose-500',
    medium:
      ' ring-rose-500/20 bg-rose-400/10 text-rose-400',
  },
  neutral: {
    small: ' text-[#757575]',
    medium:
      ' ring-[#757575]/20 bg-[#757575]/10 text-[#757575]',
  },
}

const valueColorMap = {
  get: 'teal',
  post: 'sky',
  put: 'amber',
  delete: 'rose',
}

export function Tag({
  children,
  variant = 'medium',
  color = valueColorMap[children.toLowerCase()] ?? 'teal',
}) {
  return (
    <span
      className={clsx(
        'font-mono text-[0.625rem] font-semibold leading-6',
        variantStyles[variant],
        colorStyles[color][variant]
      )}
    >
      {children}
    </span>
  )
}
