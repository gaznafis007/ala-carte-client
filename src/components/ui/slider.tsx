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

  const prev = useCallback(() => {
    setCurrent((curr) => (curr === 0 ? slideCount - 1 : curr - 1))
  }, [slideCount])

  const next = useCallback(() => {
    setCurrent((curr) => (curr === slideCount - 1 ? 0 : curr + 1))
  }, [slideCount])

  useEffect(() => {
    if (!autoSlide || isPaused) return

    const interval = setInterval(next, autoSlideInterval)
    return () => clearInterval(interval)
  }, [autoSlide, isPaused, autoSlideInterval, next])

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={slideRef}
    >
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {children}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          aria-label="Previous slide"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
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
