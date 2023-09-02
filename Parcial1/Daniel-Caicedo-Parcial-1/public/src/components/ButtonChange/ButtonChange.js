class ButtonChange extends HTMLElement {

    static get observedAttributes(){
        return["name", "altername"];
    }

    
    mount(){
        this.render();
        this.addListeners();
    }

    connectedCallback(){
        this.mount()
    }


    attributeChangedCallback(){
        this[propName] = newValue
        this.mount();
    }


    onButtonClicked(){
        const currentValue = this.getAttributes("name");
        this.setAttributes("name", "altername")
    }
    
    addListeners(){
        this.shadowRoot.querySelector("button").addEvenListener("click", this.onButtonClicked)
    }
    
    constructor(){
        super();
        this.attachShadow({mode:"open"})
        this.onButtonClicked = this.onButtonClicked.bind(this)
    }

    render(){
        this.shadowRoot.innerHTML = `
        <section>
        <p>Alternate Name: ${this.altername}</p>
        <button>Change Name</button>
        </section>
        
        `
    }


    
}

customElements.define("my-button", ButtonChange);
export default ButtonChange;