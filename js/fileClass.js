export class file {
    constructor(name, id) {
        this.name = name
        this.id = id
    }

    call(){
        console.log(name);
    }
}

const filesContainer = document.querySelector(".allFilesContainer");
const addFileButton = document.querySelector(".addFileButton");