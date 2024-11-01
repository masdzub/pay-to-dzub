// Initialize Clipboard.js
document.addEventListener('DOMContentLoaded', function () {
    var clipboard = new ClipboardJS('.button', {
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

function toggleQRIS() {
    const container = document.getElementById('qrisContainer');
    const button = document.getElementById('qrisButton');
    const buttonText = document.getElementById('qrisButtonText');
    const icon = document.getElementById('qrisIcon');
    
    if (container.classList.contains('hidden')) {
        container.classList.remove('hidden');
        setTimeout(() => {
            container.style.opacity = '1';
        }, 10);
        buttonText.textContent = 'Hide QRIS';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        container.style.opacity = '0';
        setTimeout(() => {
            container.classList.add('hidden');
        }, 300);
        buttonText.textContent = 'Show QRIS';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
