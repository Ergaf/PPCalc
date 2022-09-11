class file {
    container;
    type;
    format;
    constructor (name) {
        this._name = name;
        this._id = new Date();
    }
    createVisitContainer() {
        //create item and bind this object to this DOM element // query filesContainer
        let filesAllContainer = document.querySelector('.FilesContainer');
        let Item = document.createElement('div');
        this.container = Item;

        Item.classList.add('oneFileInFilesContainer');
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
        this.container.classList.add("oneFileInFilesContainerPicked")
    }
    removePick() {
        this.container.classList.remove("oneFileInFilesContainerPicked")
    }
    deleteThis() {
        allFiles.forEach(e => {
            if(e._id === this._id){
                this.container.remove()
                e.remove()
            }
        })
    }
}
const allFiles = []

const filesContainer = document.querySelector(".allFilesContainer");
const addFileButton = document.querySelector(".addFileButton");
addFileButton.addEventListener("click", function () {
    let file1 = new file("file")
    allFiles.push(file1)
    file1.createVisitContainer()
})