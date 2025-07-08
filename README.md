# Muhammad Zakariyya Portfolio

This is a responsive portfolio website built with React, showcasing my skills, experience, projects, and certifications as a Graphic Designer & Software Engineer.

## Features

- Responsive design for all devices
- Modern glass-morphism UI with subtle animations
- Smooth scrolling and navigation
- Contact form with validation and error handling
- Interactive components:
  - Skills section with proficiency indicators and categorized tabs
  - Experience timeline with expandable details and tabbed categories
  - Certifications with interactive cards and skill tags
  - Project showcase with categorized sections
- Image loading optimization with placeholders
- SEO-friendly structure

## Enhanced Features

1. **Interactive Skills Section**:
   - Added proficiency indicators with circular progress bars
   - Implemented categorized tabs for software, design, and other skills
   - Created visual experience bars with year indicators

2. **Dynamic Experience Timeline**:
   - Created tabbed interface for work and education experiences
   - Added smooth expand/collapse animations for details
   - Included skill tags and achievements for each experience
   - Added Bootstrap Icons for improved visual presentation

3. **Interactive Certification Cards**:
   - Implemented expandable certification details
   - Added skill tags for each certification
   - Created credential ID display and verify button

4. **Image Optimization**:
   - Created placeholder SVGs for all required images
   - Implemented loading state indicators for images
   - Added proper error handling for image loading

5. **Deployment Improvements**:
   - Created deployment helper script
   - Added GitHub Actions workflow example
   - Improved SEO with meta tags

6. **Code Quality**:
   - Enhanced component organization
   - Improved CSS with better variable usage
   - Added comments and documentation

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or pnpm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portofolio
```

2. Install dependencies
```bash
npm install
# or
pnpm install
```

3. Start the development server
```bash
npm run dev
# or
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

- `src/components/` - All React components
  - `Navbar.jsx` - Navigation bar component
  - `Home.jsx` - Hero section component
  - `Experience.jsx` - Work experience section with expandable details
  - `Skills.jsx` - Skills showcase section with categorized skill icons
  - `Projects.jsx` - Project portfolio section with graphic and software projects
  - `Certifications.jsx` - Certifications display with interactive cards
  - `Contact.jsx` - Contact form component with validation
  - `Footer.jsx` - Footer component
  - `common/` - Reusable components
    - `Image.jsx` - Image component with error handling and fallback

- `public/images/` - All images used in the portfolio
  - `logo/` - Skill logos and icons for various technologies:
    - HTML, CSS, JavaScript, React, Laravel, PHP, Bootstrap
    - Figma, Photoshop, CorelDRAW, Canva
  - Social media icons (GitHub, LinkedIn, Instagram)
  - Project showcase images
  - Profile and CV images

## Customization

To customize this portfolio for your own use:

1. Update the personal information in each component:
   - Change name, title, and description in `Home.jsx`
   - Update work history in `Experience.jsx`
   - Modify skills arrays in `Skills.jsx`
   - Replace project details in `Projects.jsx`
   - Update certification data in `Certifications.jsx`
   - Modify contact information and social links in `Contact.jsx`

2. Replace images in the `public/images/` directory:
   - Update profile picture (`3.png`)
   - Replace project showcase images (`work-1.png`, `work-2.png`, `work-3.png`) 
   - Update CV file (`potrait.png`)
   - Replace or add skill icons in the `logo/` directory

3. Change the color scheme in `src/App.css` by modifying the CSS variables in the `:root` selector:
   ```css
   :root {
     --primary-color: #f8f9fa;
     --secondary-color: #c8d6e5;
     --accent-color: #8c7ae6; 
     --accent-color-2: #0097e6;
     --bg-dark: #0f1a2b;
     /* Add or modify other variables as needed */
   }
   ```

## Deployment

To build the project for production:

```bash
npm run build
# or
pnpm build
```

The build files will be located in the `dist` directory. You can deploy these files to any static hosting service like GitHub Pages, Netlify, or Vercel.

### Deployment

To build and prepare for production deployment, you can use the included deployment helper script:

```bash
node deploy.js
```

This script will:
1. Install dependencies
2. Build for production
3. Validate the build
4. Prepare for Git-based deployment (if applicable)

#### Deployment Options

1. **GitHub Pages**:
   - Create a `.github/workflows/deploy.yml` file:
     ```yaml
     name: Deploy to GitHub Pages
     on:
       push:
         branches: [ main ]
     jobs:
       build-and-deploy:
         runs-on: ubuntu-latest
         steps:
           - uses: actions/checkout@v3
           - name: Install & Build
             run: |
               npm ci
               npm run build
           - name: Deploy
             uses: JamesIves/github-pages-deploy-action@v4
             with:
               folder: dist
               branch: gh-pages
     ```

2. **Netlify/Vercel**:
   - Connect your GitHub repository
   - Set the build command to `npm run build`
   - Set the publish directory to `dist`
   
3. **Traditional Hosting**:
   - Run `npm run build`
   - Upload the contents of the `dist` directory via FTP

## Built With

- [React](https://reactjs.org/) - The web framework
- [Bootstrap](https://getbootstrap.com/) - For responsive layout and grid system
- [Vite](https://vitejs.dev/) - Frontend tooling and build optimization

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
