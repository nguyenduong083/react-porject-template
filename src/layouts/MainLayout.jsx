import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    // <Headers>
    // <Footer>
    <Suspense fallback={<div>Page Loading....</div>}>
        <Outlet />
    </Suspense>
  )
}

export default MainLayout