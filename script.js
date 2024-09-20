function AddButton(){
       const inputField = document.getElementById("Input-Field");
       const inputText = inputField.value;
       
       const ulList = document.getElementById("Ul-List")
       if(inputText){
              const listItem = document.createElement("li")
              listItem.classList = "bg-green-300 p-5 mt-5"
              const icon = document.createElement("i")
              icon.classList = "fa-solid fa-angles-right"
              const icon2 = document.createElement("i")
              icon2.classList = "fa-solid fa-arrow-up-from-bracket hidden"
              const cross = document.createElement("i")
              cross.classList = "fa-regular fa-circle-xmark"
              cross.onclick = function(){
                     ulList.removeChild(listItem)
              }
              listItem.onclick = function() {
                     if (listItem.classList.contains("line-through")) {
                            listItem.classList.remove("line-through");
                            listItem.classList.remove("bg-orange-500")
                            icon2.classList.add("hidden");
                            icon.classList.remove("hidden");
                            
                     } else {
                         listItem.classList.add("line-through");
                         listItem.classList.add("bg-orange-500")
                         icon.classList.add("hidden");
                         icon2.classList.remove("hidden");
                     }
              };
              listItem.appendChild(icon);
              listItem.appendChild(icon2);
              listItem.appendChild(document.createTextNode(inputText));
              listItem.appendChild(cross)
              inputField.value = "";
              ulList.appendChild(listItem);
       }               
}  
AddButton()