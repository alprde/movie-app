import { ThemeProvider } from 'next-themes'
import NextNProgress from 'nextjs-progressbar'
import { red } from 'tailwindcss/colors'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import { store, storeWrapper } from '../stores'

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        <NextNProgress color={red[600]} height={4} />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default storeWrapper.withRedux(App)
