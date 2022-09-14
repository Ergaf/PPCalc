class file {
    container;
    nameContainer;
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
        this.nameContainer = nameContainer;
        Item.appendChild(nameContainer);

        let cancelButton = document.createElement('button');
        cancelButton.onmousedown = this.deleteThis.bind( this);
        cancelButton.classList.add('.btn-close');
        cancelButton.innerText = "T"
        Item.appendChild(cancelButton);
    }

    pick(e){
        if(e.target === this.container || e.target === this.nameContainer){
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

            thisFile = this
            this.renderSettings()
            document.querySelector(".settingsContainer").classList.remove("nonDisplay")
        }
    }
    removePick() {
        this.container.classList.remove("bg-dark")
        this.container.classList.remove("text-white")
        this.container.classList.add("bg-light")
    }
    deleteThis() {
        for (let i = 0; i < allFiles.length; i++){
            if(allFiles[i]._id === this._id){
                allFiles[i].container.remove()
                allFiles.splice(i, 1)
            }
        }

        console.log(allFiles);
        if(allFiles.length < 1){
            document.querySelector(".settingsContainer").classList.add("nonDisplay")
        }
    }

    renderSettings() {
        formatSelect.value = this.format
        sidesSelect.value = this.sides
        colorSelect.value = this.color
    }

    createSelect(selectType) {
        let select = document.createElement("select")

    }

}

class buttons {
    constructor() {

    }
}

class select {
    constructor() {

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
        document.querySelector(".mainContainer").classList.remove("nonDisplay")
        document.querySelector(".download").classList.add("nonDisplay")
    })


document.querySelector("#document").addEventListener("click", function () {
    document.querySelector("#formatSelect").value = "A4"
    document.querySelector("#sidesSelect").value = "Односторонній"
    document.querySelector("#colorSelect").value = "Чорно-білий"
    thisFile.format = "A4"
})
document.querySelector("#presentation").addEventListener("click", function () {
    document.querySelector("#formatSelect").value = "A4"
    document.querySelector("#sidesSelect").value = "Односторонній"
    document.querySelector("#colorSelect").value = "Кольоровий"
})
document.querySelector("#poster").addEventListener("click", function () {
    document.querySelector("#formatSelect").value = "A3"
    document.querySelector("#sidesSelect").value = "Односторонній"
    document.querySelector("#colorSelect").value = "Кольоровий"
})
document.querySelector("#card").addEventListener("click", function () {
    document.querySelector("#formatSelect").value = "A6"
    document.querySelector("#sidesSelect").value = "Односторонній"
    document.querySelector("#colorSelect").value = "Кольоровий"
})
document.querySelector("#visitCard").addEventListener("click", function () {
    document.querySelector("#formatSelect").value = "50x90"
    document.querySelector("#sidesSelect").value = "Односторонній"
    document.querySelector("#colorSelect").value = "Кольоровий"
})
document.querySelector("#sticker").addEventListener("click", function () {
    document.querySelector("#formatSelect").value = "A6"
    document.querySelector("#sidesSelect").value = "Односторонній"
    document.querySelector("#colorSelect").value = "Кольоровий"
})
document.querySelector("#tags").addEventListener("click", function () {
    document.querySelector("#formatSelect").value = "A6"
    document.querySelector("#sidesSelect").value = "Односторонній"
    document.querySelector("#colorSelect").value = "Кольоровий"
})
document.querySelector("#brochure").addEventListener("click", function () {
    document.querySelector("#formatSelect").value = "A4"
    document.querySelector("#sidesSelect").value = "Двосторонній"
    document.querySelector("#colorSelect").value = "Кольоровий"
})
document.querySelector("#note").addEventListener("click", function () {
    document.querySelector("#formatSelect").value = "A5"
    document.querySelector("#sidesSelect").value = "Односторонній"
    document.querySelector("#colorSelect").value = "Кольоровий"
})
document.querySelector("#calendar").addEventListener("click", function () {
    document.querySelector("#formatSelect").value = "A6"
    document.querySelector("#sidesSelect").value = "Односторонній"
    document.querySelector("#colorSelect").value = "Кольоровий"
})