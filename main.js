function saveToLocalStorage(e){
    e.preventDefault();
    
    let expenseAmount = e.target.expAmount.value;
    let description = e.target.description.value;
    let category = e.target.category.value;

    let details = {
        expenseAmt : expenseAmount,
        description : description,
        category : category
    }

    let stringifiedObject = JSON.stringify(details);

    localStorage.setItem(description,stringifiedObject);

    showOnScreen(details);
}

function showOnScreen(obj){

    let ul = document.getElementById('ourlist');
    let li = document.createElement('li');
    let textNode = document.createTextNode(`${obj.expenseAmt} --- ${obj.description} --- ${obj.category}`);
    li.appendChild(textNode);
    ul.appendChild(li);
    
}