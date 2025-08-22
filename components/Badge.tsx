
import { clsx } from 'clsx'
export default function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={clsx('inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm', className)}>
      {children}
    </span>
  )
}
