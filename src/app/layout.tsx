import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import newrelic from 'newrelic'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'New Relic + Next.js',
  description: 'AMP agent monitoring'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  const browserTimingHeader = newrelic.getBrowserTimingHeader({
    hasToRemoveScriptWrapper: true,
    allowTransactionlessInjection: true
  })
  return (
    <html lang='en'>
      <head>
        <Script id='nr' strategy='beforeInteractive'>{browserTimingHeader}</Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
