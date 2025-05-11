"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Loader, X } from "lucide-react"

interface ToastProps {
  title?: string
  description?: string
  variant?: "default" | "destructive" | "success"
  duration?: number
  onClose?: () => void
  className?: string
  loading?: boolean
}

export const Toast: React.FC<ToastProps> = ({
  title,
  description,
  variant = "default",
  duration = 3000,
  onClose,
  className,
  loading = false,
}) => {
  const [isVisible, setIsVisible] = React.useState(true)
  const [isFading, setIsFading] = React.useState(false)
  const [progress, setProgress] = React.useState(100)

  React.useEffect(() => {
    // Start progress animation immediately
    const startTime = Date.now()
    const endTime = startTime + duration

    // Update progress every 10ms
    const progressInterval = setInterval(() => {
      const now = Date.now()
      const remaining = Math.max(0, endTime - now)
      const newProgress = (remaining / duration) * 100
      setProgress(newProgress)

      if (newProgress <= 0) {
        clearInterval(progressInterval)
      }
    }, 10)

    // Set timer for fading out
    const timer = setTimeout(() => {
      setIsFading(true)

      // Wait for animation to complete before removing from DOM
      const fadeTimer = setTimeout(() => {
        setIsVisible(false)
        if (onClose) onClose()
      }, 300) // Match animation duration

      return () => clearTimeout(fadeTimer)
    }, duration)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [duration, onClose])

  if (!isVisible) return null

  const variantClasses = {
    default: "bg-black text-gray-300 border-gray-800",
    destructive: "border-red-400 bg-red-800/80 text-gray-100",
    success: "bg-black-700 text-gray-100 border-gray-700 shadow-[0_0_15px_rgba(0,200,100,0.4)]",
  }

  return (
    <div
      className={cn(
        "flex w-full max-w-sm items-center justify-between space-x-2 overflow-hidden rounded-md border p-3 pr-6 shadow-md transition-all duration-300 relative",
        variantClasses[variant],
        className
      )}
      style={{
        animation: isFading 
          ? "toast-fade-out 0.3s ease-out forwards" 
          : "toast-slide-in 0.3s ease-out forwards"
      }}
    >
      <div className="grid gap-0.5">
        {title && <div className="text-xs font-medium">{title}</div>}
        {description && <div className="text-gray-400 text-xs">{description}</div>}
      </div>
      <button
        onClick={() => {
          setIsFading(true)
          // Wait for animation to complete before removing from DOM
          setTimeout(() => {
            setIsVisible(false)
            if (onClose) onClose()
          }, 300)
        }}
        className="absolute right-1.5 top-1.5 rounded-md p-0.5 text-gray-500 opacity-60 transition-opacity hover:text-gray-300 hover:opacity-100 focus:opacity-100 focus:outline-none"
      >
        <X className="h-3 w-3" />
      </button>
      {loading && (
        <div 
          className={cn(
            "absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-100 origin-left",
            "bg-gray-300"
          )}
          style={{ transform: `scaleX(${progress / 100})` }} 
        />
      )}
    </div>
  )
}

export const useToast = () => {
  const [toasts, setToasts] = React.useState<Array<ToastProps & { id: string }>>([])

  const toast = React.useCallback(
    (props: ToastProps) => {
      const id = Math.random().toString(36).substring(2, 9)
      setToasts((prev) => [...prev, { ...props, id }])
      return id
    },
    []
  )

  const dismissToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  return { toast, dismissToast, toasts }
}

export const Toaster: React.FC = () => {
  const { toasts, dismissToast } = useToastContext()

  return (
    <>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => dismissToast(toast.id)}
        />
      ))}
    </>
  )
}

// Create a context to store the toast state
const ToastContext = React.createContext<ReturnType<typeof useToast> | undefined>(undefined)

// Provider component that wraps the application
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const toastHelpers = useToast()

  return (
    <ToastContext.Provider value={toastHelpers}>
      {children}
      <div className="fixed top-3 right-3 z-[9999] flex flex-col gap-1.5">
        {toastHelpers.toasts.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            onClose={() => toastHelpers.dismissToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

// Hook to use the toast context
export const useToastContext = () => {
  const context = React.useContext(ToastContext)
  if (context === undefined) {
    throw new Error('useToastContext must be used within a ToastProvider')
  }
  return context
}
