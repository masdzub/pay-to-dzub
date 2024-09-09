// Initialize Clipboard.js
document.addEventListener('DOMContentLoaded', function () {
    var clipboard = new ClipboardJS('button[data-clipboard-text]', {
      text: function(trigger) {
        return trigger.getAttribute('data-clipboard-text');
      }
    });
  
    clipboard.on('success', function(e) {
      var button = e.trigger;
      var originalText = button.innerHTML;
      button.innerHTML = '<i class="far fa-copy mr-1"></i> Copied!';
      setTimeout(function() {
        button.innerHTML = originalText;
      }, 500);
      e.clearSelection();
    });
  });
  
  // Disable Right Click
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });