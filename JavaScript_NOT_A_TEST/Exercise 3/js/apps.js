function displayContacts(contact) {
    tbody.innerHTML += `<tr>
                       <td>${contact.firstName}</td>    
                       <td>${contact.lastName}</td>    
                       <td>${contact.phone}</td>    
                </tr>`
}
  
function addNewContact(firstName, lastName, phone) {
    contacts.push({
        firstName,
        lastName,
        phone
    });
}

let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let phone = document.getElementById("phone");
let contacts = [];
let tbody = document.getElementById("tbody");
let saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(firstName.value == "" || lastName.value == "" || phone.value == ""){
        alert("Fill all of the necessary information!");
    }
    else{
        addNewContact(firstName.value, lastName.value, phone.value);
        console.log(contacts);
        firstName.value = "";
        lastName.value = "";
        phone.value = "";
        displayContacts(contacts[contacts.length - 1])
    }
});

