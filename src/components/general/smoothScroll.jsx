import { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

export default function SmoothScroll ({children}) {
  const containerRef = useRef(null)

  return (
    <LocomotiveScrollProvider
    options={
      {
        smooth: true,
        // ... all available Locomotive Scroll instance options 
      }
    }
    watch={
      [
        //..all the dependencies you want to watch to update the scroll.
        //  Basicaly, you would want to watch page/location changes
        //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
      ]
    }
    containerRef={containerRef}
  >
    <main data-scroll-container ref={containerRef}>
      <div data-scroll-section>
        {children}
      </div>
    </main>
  </LocomotiveScrollProvider>
  )
}
