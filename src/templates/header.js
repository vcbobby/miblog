class myHeader extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    static get observedAttributes() {
        return ["title", "link", "hrf", "twitter", "fb", "ins", "logo"]
    }
    attributeChangedCallback(attribute, oldval, newval) {
        if(attribute === "title") {
            this.title = newval
        }

        if(attribute === "link") {
            this.link = newval
        }

        if(attribute === "hrf") {
            this.hrf = newval
        }
        if(attribute === "twitter") {
            this.twitter = newval
        }
        if(attribute === "fb") {
            this.fb = newval
        }
        if(attribute === "ins") {
            this.ins = newval
        }
        if(attribute === "logo") {
            this.logo = newval
        }
    }
    getTemplate() {
        const template = document.createElement('template')
        template.innerHTML = `
        <header class="header">
        <section class="red-social">
            <div class="social">
                <a href="/dist"><img class="icon" src="${this.fb}" alt="Logo de Fb" title="Facebook personal"></a>
                <a href="/dist"><img class="icon" src="${this.twitter}" alt="Logo de twitter" title="Twitter personal"></a>
                <a href="/dist"><img class="icon" src="${this.ins}" alt="Logo de instagram" title="Instagram personal"></a>
            </div>
        </section>
        <nav class="nav">
            <section class="logo">
                <a href="/dist"><img src="${this.logo}" alt="Logo" title="Mi blog"></a>
                <h1>Mi blog</h1>
            </section>
            <section class="profile">
                <a href="${this.hrf}" title="Perfil">${this.link}</a>
            </section>
        </nav>
    </header>
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
        .header {
            grid-area: header;
            width: 100%;
            display: grid;
            grid-template-rows: 50px 80px;
        }
        
        .red-social {
            display: flex;
            width: 100%;
            justify-content: flex-end;
            align-items: center;
            margin-right: 10px;
            background-color: var(--nav);
        }
        
        .red-social {
            z-index: 10;
            position: fixed;
            height: 50px;
        }
        
        .nav {
            margin-top: 90px;
        }

        .social {
            padding-right: 35px;
        }
        
        .social a {
            width: 100%;
            padding: 0 2px;
            text-decoration: none;
            color: black;
        }
        
        .nav {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 0 40px;
        }
        
        .social .icon {
            width: 20px;
            height: 20px;
        }
        
        .social .icon:hover {
            width: 25px;
            height: 25px
        }
        
        .logo a img {
            width:  40px;
            height: 40px;
            padding-right: 10px;
            padding-top: 5px;
        }
        
        .logo {
            width: 200px;
            height: 100px;
            display: flex;
            flex-direction: row;
            align-items: center;
            font-size: 40px;
        }
        
        .profile a {
            width: 100px;
            justify-self: flex-end;
            text-decoration: none;
            color: rgb(136, 136, 136);
            font-size: 1.6rem;
        }
        
        
        h1 {
            font-family: 'Dancing Script', cursive;
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

customElements.define('my-header', myHeader)