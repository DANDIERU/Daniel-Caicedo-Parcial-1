import * as components from "./components/indexHijo.js"
import { data } from "./data.js"

class AppContainer extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        data.forEach((user)=>{
            this.shadowRoot.innerHTML += `
            <my-profile name="${user.name}" specie="${user.species}" gender="${user.gender}" house="${user.house}" yearofbirth="${user.yearOfBirth}"></my-profile>
                     
            `
        })
    }
}

customElements.define("app-container", AppContainer);

//<my-button altername="${user.alternate_names}></my-button>//