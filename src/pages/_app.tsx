import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import '../index.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Memo Jaychis"
        defaultTitle="Memo Jaychis - 메모 앱"
        description="효율적인 메모 관리를 위한 웹 애플리케이션입니다."
        canonical="https://memo-jaychis.com/"
        openGraph={{
          type: 'website',
          locale: 'ko_KR',
          url: 'https://memo-jaychis.com/',
          siteName: 'Memo Jaychis',
          images: [
            {
              url: 'g-image.png',
              width: 1200,
              height: 630,
              alt: 'Memo Jaychis',
            },
          ],
        }}
        twitter={{
          handle: '@memojaychis',
          site: '@memojaychis',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  )
}