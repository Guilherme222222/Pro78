var images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTodwNOAJh0fbCnm9Ra7lXEcRLPlzkMVxCW9A&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGijtAmgKUfqaMhr5thtEWF5j4HMqxWrcybw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqEJgiytntPzgpkeze4AQVjtSpRRwgYoqujg&usqp=CAU"];
var name = ["Stumble Book","Gui","Ms.Karol"];

var i = 0 
  function update()
  {
    i++;
    var number_of_family_menber_in_array = 5
    if (i > number_of_family_menber_in_array) 
    {
      i = 0  
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
  }