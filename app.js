async function getData() {
    let response = await fetch("https://randomuser.me/api/");
    let jsonData = await response.json();
    return jsonData;
}

let btn = document.getElementById("btn");
let container = document.querySelector(".container");
let image = document.getElementById("image");
let fname = document.getElementById("fname");
let adress = document.getElementById("adress");
let emailText = document.getElementById("email");

btn.addEventListener("click", async () => {
    let {
        results: [
            {
                name: { first, last },
                location: { city, country },
                email,
                picture: { large: img },
            },
        ],
    } = await getData();
    image.setAttribute("src", img);
    fname.textContent = `Fullname: ${first} ${last}`;
    adress.textContent = `Address: ${city}, ${country}`;
    emailText.textContent = `Email: ${email}`;
});
