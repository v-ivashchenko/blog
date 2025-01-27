class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `    
            <header>
                <a href="index.html" style="text-decoration: none;"><h1>Vitalii's  Dev Journey</h1></a>
                Dive into the World of Development: Insights, Tips, and just thoughts by <a href="about.html">Vitalii Ivashchenko</a>

                <nav>
                    <a href="index.html">Articles</a>
                    <a href="projects.html">Projects</a>
                    <a href="about.html">About Me</a>
                </nav>
            </header>
        `;

        this.highlightActiveLink();
    }

    highlightActiveLink() {
        const links = this.querySelectorAll('nav a');
        const currentURL = window.location.pathname.split('/').pop();

        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentURL || (currentURL === '' && href === '/')) {
                link.classList.add('active');
            }
        });
    }
}

customElements.define('main-header', Header);