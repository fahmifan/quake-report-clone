import { LitElement, html } from "@polymer/lit-element"

import "./quake-item.js"
import "./nav-bar.js"

class MyApp extends LitElement {
    constructor() {
        super();

        this.quakes = []
        this.error = null 

        this.addEventListener("load", this._fetchData())
    }

    static get properties() {
        return {
            quakes: Array,
            error: Object,
        }
    }

    render() {
        if(this.quakes.length == 0) return html``            

        return html`
            <style>
                main {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding-left: 0.5rem;
                    padding-right: 0.5rem;
                }
            </style>
            <nav-bar></nav-bar>
            <main>
                ${ this.quakes.map((quake) => {
                    return html`
                        <quake-item mags="${quake.properties.mag}"
                            place="${quake.properties.place}"
                            time="${quake.properties.time}" ></quake-item>`                     
                }) }
            </main>`  
    }

    async _fetchData() {
        await fetch("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2018-01-01&endtime=2018-10-15&minfelt=50&minmagnitude=5", {method: "GET"})
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                this.quakes = res.features
            })
            .catch((error) => {
                console.log(error)
                this.error = error
            })
    }
}

window.customElements.define("my-app", MyApp)