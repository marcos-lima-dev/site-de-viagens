# 🌍 Journey Travel Website

## 📋 Sobre o Projeto

Recriação moderna do template "Journey" usando React + Vite + TailwindCSS + shadcn/ui + Lucide Icons. Um site de viagens responsivo e componentizado seguindo as melhores práticas de desenvolvimento front-end.

## 🎯 Objetivos

- ✅ Componentização modular (máximo 80 linhas por componente)
- ✅ Design responsivo e moderno
- ✅ Performance otimizada
- ✅ Código limpo e manutenível

## 🛠️ Stack Tecnológica

- **React 18** - Biblioteca UI
- **Vite** - Build tool
- **TailwindCSS** - Framework CSS
- **shadcn/ui** - Componentes UI
- **Lucide React** - Ícones
- **TypeScript** (opcional) - Tipagem estática

## 📦 Estrutura de Componentes

```
src/
├── App.tsx                    # Componente principal
├── components/
│   ├── Header.tsx            # Navegação fixa no topo
│   ├── HeroSection.tsx       # Banner principal com CTA
│   ├── SearchForm.tsx        # Formulário de busca de viagens
│   ├── AboutSection.tsx      # Seção "Sobre nós"
│   ├── DestinationSlideshow.tsx # Slideshow de destinos
│   ├── DestinationsTabs.tsx  # Abas de continentes
│   ├── RecommendedPlaces.tsx # Cards de lugares
│   ├── ContactMapSection.tsx # Formulário + Mapa
│   └── Footer.tsx            # Rodapé
└── assets/                   # Imagens e recursos
```

## 🎨 Design System

### Cores Principais
- **Primary**: `#69c6ba` (Teal/Verde-água)
- **Highlight**: `#c66995` (Rosa)
- **Text**: `#333333` (Cinza escuro)
- **Background**: `#efefef` (Cinza claro)

### Tipografia
- **Font Family**: 'Inter', 'Open Sans', sans-serif
- **Tamanhos**: text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

## 📝 Etapas de Desenvolvimento

### ✅ Etapa 0: Setup Inicial
**Objetivo**: Configurar ambiente e README
- [x] Criar README.md com documentação completa
- [ ] Definir estrutura de pastas
- [ ] Listar dependências necessárias

### 🔄 Etapa 1: Header Component
**Objetivo**: Criar navegação fixa e responsiva
- [ ] Logo e branding
- [ ] Menu de navegação desktop
- [ ] Menu hamburger mobile
- [ ] Efeito de scroll (mudança de altura/cor)
- [ ] Smooth scroll para seções

**Medidas**:
- Altura: 80px (normal) → 64px (scrolled)
- Logo: 40px
- Transição suave (300ms)

### 🔄 Etapa 2: Hero Section
**Objetivo**: Banner principal com impacto visual
- [ ] Background image com overlay
- [ ] Título e subtítulo centralizados
- [ ] Botão CTA com ícone (ArrowDown)
- [ ] Animação de entrada
- [ ] Responsividade mobile

**Medidas**:
- Altura: 100vh (min 720px)
- Overlay: opacity 0.6
- Título: text-4xl/5xl

### 🔄 Etapa 3: Search Form
**Objetivo**: Formulário funcional de busca
- [ ] Grid responsivo de campos
- [ ] Input de destino
- [ ] Selects (quartos, adultos, crianças)
- [ ] Date pickers (check-in/out)
- [ ] Botão de submit
- [ ] Validação básica
- [ ] Estado do formulário (React hooks)

**Layout**:
- Container: max-w-4xl
- Grid: 1 col (mobile) → 2-3 cols (desktop)
- Background: gray-100

### 🔄 Etapa 4: About Section
**Objetivo**: Seção institucional simples
- [ ] Título centralizado
- [ ] Parágrafo descritivo
- [ ] Botão CTA
- [ ] Background diferenciado

**Medidas**:
- Container: max-w-4xl
- Text-align: center
- Padding: py-12

### 🔄 Etapa 5: Destination Slideshow
**Objetivo**: Cards visuais de destinos
- [ ] Layout 50/50 (imagem/texto)
- [ ] Overlay gradiente em imagens
- [ ] Botões de leitura
- [ ] Grid responsivo
- [ ] Mínimo 2 cards

**Layout**:
- Desktop: 2 colunas
- Mobile: 1 coluna (stack)
- Imagens: object-cover

### 🔄 Etapa 6: Destinations Tabs
**Objetivo**: Navegação por continentes
- [ ] 7 abas (continentes)
- [ ] Ícones/imagens dos continentes
- [ ] Estado ativo visual
- [ ] Layout flexível responsivo
- [ ] Transições suaves

**Cores**:
- Inativo: bg-teal-500
- Ativo: bg-pink-500
- Hover: bg-pink-400

### 🔄 Etapa 7: Recommended Places
**Objetivo**: Lista de lugares com preços
- [ ] Cards horizontais
- [ ] Imagem + Descrição + Preço
- [ ] Layout flex responsivo
- [ ] Botão "Continue Reading"
- [ ] Botão "Show More"
- [ ] Mínimo 4 lugares

**Card Layout**:
- Desktop: flex-row (imagem 33% / conteúdo 67%)
- Mobile: flex-col (stack)
- Shadow e rounded

### 🔄 Etapa 8: Contact & Map Section
**Objetivo**: Formulário de contato com mapa
- [ ] Mapa (imagem placeholder ou iframe)
- [ ] Formulário sobreposto (absolute)
- [ ] Inputs: Nome, Email, Assunto, Mensagem
- [ ] Botão de envio
- [ ] Responsividade (mobile stack)

**Posicionamento**:
- Desktop: absolute top-10 right-10
- Mobile: relative, full-width

### 🔄 Etapa 9: Footer
**Objetivo**: Rodapé simples
- [ ] Copyright e créditos
- [ ] Background colorido
- [ ] Texto centralizado

**Estilo**:
- Background: teal-500
- Text: white
- Padding: py-6

### 🔄 Etapa 10: Refinamentos Finais
**Objetivo**: Polimento e otimização
- [ ] Animações e transições
- [ ] Estados de hover
- [ ] Acessibilidade (a11y)
- [ ] Performance
- [ ] Testes em diferentes resoluções
- [ ] Smooth scroll
- [ ] Loading states (se necessário)

## 🚀 Instalação do Projeto (Passo a Passo)

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### 1️⃣ Criar Projeto Vite + React

```bash
# Criar projeto com Vite
npm create vite@latest journey-travel -- --template react

# Entrar na pasta
cd journey-travel

# Instalar dependências base
npm install
```

### 2️⃣ Instalar e Configurar TailwindCSS V4 (Versão Atual)

```bash
# Instalar TailwindCSS V4 e plugin Vite
npm install tailwindcss @tailwindcss/vite
```

**Configurar `vite.config.js`:**
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

**Configurar `src/index.css`:**
```css
@import "tailwindcss";

/* Cores customizadas do projeto */
@theme {
  --color-primary: #69c6ba;
  --color-highlight: #c66995;
}
```

**Verificar importação em `src/main.jsx`:**
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'  // ✅ Certifique-se que está importado

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### 3️⃣ Instalar Lucide Icons

```bash
# Instalar Lucide React
npm install lucide-react
```

### 4️⃣ Instalar e Configurar shadcn/ui (Opcional)

> ⚠️ **ATENÇÃO**: shadcn/ui ainda não tem suporte oficial para TailwindCSS V4.  
> **Recomendação**: Pular esta etapa e usar TailwindCSS puro para este projeto.

Se quiser usar shadcn/ui, será necessário usar TailwindCSS V3 ao invés da V4.

**Para este projeto, vamos seguir SEM shadcn/ui.**

### 5️⃣ Configurar Alias de Importação (Opcional)

**Adicionar em `vite.config.js`:**
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

**Instalar @types/node para usar o path:**
```bash
npm install -D @types/node
```

### 6️⃣ Estrutura de Pastas

```bash
# Criar estrutura de pastas
mkdir -p src/components src/assets
```

**Estrutura final:**
```
journey-travel/
├── node_modules/
├── public/
├── src/
│   ├── assets/           # Imagens e recursos
│   ├── components/       # Componentes React
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── SearchForm.jsx
│   │   ├── AboutSection.jsx
│   │   ├── DestinationSlideshow.jsx
│   │   ├── DestinationsTabs.jsx
│   │   ├── RecommendedPlaces.jsx
│   │   ├── ContactMapSection.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

### 7️⃣ Limpar Arquivos Iniciais

**Limpar `src/App.jsx`:**
```jsx
function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#69c6ba] to-[#c66995]">
      <h1 className="text-4xl font-bold text-white underline">
        Journey Travel - Setup Completo! ✅
      </h1>
    </div>
  )
}

export default App
```

**Limpar `src/App.css`** (pode deletar este arquivo)

### 8️⃣ Executar Projeto

```bash
# Executar em desenvolvimento
npm run dev

# Abrir no navegador
# http://localhost:5173
```

### ✅ Verificação de Instalação

Se tudo estiver correto, você deve ver:
- ✅ Página carrega sem erros
- ✅ TailwindCSS funcionando (texto colorido e estilizado)
- ✅ Hot reload funcionando (mudanças refletem automaticamente)

## 📦 Dependências Finais

**package.json deve conter:**
```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@vitejs/plugin-react": "^4.0.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/vite": "^4.0.0",
    "vite": "^5.0.0"
  }
}
```

## 🎨 Usando Cores Customizadas no TailwindCSS V4

Com TailwindCSS V4, você define cores no `src/index.css`:

```css
@import "tailwindcss";

@theme {
  --color-primary: #69c6ba;
  --color-highlight: #c66995;
}
```

E usa assim no código:
```jsx
// Cores customizadas
<div className="bg-primary text-white">
<div className="bg-highlight">

// OU usando valores diretos (também funciona)
<div className="bg-[#69c6ba]">
<div className="text-[#c66995]">
```

## 🚀 Comandos Úteis

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## ⚠️ Diferenças TailwindCSS V4 vs V3

### O que mudou:
- ❌ Não precisa mais de `postcss` e `autoprefixer`
- ❌ Não precisa mais de `tailwind.config.js`
- ❌ Não usa mais `@tailwind base/components/utilities`
- ✅ Usa `@import "tailwindcss"` no CSS
- ✅ Usa `@theme` para customizações
- ✅ Usa plugin `@tailwindcss/vite` no Vite
- ✅ Mais rápido e simples de configurar

## ✨ Features Adicionais (Opcional)

- [ ] Animações com Framer Motion
- [ ] Carousel com Embla ou Swiper
- [ ] Integração real com Google Maps
- [ ] Form validation com Zod
- [ ] Estado global (Context API ou Zustand)
- [ ] Dark mode
- [ ] Internacionalização (i18n)

## 📝 Notas de Desenvolvimento

- **Componentização**: Nenhum componente deve exceder 80 linhas
- **Responsividade**: Mobile-first approach
- **Cores**: Usar apenas classes Tailwind core (sem custom)
- **Ícones**: Lucide React já importado
- **Estado**: Preferir hooks locais, evitar prop drilling

## 🤝 Processo de Desenvolvimento

1. ✅ Criar README com todas as etapas
2. 🔄 Implementar uma etapa por vez
3. ✅ Validar funcionamento antes de avançar
4. 🔄 Refatorar se necessário
5. ✅ Marcar etapa como concluída

---

**Status**: 🔄 Em Desenvolvimento  
**Etapa Atual**: Etapa 0 - Setup Inicial  
**Próxima Etapa**: Etapa 1 - Header Component