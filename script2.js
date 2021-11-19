let btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
    let li = document.createElement("li");
    let inp = document.createElement("input");
    inp.type = "checkbox";
    li.append(inp);
    let inputValue = document.querySelector('.input').value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Пусте поле не можна добавити.");
    } else {
        document.getElementById("myUL").appendChild(li);
        document.querySelector('.input').value = '';
        
    }
})

let check = document.forms.f1.elements;
for (i = 0; i < check.length; i++) {
    check[i].addEventListener('change', function() {
        if (check.length >= 2) {
            this.parentElement.remove();
        }
        else if (check.length === 1) {
            this.checked = false;
            alert("Останній таск зі списку Ви не можете видалити.");
        }
    })
}
