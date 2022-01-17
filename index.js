var al = document.getElementById('al')
var cu = document.getElementById('cu')
var cl = document.getElementById('cl')

var kyhieu = document.getElementById('kyhieu')
var tenngto = document.getElementById('tenngto')
var ngtukhoi = document.getElementById('ngtokhoi')
var doamdien = document.getElementById('doamdien')
var electron = document.getElementById('electron')
var oxihoa = document.getElementById('oxihoa')

var ngtoHH = document.getElementsByClassName('ngtoHH')

var data = {
    "al": {
        "ky_hieu": "Al",
        "ten_ngto": "Nhôm",
        "ngtu_khoi": "27",
        "do_am_dien": "1.61",
        "electron": "[Ne] 3s^2 3p^1",
        "oxi_hoa": "+3"
    },
    "cu": {
        "ky_hieu": "Cu",
        "ten_ngto": "Đồng",
        "ngtu_khoi": "64",
        "do_am_dien": "1.90",
        "electron": "[Ar] 3d¹⁰4s¹",
        "oxi_hoa": "1, 2"
    },
    "cl": {
        "ky_hieu": "Cl",
        "ten_ngto": "Clo",
        "ngtu_khoi": "35,5",
        "do_am_dien": "3.16",
        "electron": "[Ar] 3s^2 3p^5",
        "oxi_hoa": "-1, 1, 3, (4), 5, 7"
    }
}

// Al
ngtoHH[0].addEventListener('click', function(){
    console.log('Đây là nguyên tố Al')
})

al.addEventListener('click', function(){
    kyhieu.textContent = data.al.ky_hieu
    tenngto.textContent = data.al.ten_ngto
    ngtukhoi.textContent = data.al.ngtu_khoi
    doamdien.textContent = data.al.do_am_dien
    electron.textContent = data.al.electron
    oxihoa.textContent = data.al.oxi_hoa
})

cu.addEventListener('click', function(){
    kyhieu.textContent = data.cu.ky_hieu
    tenngto.textContent = data.cu.ten_ngto
    ngtukhoi.textContent = data.cu.ngtu_khoi
    doamdien.textContent = data.cu.do_am_dien
    electron.textContent = data.cu.electron
    oxihoa.textContent = data.cu.oxi_hoa
})

cl.addEventListener('click', function(){
    kyhieu.textContent = data.cl.ky_hieu
    tenngto.textContent = data.cl.ten_ngto
    ngtukhoi.textContent = data.cl.ngtu_khoi
    doamdien.textContent = data.cl.do_am_dien
    electron.textContent = data.cu.electron
    oxihoa.textContent = data.cl.oxi_hoa
})
