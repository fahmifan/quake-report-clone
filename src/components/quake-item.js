import { LitElement, html } from "@polymer/lit-element"
import moment from "moment"

class QuakeItem extends LitElement {
    render() {
        return html`
            <style>
                .quake-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0.25rem;
                }

                .mags {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-width: 36px;
                    max-width: 36px;
                    min-height: 36px;
                    max-height: 36px;
                    border-radius: 200%;
                    color: #fff;
                }

                .bg-red {
                    background: #f44336;
                }

                .bg-orange {
                    background: #ff5722;
                }

                .bg-green {
                    background: #4caf50;
                }

                .desc {
                    display: flex;
                    flex-direction: column;
                    padding-left: 0.5rem;
                }

                .direction {
                    display: flex;
                    flex-wrap: wrap;
                    font-size: 0.75rem;
                    font-weight: bold;
                    color: #777;
                }

                .city {
                    display: flex;
                    flex-wrap: wrap;                    
                }

                .date {
                    padding-left: 0.5rem;
                    display: flex;
                    align-self: flex-end;
                    flex-direction: column;
                    font-size: 0.75rem;
                    color: #777;
                }

                .right {
                    display: flex;
                    align-items: center;
                }
            </style>
            <div class="quake-item">
                <div class="right">
                    <span class="mags ${ this.mags > 5 ? "bg-red" :
                                         this.mags > 3.5 ? "bg-orange" : 
                                         "bg-green"}"> ${ this.mags }</span>
                    <div class="desc">
                        <span class="direction">${ this._getDirection(this.place) }</span>
                        <span class="city">${ this._getCity(this.place) }</span>
                    </div>                     
                </div>
                <div class="date">
                    <span>${ this._getDate(this.time) }</span>
                    <span>${ this._getTime(this.time) }</span>
                </div>
            </div>
        `
    }

    constructor() {
        super()

        this.mags = 0.0
        this.place = "Kirakira, Solomon Island"
        this.time = 1536091879570
    }

    static get properties() {
        return {
            mags: Number,
            place: String,
            time: String,
        }
    }

    _getTime(unixTime) {
        return moment.unix(unixTime/1000).format("HH:mm A")
    }

    _getDate(unixTime) {
        return moment.unix(unixTime/1000).format("MMM DD, YYYY")
    }

    _getDirection(place) {
        // substring[0, regex]
        const regex = /(of)/
        const word = place.substring(0, place.search(regex) + 2)
        console.log(word)
        return word
    } 

    _getCity(place) {
        // substring[regex, length-1]
        const regex = /(of)/
        const word = place.substring(place.search(regex) + 3, place.length)
        return word
    }
}

window.customElements.define("quake-item", QuakeItem)