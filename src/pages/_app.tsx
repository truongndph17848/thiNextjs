import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import instance from '../api/instance'
import { SWRConfig } from 'swr';

function MyApp({ Component, pageProps }: AppProps) {
  return (

    <SWRConfig value={{fetcher: async (url) => await instance.get(url)  }}>
    <Component {...pageProps} />
  </SWRConfig>

  )
  
  

}

export default MyApp
