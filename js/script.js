class file {
    container;
    type;
    format;
    constructor (name) {
        this._name = name;
        this._id = new Date();
    }
    createVisitContainer() {
        let visitContainer = document.querySelector('.FilesContainer');
        let Item = document.createElement('button');
        Item.classList.add('oneFileInFilesContainer');
        visitContainer.appendChild(Item);
        Item.onmousedown = this.pick.bind( this);
        Item.innerHTML = this._name;
        this.container = Item;
    }

    pick(){
        allFiles.forEach(e => {
            if(e._id !== this._id){
                e.removePick()
            }
        })
        this.container.classList.remove("oneFileInFilesContainer")
        this.container.classList.add("oneFileInFilesContainerPicked")
    }
    removePick() {
        this.container.classList.remove("oneFileInFilesContainerPicked")
        this.container.classList.add("oneFileInFilesContainer")
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