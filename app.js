let images_dt = [
    {
        title: "THE CHICKEN <br> BURGER",
        price: "$12.90",
        MRP: "$24",
        calorie: 7845,
        fat: 98,
        protein: 112
    },
    {
        title: "THE PINK <br> BURGER",
        price: "$18.90",
        MRP: "$38",
        calorie: 4512,
        fat: 65,
        protein: 78
    },
    {
        title: "THE BLACK <br> BURGER",
        price: "$10.90",
        MRP: "$18",
        calorie: 6545,
        fat: 115,
        protein: 56
    },
    {
        title: "THE RED <br> BURGER",
        price: "$11.90",
        MRP: "$20",
        calorie: 9845,
        fat: 68,
        protein: 86
    },
    {
        title: "THE GREEN <br> BURGER",
        price: "$13.90",
        MRP: "$26",
        calorie: 1256,
        fat: 45,
        protein: 123
    },
    {
        title: "THE TORNADO <br> BURGER",
        price: "$18.90",
        MRP: "$38",
        calorie: 5678,
        fat: 92,
        protein: 99
    },
    {
        title: "THE COMBO <br> BURGER",
        price: "$9.90",
        MRP: "$17",
        calorie: 3245,
        fat: 49,
        protein: 78
    },
]


let index = 0;
let len = Array.from(document.getElementsByClassName('main_imgs')).length * 260;
let images_off = () => {
    Array.from(document.getElementsByClassName('main_imgs')).forEach((el) => {
        el.style.width = "35%";
        el.style.filter = "blur(1.5px)";
    })
}
let icon_off = () => {
    Array.from(document.getElementsByClassName('pagi_img')).forEach((el) => {
        el.style.transform = "unset";
        el.style.opacity = ".3";
    })
}

document.getElementsByClassName('bi-chevron-right')[0].addEventListener('click', () => {
    index += 260;
    if (index > (len) - 260) {
        index = (len) - 260;
    }
    document.getElementsByClassName('images')[0].scrollLeft = index;
    images_off();
    console.log(index)
    document.getElementsByClassName('main_imgs')[index / 260].style.width = "60%";
    document.getElementsByClassName('main_imgs')[index / 260].style.filter = "blur(0px)";
    document.getElementsByClassName('title')[0].innerHTML = images_dt[(index / 260)].title;
    document.getElementsByClassName('price')[0].innerHTML = `${images_dt[(index / 260)].price}<sup><del>${images_dt[(index / 260)].MRP}</del></sup>`;
    document.getElementById('calorie').innerText = images_dt[(index / 260)].calorie;
    document.getElementById('fat').innerText = images_dt[(index / 260)].fat;
    document.getElementById('protien').innerText = images_dt[(index / 260)].protein;
    icon_off();
    document.getElementsByClassName('pagi_img')[(index / 260)].style.transform = "scale(1.1)"
    document.getElementsByClassName('pagi_img')[(index / 260)].style.opacity = 1;
})


document.getElementsByClassName('bi-chevron-left')[0].addEventListener('click', () => {
    index -= 260;
    if (index < 0) {
        index = 0;
    }
    document.getElementsByClassName('images')[0].scrollLeft = index;
    images_off();
    console.log(index)
    document.getElementsByClassName('main_imgs')[index / 260].style.width = "60%";
    document.getElementsByClassName('main_imgs')[index / 260].style.filter = "blur(0px)";
    document.getElementsByClassName('title')[0].innerHTML = images_dt[(index / 260)].title;
    document.getElementsByClassName('price')[0].innerHTML = `${images_dt[(index / 260)].price}<sup><del>${images_dt[(index / 260)].MRP}</del></sup>`;
    document.getElementById('calorie').innerText = images_dt[(index / 260)].calorie;
    document.getElementById('fat').innerText = images_dt[(index / 260)].fat;
    document.getElementById('protien').innerText = images_dt[(index / 260)].protein;
    icon_off();
    document.getElementsByClassName('pagi_img')[(index / 260)].style.transform = "scale(1.1)"
    document.getElementsByClassName('pagi_img')[(index / 260)].style.opacity = 1;
})

Array.from(document.getElementsByClassName('pagi_img')).forEach((el, i) => {
    el.addEventListener('click', () => {

        index = 260 * i;

        document.getElementsByClassName('images')[0].scrollLeft = index;
        images_off();
        console.log(index)
        document.getElementsByClassName('main_imgs')[index / 260].style.width = "60%";
        document.getElementsByClassName('main_imgs')[index / 260].style.filter = "blur(0px)";
        document.getElementsByClassName('title')[0].innerHTML = images_dt[(index / 260)].title;
        document.getElementsByClassName('price')[0].innerHTML = `${images_dt[(index / 260)].price}<sup><del>${images_dt[(index / 260)].MRP}</del></sup>`;
        document.getElementById('calorie').innerText = images_dt[(index / 260)].calorie;
        document.getElementById('fat').innerText = images_dt[(index / 260)].fat;
        document.getElementById('protien').innerText = images_dt[(index / 260)].protein;
        icon_off();
        document.getElementsByClassName('pagi_img')[(index / 260)].style.transform = "scale(1.1)"
        document.getElementsByClassName('pagi_img')[(index / 260)].style.opacity = 1;
    });
})