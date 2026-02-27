/**
 * Next.js — Integração da Untitled Pro via next/font/local
 *
 * Uso:
 *   1. Copie os arquivos .woff2 para /public/fonts/untitled-pro/
 *      (ou /app/fonts/untitled-pro/ se preferir co-locação)
 *   2. Importe este módulo no layout raiz (app/layout.tsx)
 *   3. Aplique a classe via className ou variável CSS
 *
 * Exemplo em app/layout.tsx:
 *
 *   import { untitledPro } from '@/lib/fonts';  // ajuste o caminho
 *
 *   export default function RootLayout({ children }) {
 *     return (
 *       <html lang="pt-BR" className={untitledPro.variable}>
 *         <body className="font-sans">{children}</body>
 *       </html>
 *     );
 *   }
 */

import localFont from 'next/font/local';

export const untitledPro = localFont({
  variable: '--font-untitled-pro',
  display: 'swap',
  src: [
    {
      path: '../public/fonts/untitled-pro/UntitledPro-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/untitled-pro/UntitledPro-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/untitled-pro/UntitledPro-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/untitled-pro/UntitledPro-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/untitled-pro/UntitledPro-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/untitled-pro/UntitledPro-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/untitled-pro/UntitledPro-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/untitled-pro/UntitledPro-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/untitled-pro/UntitledPro-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/untitled-pro/UntitledPro-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
});

/**
 * Tailwind CSS config — use a variável CSS gerada pelo Next.js
 *
 * Em tailwind.config.js:
 *
 *   theme: {
 *     extend: {
 *       fontFamily: {
 *         sans: ['var(--font-untitled-pro)', ...defaultTheme.fontFamily.sans],
 *       },
 *     },
 *   }
 */
