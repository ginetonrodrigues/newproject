# Untitled Pro — Integração Global

Kit de integração da fonte **Untitled Pro** pronto para usar em qualquer projeto web: HTML puro, React, Next.js, Tailwind CSS ou SCSS.

---

## Estrutura

```
├── fonts/
│   └── untitled-pro/          ← coloque os arquivos .woff2 / .woff aqui
├── css/
│   ├── untitled-pro.css       ← @font-face declarations
│   └── typography.css         ← sistema tipográfico completo (variáveis + classes)
├── scss/
│   └── _untitled-pro.scss     ← partial SCSS com mixins e variáveis
├── integrations/
│   ├── next-font.tsx          ← next/font/local para Next.js (App Router)
│   ├── react-font-loader.tsx  ← componente + hook para React (Vite / CRA)
│   ├── tailwind.config.js     ← extensão do Tailwind com a fonte
│   └── tailwind-globals.css   ← globals.css pronto com @font-face + Tailwind
└── README.md
```

---

## 1. Adicionar os arquivos da fonte

Copie os seus arquivos `.woff2` (e opcionalmente `.woff`) para `fonts/untitled-pro/` seguindo este padrão de nomes:

| Arquivo                             | Weight | Style  |
|--------------------------------------|--------|--------|
| `UntitledPro-Light.woff2`           | 300    | normal |
| `UntitledPro-LightItalic.woff2`    | 300    | italic |
| `UntitledPro-Regular.woff2`        | 400    | normal |
| `UntitledPro-RegularItalic.woff2`  | 400    | italic |
| `UntitledPro-Medium.woff2`         | 500    | normal |
| `UntitledPro-MediumItalic.woff2`   | 500    | italic |
| `UntitledPro-Bold.woff2`           | 700    | normal |
| `UntitledPro-BoldItalic.woff2`     | 700    | italic |
| `UntitledPro-Black.woff2`          | 900    | normal |
| `UntitledPro-BlackItalic.woff2`    | 900    | italic |

> Se os nomes dos seus arquivos forem diferentes, ajuste nos respectivos CSS/SCSS.

---

## 2. Uso — HTML puro

```html
<link rel="stylesheet" href="css/typography.css">
```

Isso carrega automaticamente as `@font-face` e aplica a Untitled Pro globalmente ao `body`. Classes utilitárias disponíveis:

```html
<h1 class="display-large">Título principal</h1>
<p class="body-large">Texto de corpo grande</p>
<span class="caption">Legenda</span>
<span class="overline">OVERLINE</span>

<!-- Pesos -->
<p class="font-light">Light 300</p>
<p class="font-medium">Medium 500</p>
<p class="font-bold">Bold 700</p>
<p class="font-black">Black 900</p>

<!-- Tamanhos -->
<p class="text-sm">Pequeno</p>
<p class="text-2xl">Grande</p>
<p class="text-5xl">Muito grande</p>
```

---

## 3. Uso — Next.js (App Router)

### Passo 1: Copiar fontes para `public/fonts/untitled-pro/`

### Passo 2: Criar o módulo de fonte

Copie `integrations/next-font.tsx` para `lib/fonts.ts` (ajuste os caminhos internos).

### Passo 3: Aplicar no layout raiz

```tsx
// app/layout.tsx
import { untitledPro } from '@/lib/fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={untitledPro.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

### Passo 4: Configurar Tailwind (se usar)

```js
// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-untitled-pro)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
```

---

## 4. Uso — React (Vite / CRA)

### Opção A: Importar CSS

```tsx
// main.tsx
import './css/typography.css';
```

### Opção B: Usar o componente provider

```tsx
import { UntitledProProvider } from './integrations/react-font-loader';

function App() {
  return (
    <UntitledProProvider>
      <h1>Todo o conteúdo usa Untitled Pro</h1>
    </UntitledProProvider>
  );
}
```

### Opção C: Hook para estilos inline

```tsx
import { useUntitledPro } from './integrations/react-font-loader';

function Component() {
  const boldStyle = useUntitledPro(700);
  return <p style={boldStyle}>Texto em Bold</p>;
}
```

---

## 5. Uso — Tailwind CSS

### Passo 1: Substituir `globals.css`

Use `integrations/tailwind-globals.css` como base (ou copie os `@font-face` para o seu CSS existente).

### Passo 2: Estender `tailwind.config.js`

Copie as seções de `integrations/tailwind.config.js` para o seu config:

```js
const untitledConfig = require('./integrations/tailwind.config.js');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      ...untitledConfig.theme.extend,
    },
  },
};
```

Depois use normalmente:

```html
<h1 class="font-sans font-bold text-5xl tracking-tight">Título</h1>
<p class="font-sans font-normal text-base leading-relaxed">Corpo do texto</p>
```

---

## 6. Uso — SCSS

```scss
@import 'scss/untitled-pro';

.hero-title {
  @include heading(map-get($font-sizes, '5xl'));
}

.body-text {
  @include body;
}

.label {
  @include caption;
}

.section-label {
  @include overline;
}

// Uso direto do mixin
.custom-element {
  @include untitled-pro(500, 1.25rem, 1.4);
}
```

---

## Variáveis CSS disponíveis

| Variável              | Valor padrão          |
|-----------------------|-----------------------|
| `--font-primary`      | Untitled Pro + stack  |
| `--font-light`        | 300                   |
| `--font-regular`      | 400                   |
| `--font-medium`       | 500                   |
| `--font-bold`         | 700                   |
| `--font-black`        | 900                   |
| `--text-xs` … `--text-7xl` | 0.75rem … 4.5rem |
| `--leading-none` … `--leading-loose` | 1 … 2 |
| `--tracking-tighter` … `--tracking-widest` | -0.05em … 0.1em |

---

## Licença

A fonte **Untitled Pro** é propriedade dos seus criadores. Certifique-se de ter a licença adequada antes de usar em produção.
