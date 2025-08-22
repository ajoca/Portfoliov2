
# Portfolio — Alan Canto (ajoca)

Portfolio moderno, animado y **listo para Vercel**. Carga repos en vivo desde GitHub, muestra **pinned repos vía GraphQL**, tiene **/about** (timeline + tech radar), **/contact** (form con Resend), **blog MDX**, y **analytics** (Vercel/Umami).

https://github.com/ajoca

## ✨ Stack
- Next.js (App Router)
- Tailwind CSS (+ Typography)
- Framer Motion (animaciones)
- next-themes (dark/light)
- **MDX** (next-mdx-remote + gray-matter)
- **Resend** (emails)
- **@vercel/analytics** o **Umami** (analytics)
- **GitHub GraphQL** (repos fijados)

## ⚙️ Setup
```bash
npm i
cp .env.example .env.local
# Recomendado: GITHUB_TOKEN (GraphQL + rate limit)
# Opcional: RESEND_API_KEY, CONTACT_TO_EMAIL (para /contact)
# Opcional: NEXT_PUBLIC_ANALYTICS=vercel
# Opcional: NEXT_PUBLIC_UMAMI_WEBSITE_ID=xxxx
#           NEXT_PUBLIC_UMAMI_SRC=https://tu-dominio-umami/script.js
npm run dev
```

## 🚀 Deploy en Vercel
1. Subí el proyecto a un repo tuyo.
2. New Project → Import → (opcional) variables de entorno de arriba.
3. Build por defecto (`next build`).

## 🧩 Rutas
- `/` — Hero + KPIs + Pinned + Grid con filtros
- `/about` — Timeline + Tech Radar
- `/contact` — Form con envío por Resend (fallback a Formspree manual)
- `/blog` — Índice de posts MDX
- `/blog/[slug]` — Post MDX

## ✍️ Blog MDX
Guardá posts en `content/posts/*.mdx` con frontmatter:
```md
---
title: Mi post
date: 2025-08-22
excerpt: Resumen...
tags: [ai, llm]
---
Contenido MDX...
```

## 📌 Pinned repos
Definí `GITHUB_TOKEN` y se mostrarán los **pinned** vía GraphQL en la home.

## 📨 Contacto
Configurar `RESEND_API_KEY` + `CONTACT_TO_EMAIL`. Alternativa: crear un form en Formspree y reemplazar el endpoint para 0 backend.

## 📝 Licencia
MIT
