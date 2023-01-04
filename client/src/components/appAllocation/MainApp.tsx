import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import styles from '../../App.module.css'
import { onPageTitleChnage } from '../../utils/Helper'

import {
  SideBar,
  TokenSelectionModal,
  PageTopBar,
  Dashboard,
  Portfolio,
  Profile,
} from '../componentContainer'

const MainApp = () => {
  const location = useLocation()
  const [currentPage, setCurrentPage] = useState('Hello User')

  useEffect(() => {
    onPageTitleChnage(location, setCurrentPage)
  }, [location])

  return (
    <div className={styles['main-layout']}>
      <div className={styles.navbar}>
        <SideBar />
        <TokenSelectionModal />
      </div>
      <div className={styles['main-content']}>
        <PageTopBar pageTitle={currentPage} />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="*" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default MainApp
