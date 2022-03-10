import { spawn, execSync } from 'child_process';

function main() {
  // Create a child process to start a web server for frameworks result
  const benchProcess = spawn('npm', ['run', 'start-bench-server'], {
    stdio: 'inherit',
  });

  // Run benchmark cases
  execSync('cd benchmarks/webdriver-ts && npm install --registry=https://registry.npmmirror.com && npm run bench', {
    stdio: 'inherit',
  });

  // Run generate results
  execSync('cd benchmarks/webdriver-ts && npm run results', {
    stdio: 'inherit',
  });

  // Kill child process
  benchProcess.kill('SIGTERM');
}

main();
