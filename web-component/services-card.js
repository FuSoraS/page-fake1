class ServicesCard extends HTMLElement {
    constructor() {
        super();
    }

    render() {

        const text = this.getAttribute('text') ?? 'Texto por defecto'

        this.innerHTML = `
            <p class="service__paragraph">${text}</p>
        `
    }

    connectedCallback() {
        this.render()
    }
}

customElements.define('services-card', ServicesCard);