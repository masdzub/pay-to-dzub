// Add your custom JavaScript code here
document.getElementById("copyButton").addEventListener("click", function() {
    var accountNumber = document.getElementById("accountNumber");
    var range = document.createRange();
    range.selectNode(accountNumber);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Account number copied to clipboard: " + accountNumber.innerText);
});

// Toggle theme between light and dark
function toggleTheme() {
    const body = document.querySelector('body');
    const themeIcon = document.getElementById('themeIcon');
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        themeIcon.classList.remove('text-yellow-300');
        themeIcon.classList.add('text-yellow-500');
    } else {
        body.classList.add('dark');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        themeIcon.classList.remove('text-yellow-500');
        themeIcon.classList.add('text-yellow-300');
    }
}

// Check system preference for dark mode
function checkSystemPreference() {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkMode) {
        toggleTheme();
    }
}

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', toggleTheme);

// Check system preference when the page loads
checkSystemPreference();
