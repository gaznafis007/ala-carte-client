"use client"

import Link from "next/link"
import Image from "next/image"
import { Slider } from "@/components/ui/slider"
import { useEffect, useState } from "react"

// Helper function to chunk the array into groups
function chunkArray<T>(array: T[], size: number): T[][] {
  const chunkedArr = []
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size))
  }
  return chunkedArr
}

export function OurResults() {
  const [slidesPerView, setSlidesPerView] = useState(3)

  // Update slides per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3)
      } else if (window.innerWidth >= 640) {
        setSlidesPerView(2)
      } else if (window.innerWidth < 640) {
        setSlidesPerView(1)
      }
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const results = [
    {
      id: 1,
      name: "Sagala",
      image: "/images/result-1.jpg",
      flag: "/images/flag-indonesia.jpg",
      flagAlt: "Indonesia flag",
      stat: "-60%",
      description: "order cancellations",
      link: "/case-studies/sagala",
    },
    {
      id: 2,
      name: "ARMYNAVY",
      image: "/images/result-2.jpg",
      flag: "/images/flag-philippines.jpg",
      flagAlt: "Philippines flag",
      stat: "$10k",
      description: "saved per month",
      link: "/case-studies/armynavy",
    },
    {
      id: 3,
      name: "SUN&MOON",
      image: "/images/result-3.jpg",
      flag: "/images/flag-japan.jpg",
      flagAlt: "Japan flag",
      stat: "4x",
      description: "gross revenue on delivery",
      link: "/case-studies/sunandmoon",
    },
    {
      id: 4,
      name: "Bistro68",
      image: "/images/result-1.jpg",
      flag: "/images/flag-indonesia.jpg",
      flagAlt: "Indonesia flag",
      stat: "+45%",
      description: "increase in repeat customers",
      link: "/case-studies/bistro68",
    },
    {
      id: 5,
      name: "GreenTable",
      image: "/images/result-2.jpg",
      flag: "/images/flag-philippines.jpg",
      flagAlt: "Philippines flag",
      stat: "30min",
      description: "reduction in table turnover",
      link: "/case-studies/greentable",
    },
    {
      id: 6,
      name: "Sushi Express",
      image: "/images/result-3.jpg",
      flag: "/images/flag-japan.jpg",
      flagAlt: "Japan flag",
      stat: "75%",
      description: "decrease in order errors",
      link: "/case-studies/sushi-express",
    },
    {
      id: 7,
      name: "Urban Spice",
      image: "/images/result-1.jpg",
      flag: "/images/flag-indonesia.jpg",
      flagAlt: "Indonesia flag",
      stat: "3.2x",
      description: "increase in online orders",
      link: "/case-studies/urban-spice",
    },
    {
      id: 8,
      name: "The Grill House",
      image: "/images/result-2.jpg",
      flag: "/images/flag-philippines.jpg",
      flagAlt: "Philippines flag",
      stat: "$15k",
      description: "saved in operational costs",
      link: "/case-studies/grill-house",
    },
    {
      id: 9,
      name: "Noodle Bar",
      image: "/images/result-3.jpg",
      flag: "/images/flag-japan.jpg",
      flagAlt: "Japan flag",
      stat: "28%",
      description: "growth in customer satisfaction",
      link: "/case-studies/noodle-bar",
    },
  ]

  // Group the results based on slides per view
  const groupedResults = chunkArray(results, slidesPerView)

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-black to-purple-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h3 className="text-lg font-medium mb-2 text-purple-300">Our Results</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            See the results for yourself.
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl">
            We offer products suitable for almost any type of business looking to drive more sales both online and
            offline.
          </p>
        </div>

        <div className="max-w-full mx-auto">
          <Slider autoSlide={true} autoSlideInterval={5000}>
            {groupedResults.map((group, groupIndex) => (
              <div key={groupIndex} className="min-w-full">
                <div className={`grid sm:grid-cols-${slidesPerView} md:grid-cols-${slidesPerView} lg:grid-cols-${slidesPerView} gap-6`}>
                  {group.map((result) => (
                    <div key={result.id} className="mx-auto w-full max-w-md">
                      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-purple-900 shadow-xl transform transition-all hover:scale-[1.01]">
                        <div className="relative h-48">
                          <Image
                            src={result.image || "/placeholder.svg"}
                            alt={`${result.name} success story`}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 flex items-center justify-center">
                            <h3 className="text-2xl font-bold text-white">{result.name}</h3>
                          </div>
                          <div className="absolute bottom-4 right-4">
                            <Image
                              src={result.flag || "/placeholder.svg"}
                              alt={result.flagAlt}
                              width={36}
                              height={24}
                              className="rounded"
                            />
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                            {result.stat}
                          </div>
                          <div className="text-gray-400 mb-6">{result.description}</div>
                          <Link
                            href={result.link}
                            className="text-white hover:text-purple-300 transition-colors text-sm font-medium flex items-center"
                          >
                            Learn More
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 ml-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}
