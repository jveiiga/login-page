import { ColorModeScript } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import { App } from './App'
import theme from '../theme'

const rootElement: HTMLElement | null = document.getElementById('root')

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <>
      {/* 👇 Here's the script */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </>,
  )
} else {
  console.error("Root element not found!")
}