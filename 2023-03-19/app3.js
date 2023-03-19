govde = document.body

// js div olusturma

const yeni_div = document.createElement('div')
document.body.appendChild(yeni_div)

const baslik = document.createElement('h1')
baslik.style.color = 'red'
baslik.innerText = 'DOM Atolye calismasi'

yeni_div.appendChild(baslik)

const yeni_p = document.createElement('p')
yeni_p.innerText = 'The document object represents your web page'

yeni_div.appendChild(yeni_p)

const yeni_buton = document.createElement('button')
yeni_buton.className = 'btn btn-danger'
yeni_buton.textContent = 'Yukle'
yeni_div.appendChild(yeni_buton)

//elemani silme

// yeni_buton.remove()

// yeni_div.removeChild(yeni_buton)

// yeni_buton.onclick = function(){
//     console.log(new Date())
//     console.log('tiklandi')
// }


// yeni_buton.onclick = function(){
//     let yeni_p = document.createElement('p')
//     yeni_p.innerText = 'The document object represents your web page'
    
//     yeni_div.appendChild(yeni_p)
    
// }

br_ = document.createElement('br')
yeni_div.appendChild(br_)

boyutlandirici = document.createElement('input')
boyutlandirici.type = 'range'
boyutlandirici.min = '0'
boyutlandirici.max = '100'
boyutlandirici.value = '50'
boyutlandirici.style.width = '200px'

yeni_div.appendChild(boyutlandirici)

boyut_degeri = document.createElement('div')
boyut_degeri.setAttribute('id', 'boyut_degeri')
yeni_div.appendChild(boyut_degeri)
console.log(boyut_degeri.getAttribute('id'))

br_ = document.createElement('br')
yeni_div.appendChild(br_)
resim = document.createElement('img')
yeni_div.appendChild(resim)

yeni_buton.onclick = function(){
        let r = document.querySelector('img')
        console.log(r.src)
        if (r.src.includes('resim2.png')){
            r.src = 'resim.png'
        } else {
            r.src = 'resim2.png'
        }
}
    


boyutlandirici.addEventListener('input', function(){
    let r = document.querySelector('img')
    r.style.width = boyutlandirici.value + '%' 
    r.style.height = boyutlandirici.value + '%'
    
    document.querySelector('#boyut_degeri').innerText = boyutlandirici.value
})


// form gonderme

var form = document.createElement('form')
form.setAttribute('id', 'formisimsoyisim')
document.body.appendChild(form)

var input = document.createElement('input')
input.type = 'text'
input.placeholder = 'enter your name'
form.appendChild(input)



var input2 = document.createElement('input')
input2.type = 'text'
input2.placeholder = 'soyisim'
form.appendChild(input2)



var submit = document.createElement('input')
submit.type = 'submit'
submit.value = 'Gonder'
form.appendChild(submit)

var tablo = document.createElement('table')
tablo.className = 'table table-bordered'

form.addEventListener('submit', function(frm){
    frm.preventDefault()
    document.body.appendChild(tablo)
    tr = document.createElement('tr')
    tablo.appendChild(tr)
    td_ad = document.createElement('td')
    tr.appendChild(td_ad)
    td_soyad = document.createElement('td')
    tr.appendChild(td_soyad)
    td_ad.innerText = input.value
    td_soyad.innerText = input2.value
    td_delete = document.createElement('td')
    tr.appendChild(td_delete)
    const  deleteButton = document.createElement('button')
    deleteButton.textContent = 'Sil'
    deleteButton.addEventListener('click', function(event){
        event.target.parentNode.parentNode.remove()
    })
    td_delete.appendChild(deleteButton)
})


tablotemizle = document.createElement('button')
tablotemizle.className = 'btn btn-primary'
tablotemizle.textContent = 'Tabloyu Temizle'
tablotemizle.addEventListener('click', function(event){
    document.querySelector('table').innerHTML = ''
})

document.body.appendChild(tablotemizle)

formreset = document.createElement('button')
formreset.className = 'btn btn-primary'
formreset.textContent = 'Formu Sifirla'
formreset.addEventListener('click', function(event){
    form.reset()
})

document.body.appendChild(formreset)
