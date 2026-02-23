import { useState, useRef, useEffect, useCallback, type CSSProperties } from "react"

type Corner = "br" | "bl" | "tr" | "tl"

const PADDING = 16

export function useDragToCorner() {
  const [corner, setCorner] = useState<Corner>("br")
  const [isDragging, setIsDragging] = useState(false)
  const elRef = useRef<HTMLElement | null>(null)
  const dragState = useRef({
    offsetX: 0,
    offsetY: 0,
    moved: false,
  })

  const ref = useCallback((node: HTMLElement | null) => {
    elRef.current = node
  }, [])

  useEffect(() => {
    const el = elRef.current
    if (!el) return

    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      const rect = el.getBoundingClientRect()
      dragState.current.offsetX = touch.clientX - rect.left
      dragState.current.offsetY = touch.clientY - rect.top
      dragState.current.moved = false
      setIsDragging(true)
    }

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      const touch = e.touches[0]
      const x = touch.clientX - dragState.current.offsetX
      const y = touch.clientY - dragState.current.offsetY
      dragState.current.moved = true
      el.style.transition = "none"
      el.style.left = `${x}px`
      el.style.top = `${y}px`
      el.style.right = "auto"
      el.style.bottom = "auto"
    }

    const onTouchEnd = () => {
      if (!dragState.current.moved) {
        setIsDragging(false)
        return
      }

      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const vw = window.innerWidth
      const vh = window.innerHeight

      const isRight = centerX > vw / 2
      const isBottom = centerY > vh / 2
      const newCorner: Corner =
        isBottom && isRight ? "br" :
        isBottom && !isRight ? "bl" :
        !isBottom && isRight ? "tr" : "tl"

      setCorner(newCorner)
      setIsDragging(false)
    }

    // Suppress the click event that fires after a drag so the drawer doesn't open
    const onClick = (e: MouseEvent) => {
      if (dragState.current.moved) {
        e.stopPropagation()
        e.preventDefault()
        dragState.current.moved = false
      }
    }

    el.addEventListener("touchstart", onTouchStart, { passive: true })
    el.addEventListener("touchmove", onTouchMove, { passive: false })
    el.addEventListener("touchend", onTouchEnd)
    el.addEventListener("click", onClick, { capture: true })

    return () => {
      el.removeEventListener("touchstart", onTouchStart)
      el.removeEventListener("touchmove", onTouchMove)
      el.removeEventListener("touchend", onTouchEnd)
      el.removeEventListener("click", onClick, { capture: true })
    }
  }, [])

  const style: CSSProperties = isDragging
    ? {}
    : {
        transition: "all 300ms ease-out",
        top: corner.startsWith("t") ? PADDING : "auto",
        bottom: corner.startsWith("b") ? PADDING : "auto",
        left: corner.endsWith("l") ? PADDING : "auto",
        right: corner.endsWith("r") ? PADDING : "auto",
      }

  return { ref, style }
}
