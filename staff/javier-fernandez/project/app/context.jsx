import { createContent, useContext as useContextReact } from 'react'

export const context = createContext()

export const useContext = () => useContextReact(context)