import React, { useEffect, useState } from 'react'
import { logo } from '../assets'

const IOS_APP_URL = 'https://apps.apple.com/az/app/easybusiness-your-distributor/id6746033485'

const AppStoreBanner = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem('hideAppStoreBanner') === '1'
      const ua = navigator.userAgent || ''
      const isIOS = /iPad|iPhone|iPod/i.test(ua)
      const isInStandaloneMode = window.navigator.standalone === true
      if (!dismissed && isIOS && !isInStandaloneMode) {
        setShow(true)
      }
    } catch (_) {
      // fail open: do nothing
    }
  }, [])

  const handleClose = () => {
    try { localStorage.setItem('hideAppStoreBanner', '1') } catch (_) {}
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="sticky top-0 z-[60] bg-gray-900/95 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Easy Business" className="w-9 h-9 rounded-md" />
          <div className="flex flex-col leading-tight">
            <span className="text-white font-semibold">EasyBusiness</span>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default AppStoreBanner


