import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { ThemeProvider } from '@/components/theme-provider'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Priyanshu Chahar',
      },
      {
        name: 'description',
        content:
          'Priyanshu Chahar – Software Developer. Building innovative solutions and solving complex problems.',
      },
      {
        name: 'keywords',
        content:
          'Priyanshu Chahar, unsafezero, unsafe0x0, priyanxhu.me, Full Stack Developer, TypeScript, NextJS, NodeJS',
      },
      {
        name: 'author',
        content: 'Priyanshu Chahar',
      },
      {
        property: 'og:title',
        content: 'Priyanshu Chahar',
      },
      {
        property: 'og:description',
        content:
          'Priyanshu Chahar – Software Developer. Building innovative solutions and solving complex problems.',
      },
      {
        property: 'og:url',
        content: 'https://priyanxhu.me',
      },
      {
        property: 'og:site_name',
        content: 'Priyanshu Chahar',
      },
      {
        property: 'og:image',
        content: 'https://avatars.githubusercontent.com/u/165533860?v=4',
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '630',
      },
      {
        property: 'og:image:alt',
        content: 'Priyanshu Chahar – Software Developer',
      },
      {
        property: 'og:locale',
        content: 'en_US',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'Priyanshu Chahar',
      },
      {
        name: 'twitter:description',
        content:
          'Priyanshu Chahar – Software Developer. Building innovative solutions and solving complex problems.',
      },
      {
        name: 'twitter:image',
        content: 'https://avatars.githubusercontent.com/u/165533860?v=4',
      },
      {
        name: 'twitter:creator',
        content: '@unsafezero',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://avatars.githubusercontent.com/u/165533860?v=4',
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}
