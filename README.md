# Commentify Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.1-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)

The official website for **Commentify**, the ultimate Figma plugin for managing comments and layer annotations. Transform chaotic comment threads into organized productivity hubs.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Fully responsive layout that works on all devices
- **Performance Optimized**: Fast loading times with optimized assets and fonts
- **SEO Ready**: Complete SEO optimization with Open Graph and structured data
- **Accessible**: Built with accessibility best practices
- **Type Safe**: Full TypeScript implementation for better developer experience
- **Tested**: Comprehensive test coverage with Vitest and Testing Library

## 📦 Project Structure

```
commentify-website/
├── app/                    # Next.js App Router directory
│   ├── components/         # React components
│   │   ├── background/     # Background visual components
│   │   ├── carouselSection/# Carousel section component
│   │   ├── contentSection/ # Content section component
│   │   ├── featuresSection/# Features section component
│   │   ├── footer/         # Footer component
│   │   ├── heroSection/    # Hero section component
│   │   ├── seo/           # SEO components (JSON-LD)
│   │   └── ui/            # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── __tests__/         # Test files
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page component
├── public/                # Static assets
│   ├── fonts/            # Custom fonts
│   └── video/            # Video assets
└── ...config files
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn, npm, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/commentify-website.git
cd commentify-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the website

## 🧪 Testing

This project includes comprehensive test coverage:

```bash
# Run tests
npm run test

# Run tests with coverage
npm run vitest-report

# Run tests in watch mode
npm run vitest:watch

# Run CI tests (lint + test)
npm run test:ci
```

## 📚 Available Scripts

- `dev` - Start development server with Turbopack
- `build` - Build the application for production
- `start` - Start the production server
- `test` - Run the test suite with UI and coverage
- `lint` - Run ESLint for code quality
- `test:ci` - Run linting and tests for CI/CD

## 🎨 Design System

The project uses a comprehensive CSS custom properties system for consistent design:

- **Colors**: Semantic color tokens for background, foreground, and themed cards
- **Spacing**: Consistent spacing scale from 4px to 192px
- **Typography**: Font sizes, weights, and the custom Nunito font family
- **Border Radius**: Consistent border radius tokens
- **Shadows**: Standardized shadow system

## 🔧 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: CSS Modules with custom properties
- **Testing**: [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/)
- **Linting**: [ESLint](https://eslint.org/) with Next.js config
- **Font**: [Nunito Variable Font](https://fonts.google.com/specimen/Nunito)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and add tests
4. Run tests: `npm run test:ci`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Kubit Team** - [kubit.lab.dev@gmail.com](mailto:kubit.lab.dev@gmail.com)
- Website: [kubit-ui.com](https://www.kubit-ui.com/)
- Twitter: [@kubit_ui](https://twitter.com/kubit_ui)
- GitHub: [kubit-ui](https://github.com/kubit-ui/kubit-react-components)

## 🌟 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [Vercel](https://vercel.com/)
- Typography by [Google Fonts](https://fonts.google.com/)

---

**Commentify** - Transform your Figma workflow with better comment management.
