window.addEventListener('DOMContentLoaded', () => {
    let keys = Object.keys(localStorage);   //Array of keys
    keys.sort(); // Sort keys to ensure they are displayed in order

    // Using a for loop to iterate over keys
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let item = localStorage.getItem(key);  //Stringified object of the values of localstorage
        let parsedObject = JSON.parse(item);   //Converting from string to an actual object
        
        showOnScreen(parsedObject, key);
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

    showOnScreen(details, currentTime.toString());
}

function showOnScreen(obj, key){
    let ul = document.getElementById('ourlist');
    let li = document.createElement('li');
    li.id = key; // Assign a unique ID to the list item based on the localStorage key
    let textNode = document.createTextNode(`${obj.expenseAmt} --- ${obj.description} --- ${obj.category}`);
    li.appendChild(textNode);

    // ----------------------------------------------------------------------------------
    let dltBtn = document.createElement('button');
    let btnNode = document.createTextNode('Delete');
    dltBtn.appendChild(btnNode);
    li.appendChild(dltBtn);
    //-----------------------------------------------------------------------------------
    let editBtn = document.createElement('button');
    let editNode = document.createTextNode('Edit');
    editBtn.appendChild(editNode);
    li.appendChild(editBtn);
    //-----------------------------------------------------------------------------------
    
    ul.appendChild(li); // Append items to the end of the list

    //----------------------------------------------------------------------------------------

    dltBtn.addEventListener('click', () => {
        ul.removeChild(li);
        localStorage.removeItem(li.id); // Use the ID to remove the correct item from localStorage
    });
    //----------------------------------------------------------------------------------------
    editBtn.addEventListener('click',()=>{
        document.getElementById('expAmount').value = obj.expenseAmt;
        document.getElementById('description').value = obj.description;
        document.getElementById('category').value = obj.category;

        ul.removeChild(li);
        localStorage.removeItem(li.id);
    })
}
