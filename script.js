// 1. ADIM: HTML sayfasındaki elemanları bul ve JavaScript'e tanıt
let girisKutusu = document.getElementById("todo-input");
let ekleButonu = document.getElementById("add-btn");
let gorevListesi = document.getElementById("todo-list");

// --- 1. NÖBETÇİ: GÖREV EKLEME ---
ekleButonu.onclick = function() {
    let yazilanGorev = girisKutusu.value;

    if (yazilanGorev != "") {
        let yeniSatir = `
            <li class="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div class="flex items-center gap-3">
                    <input type="checkbox" class="w-5 h-5 cursor-pointer">
                    <span class="text-gray-700 font-medium">` + yazilanGorev + `</span>
                </div>
                <button class="text-red-500 hover:text-red-600 transition">Sil</button>
            </li>
        `;
        gorevListesi.innerHTML = gorevListesi.innerHTML + yeniSatir;
        girisKutusu.value = "";
    }
};

// --- 2. NÖBETÇİ: SİLME VE TAMAMLAMA (BUNU ALTINA EKLEDİK) ---
gorevListesi.onclick = function(olay) {
    let tiklananEleman = olay.target;

    // Silme Mantığı
    if (tiklananEleman.tagName === "BUTTON") {
        let satir = tiklananEleman.closest("li");
        satir.remove();
    }

    // Tamamlama Mantığı
    if (tiklananEleman.type === "checkbox") {
        let yazi = tiklananEleman.nextElementSibling;
        let satir = tiklananEleman.closest("li");

        if (tiklananEleman.checked == true) {
            yazi.classList.add("line-through", "text-gray-400");
            satir.classList.add("opacity-50");
        } else {
            yazi.classList.remove("line-through", "text-gray-400");
            satir.classList.remove("opacity-50");
        }
    }
};