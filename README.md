# Mustaf Ahmed — Portfolio

A personal portfolio site for **Mustaf Ahmed**, Full-Stack Developer (React). Built with Next.js, React, and Tailwind CSS. Showcases projects, skills, and contact info.

## What’s in it

- **Hero** — Name, role, tagline, “View Projects” CTA  
- **About** — Short bio and what you’re looking for  
- **Skills & Tech** — Tech stack list  
- **My Projects** — Projects with live demos (Vercel) and GitHub links  
- **Work with me** — Availability line  
- **Contact** — Email and social links (GitHub, LinkedIn)  
- **Nav** — Sticky header with About, My Projects, Contact  
- **Footer** — Same links, social, copyright  

## Tech stack

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**

## Run locally

1. **Clone and install**
   ```bash
   git clone <your-repo-url>
   cd template
   npm install
   ```

2. **Start dev server**
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000).

## Deploy (e.g. Vercel)

1. Push this repo to GitHub (or GitLab, Bitbucket).
2. Go to [vercel.com](https://vercel.com) and sign in.
3. **Add New Project** → import this repo.
4. Leave defaults (framework: Next.js) and click **Deploy**.
5. Use the generated URL (e.g. `your-portfolio.vercel.app`) on your resume and LinkedIn.

**Build command:** `npm run build`  
**Output directory:** (default)  
**Install command:** `npm install`

## Project structure

```
src/
├── app/
│   ├── layout.tsx    # Root layout, metadata, fonts
│   ├── page.tsx      # Home page (all sections)
│   ├── loading.tsx   # Root loading state
│   └── globals.css   # Global styles, Tailwind
└── components/
    ├── Nav.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Skills.tsx
    ├── Projects.tsx
    ├── WorkWithMe.tsx
    ├── Testimonial.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

## Customize

- **Content** — Edit `src/app/page.tsx`: projects, skills, About text, Hero tagline, Contact email/links.
- **Styling** — Components use Tailwind; tweak classes in `src/components/` and `src/app/globals.css`.

## License

MIT
