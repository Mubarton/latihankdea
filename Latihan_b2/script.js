const ubah_warna = () => {
    let card = document.getElementById("card")
    let nilai = document.getElementById("masukan").value
    let selection = document.getElementById("selection").value
    let teks = document.getElementById("teks")

    if(selection == "a") card.style.backgroundColor = nilai
    if(selection == "b") card.style.color = nilai
    if(selection == "c") teks.style.fontSize = nilai+"px"
    if(selection == "d") teks.style.fontFamily = nilai
    if(selection == "e") card.style.width = nilai+"px"
    if(selection == "f") card.style.height = nilai+"px"
}