// This file helps verify all required dependencies are installed
const requiredDeps = {
  'express': '^4.18.2',
  'mongoose': '^8.2.0',
  'cors': '^2.8.5',
  'dotenv': '^16.0.3',
  'express-validator': '^7.0.1',
  'nodemon': '^3.1.0' // dev dependency
};

console.log('Checking for required dependencies:');
let allDepsInstalled = true;

Object.entries(requiredDeps).forEach(([dep, version]) => {
  try {
    const pkg = require(dep);
    console.log(`✅ ${dep}@${pkg.version} (required: ${version})`);
  } catch (err) {
    console.error(`❌ ${dep}@${version} is not installed`);
    allDepsInstalled = false;
  }
});

if (!allDepsInstalled) {
  console.log('\nSome dependencies are missing. Installing them now...');
  const { execSync } = require('child_process');
  try {
    const deps = Object.entries(requiredDeps).map(([dep, version]) => `${dep}@${version}`).join(' ');
    execSync(`npm install ${deps}`, { stdio: 'inherit' });
    console.log('\n✅ All dependencies installed successfully!');
  } catch (error) {
    console.error('\n❌ Failed to install dependencies. Please run: npm install');
    process.exit(1);
  }
} else {
  console.log('\n✅ All required dependencies are installed!');
}
