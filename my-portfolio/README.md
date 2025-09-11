# Preston Petersen - Portfolio Website

A modern, production-ready portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Features dark/light mode, responsive design, contact form integration, and comprehensive SEO optimization.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS 4
- **Dark/Light Mode**: Seamless theme switching with yellow accent color
- **Responsive Design**: Mobile-first approach with smooth animations
- **Contact Form**: Integrated with Resend for reliable email delivery
- **SEO Optimized**: Comprehensive metadata, Open Graph, and Twitter cards
- **Performance**: Optimized images, lazy loading, and minimal bundle size
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── contact/       # Contact form endpoint
│   │   └── track/         # Analytics tracking
│   ├── components/        # Legacy components (being phased out)
│   ├── globals.css        # Global styles and theme variables
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Home page
├── components/            # Modern component library
│   ├── sections/          # Page sections
│   │   ├── about.tsx
│   │   ├── contact.tsx
│   │   ├── experience.tsx
│   │   ├── hero.tsx
│   │   ├── projects.tsx
│   │   ├── skills.tsx
│   │   └── testimonials.tsx
│   └── ui/                # Reusable UI components
│       ├── contact-form.tsx
│       ├── project-card.tsx
│       ├── skill-category.tsx
│       ├── theme-provider.tsx
│       └── theme-toggle.tsx
└── data/                  # Data layer
    ├── experience.ts      # Work experience and education
    ├── personal.ts        # Personal info and testimonials
    └── projects.ts        # Project showcase data
```

## 🛠 Development Setup

### Prerequisites

- Node.js 18+ and npm
- A [Resend](https://resend.com) account for contact form functionality

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd my-portfolio
   npm install
   ```

2. **Environment setup:**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Resend API key to `.env.local`:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser

### Available Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📧 Contact Form Setup

The contact form uses [Resend](https://resend.com) for reliable email delivery:

1. **Create a Resend account** at [resend.com](https://resend.com)
2. **Generate an API key** in your Resend dashboard
3. **Add the API key** to your `.env.local` file
4. **Verify your domain** (optional but recommended for production)

The contact form includes:
- Form validation with Zod schema
- Real-time error handling
- Success/error status feedback
- Email templates with proper formatting
- Anti-spam protection

## 🎨 Customization

### Personal Information

Update your details in `src/data/personal.ts`:
- Name, title, location, contact info
- Bio and interests
- Social media links
- Testimonials

### Projects

Add/modify projects in `src/data/projects.ts`:
- Project details, descriptions, technologies
- GitHub/demo links
- Featured status and categories
- Impact metrics and learnings

### Experience

Update work history in `src/data/experience.ts`:
- Professional experience
- Education details
- Skills and technologies

### Styling

The design system uses CSS custom properties for easy theming:
- **Colors**: Defined in `globals.css` with dark/light variants
- **Accent Color**: Yellow (`#f59e0b`) - easily customizable
- **Typography**: Geist Sans and Geist Mono fonts
- **Components**: Tailwind CSS utility classes

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Add environment variables** in Vercel dashboard:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```
3. **Deploy** - Vercel will automatically build and deploy

### Other Platforms

The project works on any platform supporting Next.js:
- Netlify
- Railway
- Heroku
- Self-hosted with Docker

### Build Optimization

The project is optimized for production:
- Static generation where possible
- Image optimization with Next.js Image component
- Code splitting and tree shaking
- CSS optimization with Tailwind's purge
- Gzip/Brotli compression ready

## 🔧 Advanced Configuration

### Analytics

Basic page view tracking is included. To extend:
1. **Supabase**: Add credentials to env vars
2. **Google Analytics**: Add GA4 tracking code
3. **Plausible**: Add script to layout

### SEO Enhancements

The site includes comprehensive SEO:
- **Structured Data**: JSON-LD for person/organization
- **Meta Tags**: Title, description, keywords
- **Open Graph**: Social media previews
- **Twitter Cards**: Twitter-specific previews
- **Sitemap**: Auto-generated by Next.js
- **Robots.txt**: SEO-friendly crawling rules

### Performance Monitoring

Consider adding:
- **Lighthouse CI**: Automated performance testing
- **Web Vitals**: Core performance metrics
- **Error Tracking**: Sentry or similar service

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**:
   - Ensure all environment variables are set
   - Check for TypeScript errors: `npm run build`
   - Verify all imports are correct

2. **Contact Form Not Working**:
   - Verify Resend API key is set correctly
   - Check Resend dashboard for delivery status
   - Ensure sending domain is verified

3. **Theme Issues**:
   - Clear browser cache and localStorage
   - Check console for hydration errors
   - Verify theme provider is properly configured

4. **Performance Issues**:
   - Optimize images in `/public` folder
   - Review Framer Motion animations
   - Check for unnecessary re-renders

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, contributions for improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

**Preston Petersen**
- Email: prestonwpetersen@outlook.com
- LinkedIn: [linkedin.com/in/prestonwpetersen](https://linkedin.com/in/prestonwpetersen)
- GitHub: [github.com/peterspr](https://github.com/peterspr)

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.
