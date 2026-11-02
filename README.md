# Enzo — Portfolio

Portfólio pessoal de Enzo (enzwq_), construído com React, TypeScript e Vite.
A interface usa uma identidade dark premium minimalista, com tipografia Inter e
Manrope, detalhes em areia e layouts responsivos.

## Executar localmente

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — inicia o servidor de desenvolvimento.
- `npm run build` — verifica os tipos e gera o build em `dist/`.
- `npm run preview` — serve o build localmente.
- `npm run lint` — executa o ESLint.

## Estrutura

```text
src/
├── components/
│   ├── About.tsx       # Apresentação e abordagem
│   ├── Contact.tsx     # E-mail e redes sociais
│   ├── Experience.tsx  # Experiência prática documentada nos projetos
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx      # Navegação responsiva e seção ativa
│   ├── Projects.tsx    # Cases, tecnologias e links
│   └── Stack.tsx       # Expertise por categoria
├── assets/
│   └── projects/       # Capturas fornecidas dos projetos
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## Atualizar conteúdo

Edite os componentes em `src/components/`. Os projetos, descrições, tecnologias
e links estão no início de `Projects.tsx`. As capturas reais de GymManager,
Daniela Feijó Psicologia e WEEB's Solutions ficam em `src/assets/projects/`.
Academia Mazze usa um conceito visual CSS, identificado como ilustração, pois
uma captura do projeto não foi fornecida.

Os links de contato atuais são configurados em `Contact.tsx`. A mensagem por
e-mail usa `mailto:`; não há formulário ou serviço de envio configurado. A
experiência é apresentada por projeto porque períodos, cargos e vínculos
profissionais não estão informados.

## Acessibilidade e metadados

A navegação por âncoras, o menu mobile, estados de foco, link para pular ao
conteúdo e a preferência `prefers-reduced-motion` são suportados. Título,
descrição, Open Graph e idioma da página são definidos em `index.html`.
