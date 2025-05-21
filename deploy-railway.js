// Simple Railway deployment helper
// To use: node deploy-railway.js

const { execSync } = require('child_process');

try {
  console.log('Installing Railway CLI...');
  execSync('npm install -g @railway/cli', { stdio: 'inherit' });
  
  console.log('Logging in to Railway...');
  execSync('railway login', { stdio: 'inherit' });
  
  console.log('Initializing Railway project...');
  execSync('railway init', { stdio: 'inherit' });
  
  console.log('Linking to Railway project...');
  execSync('railway link', { stdio: 'inherit' });
  
  console.log('Deploying to Railway...');
  execSync('railway up', { stdio: 'inherit' });
  
  console.log('Deployment complete! Opening Railway dashboard...');
  execSync('railway open', { stdio: 'inherit' });
} catch (error) {
  console.error('Error during deployment:', error.message);
  process.exit(1);
}
