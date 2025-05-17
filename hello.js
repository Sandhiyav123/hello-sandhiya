// hello.js
// Project: Code Tracker - VS Code → GitHub → n8n

function trackCode() {
  const code = "console.log('Hello, Sandhiya!');";
  const lines = code.split('\n').length;
  const points = lines * 10;

  console.log("Code:", code);
  console.log("Total Lines:", lines);
  console.log("Points Earned:", points);
}

trackCode();
