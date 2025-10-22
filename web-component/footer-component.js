class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    render() {

        const img1 = this.getAttribute('img1') ?? 'img/icons/facebook.webp'

        this.innerHTML = `
            <footer class="footer">
        <div class="footer__conteiner">
            <div class="footer__contact">
                <p class="footer__contact-us contact--title">Contáctanos</p>
                <p class="footer__contact-us">Teléfono: 8451 6237</p>
                <p class="footer__contact-us">Correo Electrónico: info@fitzonegym.com</p>
            </div>
            <div class="footer__follow-us">
                <h3 class="follow-us__title">Síguenos</h3>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img class="icon__redes" src="/img/icons/facebook.webp" alt="icono de facebook"></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img class="icon__redes" src="/img/icons/instagram.webp" alt="icono de instagram"></a>
                <a href="https://x.com/" target="_blank" rel="noreferrer"><img class="icon__redes" src="/img/icons/x.webp" alt="icono de x o twitter"></a>
            </div>
            <div class="footer__logo">
                <img class="footer__image" src="/img/icons/logo.webp" alt="logo">
            </div>
        </div>
    </footer>`
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('footer-component', FooterComponent)