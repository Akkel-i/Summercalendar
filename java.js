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
// eka kuva
function change_image1() { 
  if (document.getElementById("luukku1").src == "Kuvat/question_mark.png"){
      document.getElementById("luukku1").src = "Kuvat/kuva.jpg"; 
      document.getElementById("card-title").innerHTML = "New Card Title"; // tällä sai vaihdettuu myös ton tekstin 
  document.getElementById("card-text").innerHTML = "New Card Text";
      
  } else {
      document.getElementById("luukku1").src = "Kuvat/kuva.jpg";
      document.getElementById("card-title").innerHTML = "New Card Title"; 
  document.getElementById("card-text").innerHTML = "New Card Text";
  }
}
// toka kuva
function change_image2() {
  if (document.getElementById("luukku2").src == "Kuvat/question_mark.png"){
      document.getElementById("luukku2").src = "Kuvat/kuva.jpg";
      document.getElementById("card-title-2").innerHTML = "New Card Title"; // tällä sai vaihdettuu myös ton tekstin <3
  document.getElementById("card-text-2").innerHTML = "New Card Text";
      
  } else {
      document.getElementById("luukku2").src = "Kuvat/kuva.jpg";
      document.getElementById("card-title-2").innerHTML = "New Card Title"; 
  document.getElementById("card-text-2").innerHTML = "New Card Text";
  }
}
// kolmas kuva
function change_image3() {
  if (document.getElementById("luukku3").src == "Kuvat/question_mark.png"){
      document.getElementById("luukku3").src = "Kuvat/kuva.jpg";
      document.getElementById("card-title-3").innerHTML = "New Card Title"; // tähä muokatut tekstit <3
  document.getElementById("card-text-3").innerHTML = "New Card Text";
      
  } else {
      document.getElementById("luukku3").src = "Kuvat/kuva.jpg";
      document.getElementById("card-title-3").innerHTML = "New Card Title";  // tähä muokatut tekstit <3
  document.getElementById("card-text-3").innerHTML = "New Card Text"; // tähä muokatut tekstit <3
  }
}

//neljäs kuva

function change_image4() {
  if (document.getElementById("luukku4").src == "Kuvat/question_mark.png"){
      document.getElementById("luukku4").src = "Kuvat/kuva.jpg";
      document.getElementById("card-title-4").innerHTML = "New Card Title"; // tähä muokatut tekstit <3
  document.getElementById("card-text-4").innerHTML = "New Card Text"; //tähä muokatut tekstit <3
      
  } else {
      document.getElementById("luukku4").src = "Kuvat/kuva.jpg";
      document.getElementById("card-title-4").innerHTML = "New Card Title"; // tähä muokatut tekstit <3
  document.getElementById("card-text-4").innerHTML = "New Card Text"; // tähä muokatut tekstit <3
  }
}
// viides kuva
function change_image5() {
  if (document.getElementById("luukku5").src == "Kuvat/question_mark.png"){
      document.getElementById("luukku5").src = "Kuvat/kuva.jpg";
      document.getElementById("card-title-5").innerHTML = "New Card Title"; // tähä muokatut tekstit <3
  document.getElementById("card-text-5").innerHTML = "New Card Text"; //tähä muokatut tekstit <3
      
  } else {
      document.getElementById("luukku5").src = "Kuvat/kuva.jpg";
      document.getElementById("card-title-5").innerHTML = "New Card Title"; // tähä muokatut tekstit <3
  document.getElementById("card-text-5").innerHTML = "New Card Text"; // tähä muokatut tekstit <3
  }
}
// kuudes kuva
function change_image6() {
  if (document.getElementById("luukku6").src == "Kuvat/question_mark.png"){
      document.getElementById("luukku6").src = "Kuvat/kuva.jpg";
      document.getElementById("card-title-6").innerHTML = "New Card Title"; // tähä muokatut tekstit <3
  document.getElementById("card-text-5").innerHTML = "New Card Text"; //tähä muokatut tekstit <3
      
  } else {
      document.getElementById("luukku6").src = "Kuvat/kuva.jpg";
      document.getElementById("card-title-6").innerHTML = "New Card Title"; // tähä muokatut tekstit <3
  document.getElementById("card-text-6").innerHTML = "New Card Text"; // tähä muokatut tekstit <3
  }
}

// seitsemäs kuva

function change_image7() {
  if (document.getElementById("luukku7").src == "Kuvat/question_mark.png"){
      document.getElementById("luukku7").src = "Kuvat/kuva.jpg";
      document.getElementById("card-title-7").innerHTML = "New Card Title"; // tähä muokatut tekstit <3
  document.getElementById("card-text-7").innerHTML = "New Card Text"; //tähä muokatut tekstit <3
      
  } else {
      document.getElementById("luukku7").src = "Kuvat/kuva.jpg";
      document.getElementById("card-title-7").innerHTML = "New Card Title"; // tähä muokatut tekstit <3
  document.getElementById("card-text-7").innerHTML = "New Card Text"; // tähä muokatut tekstit <3
  }
}
// kahdeksas kuva

function change_image8() {
  if (document.getElementById("luukku8").src == "Kuvat/question_mark.png"){
      document.getElementById("luukku8").src = "Kuvat/kuva.jpg";
      document.getElementById("card-title-8").innerHTML = "New Card Title"; // tähä muokatut tekstit <3
  document.getElementById("card-text-8").innerHTML = "New Card Text"; //tähä muokatut tekstit <3
      
  } else {
      document.getElementById("luukku8").src = "Kuvat/kuva.jpg";
      document.getElementById("card-title-8").innerHTML = "New Card Title"; // tähä muokatut tekstit <3
  document.getElementById("card-text-8").innerHTML = "New Card Text"; // tähä muokatut tekstit <3
  }
}

//yhdeksäs 

function change_image9() {
  if (document.getElementById("luukku9").src == "Kuvat/question_mark.png"){
      document.getElementById("luukku9").src = "Kuvat/kuva.jpg";
      document.getElementById("card-title-9").innerHTML = "New Card Title"; // tähä muokatut tekstit <3
  document.getElementById("card-text-9").innerHTML = "New Card Text"; //tähä muokatut tekstit <3
      
  } else {
      document.getElementById("luukku9").src = "Kuvat/kuva.jpg";
      document.getElementById("card-title-9").innerHTML = "New Card Title"; // tähä muokatut tekstit <3
  document.getElementById("card-text-9").innerHTML = "New Card Text"; // tähä muokatut tekstit <3
  }
}

//kymmenes

function change_image10() {
  if (document.getElementById("luukku10").src == "Kuvat/question_mark.png"){
      document.getElementById("luukku10").src = "Kuvat/kuva.jpg";
      document.getElementById("card-title-10").innerHTML = "New Card Title"; // tähä muokatut tekstit <3
  document.getElementById("card-text-10").innerHTML = "New Card Text"; //tähä muokatut tekstit <3
      
  } else {
      document.getElementById("luukku10").src = "Kuvat/kuva.jpg";
      document.getElementById("card-title-10").innerHTML = "New Card Title"; // tähä muokatut tekstit <3
  document.getElementById("card-text-10").innerHTML = "New Card Text"; // tähä muokatut tekstit <3
  }
}

// 11.kuva

function change_image11() {
  if (document.getElementById("luukku11").src == "Kuvat/question_mark.png"){
      document.getElementById("luukku11").src = "Kuvat/kuva.jpg";
      document.getElementById("card-title-11").innerHTML = "New Card Title"; // tähä muokatut tekstit <3
  document.getElementById("card-text-11").innerHTML = "New Card Text"; //tähä muokatut tekstit <3
      
  } else {
      document.getElementById("luukku11").src = "Kuvat/kuva.jpg";
      document.getElementById("card-title-11").innerHTML = "New Card Title"; // tähä muokatut tekstit <3
  document.getElementById("card-text-11").innerHTML = "New Card Text"; // tähä muokatut tekstit <3
  }
}

// 12.kuva

function change_image12() {
  if (document.getElementById("luukku12").src == "Kuvat/question_mark.png"){
      document.getElementById("luukku12").src = "Kuvat/kuva.jpg";
      document.getElementById("card-title-12").innerHTML = "New Card Title"; // tähä muokatut tekstit <3
  document.getElementById("card-text-12").innerHTML = "New Card Text"; //tähä muokatut tekstit <3
      
  } else {
      document.getElementById("luukku12").src = "Kuvat/kuva.jpg";
      document.getElementById("card-title-12").innerHTML = "New Card Title"; // tähä muokatut tekstit <3
  document.getElementById("card-text-12").innerHTML = "New Card Text"; // tähä muokatut tekstit <3
  }
}

//13.kuva

function change_image13() {
  if (document.getElementById("luukku13").src == "Kuvat/question_mark.png"){
      document.getElementById("luukku13").src = "Kuvat/kuva.jpg";
      document.getElementById("card-title-13").innerHTML = "New Card Title"; // tähä muokatut tekstit <3
  document.getElementById("card-text-13").innerHTML = "New Card Text"; //tähä muokatut tekstit <3
      
  } else {
      document.getElementById("luukku13").src = "Kuvat/kuva.jpg";
      document.getElementById("card-title-13").innerHTML = "New Card Title"; // tähä muokatut tekstit <3
  document.getElementById("card-text-13").innerHTML = "New Card Text"; // tähä muokatut tekstit <3
  }
}