(function () {
  let container = document.querySelector(".container-fluid");
  let user = document.createElement("div");
  let username = "John";
  user.innerText = username;
  container.append(user);
  let img = document.createElement("img");
  img.src = "https://live.staticflickr.com/3391/3233046074_34a63d9696_m.jpg";
  user.append(img);
})();
