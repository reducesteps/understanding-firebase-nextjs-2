document.addEventListener('DOMContentLoaded', function() {
  const codeBlocks = document.querySelectorAll('.code-block');
  codeBlocks.forEach((block) => {
    const copyButton = document.createElement('button');
    copyButton.innerHTML = 'Copy to Clipboard';
    copyButton.addEventListener('click', function() {
      const code = block.querySelector('code').innerText;
      navigator.clipboard.writeText(code);
    });
    block.appendChild(copyButton);
  });
});