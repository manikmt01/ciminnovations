// dropdown for seleted item
document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.querySelector('.dropdown');
  const button = dropdown.querySelector('button');
  const dropdownItems = dropdown.querySelectorAll('.dropdown-item');

  dropdownItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      const selectedText = this.textContent.trim();

      // Update only the first text node of the button (before the SVG)
      const firstTextNode = Array.from(button.childNodes).find(
        node => node.nodeType === Node.TEXT_NODE
      );

      if (firstTextNode) {
        firstTextNode.nodeValue = selectedText + ' ';
      }
    });
  });
});
// Select all elements with class 'redbtn'
const redButtons = document.querySelectorAll('.redbtn');

// Add click event to each
redButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the href attribute or data-href attribute (custom)
    const url = button.getAttribute('href') || button.dataset.href;
    if (url) {
      window.location.href = url; // redirect
    } else {
      console.warn('No href or data-href found on .redbtn element');
    }
  });
});
