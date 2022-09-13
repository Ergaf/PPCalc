class file {
    container;
    type;
    format;
    sides;
    color;
    cower;
    destiny;
    binding;
    lamination;
    roundCorner;
    cutting;
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

    createSelect() {
        let select = document.createElement("select")
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

let destinySelect = document.querySelector("#DestinySelect")

let prices;
console.log("lol");
fetch('https://script.googleusercontent.com/macros/echo?user_content_key=wLSQSatR6bZv9i8U5VtiOsa7GMSDGnnZijrnGFZE1_jwd1QJkdBz8Sl8ITa_TvVjVpf_ByOh6IcFuOZ7evsUSo_9NYtdFJYTm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDbwAl7CMxVAiYx-XcQGm2-pK98VFRlg2L1Bgi9-N5lGP8ipd0KGqDVV0UksueULwVpami56uyJ4IxkRYgJm5B_wls8-MAHEtdz9Jw9Md8uu&lib=MKqsPpMpIdvM_NE9JC918gzq7P1CHZY8E')
    .then(response => response.json())
    .then(json => {

        let x = 1
        let data = [];
        json.forEach(e => {
            if(e[0] === ''){
                x=1
            }
            else {
                if(x === 1){
                    data.push({
                        name: e[0],
                        variants: []
                    })
                    x = 0
                }
                else {
                    data[data.length-1].variants.push(e)
                }
            }
        })
        console.log(data)
        prices = data
    })