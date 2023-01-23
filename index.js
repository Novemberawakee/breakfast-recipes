const image = document.querySelector("#myImage");
const text = document.querySelector("h2");
const link = document.querySelector("#anchor");

const btnOne = document.querySelector("#one");
const btnTwo = document.querySelector("#two");

btnOne.addEventListener('click', sweet);
btnTwo.addEventListener('click', notSweet);

function sweet() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1492683962492-deef0ec456c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1456&q=80");
    text.textContent = "Would you like waffles or pancakes?";
    btnOne.textContent = "WAFFLES";
    btnTwo.textContent = "PANCAKES";

    btnOne.addEventListener('click', waffles);
    btnTwo.addEventListener('click', pancakes);
}

function waffles() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1592247587641-4f02dc643d9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1432&q=80");
    text.textContent = "Ricotta Lemon-Blueberry Waffles";
    link.setAttribute("href", "https://www.myrecipes.com/recipe/ricotta-lemon-blueberry-waffles");
    link.style = "display: block";
    btnOne.style = "display: none";
    btnTwo.style = "display: none";
}

function pancakes() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1509482560494-4126f8225994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80");
    text.textContent = "Peach and Blueberry Pancakes";
    link.setAttribute("href", "https://www.myrecipes.com/recipe/peach-blueberry-pancakes");
    link.style = "display: block";
    btnOne.style = "display: none";
    btnTwo.style = "display: none";
}

function notSweet() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1484344597163-9347ad5cb26d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1433&q=80");
    text.textContent = "Would you like eggs?";
    btnOne.textContent = "YES";
    btnTwo.textContent = "NO";

    btnOne.addEventListener('click', eggs);
    btnTwo.addEventListener('click', noEggs);
}

function eggs() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1658661521716-5870ba490a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
    text.textContent = "Would you like scramble or shakshuka?";
    btnOne.textContent = "SCRAMBLE";
    btnTwo.textContent = "SHAKSHUKA";

    btnOne.addEventListener('click', scramble);
    btnTwo.addEventListener('click', shakshuka);
}

function scramble() {
    image.setAttribute("src", "https://img.freepik.com/free-photo/scrambled-eggs-with-vegetable_1203-9018.jpg?w=1480&t=st=1674490109~exp=1674490709~hmac=173358678bb08dab2e0e11a1080599569c0b4c8739a1e934ebcf351cb4c9319b");
    text.textContent = "L.E.O. Scramble";
    link.setAttribute("href", "https://www.myrecipes.com/recipe/leo-scramble");
    link.style = "display: block";
    btnOne.style = "display: none";
    btnTwo.style = "display: none";
}

function shakshuka() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1614570218825-c2a3be79b0fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80");
    text.textContent = "Mixed Vegetable Shakshuka";
    link.setAttribute("href", "https://www.myrecipes.com/recipe/mixed-vegetable-shakshuka");
    link.style = "display: block";
    btnOne.style = "display: none";
    btnTwo.style = "display: none";
}

function noEggs() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80");
    text.textContent = "Would you like a toast or a bagel?";
    btnOne.textContent = "TOAST";
    btnTwo.textContent = "BAGEL";

    btnOne.addEventListener('click', toast);
    btnTwo.addEventListener('click', bagel);
}

function toast() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1551276928-735cffcdcbc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1276&q=80");
    text.textContent = "Avo-Tahini Toast";
    link.setAttribute("href", "https://www.myrecipes.com/recipe/avo-tahini-toast");
    link.style = "display: block";
    btnOne.style = "display: none";
    btnTwo.style = "display: none";
}

function bagel() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1572137162111-fc6e04414e21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
    text.textContent = "Smoked Salmon Bagel";
    link.setAttribute("href", "https://www.myrecipes.com/recipe/smoked-salmon-bagel");
    link.style = "display: block";
    btnOne.style = "display: none";
    btnTwo.style = "display: none";
}