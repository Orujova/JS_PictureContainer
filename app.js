function generateImages() {
  const imageCount = parseInt(document.getElementById("imageCount").value);
  const imagesDiv = document.getElementById("images");
  imagesDiv.innerHTML = "";

  for (let i = 0; i < imageCount; i++) {
    const img = document.createElement("img");
    const imgBox = document.createElement("div");
    imgBox.classList.add("gallery-item");
    img.src = "https://source.unsplash.com/random/200x200?sig=1";
    img.width = 250;
    img.height = 250;
    imgBox.appendChild(img);
    imagesDiv.appendChild(imgBox);
  }
}

function addImage() {
  const url = prompt("Şəkil URL-ni daxil edin:");
  if (url) {
    const position = parseInt(
      prompt("Əlavə etmək istədiyiniz mövqeyi daxil edin:")
    );
    const imagesDiv = document.getElementById("images");
    const img = document.createElement("img");
    const imgBox = document.createElement("div");
    imgBox.classList.add("gallery-item");
    img.src = url;
    img.width = 250;
    img.height = 250;
    imgBox.appendChild(img);
    imagesDiv.insertBefore(imgBox, imagesDiv.children[position - 1]);
  } else {
    alert("URL daxil edilməlidir!");
  }
}

function removeImage() {
  const position = parseInt(prompt("Silmək istədiyiniz mövqeyi daxil edin:"));
  const imagesDiv = document.getElementById("images");
  imagesDiv.removeChild(imagesDiv.children[position - 1]);
}

function changeImage() {
  const position = parseInt(
    prompt("Dəyişdirmək istədiyiniz mövqeyi daxil edin:")
  );
  const url = prompt("Yeni şəkil URL-ni daxil edin:");
  const imagesDiv = document.getElementById("images");
  imagesDiv.children[position - 1].querySelector("img").src = url;
}

function resizeImage() {
  const position = parseInt(
    prompt("Ölçüsünü dəyişdirmək istədiyiniz mövqeyi daxil edin:")
  );
  const width = parseInt(prompt("Yeni genişliği daxil edin:"));
  const height = parseInt(prompt("Yeni hündürlüyü daxil edin:"));
  const imagesDiv = document.getElementById("images");
  imagesDiv.children[position - 1].querySelector("img").width = width;
  imagesDiv.children[position - 1].querySelector("img").height = height;
}
