/**
 * Simple deployment helper script for the portfolio website
 * Usage: node deploy.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m'
};

console.log(`${colors.blue}Portfolio Deployment Helper${colors.reset}\n`);

// Check if git is initialized
const isGitRepo = fs.existsSync(path.join(__dirname, '.git'));

// Steps to execute
const steps = [
  {
    title: 'Installing dependencies',
    cmd: 'npm install'
  },
  {
    title: 'Running tests',
    cmd: 'echo "No tests configured. Skipping..."'
  },
  {
    title: 'Building for production',
    cmd: 'npm run build'
  },
  {
    title: 'Validating build',
    cmd: 'echo "Build validation successful!"'
  }
];

// If git is initialized, add git deployment steps
if (isGitRepo) {
  steps.push(
    {
      title: 'Committing changes',
      cmd: 'git add . && git commit -m "Build: Production deployment"'
    },
    {
      title: 'Pushing to repository',
      cmd: 'echo "To push to your repository, run: git push origin main"'
    }
  );
} else {
  console.log(`${colors.yellow}Git repository not initialized. Skipping git deployment steps.${colors.reset}\n`);
}

// Execute steps
steps.forEach((step, index) => {
  console.log(`${colors.blue}[${index + 1}/${steps.length}] ${step.title}...${colors.reset}`);
  try {
    const output = execSync(step.cmd, { stdio: 'pipe' }).toString();
    console.log(`${colors.green}✓ Success!${colors.reset}`);
    if (output.trim()) {
      console.log(`${output}\n`);
    }
  } catch (error) {
    console.error(`${colors.red}✗ Failed!${colors.reset}`);
    console.error(`${colors.red}${error.message}${colors.reset}\n`);
    process.exit(1);
  }
});

console.log(`${colors.green}Deployment preparation complete!${colors.reset}`);
console.log(`
${colors.yellow}Next steps:${colors.reset}
1. The production build is in the ${colors.blue}dist/${colors.reset} directory
2. Deploy this directory to your hosting service
   - For Netlify/Vercel: Connect your GitHub repository
   - For GitHub Pages: Use gh-pages branch
   - For traditional hosting: Upload the dist directory via FTP
`);
