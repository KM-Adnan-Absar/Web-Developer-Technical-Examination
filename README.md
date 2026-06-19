# RemoteRecruit – Features Page

A React + Tailwind CSS recreation of the RemoteRecruit Features page, built from the provided Figma design.

## Project Setup Instructions

1. **Clone / unzip the project**, then move into the folder:
   ```bash
   cd remoterecruit
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the dev server**:
   ```bash
   npm run dev
   ```
   This starts Vite's local dev server (default: `http://localhost:5173`).

4. **Build for production**:
   ```bash
   npm run build
   ```
   Output goes to the `dist/` folder.

5. **Preview the production build locally**:
   ```bash
   npm run preview
   ```

6. **Lint the project**:
   ```bash
   npm run lint
   ```

## Framework / Libraries Used

- **React 19** (function components + hooks)
- **Vite** as the build tool / dev server
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for animations and transitions
- **Lucide React** for icons
- **ESLint** (with React Hooks and React Refresh plugins) for linting
- Custom `useScrollAnimation` hook for scroll-triggered reveal animations

## Project Structure

```
src/
├── assets/                  # Images (hero.png, etc.)
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── GlobalReachFeature.jsx
│   ├── Features.jsx
│   ├── TalentFeature.jsx
│   ├── CTASection.jsx
│   ├── FAQ.jsx
│   ├── Footer.jsx
│   └── ScrollToTop.jsx
├── hooks/
│   └── useScrollAnimation.js
├── App.jsx
├── main.jsx
└── index.css
```

## Known Issues / Limitations

- Built primarily from static design screenshots/Figma reference rather than direct Figma inspect-panel values, so some spacing/colors are close approximations rather than pixel-perfect.
- No automated test suite included.
- No formal Lighthouse accessibility/performance audit has been run yet — recommended before final submission.
- Mobile responsiveness has been implemented with Tailwind breakpoints but has not been verified against dedicated mobile design screenshots.
- FAQ section uses placeholder/mock content where exact copy wasn't available from the design.
