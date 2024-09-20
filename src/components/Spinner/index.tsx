import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

type SpinnerProps = {
  size?: 'sm' | 'md' | 'lg'
  className?: string
};

const Spinner: React.FC<SpinnerProps> = ({ size = 'md', className }) => {
  return (
    <div
      className={cn(
        "animate-spin text-muted-foreground",
        {
          'w-4 h-4': size === 'sm',
          'w-6 h-6': size === 'md',
          'w-8 h-8': size === 'lg',
        },
        className
      )}
      role="status"
      aria-label="Loading"
    >
      <Loader2 className="w-full h-full" />
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Spinner