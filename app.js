function showAlert() {
    alert ("Please select an profession fron dropdown menu");
  }

let comparater = null;

function getValue(){
    
  comparater = document.getElementById("job").value;
}

const employees = [
          { id: 1, name: "john", age: "18", profession: "Developer" },
          { id: 2, name: "jack", age: "20", profession: "Developer" },
          { id: 3, name: "karen", age: "19", profession: "Admin" },
];

  function filterEmployee(){
  
  let SelectedEmployee = employees.filter((employees) => {

    if (comparater == "profession") {

      return true;
    }

    return employees.profession == comparater;
  });


  let append = "";
  SelectedEmployee.forEach(addElement);
    
  function addElement(employee) {
    append += "<P>"+employee.id + "." +" "+"Name"+employee.name + ":" + " "+"Profession"+ ":"+employee.profession + "  " + "Age" + ":"+ employee.age +"</>";
  }
  document.getElementById("details").innerHTML = append;
};


