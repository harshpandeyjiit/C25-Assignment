$('.search-button').click(function(){
  $(this).parent().toggleClass('open');
});

function changeImg() {
  let imgEl = $('#search-img')[0];
  let inpEl = $('#search-year')[0];
  if (inpEl.value == "2018") {
    imgEl.src = "https://i.postimg.cc/fbFXXMZN/Capture.png";
  } else if (inpEl.value == "2019") {
    imgEl.src = "https://i.postimg.cc/CLmRkwHQ/Capture.png";
  }
}