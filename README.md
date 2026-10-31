# Faizan Azhar - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Resume-led Azure, AI, and Power Platform portfolio with an interactive Three.js architecture scene
- **Responsive**: Phone, tablet, and desktop layouts with stable canvas dimensions
- **SEO Optimized**: Built-in SEO best practices
- **Performance**: Optimized for fast loading times
- **Accessibility**: Keyboard navigation, skip link, reduced-motion support, and animation pause control
- **Email Drafts**: Open a populated draft in the default mail app, Gmail, or Outlook on the web

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Three.js, CSS, and Framer Motion
- **Icons**: Lucide and React Icons
- **Deployment**: Vercel/Netlify ready

## 📁 Project Structure

```
portfolio-website/
├── public/
│   └── resume/
│       └── Faizan_Azhar_Resume.pdf
            faizanpic.jpg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/
│   ├── pages/
│   └── styles/
├── package.json
└── README.md
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

1. **Update Personal Information**: Edit `src/data/personal-info.ts`
2. **Update Experience, Expertise, Projects, and Credentials**: Edit `src/components/sections/portfolio-content.tsx`
3. **Update Hero and 3D Scene**: Edit `src/components/sections/hero-scene.tsx`
4. **Update Contact Drafts**: Edit `src/components/sections/contact-draft.tsx`
5. **Replace Resume**: Add your PDF to `public/resume/`

## 🌐 Deployment



### GitHub Pages
1. Update `next.config.js` with your repository name
2. Run `npm run build && npm run export`
3. Deploy the `out` folder to GitHub Pages

## 📱 Social Links

Update your social media links in `src/data/personal-info.ts`:
- LinkedIn
- GitHub
- Twitter

## 📄 Resume

Place your resume PDF file in `public/resume/` and update the filename in `personal-info.ts`.

## 🎨 Styling

The project uses Tailwind CSS for styling with custom animations and effects:
- Gradient backgrounds
- Smooth transitions
- Hover effects
- Responsive design
- Custom animations

## 📧 Contact Form

The contact form opens a draft addressed to `personalInfo.email`, including the
visitor's name, reply email, subject, and message. It does not send mail or store
form contents on a server. The visitor reviews and sends the draft themselves.

- Default email app uses `mailto:` and requires an OS/browser mail handler.
- Gmail and Outlook on the web open compose pages in a new tab; sign-in may be required.
- Desktop Outlook is selected through the visitor's default mail-handler settings.
- Fields stay populated after opening a draft, so the visitor can choose another app.

The blog section, its navigation links, and blog routes have been removed.

## 3D Runtime

Three.js 0.170.0 loads on the client from jsDelivr because npm registry access was
blocked in the development environment. Manrope and JetBrains Mono load from
Google Fonts with system fallbacks. These assets require network access; the
portfolio content remains usable with fonts unavailable, and a static architecture
fallback replaces the canvas if WebGL or the Three.js CDN cannot load.

The scene caps pixel density, avoids animation when reduced motion is requested,
and pauses rendering when offscreen or the tab is hidden. A pause control is also provided.

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static files

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

If you need help customizing this portfolio, feel free to reach out:
- Email: faizanazhar1@gmail.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

**Built with ❤️ by Faizan Azhar**
