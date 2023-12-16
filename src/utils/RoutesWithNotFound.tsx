import { ReactNode } from "react"
import { Route, Routes } from "react-router-dom"

const RoutesWithNotFound = ({children}: {children: ReactNode}) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<>Not Found</>} />
    </Routes>
  )
}

export default RoutesWithNotFound