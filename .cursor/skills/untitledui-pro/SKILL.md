---
name: untitledui-pro
description: Skill para construir interfaces usando exclusivamente componentes do Untitled UI Pro via MCP e CLI. Deve ser usada sempre que o agente precisar criar, montar ou modificar interfaces de usuário.
---

# Untitled UI Pro — Skill de Construção de Interfaces

## Quando usar

- Sempre que for criar qualquer interface de usuário (páginas, modais, formulários, dashboards, tabelas, navegação, etc.)
- Sempre que for adicionar componentes visuais a um projeto
- Sempre que for montar layouts, landing pages, páginas de autenticação ou painéis administrativos
- Sempre que o usuário pedir para construir algo visual

## Quando NÃO usar

- Lógica de backend pura sem interface visual
- Configurações de infraestrutura (Docker, CI/CD) que não envolvem UI
- Scripts de automação sem componente visual

---

## Stack obrigatória

Todos os projetos com UI devem usar:

- **React** com **TypeScript** (v5.8+)
- **Tailwind CSS** (v4.1+)
- **React Aria** (acessibilidade nativa)
- **Untitled UI** como biblioteca de componentes (via source code, não pacote npm)
- **@untitledui/icons** para ícones

## Inicialização de projetos novos

Ao criar um projeto novo com interface, sempre inicializar com o CLI do Untitled UI:

```bash
# Next.js (preferência)
npx untitledui@latest init --nextjs

# Vite
npx untitledui@latest init --vite
```

Nunca inicializar manualmente com `create-next-app` ou `create-vite` quando o projeto terá UI. Usar sempre o starter kit do Untitled UI que já vem com design tokens, theme provider e configuração de Tailwind.

---

## Ferramentas MCP disponíveis

O servidor MCP `untitledui` fornece estas ferramentas. **Use-as sempre antes de criar componentes manualmente:**

| Ferramenta | Uso |
|---|---|
| `search_components` | Buscar componentes por nome ou descrição |
| `list_components` | Listar componentes de uma categoria |
| `get_component_with_deps` | Buscar um componente com todas as suas dependências (preferir esta) |
| `get_component` | Buscar um componente individual |
| `get_component_file` | Buscar um arquivo específico de um componente maior |
| `list_examples` | Listar templates de páginas completas disponíveis |
| `get_example` | Buscar um template de página completo |

### Fluxo de trabalho obrigatório

1. **Antes de criar qualquer componente**, pesquisar no MCP se já existe:
   - Use `search_components` com termos relevantes
   - Use `list_components` para navegar por categoria

2. **Ao implementar**, buscar com dependências:
   - Use `get_component_with_deps` (não `get_component`) para garantir que todas as dependências venham junto

3. **Para páginas completas**, começar por templates:
   - Use `list_examples` para ver o que está disponível
   - Use `get_example` para buscar o template como ponto de partida

4. **Nunca recriar do zero** o que o Untitled UI já oferece. Adaptar o componente existente.

---

## Adicionando componentes via CLI

Para adicionar componentes ao projeto existente:

```bash
# Componente individual
npx untitledui@latest add button

# Múltiplos componentes
npx untitledui@latest add button toggle avatar modal

# Seleção interativa
npx untitledui@latest add

# Modo não-interativo (para CI/agentes)
npx untitledui@latest add button --yes
```

---

## Componentes disponíveis (Pro)

### Application UI
- **Modais** (46 variações): confirmação, formulários, alertas, uploads, etc.
- **Tabelas** (12 variações): dados, paginação, filtros, seleção
- **Sidebars** (5 variações): navegação principal, com sub-menus
- **Headers de navegação** (2 variações)
- **Command menus** (9 variações): busca/comando tipo ⌘K
- **Slideout menus** (20 variações): painéis laterais
- **Métricas** (16 variações): cards de KPIs, stats
- **Charts**: linha, barra, pizza, radar, gauge de atividade
- **Date pickers** (6 variações)
- **Calendários** (3 variações)
- **File uploaders** (5 variações)
- **Notificações** (9 variações)
- **Alertas** (12 variações)
- **Loading indicators** (3 variações)
- **Dashboards** (60+ exemplos completos)

### Base (open-source)
- Buttons, inputs, selects, textareas
- Avatars, badges, tooltips, toggles
- Checkboxes, radios, switches
- Tabs, accordions, dropdowns

---

## Theming e Design Tokens

### Cores

O Untitled UI usa CSS variables para theming. As cores do brand são definidas em variáveis `--color-brand-*`. Para customizar:

1. Duplicar uma paleta pré-definida
2. Renomear para `--color-brand-*`
3. Usar valores RGB

### Dark mode

Adicionar a classe `dark-mode` ao elemento para ativar. Componentes suportam dark mode nativamente via design tokens. Pode misturar componentes light e dark na mesma página.

### Não fazer

- Não usar cores hardcoded (hex/rgb direto). Usar design tokens.
- Não sobrescrever estilos do Tailwind com CSS inline.
- Não criar variantes visuais que o Untitled UI já oferece.

---

## Padrões de código

### Imports

```tsx
// Componentes ficam em src/components/ui/ (copiados pelo CLI)
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';

// Ícones
import { SearchIcon, PlusIcon } from '@untitledui/icons';
```

### Estrutura de componentes

```tsx
// Sempre TypeScript, sempre tipado
interface Props {
  title: string;
  onClose: () => void;
}

export function SettingsModal({ title, onClose }: Props) {
  return (
    <Modal onClose={onClose}>
      <Modal.Header>
        <h2 className="text-lg font-semibold">{title}</h2>
      </Modal.Header>
      <Modal.Body>
        {/* conteúdo */}
      </Modal.Body>
    </Modal>
  );
}
```

### Estilização

- Usar **exclusivamente** classes Tailwind CSS
- Seguir os design tokens definidos no projeto
- Responsividade com breakpoints do Tailwind (`sm:`, `md:`, `lg:`, `xl:`)
- Acessibilidade garantida pelo React Aria (não remover props `aria-*`)

---

## Checklist antes de entregar

- [ ] Todos os componentes visuais vieram do Untitled UI (via MCP ou CLI)
- [ ] Nenhum componente foi recriado do zero sem verificar no MCP primeiro
- [ ] Design tokens usados (sem cores hardcoded)
- [ ] Dark mode funcional (se aplicável)
- [ ] Responsivo em todos os breakpoints
- [ ] Acessibilidade preservada (React Aria não removido)
- [ ] TypeScript sem `any`
