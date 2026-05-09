# ENZWZZ - Portfolio

Um portfólio moderno e minimalista desenvolvido com React, Vite, TailwindCSS e Framer Motion.

![Portfolio Preview](https://via.placeholder.com/800x400/8b5cf6/ffffff?text=ENZWZZ+Portfolio)

## ✨ Características

- 🎨 **Design Moderno**: Interface futurista com tema roxo neon e preto
- 📱 **Totalmente Responsivo**: Perfeito em desktop, tablet e mobile
- ⚡ **Performance Otimizada**: Vite para build rápido e otimizado
- 🎭 **Animações Suaves**: Framer Motion para transições elegantes
- 🌟 **Glassmorphism**: Efeitos de transparência e blur premium
- 🎯 **UX/UX Focado**: Navegação intuitiva e experiência fluida
- 🔧 **Código Limpo**: Componentização profissional e TypeScript

## 🚀 Tecnologias Utilizadas

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **Fonte**: Inter (Google Fonts)

## 📁 Estrutura do Projeto

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Stack.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── Loading.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── eslint.config.js
```

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos para Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/enzwzz/portfolio.git
   cd portfolio
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Abra no navegador**
   ```
   http://localhost:5173
   ```

### Build para Produção

```bash
# Build otimizado
npm run build

# Preview do build
npm run preview
```

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build otimizado para produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa o linter ESLint

## 🎨 Personalização

### Cores do Tema

As cores principais podem ser alteradas no `tailwind.config.js`:

```javascript
colors: {
  primary: '#8b5cf6', // Roxo neon
  secondary: '#000000', // Preto
  accent: '#a855f7', // Roxo claro
}
```

### Conteúdo

Para personalizar o conteúdo, edite os componentes em `src/components/`:

- **Navbar**: Links de navegação
- **Hero**: Texto principal e botões
- **About**: Informações pessoais e skills
- **Projects**: Lista de projetos
- **Stack**: Tecnologias e ferramentas
- **Contact**: Informações de contato

## 🚀 Deploy na Vercel

### Método 1: Deploy Automático (Recomendado)

1. **Conecte seu repositório GitHub à Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Importe seu repositório GitHub

2. **Configure o projeto**
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (raiz do projeto)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

3. **Deploy**
   - Clique em "Deploy"
   - Aguarde o build ser concluído

### Método 2: Deploy Manual

1. **Build do projeto**
   ```bash
   npm run build
   ```

2. **Instale Vercel CLI**
   ```bash
   npm i -g vercel
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Configure se necessário**
   - Siga as instruções do CLI
   - Escolha as configurações apropriadas

## 📱 Seções do Portfolio

### 🏠 Hero Section
- Apresentação impactante
- Botões de ação principais
- Background animado com efeitos visuais

### 👨‍💻 Sobre Mim
- Biografia profissional
- Skills com barras de progresso animadas
- Estatísticas pessoais

### 💼 Projetos
- Cards interativos de projetos
- Hover effects com glow
- Links para GitHub e demo
- Tecnologias utilizadas

### 🛠️ Stack/Tecnologias
- Grid organizado por categoria
- Níveis de proficiência
- Ícones das tecnologias

### 📞 Contato
- Formulário de contato funcional
- Links para redes sociais
- Informações de contato

### 🔗 Footer
- Links rápidos
- Direitos autorais
- Design elegante

## 🎯 Funcionalidades

- ✅ **Loading Animation**: Tela de carregamento inicial
- ✅ **Smooth Scrolling**: Navegação suave entre seções
- ✅ **Mobile Menu**: Menu responsivo para mobile
- ✅ **Dark Theme**: Tema escuro otimizado
- ✅ **Glassmorphism**: Efeitos de vidro modernos
- ✅ **Particle Effects**: Backgrounds animados
- ✅ **Custom Scrollbar**: Scrollbar personalizada
- ✅ **SEO Optimized**: Meta tags e estrutura semântica

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fork o projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

**ENZWZZ**
- **Email**: enzwzz.dev@gmail.com
- **GitHub**: [github.com/enzwzz](https://github.com/enzwzz)
- **Instagram**: [@enzwq_](https://instagram.com/enzwq_)
- **Discord**: @enzwzz

---

⭐ **Star este repositório se gostou do projeto!**

Feito com ❤️ e muito ☕ por ENZWZZ
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
