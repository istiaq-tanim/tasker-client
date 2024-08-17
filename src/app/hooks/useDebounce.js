"use client"

import { useEffect, useRef } from "react"

const useDebounce = (callback, delay) => {
      const timeOutIdRef = useRef()

      useEffect(() => {
            if (timeOutIdRef.current) {
                  clearTimeout(timeOutIdRef.current)
            }
      }, [])

      const debounceCallback = (...args) => {
            if (timeOutIdRef.current) {
                  clearTimeout(timeOutIdRef.current)
            }
            timeOutIdRef.current = setTimeout(() => {
                  callback(...args)
            }, delay)
      }
      return debounceCallback
}
export default useDebounce