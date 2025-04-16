"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

interface SliderProps {
  children: React.ReactNode[]
  autoSlide?: boolean
  autoSlideInterval?: number
}

export function Slider({ children, autoSlide = true, autoSlideInterval = 5000 }: SliderProps) {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const slideCount = children.length
  const slideRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const prev = useCallback(() => {
    setCurrent((curr) => (curr === 0 ? slideCount - 1 : curr - 1))
  }, [slideCount])

  const next = useCallback(() => {
    setCurrent((curr) => (curr === slideCount - 1 ? 0 : curr + 1))
  }, [slideCount])

  // Auto slide functionality
  useEffect(() => {
    if (!autoSlide || isPaused) return

    const interval = setInterval(next, autoSlideInterval)
    return () => clearInterval(interval)
  }, [autoSlide, isPaused, autoSlideInterval, next])

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      next()
    }

    if (isRightSwipe) {
      prev()
    }

    // Reset values
    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      ref={slideRef}
    >
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {children}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white pointer-events-auto"
          aria-label="Previous slide"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white pointer-events-auto"
          aria-label="Next slide"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: slideCount }).map((_, i) => (
            <button
              key={i}
              className={`
                transition-all w-2 h-2 rounded-full
                ${current === i ? "bg-white w-4" : "bg-white/50"}
              `}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
