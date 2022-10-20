window.onload = ()=>{ 
    const quantity = document.getElementById("quantity"); 
    const button_plus = document.getElementById("btn"); 
    let items = 0; 
    function increaseItem() { 
        items++; quantity.textContent = items; 
    } 
    button_plus.addEventListener("click", increaseItem); 
}