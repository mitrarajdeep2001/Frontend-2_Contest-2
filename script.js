const userList = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

// Filtering User
const filterBtn = document.querySelector("#btn-1");
filterBtn.addEventListener("click", function () {
  let select = document.querySelector("#select-profession");
  let selectedProfession = select.options[select.selectedIndex].value;
    // console.log(selectedProfession)
    if (selectedProfession === 'select-profession') {
        alert('Please select a profession before clicking the button.')
    }
    else{
        const filteredUser = userList.filter((element) => {
          return element.profession === selectedProfession;
        });
      
        const parentUserList = document.querySelector(".user-list");
        while (parentUserList.firstElementChild) {
          parentUserList.removeChild(parentUserList.firstElementChild);
        }
      
        let i = 0;
        while (i < filteredUser.length) {
          let childUser = document.createElement("div");
          childUser.classList.add("items");
          childUser.innerHTML = `<div>${filteredUser[i].id}.</div>
              <div>Name : ${filteredUser[i].name}</div>
              <div>Profession : ${filteredUser[i].profession}</div>
              <div>Age : ${filteredUser[i].age}</div>`;
          parentUserList.append(childUser);
      
          i++;
        }
    }
});

//Adding User
const addBtn = document.querySelector('#btn-2')
addBtn.addEventListener('click', function () {
    let name = document.querySelector('#name')
    let profession = document.querySelector('#profession')
    let age = document.querySelector('#age')

    const parentUserList = document.querySelector(".user-list");
    let childUser = document.createElement("div");
    childUser.classList.add("items");
    childUser.innerHTML = `<div>${userList.length + 1}.</div>
        <div>Name : ${name.value}</div>
        <div>Profession : ${profession.value}</div>
        <div>Age : ${age.value}</div>`;
    parentUserList.append(childUser);

    userList.push({id: userList.length + 1, name: name.value, profession: profession.value, age: age.value})
    console.log(userList)

    name.value = ''
    profession.value = ''
    age.value = ''
})