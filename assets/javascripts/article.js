class Article extends HTMLElement {
    connectedCallback() {
        const date = this.getAttribute('date');
        const description = this.getAttribute('description');
        const link = this.getAttribute('link');
        const tags = this.getAttribute('tags');
        const title = this.getAttribute('title');

        this.innerHTML = `    
        <div class="post-article">
            <a href=${link}>
                <div class="title">${title}</div>
                <div class="horizontal-container" style="margin-bottom: 0.5rem; margin-top: 0.5rem">
                    <div class="tag">${tags}</div>
                    <div style="color: #959595;">${date}</div>
                </div>
                ${description}
            </a>
        </div>
      `;
    }
}

customElements.define('post-article', Article);