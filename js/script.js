
const allFiles = []
let thisFile;

const addFileButton = document.querySelector("#addFileButton");
addFileButton.addEventListener("click", function () {
    let file1 = new file("file")
    allFiles.push(file1)
    file1.createFileContainer()
})

let presetName = document.querySelector(".presetName")
let price = document.querySelector(".price")

let formatSelect = document.querySelector("#formatSelect")
let sidesSelect = document.querySelector("#sidesSelect")
let colorSelect = document.querySelector("#colorSelect")
let destinySelect = document.querySelector("#destinySelect")
let cowerSelect = document.querySelector("#cowerSelect")
let bindingSelect = document.querySelector("#bindingSelect")
let laminationSelect = document.querySelector("#laminationSelect")
let roundCornerSelect = document.querySelector("#roundCornerSelect")
let cuttingSelect = document.querySelector("#cuttingSelect")

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

let optContainer = document.querySelector(".optionsContainer")
document.querySelector("#document").addEventListener("click", function () {
    thisFile.format = "A4"
    thisFile.sides = "Односторонній"
    thisFile.color = "Чорно-білий"
    thisFile.destiny = "90 гр"
    thisFile.destinyAppend()
    thisFile.renderSettings()

})
document.querySelector("#presentation").addEventListener("click", function () {
    thisFile.format = "A4"
    thisFile.sides = "Односторонній"
    thisFile.color = "Кольоровий"
    thisFile.destinyAppend()
    thisFile.renderSettings()
})
document.querySelector("#poster").addEventListener("click", function () {
    thisFile.format = ""
    thisFile.sides = ""
    thisFile.color = ""
    thisFile.destinyAppend()
    thisFile.renderSettings()
})
document.querySelector("#card").addEventListener("click", function () {
    thisFile.format = ""
    thisFile.sides = ""
    thisFile.color = ""
    thisFile.destinyAppend()
    thisFile.renderSettings()
})
document.querySelector("#visitCard").addEventListener("click", function () {
    thisFile.format = ""
    thisFile.sides = ""
    thisFile.color = ""
    thisFile.destinyAppend()
    thisFile.renderSettings()
})
document.querySelector("#sticker").addEventListener("click", function () {
    thisFile.format = ""
    thisFile.sides = ""
    thisFile.color = ""
    thisFile.destinyAppend()
    thisFile.renderSettings()
})
document.querySelector("#tags").addEventListener("click", function () {
    thisFile.format = ""
    thisFile.sides = ""
    thisFile.color = ""
    thisFile.destinyAppend()
    thisFile.renderSettings()
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