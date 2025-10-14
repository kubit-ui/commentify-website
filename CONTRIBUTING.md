# Contributing to Commentify Website

Thank you for your interest in contributing to the Commentify website! We welcome contributions from the community and are pleased to have you join us.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Issues](#reporting-issues)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to kubit.lab.dev@gmail.com.

## How to Contribute

### Types of Contributions

We welcome many types of contributions, including:

- 🐛 **Bug fixes** - Help us squash bugs!
- ✨ **Feature implementations** - Add new functionality
- 📚 **Documentation** - Improve our docs and comments
- 🎨 **Design improvements** - Enhance UI/UX
- ♿ **Accessibility** - Make the site more accessible
- 🚀 **Performance** - Optimize loading times and user experience
- 🧪 **Tests** - Improve test coverage and quality
- 🔧 **Tooling** - Better development experience

### What We're Looking For

- Responsive design improvements
- Accessibility enhancements
- Performance optimizations
- Cross-browser compatibility fixes
- Modern web standards implementation
- Test coverage improvements

## Development Setup

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- Git

### Local Development

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/kubit-ui/commentify-website
   cd commentify-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run test` - Run test suite with coverage
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix linting issues automatically
- `npm run type-check` - Run TypeScript type checking
- `npm run test:ci` - Run all checks for CI/CD

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define proper interfaces and types
- Use strict type checking
- Document complex types with JSDoc

### React Components

- Use functional components with hooks
- Follow React best practices
- Implement proper error boundaries
- Use semantic HTML elements
- Ensure accessibility compliance

### CSS

- Use CSS Modules for component styling
- Follow the established design system variables
- Implement responsive design principles
- Support dark mode and high contrast themes
- Use modern CSS features appropriately

### Code Quality

- Write self-documenting code with clear naming
- Add JSDoc comments for public APIs
- Follow the existing code style
- Use meaningful commit messages
- Write tests for new functionality

## Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Commit Message Format

```
type(scope): description

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes

### Examples

```bash
feat(accordion): add keyboard navigation support
fix(button): resolve focus outline in Safari
docs(readme): update installation instructions
style(layout): improve responsive breakpoints
perf(images): implement lazy loading for hero section
```

## Pull Request Process

### Before Submitting

1. **Test your changes**
   ```bash
   npm run test:ci
   ```

2. **Check your code style**
   ```bash
   npm run lint
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

### PR Requirements

- ✅ All tests pass
- ✅ Code follows style guidelines
- ✅ TypeScript compiles without errors
- ✅ Changes are documented
- ✅ Responsive design is maintained
- ✅ Accessibility is preserved or improved

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Other (please describe)

## Testing
- [ ] Unit tests added/updated
- [ ] Manual testing completed
- [ ] Cross-browser testing done

## Screenshots
Include screenshots for UI changes

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Tests added/updated
```

## Reporting Issues

### Bug Reports

When reporting bugs, please include:

- **Clear title** and **description**
- **Steps to reproduce** the issue
- **Expected behavior** vs **actual behavior**
- **Screenshots** or **GIFs** if applicable
- **Environment details** (browser, OS, device)
- **Console errors** or **logs**

### Feature Requests

For feature requests, include:

- **Clear description** of the feature
- **Use case** and **motivation**
- **Proposed implementation** (if applicable)
- **Alternative solutions** considered

## Development Guidelines

### File Organization

```
app/
├── components/          # Reusable UI components
│   ├── ui/             # Generic UI components
│   ├── sections/       # Page sections
│   └── layout/         # Layout components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
└── __tests__/          # Test files
```

### Component Structure

```tsx
// component.tsx
interface ComponentProps {
  // Props definition
}

/**
 * Component description
 * @param props - Component props
 * @returns JSX element
 */
const Component: React.FC<ComponentProps> = (props) => {
  // Implementation
};

export default Component;
```

### CSS Organization

```css
/* Component styles */
.component {
  /* Base styles using design system variables */
}

/* Variants */
.component--variant {
  /* Variant-specific styles */
}

/* States */
.component:hover,
.component:focus {
  /* Interactive states */
}

/* Responsive */
@media (max-width: 768px) {
  .component {
    /* Mobile styles */
  }
}
```

## Getting Help

- 📧 **Email**: kubit.lab.dev@gmail.com
- 🌐 **Website**: [kubit-ui.com](https://www.kubit-ui.com/)
- 🐛 **Issues**: [GitHub Issues](https://github.com/kubit-ui/commentify-website/issues)

## Recognition

Contributors will be recognized in our [README.md](README.md) and release notes. We appreciate all contributions, no matter how small!

---

Thank you for contributing to Commentify! 🎉