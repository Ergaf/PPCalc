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
        this._count = 1
    }
    createFileContainer() {
        //create item and bind this object to this DOM element // query filesContainer
        let filesAllContainer = document.querySelector('.FilesContainer');
        let Item = document.createElement('div');
        this.container = Item;

        Item.classList.add('btn');
        Item.classList.add('align-items-center');
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
        cancelButton.innerText = "X"
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
        if(allFiles.length < 1){
            document.querySelector(".settingsContainer").classList.add("nonDisplay")
        }
    }

    renderSettings() {
        destinySelect.innerHTML = ""
        if(this.getDestinyOnData() !== undefined){
            this.destinyAppend()
        }

        formatSelect.value = this.format
        sidesSelect.value = this.sides
        colorSelect.value = this.color
        destinySelect.value = this.destiny
        cowerSelect.value = this.cower
        bindingSelect.value = this.binding
        laminationSelect.value = this.lamination
        roundCornerSelect.value = this.roundCorner
        cuttingSelect.value = this.cutting
    }

    destinyAppend() {
        this.getDestinyOnData().forEach(e => {
            let opt = document.createElement("option")
            opt.innerText = e[0]
            destinySelect.appendChild(opt)
        })
    }

    getDestinyOnData() {
        if(this.format === "A4" && this.sides === "Односторонній" && this.color ==="Чорно-білий"){
            return prices[3].variants
        }
        if(this.format === "A3" && this.sides === "Односторонній" && this.color ==="Чорно-білий"){
            return prices[4].variants
        }
        if(this.format === "A4" && this.sides === "Односторонній" && this.color ==="Кольоровий"){
            return prices[5].variants
        }
        if(this.format === "A4" && this.sides === "Двосторонній" && this.color ==="Чорно-білий"){
            return prices[6].variants
        }
    }
    getPrice(){
        if(this._count < 11){
            let price = this.getDestinyOnData()
            return price[1]*this._count
        }
        if(this._count > 10 && this._count < 51){
            let price = this.getDestinyOnData()
            return price[2]*this._count
        }
        if(this._count > 50 && this._count < 101){
            let price = this.getDestinyOnData()
            return price[3]*this._count
        }
        if(this._count > 100){
            let price = this.getDestinyOnData()
            return price[4]*this._count
        }
    }
}