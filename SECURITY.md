# Security Policy

## Supported Versions

We release patches for security vulnerabilities in the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | ✅ |
| < 1.0   | ❌ |

## Reporting a Vulnerability

The Commentify team takes security vulnerabilities seriously. We appreciate your efforts to responsibly disclose your findings, and will make every effort to acknowledge your contributions.

### How to Report a Security Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to: **security@kubit-ui.com** or **kubit.lab.dev@gmail.com**

Please include the following information in your report:

- Type of issue (e.g., XSS, CSRF, injection, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit the issue

### Response Timeline

We will acknowledge receipt of your vulnerability report within 48 hours and strive to provide regular updates on our progress. If you have not received a response to your email within 48 hours, please follow up to ensure we received your original message.

### Disclosure Policy

- We will confirm the problem and determine the affected versions
- We will audit code to find any potential similar problems
- We will prepare fixes for all releases still under support
- We will release security advisories publicly

### Safe Harbor

We support safe harbor for security researchers who:

- Make a good faith effort to avoid privacy violations, destruction of data, and interruption or degradation of our services
- Only interact with accounts you own or with explicit permission of the account holder
- Do not access a system or account beyond what is necessary to demonstrate a security vulnerability
- Report vulnerability information privately to us
- Do not demand monetary compensation to disclose vulnerabilities

## Security Best Practices

When contributing to this project, please follow these security guidelines:

### Frontend Security

- **Input Validation**: Always validate and sanitize user inputs
- **XSS Prevention**: Use proper escaping and Content Security Policy
- **CSRF Protection**: Implement proper CSRF tokens where needed
- **Dependency Management**: Keep dependencies updated and audit regularly

### Code Review

- All code changes require review before merging
- Security-sensitive changes require additional scrutiny
- Use automated security scanning tools in CI/CD pipeline

### Data Protection

- No sensitive data should be committed to the repository
- Use environment variables for configuration
- Implement proper error handling to prevent information disclosure

## Dependencies

We regularly audit our dependencies for known vulnerabilities using:

- npm audit
- Dependabot security updates
- Manual security reviews

## Security Tools

We use the following tools to maintain security:

- ESLint with security rules
- TypeScript for type safety
- Automated dependency scanning
- Security headers implementation

## Contact

For any security-related questions or concerns, please contact us at:

- **Email**: security@kubit-ui.com
- **Backup Email**: kubit.lab.dev@gmail.com
- **Website**: https://kubit-ui.com

## Acknowledgments

We thank the following security researchers for their responsible disclosure:

- [None yet - Be the first!]

## Updates

This security policy is reviewed and updated regularly. Check back for the latest version.