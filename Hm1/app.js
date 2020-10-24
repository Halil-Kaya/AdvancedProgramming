const L = [0.5, 1, 1.5, 2, 2.5, 3]
const p=[]

for (let λ of L) {
    p.push(Math.exp(-λ))
}

function makeRows(){
    var sonuc  = ""
    var baslik =
    `
    <tr>
        <th></th><th>λ = ${L[0]}</th><th>λ = ${L[1]}</th><th>λ = ${L[2]}</th><th>λ = ${L[3]}</th><th>λ = ${L[4]}</th><th>λ = ${L[5]}</th>
    </tr>
    `
    sonuc = sonuc + baslik
    for (let i=0; i <= 8; i++){
        var satir = 
        `
        <tr>
            <th>X = ${i}</th><td>${p[0].toFixed(4)}<span class="tip">C1</span></td><td>${p[1].toFixed(4)}<span class="tip">C2</span></td><td>${p[2].toFixed(4)}<span class="tip">C3</span></td><td>${p[3].toFixed(4)}<span class="tip">C4</span></td><td>${p[4].toFixed(4)}<span class="tip">C5</span></td><td>${p[5].toFixed(4)}<span class="tip">C5</span></td>
        </tr>
        `
        for(let j = 0 ;j< L.length ;j++){
            p[j] = (p[j] * L[j])/(i+1)
        }
        sonuc = sonuc + satir
    }
    document.querySelector("#tablo").innerHTML = sonuc
}

makeRows()
document.querySelector("#sample").innerText = makeRows.toString()

