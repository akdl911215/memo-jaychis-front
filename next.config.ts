/** @type {import('next').NextConfig} */

// root/next.config.ts
const nextConfig = {
  // Next.js가 정적 사이트를 빌드 시 생성하도록 지시하며, 이전의 next export 명령을 대체한다.
  output: "export",

  //  내장 이미지 최적화 API를 비활성화하여 정적 내보내기 중 빌드 오류가 발생하지 않게 한다.
  images: {
    unoptimized: true,
  },

  // 새로운 App Router와 파일 시스템 기반 레이아웃 기능을 빌드 시 활성화한다.
  experimental: {
    appDir: true,
  },

  //  styled-components를 서버 렌더링 및 정적 추출을 위해 Next.js 컴파일러가 올바르게 처리하도록 지시한다.
  // compiler: {
  //   styledComponents: true,
  // },
};

module.exports = nextConfig;
