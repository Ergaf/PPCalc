class select {
    container;
    constructor() {
        this._id = new Date();
    }
    createDOMElem(){
        this.container = document.createElement("select")
        optContainer.appendChild(this.container)
        this.container.onchange = this.changeOption.bind(this);
    }
    addArrDestiny(){
        if(thisFile.format === "A4" && thisFile.sides === "Односторонній" && thisFile.color ==="Чорно-білий"){
            prices[3].variants.forEach(e => {
                let opt = document.createElement("option")
                opt.innerText = e[0]
                this.container.append(opt)
            })
        }
        if(thisFile.format === "A4" && thisFile.sides === "Односторонній" && thisFile.color ==="Кольоровий"){
            prices[5].variants.forEach(e => {
                let opt = document.createElement("option")
                opt.innerText = e[0]
                this.container.append(opt)
            })
        }
        if(thisFile.format === "A4" && thisFile.sides === "Двосторонній" && thisFile.color ==="Чорно-білий"){
            prices[6].variants.forEach(e => {
                let opt = document.createElement("option")
                opt.innerText = e[0]
                this.container.append(opt)
            })
        }
    }
    changeOption() {

    }
}