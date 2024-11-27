const json = localStorage.getItem("from");
console.log(json)
const obj = JSON.parse(json);
console.log(obj)

for(key in obj) {
     const markup = `
     <div class="row">
          <span>${key}: ${obj[key]}</span>
     </div>
     `;
     // console.log(key, obj[key])
     document.getElementById("dis").innerHTML += markup;
}
const confirm = () => {
     window.location.href = "App.html"
}