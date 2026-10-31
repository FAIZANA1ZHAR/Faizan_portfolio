# Faizan Azhar - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Dark architectural consulting portfolio with an original interactive SVG/CSS system visual
- **Responsive**: Phone, tablet, desktop, and ultra-wide layouts with stable visual dimensions
- **SEO Optimized**: Built-in SEO best practices
- **Performance**: Optimized for fast loading times
- **Accessibility**: Focus-trapped native dialogs, restored focus, skip link, form errors, reduced motion, and animation pause control
- **Case Studies**: Four factual projects with accessible delivery-detail dialogs
- **Email Drafts**: Open a populated draft in the default mail app, Gmail, or Outlook on the web

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: CSS and Framer Motion; no canvas or 3D runtime dependency
- **Icons**: Named Lucide imports
- **Deployment**: Vercel/Netlify ready

## 📁 Project Structure

```
public/
   faizanpic.jpg
   resume/                         Existing CV files, unchanged
src/
   app/                            Next.js routes, metadata, and portfolio.css
   components/
      portfolio/                    Typed interactive portfolio components
      ui/ScrollHandler.tsx
      analytics.tsx
   data/                           Central configuration and factual section data
   lib/email.ts                    Draft encoding and validation helpers
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Start production server**:
   ```bash
   npm start
   ```

## 📝 Customization

1. **Personal Information and Production URL**: [src/data/portfolioConfig.ts](src/data/portfolioConfig.ts)
2. **Experience and Projects**: [src/data/experience.ts](src/data/experience.ts), [src/data/projects.ts](src/data/projects.ts)
3. **Expertise, Technologies, Credentials, and Education**: Their typed files under `src/data/`
4. **Visuals and Interactions**: Components under `src/components/portfolio/`
5. **Resume**: Update `resumeUrl` to the existing file; missing optional URLs hide their actions

## 🌐 Deployment



Use the existing Next.js deployment on Vercel or another Next.js-capable host.
Run `npm run build` and `npm start` for production. The removed `next export`
command is not supported by the current Next.js version.

Stop the local preview before rebuilding: development and production processes
must not write to the same `.next` directory concurrently.

## 📱 Social Links

Update your public social links in [src/data/portfolioConfig.ts](src/data/portfolioConfig.ts):
- LinkedIn
- GitHub

## 📄 Resume

The existing consultant CV PDF is reused unchanged. Its path is configured centrally.

## 🎨 Styling

The project uses Tailwind CSS for styling with custom animations and effects:
- Gradient backgrounds
- Smooth transitions
- Hover effects
- Responsive design
- Custom animations

## 📧 Contact Form

The contact form opens a draft addressed to `portfolioConfig.email`, including the
visitor's name, reply email, subject, and message. It does not send mail or store
form contents on a server. The visitor reviews and sends the draft themselves.

- Default email app uses `mailto:` and requires an OS/browser mail handler.
- Gmail and Outlook on the web open compose pages in a new tab; sign-in may be required.
- Desktop Outlook is selected through the visitor's default mail-handler settings.
- Fields stay populated after opening a draft, so the visitor can choose another app.
- Fields start empty, show inline validation, and include a message counter and honeypot.

The blog section, its navigation links, and blog routes have been removed.
The previous simulated newsletter signup now redirects to Contact; it does not
claim to subscribe users or use unsupported testimonials.

## Motion Runtime

Architecture graphics are local SVG and CSS; no external visual runtime is loaded.
Manrope and JetBrains Mono use two font files with system fallbacks. High-frequency
pointer effects use MotionValues rather than React state. Touch and reduced-motion
users get nonessential pointer effects disabled. The hero includes a pause control,
and both marquee rows pause on hover or reduced-motion preference.

See [REDESIGN_REPORT.md](REDESIGN_REPORT.md) for the complete change inventory,
verification results, accessibility notes, and remaining manual checks.

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

If you need help customizing this portfolio, feel free to reach out:
- Email: faizanazhar1@gmail.com
- Public social profiles are configured in [src/data/portfolioConfig.ts](src/data/portfolioConfig.ts).

---

**Built with ❤️ by Faizan Azhar**
