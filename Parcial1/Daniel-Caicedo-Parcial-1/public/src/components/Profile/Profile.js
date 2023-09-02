class Profile extends HTMLElement{

    static get observedAttributes(){
        return["name","specie","gender","house","yearofbirth"];
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render()
    }

    attributeChangedCallback(propName,oldValue,newValue){
        this[propName] = newValue
        this.render()
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./src/components/Profile/Profile.css">
        <section>
        <h1>${this.name}</h1>
        <p>Specie: ${this.specie}</p>
        <p>Gender: ${this.gender}</p>
        <p>House: ${this.house}</p>
        <p>Year of Birth: ${this.yearofbirth}</p>    

        </section>
        `

    }
}

customElements.define("my-profile", Profile);
export default Profile

