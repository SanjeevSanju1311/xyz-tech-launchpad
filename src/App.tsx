import { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import HeroSection from './components/HeroSection'
import Navigation from './components/Navigation'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
    </div>
  )
}

export default App