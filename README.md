# Journey Travel Website

## Sobre o Projeto

Recriação **pixel-perfect** do template *Journey* (TemplateMo) usando **React + Vite + TailwindCSS + shadcn/ui + Lucide Icons**.  
Site de viagens **responsivo, componentizado, animado e com validação de formulários**.

---

## Objetivos (TODOS CONCLUÍDOS)

- Componentização modular (máximo 80 linhas por componente)
- Design responsivo e moderno
- Performance otimizada
- Código limpo e manutenível
- Validação com Zod + React Hook Form
- Animações suaves (`fade-in`)

---

## Stack Tecnológica

- **React 18** - Biblioteca UI
- **Vite** - Build tool
- **TailwindCSS v3** - Framework CSS
- **shadcn/ui** - Componentes UI
- **Lucide React** - Ícones
- **Zod + React Hook Form** - Validação
- **TypeScript** (opcional) - Tipagem estática

---

## Estrutura de Componentes
src/
├── App.tsx                    # Componente principal
├── components/
│   ├── Header.tsx            # Navegação fixa com scroll
│   ├── HeroSection.tsx       # Banner principal com CTA
│   ├── SearchForm.tsx        # Formulário de busca com validação
│   ├── AboutSection.tsx      # Seção "Sobre nós"
│   ├── DestinationsTabs.tsx  # Abas de continentes (7)
│   ├── RecommendedPlaces.tsx # Cards de lugares (4)
│   ├── ContactMapSection.tsx # Mapa + formulário flutuante
│   └── Footer.tsx            # Rodapé com copyright
└── lib/
└── utils.ts              # shadcn utils
text---

## Design System

### Cores Principais
- **Primary**: `#69c6ba` (Teal/Verde-água)
- **Highlight**: `#c66995` (Rosa)
- **Text**: `#333333` (Cinza escuro)
- **Gray Text**: `#787676`
- **Background**: `#efefef` (Cinza claro)

### Tipografia
- **Font Family**: `'Open Sans', sans-serif`
- **Tamanhos**: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`

### Breakpoints
- **Mobile**: `< 768px`
- **Tablet**: `768px - 991px`
- **Desktop**: `≥ 992px`

---

## Etapas de Desenvolvimento

### Etapa 0: Setup Inicial
**Objetivo**: Configurar ambiente e README  
- [x] Criar README.md com documentação completa  
- [x] Definir estrutura de pastas  
- [x] Listar dependências necessárias  

### Etapa 1: Header Component
**Objetivo**: Navegação fixa e responsiva  
- [x] Logo e branding  
- [x] Menu de navegação desktop  
- [x] Menu hamburger mobile  
- [x] Efeito de scroll (119px → 60px)  
- [x] Smooth scroll para seções  

**Medidas**:  
- Altura: `119px` → `60px` (scrolled)  
- Logo: `60px` → `40px`  
- Transição: `300ms`

### Etapa 2: Hero Section
**Objetivo**: Banner principal com impacto visual  
- [x] Background image com overlay  
- [x] Título e subtítulo centralizados  
- [x] Botão CTA com ícone (ArrowDown)  
- [x] Animação de entrada  
- [x] Responsividade mobile  

**Medidas**:  
- Altura: `min-height: 720px`  
- Overlay: `rgba(0,0,0,0.7)`  
- Título: `text-3xl` / `text-5xl`

### Etapa 3: Search Form
**Objetivo**: Formulário funcional de busca  
- [x] Grid responsivo de campos  
- [x] Input de destino  
- [x] Selects (quartos, adultos, crianças)  
- [x] Date pickers (check-in/out)  
- [x] Botão de submit  
- [x] Validação com Zod  
- [x] Estado do formulário (React hooks)  

**Layout**:  
- Container: `max-w-[830px]`  
- Grid: `1 col (mobile)` → `2-3 cols (desktop)`  
- Background: `#f5f6f6`

### Etapa 4: About Section
**Objetivo**: Seção institucional simples  
- [x] Título centralizado  
- [x] Parágrafo descritivo  
- [x] Botão CTA  
- [x] Background diferenciado  

**Medidas**:  
- Container: `max-w-[830px]`  
- Text-align: `center`  
- Padding: `py-16`

### Etapa 5: Destinations Tabs
**Objetivo**: Navegação por continentes  
- [x] 7 abas (continentes)  
- [x] Ícones/imagens dos continentes  
- [x] Estado ativo visual  
- [x] Layout flexível responsivo  
- [x] Transições suaves  

**Cores**:  
- Inativo: `bg-[#69c6ba]`  
- Ativo: `bg-[#c66995]`  
- Hover: `bg-[#d07aa6]`

### Etapa 6: Recommended Places
**Objetivo**: Lista de lugares com preços  
- [x] Cards horizontais  
- [x] Imagem + Descrição + Preço  
- [x] Layout flex responsivo  
- [x] Botão "Continue Reading"  
- [x] Botão "Show More"  
- [x] Mínimo 4 lugares  

**Card Layout**:  
- Desktop: `flex-row` (imagem `270px` / conteúdo `500px` / preço `200px`)  
- Mobile: `flex-col`  
- Shadow: `0 0 3px rgba(0,0,0,0.15)`

### Etapa 7: Contact & Map Section
**Objetivo**: Formulário de contato com mapa  
- [x] Mapa (`iframe`, `h-[600px]`)  
- [x] Formulário sobreposto (`absolute top-10 right-10`)  
- [x] Inputs: Nome, Email, Assunto, Mensagem  
- [x] Validação com Zod  
- [x] Botão de envio  
- [x] Responsividade (mobile: full-width)  

**Posicionamento**:  
- Desktop: `w-[470px]`  
- Mobile: `w-full`, `static`

### Etapa 8: Footer
**Objetivo**: Rodapé simples  
- [x] Copyright e créditos  
- [x] Background colorido  
- [x] Texto centralizado  

**Estilo**:  
- Background: `#69c6ba`  
- Text: `white`  
- Padding: `py-6`

### Etapa 9: Refinamentos Finais
**Objetivo**: Polimento e otimização  
- [x] Animações e transições  
- [x] Estados de hover  
- [x] Acessibilidade (a11y)  
- [x] Performance  
- [x] Testes em diferentes resoluções  
- [x] Smooth scroll  
- [x] Loading states (lazy iframe)

---

## Instalação do Projeto (Passo a Passo)

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### 1️⃣ Criar Projeto Vite + React

```bash
npm create vite@latest journey-travel -- --template react-ts
cd journey-travel
npm install
2️⃣ Instalar TailwindCSS v3
bashnpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
tailwind.config.js:
jsexport default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#69c6ba',
        highlight: '#c66995',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
src/index.css:
css@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
3️⃣ Instalar Lucide Icons
bashnpm install lucide-react
4️⃣ Instalar shadcn/ui
bashnpx shadcn@latest init
npx shadcn@latest add button input label select card form textarea
npm install react-hook-form zod @hookform/resolvers
5️⃣ Executar Projeto
bashnpm run dev
Acesse: http://localhost:5173

Comandos Úteis
bashnpm run dev     # Desenvolvimento
npm run build   # Build produção
npm run preview # Preview

Notas de Desenvolvimento

Componentização: Nenhum componente excede 80 linhas
Responsividade: Mobile-first
Cores: Classes bg-primary, hover:bg-highlight
Ícones: Lucide React
Estado: Hooks locais


Status: FINALIZADO
Etapa Atual: Deploy
Feito com ❤️ por [Marcos Lima Dev] – 2025