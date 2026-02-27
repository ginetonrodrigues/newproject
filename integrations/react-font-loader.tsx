/**
 * React (Vite / CRA) — Integração da Untitled Pro
 *
 * Uso:
 *   1. Copie os arquivos .woff2 para /public/fonts/untitled-pro/
 *   2. Importe o CSS no ponto de entrada (main.tsx ou index.tsx):
 *
 *      import '../css/untitled-pro.css';
 *      import '../css/typography.css';
 *
 *   Ou use este componente para carregar via <link>:
 *
 *      import { UntitledProProvider } from './react-font-loader';
 *
 *      function App() {
 *        return (
 *          <UntitledProProvider>
 *            <YourApp />
 *          </UntitledProProvider>
 *        );
 *      }
 */

import React from 'react';

const fontStyles = `
@font-face {
  font-family: 'Untitled Pro';
  src: url('/fonts/untitled-pro/UntitledPro-Light.woff2') format('woff2');
  font-weight: 300; font-style: normal; font-display: swap;
}
@font-face {
  font-family: 'Untitled Pro';
  src: url('/fonts/untitled-pro/UntitledPro-Regular.woff2') format('woff2');
  font-weight: 400; font-style: normal; font-display: swap;
}
@font-face {
  font-family: 'Untitled Pro';
  src: url('/fonts/untitled-pro/UntitledPro-Medium.woff2') format('woff2');
  font-weight: 500; font-style: normal; font-display: swap;
}
@font-face {
  font-family: 'Untitled Pro';
  src: url('/fonts/untitled-pro/UntitledPro-Bold.woff2') format('woff2');
  font-weight: 700; font-style: normal; font-display: swap;
}
@font-face {
  font-family: 'Untitled Pro';
  src: url('/fonts/untitled-pro/UntitledPro-Black.woff2') format('woff2');
  font-weight: 900; font-style: normal; font-display: swap;
}
`;

interface UntitledProProviderProps {
  children: React.ReactNode;
}

export function UntitledProProvider({ children }: UntitledProProviderProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: fontStyles }} />
      <div
        style={{
          fontFamily:
            "'Untitled Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        {children}
      </div>
    </>
  );
}

/**
 * Hook para obter estilos inline da Untitled Pro
 *
 * const style = useUntitledPro(500);
 * <p style={style}>Texto em Medium</p>
 */
export function useUntitledPro(weight: 300 | 400 | 500 | 700 | 900 = 400) {
  return {
    fontFamily:
      "'Untitled Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    fontWeight: weight,
  } as const;
}
