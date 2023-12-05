
function hesaplamalar() {
    var hastaYasi = document.getElementById("yas").value;
    var hastaKilosu = document.getElementById("agirlik").value;

    // Input değerlerinin boş olup olmadığını ve sayıya dönüştürülebilir olup olmadığını kontrol et
    if (hastaYasi === "" || hastaKilosu === "" || isNaN(hastaYasi) || isNaN(hastaKilosu)) {
        alert("Lütfen geçerli yaş ve kilo değerleri girin.");
        return;
    }

    // Değerleri sayıya dönüştür
    hastaYasi = Number(hastaYasi);
    hastaKilosu = Number(hastaKilosu);

    

    let yuzeyAlani = ((hastaKilosu * 4) + 7) / (hastaKilosu + 90);
    yuzeyAlani = yuzeyAlani.toFixed(2);
    document.getElementById("yuzeyAlani").value = yuzeyAlani;


    document.getElementById("yukleme1").value = hastaKilosu * 20;
    document.getElementById("yukleme2").value = (hastaKilosu * 20) / 4;

    document.getElementById("idame1").value = (Number(yuzeyAlani)*1500)/24;
    document.getElementById("ekKcl").value = 2 * hastaKilosu;

    document.getElementById("tupCap1").value = (hastaYasi/4)+4;
    document.getElementById("tupCap2").value = (hastaYasi/4)+3;

    document.getElementById("augmentin1").value = hastaKilosu*50;
    document.getElementById("augmentin2").value = hastaKilosu*80;

    document.getElementById("macrol1").value = hastaKilosu*15;
    document.getElementById("macrol2").value = hastaKilosu*20;

    document.getElementById("nidazol1").value = (hastaKilosu*30);

    document.getElementById("parolSurup").value = hastaKilosu/10;
    document.getElementById("dolven1").value = hastaKilosu/10;

    document.getElementById("cefaks1").value = hastaKilosu*10;
    document.getElementById("cefaks1").value = hastaKilosu*15;

    document.getElementById("bactrim1").value = (hastaKilosu*30)/2;

    document.getElementById("parolIv1").value = hastaKilosu*0.75;
    document.getElementById("parolIv2").value = hastaKilosu*1.5;

    document.getElementById("iesporIvim").value = (hastaKilosu*25)/2;

    document.getElementById("novalginAmp1").value = (hastaKilosu*0.1)/10;
    document.getElementById("novalginAmp2").value = Number((hastaKilosu*0.1)/10)*2.5;

    if (hastaYasi>0.5 & hastaYasi<=2) {
          document.getElementById("avilAmp").value = 0.4+"ml-" +1+"mL";
    } else if(hastaYasi>2 & hastaYasi<=5){
          document.getElementById("avilAmp").value = 1/3 +" ampul";
    } else if(hastaYasi>5 & hastaYasi<=10){
          document.getElementById("avilAmp").value = 1/2 + " ampul";
    } else if (hastaYasi>10){
          document.getElementById("avilAmp").value = 1 + " ampul";
    }

    document.getElementById("zoferAmp1").value = hastaKilosu*0.1;
    document.getElementById("zoferAmp2").value = (hastaKilosu*0.1)/2;

    document.getElementById("flagylFlk").value = (hastaKilosu*10)/5;

    document.getElementById("ventolinFlk").value = hastaKilosu*0.15;













    



};

