const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
     e.preventDefault();
     const fd = new FormData(form);
     const obj = Object.fromEntries(fd);
     
     const json = JSON.stringify(obj);
     localStorage.setItem("from", json);

     window.location.href = "store.html";
})