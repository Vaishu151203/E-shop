function sellClothes() {
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var price = document.getElementById("price").value;
    var image = document.getElementById("image").value;
    if (name == "" || description == "" || price == "" || image == "") {
      document.getElementById("message").innerHTML = "Please fill out all fields.";
      return;
    }
    var clothes = JSON.parse(localStorage.getItem("clothes"));
    if (clothes == null) {
      clothes = [];
    }
    var newClothes = {
      name: name,
      description: description,
      price: price,
      image: image
    };
    clothes.push(newClothes);
    localStorage.setItem("clothes", JSON.stringify(clothes));
    document.getElementById("message").innerHTML = "Clothes added successfully.";
  }
  