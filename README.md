# Untitled UI Pro — Integração Global

Configuração de Cursor Skill + MCP + Rules para usar o **Untitled UI Pro** como biblioteca de componentes em todos os projetos.

---

## O que está configurado

```
.cursor/
├── mcp.json                              ← Servidor MCP do Untitled UI
├── skills/
│   └── untitledui-pro/
│       └── SKILL.md                      ← Skill completa com fluxo de trabalho
└── rules/
    ├── untitledui-always.mdc             ← Regra global (sempre ativa)
    ├── ui-components.mdc                 ← Padrões para componentes .tsx
    └── project-init.mdc                  ← Regras de inicialização de projetos
```

---

## Como funciona

### MCP Server

O servidor MCP `untitledui` conecta o Cursor diretamente à biblioteca de componentes do Untitled UI. O agente pode:

- **Buscar componentes** por nome ou descrição
- **Listar categorias** de componentes disponíveis
- **Baixar componentes completos** com todas as dependências
- **Acessar templates** de páginas prontas (dashboards, settings, auth, etc.)

### Skill

A skill instrui o agente a **sempre** consultar o Untitled UI antes de criar qualquer componente visual. Inclui:

- Fluxo de trabalho obrigatório (pesquisar → buscar → adaptar)
- Catálogo dos componentes Pro disponíveis (46 modais, 12 tabelas, 60+ dashboards, etc.)
- Padrões de código (TypeScript, Tailwind, React Aria)
- Checklist de qualidade

### Rules

| Regra | Escopo | Função |
|---|---|---|
| `untitledui-always.mdc` | Global | Garante que toda UI use Untitled UI, proíbe libs concorrentes |
| `ui-components.mdc` | `*.tsx` | Padrões de código e estrutura para componentes |
| `project-init.mdc` | `package.json` | Garante inicialização via CLI do Untitled UI |

---

## Setup rápido

### 1. Autenticar (Pro)

```bash
npx untitledui@latest login
```

### 2. Iniciar um projeto novo

```bash
# Next.js
npx untitledui@latest init --nextjs

# Vite
npx untitledui@latest init --vite
```

### 3. Adicionar componentes

```bash
npx untitledui@latest add button modal sidebar table
```

### 4. Verificar MCP

O `.cursor/mcp.json` já está configurado. O Cursor vai carregar o servidor automaticamente.

---

## Uso com o agente

Depois de configurado, basta pedir ao agente em linguagem natural:

- *"Cria uma página de dashboard com métricas e tabela"*
- *"Adiciona um modal de confirmação de exclusão"*
- *"Monta uma sidebar com navegação e sub-menus"*
- *"Cria uma landing page com pricing e FAQ"*

O agente vai automaticamente consultar o MCP, buscar os componentes do Untitled UI e montar a interface.

---

## Stack

| Tecnologia | Versão |
|---|---|
| React | 18+ |
| TypeScript | 5.8+ |
| Tailwind CSS | 4.1+ |
| React Aria | latest |
| @untitledui/icons | latest |
