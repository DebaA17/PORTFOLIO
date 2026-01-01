'use client'

import dynamic from 'next/dynamic'

const SplashCursorClientOnly = dynamic(() => import('./SplashCursor'), {
  ssr: false,
  loading: () => null,
})

export default SplashCursorClientOnly
