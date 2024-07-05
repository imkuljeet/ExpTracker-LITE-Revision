window.addEventListener('DOMContentLoaded', () => {
    let keys = Object.keys(localStorage);
    keys.sort(); // Sort keys to ensure they are displayed in order

    // Using a for loop to iterate over keys
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let item = localStorage.getItem(key);
        let parsedObject = JSON.parse(item);
        
        showOnScreen(parsedObject);
    }
});

function saveToLocalStorage(e){
    e.preventDefault();
    
    let expenseAmount = e.target.expAmount.value;
    let description = e.target.description.value;
    let category = e.target.category.value;

    let details = {
        expenseAmt: expenseAmount,
        description: description,
        category: category
    };

    let stringifiedObject = JSON.stringify(details);

    // Use a unique key based on time or incrementing count
    let currentTime = new Date().getTime();
    localStorage.setItem(currentTime.toString(), stringifiedObject);

    showOnScreen(details);
}

function showOnScreen(obj){
    let ul = document.getElementById('ourlist');
    let li = document.createElement('li');
    let textNode = document.createTextNode(`${obj.expenseAmt} --- ${obj.description} --- ${obj.category}`);
    li.appendChild(textNode);

    ul.appendChild(li); // Append items to the end of the list
}
