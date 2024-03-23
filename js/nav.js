document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('nav ul li a:not(:only-child)');
    const navDropdowns = document.querySelectorAll('.nav-dropdown');
    const html = document.querySelector('html');
    const navToggle = document.getElementById('nav-toggle');
    const navUl = document.querySelector('nav ul');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const siblingDropdown = this.nextElementSibling;
            if (siblingDropdown) {
                siblingDropdown.style.display = siblingDropdown.style.display === 'block' ? 'none' : 'block';
                e.stopPropagation();
            }
        });
    });

    html.addEventListener('click', function () {
        navDropdowns.forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    });

    navToggle.addEventListener('click', function () {
        navUl.style.display = navUl.style.display === 'block' ? 'none' : 'block';
        this.classList.toggle('active');
    });
});


// function openNav() {
//     document.getElementById('myNav').style.height = "100%";
// }

// function closeNav () {
//     document.getElementById('myNav').style.height = " 0%";
// }
