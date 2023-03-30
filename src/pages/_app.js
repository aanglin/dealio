import { ContextProvider } from '@/components/context'
import '@/styles/globals.css'
 import { Raleway } from 'next/font/google'

 const raleway = Raleway({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return(
    <ContextProvider>
    <main className={raleway.className}>
  <Component {...pageProps} />
  </main>
  </ContextProvider>
  )
}
