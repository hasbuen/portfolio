# Portfólio Profissional — Julio Cesar Ovídio Bueno

Portfolio moderno construído com React + TypeScript + Tailwind CSS, hospedado na Vercel.

## 🛠️ Stack

- **React 18** + **TypeScript**
- **Tailwind CSS v3** (design responsivo, dark mode nativo)
- **Vite** (build ultra-rápido)
- **Lucide React** (ícones)
- **Playwright** (geração dos PDFs do currículo)

## 📁 Estrutura

```
src/
├── components/      # Componentes reutilizáveis (Navbar)
├── data/            # Dados estáticos (portfolio.ts, certificates.json)
├── hooks/           # Custom hooks (useActiveSection, useFilter)
├── sections/        # Seções da página (Hero, About, Experience, ...)
├── types/           # Tipos TypeScript
├── App.tsx
├── main.tsx
└── index.css        # Tailwind + estilos globais

public/
├── certificados/    # 73 PDFs de certificados DIO
├── curriculo_julio_cesar_bueno.pdf
└── curriculo_julio_cesar_bueno_1pagina.pdf
```

## 🚀 Desenvolvimento Local

```bash
npm install
npm run dev
# → http://localhost:5173
```

## 🏗️ Build para Produção

```bash
npm run build
# Output: dist/
```

## 🌐 Deploy na Vercel

1. Faça push do repositório para o GitHub
2. Importe o projeto em [vercel.com](https://vercel.com)
3. Framework: **Vite** (detectado automaticamente)
4. Build command: `npm run build`
5. Output dir: `dist`

## 📄 Seções

- **Hero** — Apresentação com stats e links sociais
- **Sobre** — Bio, formação e informações de contato
- **Experiência** — Timeline profissional (10+ anos)
- **Habilidades** — 4 categorias de competências técnicas
- **Projetos** — Protocord, Acionar, Storage Space, Transcritor
- **Certificados** — 73 certificados DIO com filtros e download individual
- **Currículo** — Download nas versões 2 páginas e 1 página
- **Contato** — Links e redes sociais

## 👤 Autor

**Julio Cesar Ovídio Bueno**  
Cascavel, PR | (45) 9 9982-3929  
julio.cesar.ovidio.bueno@gmail.com  
[LinkedIn](https://www.linkedin.com/in/julio-cesar-ovidio-bueno/) · [GitHub](https://github.com/hasbuen)
