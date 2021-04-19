class myFooter extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    static get observedAttributes() {
        return ["pie"]
    }
    attributeChangedCallback(attribute, oldval, newval) {
        if(attribute === "pie") {
            this.pie = newval
        }
    }
    getTemplate() {
        const template = document.createElement('template')
        template.innerHTML = `
        <footer class="footer">
            <p>${this.pie}</p>
        </footer>
        ${this.getStyles()}
        `
        return template
    }
    getStyles() {
        return `
        <style>
        :host {
            --nav: #6BB9D6;
            --bottoms:#6BEDEB;
            --contact-inf: #6BA4ED;
            --footer: #66E3BA;
        }
        .footer {
            font-family: 'Roboto', sans-serif;
            font-size: 1.5rem;
            color: grey;
            background-color: var(--footer);
            width: 100%;
            min-height: 60px;
            border-top: 20px solid var(--nav);
            text-align: center;
        }
        
        .footer p {
            margin-top: 10px;
        }

        </style>
        `
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback() {
        this.render()
    }
}

customElements.define('my-footer', myFooter)