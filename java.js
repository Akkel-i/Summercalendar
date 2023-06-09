$(document).ready(function() {
  $("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
});

// Päivämäärän chekkaus
function tarkista_paiva(limit) {
  const today = new Date();
  const limit_paiva = new Date(limit);

  if (
    today.getFullYear() >= limit_paiva.getFullYear() &&
    today.getMonth() >= limit_paiva.getMonth() &&
    today.getDate() >= limit_paiva.getDate()
  ) {
    return true;
  }

  return false;
}



// eka kuva
function change_image1() { 
  let paivamaaran_tarkistus = tarkista_paiva("5.1.2023"); // pitää olla kk.pv.vuosi  --- tästä voi testata että toimii, jos vaikka laittaa 4.22.2023 niin silloin luukku aukeaa :D

  if (paivamaaran_tarkistus == true) {
  if (document.getElementById("luukku1").src == "Kuvat/kansi.gif"){
      document.getElementById("luukku1").src = "kuvat/suokki.png"; 
      document.getElementById("card-title").innerHTML = "Suomenlinna"; // tällä sai vaihdettuu myös ton tekstin 
  document.getElementById("card-text").innerHTML = "Lähde Suomenlinnaan! Hengitä raikasta meri-ilmaa ja tutki historiallisia luolia yksin tai ystäviesi kanssa.";
      
  } else {
      document.getElementById("luukku1").src = "Kuvat/suokki.png";
      document.getElementById("card-title").innerHTML = "Suomenlinna"; 
  document.getElementById("card-text").innerHTML = "Lähde Suomenlinnaan! Hengitä raikasta meri-ilmaa ja tutki historiallisia luolia yksin tai ystäviesi kanssa.";
  }
}
}

// toka kuva

function change_image2() {
  let paivamaaran_tarkistus = tarkista_paiva("5.2.2023"); // pitää olla kk.pv.vuosi

  if (paivamaaran_tarkistus == true) {
  if (document.getElementById("luukku2").src == "Kuvat/kansi.gif"){
      document.getElementById("luukku2").src = "Kuvat/allas.png";
      document.getElementById("card-title-2").innerHTML = "Allas sea pool"; // tällä sai vaihdettuu myös ton tekstin <3
  document.getElementById("card-text-2").innerHTML = "Käy Allas sea poolilla. Nauti virkistävästä merialtaasta tai siemaile olutta samalla kun aurinko paistaa. Jos sataa, sauno.";
      
  } else {
      document.getElementById("luukku2").src = "Kuvat/allas.png";
      document.getElementById("card-title-2").innerHTML = "Allas sea pool"; 
  document.getElementById("card-text-2").innerHTML = "Käy Allas sea poolilla. Nauti virkistävästä merialtaasta tai siemaile olutta samalla kun aurinko paistaa. Jos sataa, sauno.";
  }
}
}

// kolmas kuva
function change_image3() {
  let paivamaaran_tarkistus = tarkista_paiva("5.2.2023"); // pitää olla kk.pv.vuosi

  if (paivamaaran_tarkistus == true) {
  if (document.getElementById("luukku3").src == "Kuvat/kansi.gif"){
      document.getElementById("luukku3").src = "Kuvat/kauppatori.png";
      document.getElementById("card-title-3").innerHTML = "Kauppatori"; // tähä muokatut tekstit <3
  document.getElementById("card-text-3").innerHTML = "Lähde kauppatorille. Osta ystävällesi matkamuisto ja osta makkispekkikset. Varo lokkeja!";
      
  } else {
      document.getElementById("luukku3").src = "Kuvat/kauppatori.png";
      document.getElementById("card-title-3").innerHTML = "Kauppatori";  // tähä muokatut tekstit <3
  document.getElementById("card-text-3").innerHTML = "Lähde kauppatorille. Osta ystävällesi matkamuisto ja osta makkispekkikset. Varo lokkeja!"; // tähä muokatut tekstit <3
  }
}
}

//neljäs kuva

function change_image4() {
  let paivamaaran_tarkistus = tarkista_paiva("5.2.2023"); // pitää olla kk.pv.vuosi

  if (paivamaaran_tarkistus == true) {
  if (document.getElementById("luukku4").src == "Kuvat/kansi.gif"){
      document.getElementById("luukku4").src = "Kuvat/kuva.jpg";
      document.getElementById("card-title-4").innerHTML = "Laiva"; // tähä muokatut tekstit <3
  document.getElementById("card-text-4").innerHTML = "Käy katsomassa historiallista laivaa. Kysäise myös kapteenilta josko saisi pienen esittelyn sisätiloista. Mutta varo, huhujen mukaan laivalla kummittelee!"; //tähä muokatut tekstit <3
      
  } else {
      document.getElementById("luukku4").src = "Kuvat/kuva.jpg";
      document.getElementById("card-title-4").innerHTML = "Laiva"; // tähä muokatut tekstit <3
  document.getElementById("card-text-4").innerHTML = "Käy katsomassa historiallista laivaa. Kysäise myös kapteenilta josko saisi pienen esittelyn sisätiloista. Mutta varo, huhujen mukaan laivalla kummittelee!"; // tähä muokatut tekstit <3
  }
}
}

// viides kuva
function change_image5() {
  let paivamaaran_tarkistus = tarkista_paiva("5.2.2023"); // pitää olla kk.pv.vuosi

  if (paivamaaran_tarkistus == true) {
  if (document.getElementById("luukku5").src == "Kuvat/kansi.gif"){
      document.getElementById("luukku5").src = "Kuvat/lintsi.png";
      document.getElementById("card-title-5").innerHTML = "Linnanmäki"; // tähä muokatut tekstit <3
  document.getElementById("card-text-5").innerHTML = "Aika lähteä Lintsille! Käy ainakin yhdessä laitteessa jos uudet rannekkeen hinnat hirvityttää."; //tähä muokatut tekstit <3
      
  } else {
      document.getElementById("luukku5").src = "Kuvat/lintsi.png";
      document.getElementById("card-title-5").innerHTML = "Linnanmäki"; // tähä muokatut tekstit <3
  document.getElementById("card-text-5").innerHTML = "Aika lähteä Lintsille! Käy ainakin yhdessä laitteessa jos uudet rannekkeen hinnat hirvityttää."; // tähä muokatut tekstit <3
  }
}
}

// kuudes kuva
function change_image6() {
  let paivamaaran_tarkistus = tarkista_paiva("5.2.2023"); // pitää olla kk.pv.vuosi

  if (paivamaaran_tarkistus == true) {
  if (document.getElementById("luukku6").src == "Kuvat/kansi.gif"){
      document.getElementById("luukku6").src = "Kuvat/leijonat.png";
      document.getElementById("card-title-6").innerHTML = "Korkeasaari"; // tähä muokatut tekstit <3
  document.getElementById("card-text-5").innerHTML = "Kuuletko jo leijonien huudon? Jos et, mene korkeasaareen. Käy myös ostamassa jäätelö kioskilta."; //tähä muokatut tekstit <3
      
  } else {
      document.getElementById("luukku6").src = "Kuvat/leijonat.png";
      document.getElementById("card-title-6").innerHTML = "Korkeasaari"; // tähä muokatut tekstit <3
  document.getElementById("card-text-6").innerHTML = "Kuuletko jo leijonien huudon? Jos et, mene korkeasaareen. Käy myös ostamassa jäätelö kioskilta."; // tähä muokatut tekstit <3
  }
}
}

// seitsemäs kuva

function change_image7() {
  let paivamaaran_tarkistus = tarkista_paiva("2.3.2023"); // pitää olla kk.pv.vuosi

  if (paivamaaran_tarkistus == true) {
  if (document.getElementById("luukku7").src == "Kuvat/kansi.gif"){
      document.getElementById("luukku7").src = "Kuvat/pyora.png";
      document.getElementById("card-title-7").innerHTML = "Pyöräretki"; // tähä muokatut tekstit <3
  document.getElementById("card-text-7").innerHTML = "Pyöräile Porvooseen ja takaisin. Jos voimat loppuvat kesken, Porvoosta tulee Helsinkiin myös laiva johon pyörän saa kyytiin."; //tähä muokatut tekstit <3
      
  } else {
      document.getElementById("luukku7").src = "Kuvat/pyora.png";
      document.getElementById("card-title-7").innerHTML = "Pyöräretki"; // tähä muokatut tekstit <3
  document.getElementById("card-text-7").innerHTML = "Pyöräile Porvooseen ja takaisin. Jos voimat loppuvat kesken, Porvoosta tulee Helsinkiin myös laiva johon pyörän saa kyytiin."; // tähä muokatut tekstit <3
  }
}
}

// kahdeksas kuva

function change_image8() {
  let paivamaaran_tarkistus = tarkista_paiva("2.10.2023"); // pitää olla kk.pv.vuosi

  if (paivamaaran_tarkistus == true) {
  if (document.getElementById("luukku8").src == "Kuvat/kansi.gif"){
      document.getElementById("luukku8").src = "Kuvat/flow.png";
      document.getElementById("card-title-8").innerHTML = "Flow/Tuska"; // tähä muokatut tekstit <3
  document.getElementById("card-text-8").innerHTML = "Nyt saat valita! Osta joko Flow- tai Tuska-festivaaleille lippu. Vielä ehtii ennen kuin loppuvat."; //tähä muokatut tekstit <3
      
  } else {
      document.getElementById("luukku8").src = "Kuvat/flow.png";
      document.getElementById("card-title-8").innerHTML = "Flow/Tuska"; // tähä muokatut tekstit <3
  document.getElementById("card-text-8").innerHTML = "Nyt saat valita! Osta joko Flow- tai Tuska-festivaaleille lippu. Vielä ehtii ennen kuin loppuvat."; // tähä muokatut tekstit <3
  }
}
}

//yhdeksäs 

function change_image9() {
  let paivamaaran_tarkistus = tarkista_paiva("2.17.2023"); // pitää olla kk.pv.vuosi

  if (paivamaaran_tarkistus == true) {
  if (document.getElementById("luukku9").src == "Kuvat/kansi.gif"){
      document.getElementById("luukku9").src = "Kuvat/kirppis.png";
      document.getElementById("card-title-9").innerHTML = "Kirppikselle!"; // tähä muokatut tekstit <3
  document.getElementById("card-text-9").innerHTML = "Aika ostaa uudet kesärytkyt! Säästä rahaa ja luontoa käymällä valitsemallasi kirpputorilla."; //tähä muokatut tekstit <3
      
  } else {
      document.getElementById("luukku9").src = "Kuvat/kirppis.png";
      document.getElementById("card-title-9").innerHTML = "Kirppikselle!"; // tähä muokatut tekstit <3
  document.getElementById("card-text-9").innerHTML = "Aika ostaa uudet kesärytkyt! Säästä rahaa ja luontoa käymällä valitsemallasi kirpputorilla."; // tähä muokatut tekstit <3
  }
}
}

//kymmenes

function change_image10() {
  let paivamaaran_tarkistus = tarkista_paiva("2.2.2023"); // pitää olla kk.pv.vuosi

  if (paivamaaran_tarkistus == true) {
  if (document.getElementById("luukku10").src == "Kuvat/kansi.gif"){
      document.getElementById("luukku10").src = "Kuvat/molkku.png";
      document.getElementById("card-title-10").innerHTML = "Mölkky"; // tähä muokatut tekstit <3
  document.getElementById("card-text-10").innerHTML = "Kerätkää jengi kasaan ja menkää lähipuistoon pelaamaan mölkkyä! Muistakaa myös kesäjuomat."; //tähä muokatut tekstit <3
      
  } else {
      document.getElementById("luukku10").src = "Kuvat/molkku.png";
      document.getElementById("card-title-10").innerHTML = "Mölkky"; // tähä muokatut tekstit <3
  document.getElementById("card-text-10").innerHTML = "Kerätkää jengi kasaan ja menkää lähipuistoon pelaamaan mölkkyä! Muistakaa myös kesäjuomat."; // tähä muokatut tekstit <3
  }
}
}

// 11.kuva

function change_image11() {
  let paivamaaran_tarkistus = tarkista_paiva("2.3.2023"); // pitää olla kk.pv.vuosi

  if (paivamaaran_tarkistus == true) {
  if (document.getElementById("luukku11").src == "Kuvat/kansi.gif"){
      document.getElementById("luukku11").src = "Kuvat/uutela.png";
      document.getElementById("card-title-11").innerHTML = "Uutela"; // tähä muokatut tekstit <3
  document.getElementById("card-text-11").innerHTML = "Lähde Uutelaan! Kävele kauniita luonnonpolkuja pitkin. Löydätkö myös makkaranpaistopaikan?"; //tähä muokatut tekstit <3
      
  } else {
      document.getElementById("luukku11").src = "Kuvat/uutela.png";
      document.getElementById("card-title-11").innerHTML = "Uutela"; // tähä muokatut tekstit <3
  document.getElementById("card-text-11").innerHTML = "Lähde Uutelaan! Kävele kauniita luonnonpolkuja pitkin. Löydätkö myös makkaranpaistopaikan?"; // tähä muokatut tekstit <3
  }
}
}

// 12.kuva

function change_image12() {
  let paivamaaran_tarkistus = tarkista_paiva("2.7.2023"); // pitää olla kk.pv.vuosi

  if (paivamaaran_tarkistus == true) {
  if (document.getElementById("luukku12").src == "Kuvat/kansi.gif"){
      document.getElementById("luukku12").src = "Kuvat/kivinokka.png";
      document.getElementById("card-title-12").innerHTML = "Kivinokka"; // tähä muokatut tekstit <3
  document.getElementById("card-text-12").innerHTML = "Mene katsomaan ulkoilmaelokuva Kivinokkaan. Viltti ja popparit mukaan, tietysti!"; //tähä muokatut tekstit <3
      
  } else {
      document.getElementById("luukku12").src = "Kuvat/kivinokka.png";
      document.getElementById("card-title-12").innerHTML = "Kivinokka"; // tähä muokatut tekstit <3
  document.getElementById("card-text-12").innerHTML = "Mene katsomaan ulkoilmaelokuva Kivinokkaan. Viltti ja popparit mukaan, tietysti!"; // tähä muokatut tekstit <3
  }
}
}

//13.kuva

function change_image13() {
  let paivamaaran_tarkistus = tarkista_paiva("2.14.2023"); // pitää olla kk.pv.vuosi

  if (paivamaaran_tarkistus == true) {
  if (document.getElementById("luukku13").src == "Kuvat/kansi.gif"){
      document.getElementById("luukku13").src = "Kuvat/kuvaa.jpg";
      document.getElementById("card-title-13").innerHTML = "Kesän muisteloilta"; // tähä muokatut tekstit <3
  document.getElementById("card-text-13").innerHTML = "Kerää ystävät ympärille ja käykää kesän parhaat ja ikimuistoisimmat hetket läpi. Syksy on jo ovella!"; //tähä muokatut tekstit <3
      
  } else {
      document.getElementById("luukku13").src = "Kuvat/kuvaa.jpg";
      document.getElementById("card-title-13").innerHTML = "Kesän muisteloilta"; // tähä muokatut tekstit <3
  document.getElementById("card-text-13").innerHTML = "Kerää ystävät ympärille ja käykää kesän parhaat ja ikimuistoisimmat hetket läpi. Syksy on jo ovella!"; // tähä muokatut tekstit <3
  }
}
}