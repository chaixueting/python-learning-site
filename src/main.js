import './style.css'

// Add interactivity for the Lesson page
document.addEventListener('DOMContentLoaded', () => {
  const runBtn = document.getElementById('run-code');
  const terminalContent = document.getElementById('terminal-content');

  if (runBtn && terminalContent) {
    runBtn.addEventListener('click', () => {
      // Add a small delay to simulate processing
      runBtn.innerHTML = `
        正在编译...
        <svg class="spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 8px; animation: spin 1s linear infinite;">
          <line x1="12" y1="2" x2="12" y2="6"></line>
          <line x1="12" y1="18" x2="12" y2="22"></line>
          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
          <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
          <line x1="2" y1="12" x2="6" y2="12"></line>
          <line x1="18" y1="12" x2="22" y2="12"></line>
          <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
          <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
        </svg>
      `;

      // Define spin animation dynamically if not present
      if (!document.getElementById('spinner-style')) {
        const style = document.createElement('style');
        style.id = 'spinner-style';
        style.innerHTML = `@keyframes spin { 100% { transform: rotate(360deg); } }`;
        document.head.appendChild(style);
      }

      setTimeout(() => {
        terminalContent.style.opacity = '1';
        terminalContent.innerHTML = `<span style="color: #39ff14;">$ python main.py</span><br>Hello, PyMatrix!<br><br><span style="color: var(--text-secondary);">[Process completed (exit code 0)]</span>`;
        
        runBtn.innerHTML = `
          重新运行
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 8px;"><path d="M21.5 2v6h-6M2.13 15.57a10 10 0 1 0 3.43-11.44l-5.06 5.06"></path></svg>
        `;
      }, 800);
    });
  }

  // Optional: Animate stats on homepage
  const statStudents = document.getElementById('stat-students');
  if (statStudents) {
    let current = 0;
    const target = 1337;
    const increment = Math.ceil(target / 100);
    
    const updateCounter = () => {
      if (current < target) {
        current += increment;
        if (current > target) current = target;
        statStudents.innerText = current.toLocaleString() + '+';
        requestAnimationFrame(updateCounter);
      }
    };
    
    // Start animation
    setTimeout(updateCounter, 500);
  }
});
