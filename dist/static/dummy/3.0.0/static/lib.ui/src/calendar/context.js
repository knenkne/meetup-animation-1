import { useContext, createContext } from 'react'

export const CalendarContext = createContext()
export const useCalendarContext = () => useContext(CalendarContext)
