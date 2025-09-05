# Ashok Kumar - Engineering Leader Portfolio (Next.js)

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing 23+ years of engineering leadership experience across Healthcare, EHS, and Test & Measurement domains.

## 🚀 Features

- **Next.js 14**: Latest React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Responsive Design**: Optimized for all devices
- **SEO Optimized**: Meta tags and structured data
- **GitHub Pages Ready**: Automated deployment workflow
- **Performance Optimized**: Fast loading and smooth interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with GitHub Actions

## 📁 Project Structure

```
myprofile/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/
│   ├── Navigation.tsx       # Navigation component
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Experience timeline
│   ├── Skills.tsx          # Skills grid
│   ├── Projects.tsx        # Featured projects
│   ├── Blog.tsx            # Blog section
│   ├── Contact.tsx         # Contact information
│   └── Footer.tsx          # Footer component
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd myprofile
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎨 Customization

### Updating Personal Information

Edit the components to update your information:

1. **Contact Information** (`components/Contact.tsx`):
   ```tsx
   const contactInfo = [
     {
       icon: Mail,
       title: "Email",
       value: "your-email@example.com",
       link: "mailto:your-email@example.com",
     },
     // ... other contact methods
   ]
   ```

2. **Experience** (`components/Experience.tsx`):
   Update the `experiences` array with your work history.

3. **Skills** (`components/Skills.tsx`):
   Modify the `skills` array to reflect your competencies.

### Adding Your Photo

Replace the placeholder in `components/Hero.tsx`:
```tsx
// Replace the User icon with your image
<img 
  src="/your-photo.jpg" 
  alt="Ashok Kumar" 
  className="w-80 h-80 rounded-full object-cover"
/>
```

### Customizing Colors

Update the color scheme in `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom primary colors
      }
    }
  }
}
```

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Add Next.js portfolio"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to Pages section
   - Select "GitHub Actions" as source
   - The workflow will automatically deploy on push to main

3. **Access your site**:
   Your site will be available at: `https://yourusername.github.io/myprofile`

### Other Deployment Options

- **Vercel**: `vercel --prod`
- **Netlify**: Connect your GitHub repository
- **AWS S3**: Upload the `out` folder after `npm run export`

## 📝 Adding Blog Posts

The blog section is ready for future content. To add blog functionality:

1. Create a `pages/blog` directory
2. Add markdown support with `@next/mdx`
3. Update the `Blog.tsx` component to fetch and display posts

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run export` - Export static site for GitHub Pages
- `npm run lint` - Run ESLint

## 🎯 Performance Features

- **Static Generation**: Pre-rendered pages for fast loading
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for better performance
- **SEO**: Meta tags, Open Graph, and Twitter Cards
- **Accessibility**: ARIA labels and keyboard navigation

## 📞 Contact

- **Email**: aashokkumarin@hotmail.com
- **Phone**: +91-94480 70477
- **LinkedIn**: [Ashok Kumar Anbalagan](https://www.linkedin.com/in/ashok-kumar-anbalagan-61120921/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS