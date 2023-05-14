// doesnt work

import { useRef } from "react"
import { LocomotiveScrollProvider, useLocomotiveScroll } from "react-locomotive-scroll"
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useRouter } from "next/router";

export default function LocomotiveScroll ({children}) {
  const containerRef = useRef(null)
  const { asPath } = useRouter() // With next/router

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
      location ={asPath}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef} className="App">
        {children}
      </main>
    </LocomotiveScrollProvider>
  )
}
