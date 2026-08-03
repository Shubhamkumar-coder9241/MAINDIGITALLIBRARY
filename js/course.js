const back = document.querySelector("#backBtn");

if (back) {
    back.addEventListener("click", () => {
      window.history.back();
    });
}
const enrollBtn = document.querySelector("#enrollBtn");

enrollBtn.addEventListener("click", function()  {
  window.location.href = "admission.html";
})