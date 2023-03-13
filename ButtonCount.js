const template = document.createElement('template');
template.innerHTML = `<button></button>`;

class buttonCount extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('button').innerText = 'Times Clicked: 0';
        this.count = 0;
        let btn = this.shadowRoot.querySelector('button');
        btn.addEventListener('click', () => {
            this.count ++;
            btn.innerHTML = `Times Clicked: ${this.count}`;
        })
    }
}

window.customElements.define('button-count', buttonCount);