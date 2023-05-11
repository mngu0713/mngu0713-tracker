document.getElementById("addShowBtn").addEventListener('click', openForm);

function openForm() {
  document.getElementById("pop-up-form").style.display = "block";
}

function closeForm() {
  document.getElementById("pop-up-form").style.display = "none";
}