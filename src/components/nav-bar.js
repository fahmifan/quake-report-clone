import { LitElement, html, svg } from "@polymer/lit-element"

class NavBar extends LitElement {
    render() {
        const burgerMenuWhite = svg`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`
        return html`
            <style>
                nav {
                    background: #00838f;
                    color: #fff;
                    display: flex;
                    height: 36px;
                    padding: 0.5rem;
                    align-items: center;
                    padding-left: 0.75rem;
                    -webkit-box-shadow: 0px 4px 5px 0px rgba(191,191,191,1);
                    -moz-box-shadow: 0px 4px 5px 0px rgba(191,191,191,1);
                    box-shadow: 0px 4px 5px 0px rgba(191,191,191,1);
                }

                .app-name {
                    text-align: center;
                    padding-left: 0.5rem;
                }
            </style>
            <nav>
                ${burgerMenuWhite}
                <span class="app-name">Quake Report</span>
            </nav>
        `
    }
}

window.customElements.define("nav-bar", NavBar)