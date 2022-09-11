class file {
    container;
    type;
    format;
    sides;
    color;
    constructor (name) {
        this._name = name;
        this._id = new Date();
    }
    createVisitContainer() {
        //create item and bind this object to this DOM element // query filesContainer
        let filesAllContainer = document.querySelector('.FilesContainer');
        let Item = document.createElement('div');
        this.container = Item;

        Item.classList.add('card');
        Item.classList.add('bg-light');
        Item.style.cssText = "display: inline-block; padding: 1vmin;"
        filesAllContainer.appendChild(Item);
        Item.onmousedown = this.pick.bind( this);

        let nameContainer = document.createElement('div');
        nameContainer.innerHTML = this._name;
        nameContainer.classList.add('.inlineBlock');
        Item.appendChild(nameContainer);

        let cancelButton = document.createElement('div');
        cancelButton.onmousedown = this.deleteThis.bind( this);
        cancelButton.innerHTML = "X";
        cancelButton.classList.add('.inlineBlock');
        Item.appendChild(cancelButton);
    }

    pick(){
        allFiles.forEach(e => {
            if(e._id !== this._id){
                e.removePick()
            }
        })
        this.container.classList.remove("bg-light")
        this.container.classList.add("bg-dark")
        this.container.classList.add("text-white")

        let presetName = document.querySelector(".presetName")
        presetName.innerText = this.type

        thisFile = this._id
        this.renderSettings()
    }
    removePick() {
        this.container.classList.remove("bg-dark")
        this.container.classList.remove("text-white")
        this.container.classList.add("bg-light")
    }
    deleteThis() {
        allFiles.forEach(e => {
            if(e._id === this._id){
                this.container.remove()
                e.remove()
            }
        })
    }

    renderSettings() {
        formatSelect.value = this.format
        sidesSelect.value = this.sides
        colorSelect.value = this.color
    }

}
const allFiles = []
let thisFile;

const addFileButton = document.querySelector("#addFileButton");
addFileButton.addEventListener("click", function () {
    let file1 = new file("file")
    allFiles.push(file1)
    file1.createVisitContainer()
})

let formatSelect = document.querySelector("#formatSelect")
let sidesSelect = document.querySelector("#sidesSelect")
let colorSelect = document.querySelector("#colorSelect")