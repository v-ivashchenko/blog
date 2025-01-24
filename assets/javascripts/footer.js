class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
        <footer>
            <h5>    
                <p>Copyright &copy; 2025 Vitalii Ivashchenko. All rights reserved.</p>
            </h5>
        </footer>
      `;
  }
}

customElements.define('main-footer', Footer);