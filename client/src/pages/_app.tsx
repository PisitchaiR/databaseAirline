import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
