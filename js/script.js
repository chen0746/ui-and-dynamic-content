// getting references
// Save the reference to text-field into a variable. | <input type="text">
let item = document.getElementById('item');
// Save the reference to new-item button into a variable. | <button>ADD ITEM</button> 
let addBtn = document.getElementById('add');
// Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
let ul = document.getElementById('list');
// Save the reference to paragraph for feedback | <p class="feedback"></p>
let err = document.querySelector('.feedback');

// Start function addItem.
function addItem() {

    // collect the value
    let val = item.value;

    // trim the white space
    val = val.trim();

    // Check if user entered the value in input text-field.
    if (val.length !== 0) {
        // If so:
        // Create list-item and store output in a variable.
        let li = document.createElement("li");

        // Use textContent property on created list-item and assign it with the value of the text written in the text-field
        // add the content to <li>
        li.innerText = val;

        // Append list item to unordered list.
        // <li>...</li> appended to jard-coded <ul>..</ul>
        ul.appendChild(li);

        // Clear the text-field.
        // access text field and overwrite the existing value with ""
        item.value = "";

        // Clear a feedback-message.
        err.innerText = "";

        // Put the cursor back to text-field  
        item.focus();

        // End if. 
    } else {
        // Otherwise:
        // Print the message nothing entered in the paragraph "feedback"

        err.innerText = "Nothing entered in the paragraph";
        // End otherwise.
    }

    // End function addItem.
}


// Register your function addItem for click event on button.
addBtn.addEventListener("click", addItem);
