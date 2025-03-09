// Initialize Clipboard.js
document.addEventListener('DOMContentLoaded', function() {
    // Set up clipboard functionality
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

    // Initialize QRIS modal variables
    const qrisButton = document.getElementById('qrisButton');
    const qrisModal = document.getElementById('qrisModal');
    const closeButton = document.getElementById('closeQRIS');
    const qrisButtonText = document.getElementById('qrisButtonText');
    const qrisIcon = document.getElementById('qrisIcon');
    const qrisImage = document.getElementById('qrisImage');
    
    // Prevent multiple click issues with a flag
    let isAnimating = false;

    // Event listener for showing QRIS
    qrisButton.addEventListener('click', function() {
        if (isAnimating) return;
        
        if (!qrisModal.classList.contains('active')) {
            openQRIS();
        } else {
            closeQRIS();
        }
    });
    
    // Event listener for closing QRIS via X button
    closeButton.addEventListener('click', function(e) {
        e.stopPropagation();
        closeQRIS();
    });
    
    // Event listener for closing QRIS when clicking outside
    qrisModal.addEventListener('click', function(e) {
        if (e.target === qrisModal) {
            closeQRIS();
        }
    });
    
    // Event listener for Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && qrisModal.classList.contains('active')) {
            closeQRIS();
        }
    });
    
    // Function to open QRIS modal
    function openQRIS() {
        if (isAnimating) return;
        isAnimating = true;
        
        // Open modal with animation
        qrisModal.classList.add('active');
        qrisButtonText.textContent = 'Hide QRIS';
        qrisIcon.classList.remove('fa-eye');
        qrisIcon.classList.add('fa-eye-slash');
        qrisButton.classList.remove('pulse-button');
        
        // Add animation to the QR image
        qrisImage.style.transition = 'transform 0.5s ease';
        qrisImage.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            qrisImage.style.transform = 'scale(1)';
            isAnimating = false;
        }, 100);
    }
    
    // Function to close QRIS modal
    function closeQRIS() {
        if (isAnimating) return;
        isAnimating = true;
        
        // Fade out the modal content
        const modalContent = qrisModal.querySelector('.modal-content');
        modalContent.style.opacity = '0';
        modalContent.style.transform = 'scale(0.8)';
        
        // Delay the modal closing for smooth transition
        setTimeout(() => {
            qrisModal.classList.remove('active');
            qrisButtonText.textContent = 'Show QRIS';
            qrisIcon.classList.remove('fa-eye-slash');
            qrisIcon.classList.add('fa-eye');
            qrisButton.classList.add('pulse-button');
            
            // Reset modal content for next opening
            setTimeout(() => {
                modalContent.style.opacity = '';
                modalContent.style.transform = '';
                isAnimating = false;
            }, 100);
        }, 300);
    }
    
    // Expose functions to global scope for debugging if needed
    window.openQRIS = openQRIS;
    window.closeQRIS = closeQRIS;
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});