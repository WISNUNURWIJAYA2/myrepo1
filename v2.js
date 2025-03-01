const elementArr = []
// loop tuk objek dan mengambil objek
for (let i = 1; i <= 3; i++) {
  const elementObject = {
    dots: null,
    moreText: null,
    btnText: null
  }
  if (i === 1) {
    elementObject.dots = document.getElementById("dots")
    elementObject.moreText = document.getElementById("more");
    elementObject.btnText = document.getElementById("myBtn");
  } else {
    elementObject.dots = document.getElementById(`dots${i}`);
    elementObject.moreText = document.getElementById(`more${i}`)
    elementObject.btnText = document.getElementById(`myBtn${i}`);
  }
  elementArr.push(elementObject)
}
// membuat events di btn
function handleReadMore(elementObj) {
  if (elementObj.dots.style.display === "none") {
    elementObj.dots.style.display = "inline";
    elementObj.btnText.innerHTML = "Read more";
    elementObj.moreText.style.display = "none";
  } else {
    elementObj.dots.style.display = "none";
    elementObj.btnText.innerHTML = "Read less";
    elementObj.moreText.style.display = "inline";
  }
}
// loop tuk mengatur objek
elementArr.forEach((elementObject) => {
  elementObject.dots.style.display = "inline";
  elementObject.btnText.innerHTML = "Read more";
  elementObject.moreText.style.display = "none";
  elementObject.btnText.addEventListener("click", () => {
    handleReadMore(elementObject)
  })
})

