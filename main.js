let name1 = prompt("Ismingizni kiriting?");
let letter = prompt("Ihtiyoriy harf kiriting?");

let check = name1.includes(letter);

if (check) {
    alert("Siz kiritgan harf mavjud")
}else(
    alert("Siz kiritgan harf mavjud emas....")
)