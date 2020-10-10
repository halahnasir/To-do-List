var enter = document.getElementById("addForm");
var input = document.getElementById("things");
var ul = document.getElementById("todos");
var list = document.getElementsByTagName("li");
var filter = document.getElementById("filter");

//Add items to the list after the button is clicked event
enter.addEventListener("submit", updateListAfterEnter);

// Add items to the list after they keypress event
input.addEventListener("keypress", updateListAfterKeyPress);

//Delete Event
ul.addEventListener("click", removeItems);

// Search Event
filter.addEventListener("keyup", filterItems);

// Calling Toggle Event
liEvent();

//Add Items to the list
function updateListAfterEnter(e) {
  if (input.value.length > 0) {
    e.preventDefault();
    addItems();
  } else alert("Please Enter Something.");
}

//Add Items to the list after keypress
function updateListAfterKeyPress(e) {
  if (input.value.length > 0 && e.keyCode === 13) {
    e.preventDefault();
    addItems();
    //   } else {
    //     e.preventDefault();
    //     alert("Invalid Input");
    //   }
  }
}

//Add items with Delete Button
function addItems(e) {
  //Create li
  var li = document.createElement("li");
  // Append text to li
  li.appendChild(document.createTextNode(input.value));

  // Create Delete Button
  var delBtn = document.createElement("button");
  // Add class name to delete button
  delBtn.className = "delete";
  // Append textnode to delele button
  delBtn.appendChild(document.createTextNode("X"));
  // Append Delete Button to Li
  li.appendChild(delBtn);
  // Append li to ul
  ul.appendChild(li);
  input.value = "";
}

//Remove Items
function removeItems(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      ul.removeChild(li);
    }
  }
}

function liEvent() {
  for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", changeClass);
  }
}

function changeClass() {
  this.classList.toggle("done");
}

//Filter Items
function filterItems(e) {
  //convert text to lowercase
  var text = e.target.value.toLowerCase();

  //get List
  var items = ul.getElementsByTagName("li");
  //Convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
