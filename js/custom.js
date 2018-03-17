//menu js
function openNav() {
  document.getElementById("myNav").style.width = "25%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//modal js
$(function() {
  $(".gallery-grid .item img").on("click", function() {
    $(".enlargeImageModalSource").attr("src", $(this).attr("src"));
    $("#enlargeImageModal").modal("show");
  });
});


