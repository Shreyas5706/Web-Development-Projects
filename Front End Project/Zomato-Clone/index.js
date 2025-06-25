const locations_in_ahmedabad = [
    { place: "Bodakdev", numbers: 480 },
    { place: "Navarangpur", numbers: 408 },
    { place: "Prahlad Nagar", numbers: 248 },
    { place: "Satellite", numbers: 422 },
    { place: "Vastrapur", numbers: 305 },
    { place: "C G Road", numbers: 113 },
    { place: "Gurukul", numbers: 124 },
    { place: "Thaltej", numbers: 461 },
];

const select_grid = document.getElementsByClassName('select-grid')[0];

function AppendChild(obj) {
    obj.forEach(element => {
        const one = document.createElement('div');
        one.className = "one";
        select_grid.appendChild(one);
        one.addEventListener('click',()=>{
            window.location.href = "./second.html"
        })
        const one_1 = document.createElement('div');
        one_1.className = "one-1";
        one_1.textContent = element.place;
        one.appendChild(one_1);

        const one_2 = document.createElement('div');
        one_2.className = "one-2";
        one_2.textContent = `${element.numbers} places`;
        one.appendChild(one_2);

    });
    function see_more_fun() {
        const see_more = document.createElement('div');
        see_more.className = "one";
        select_grid.appendChild(see_more)

        const see = document.createElement('div');
        see.textContent = "See more";
        see.className = "one-1"
        see_more.appendChild(see)
    }
    see_more_fun();
}

const middle_card = [
    {
        image: "./e5b8785c257af2a7f354f1addaf37e4e1647364814.avif",
        first_text: "Order Online",
        second_text: "Stay home and order to your doorstep"
    },
    {
        image: "./d026b357feb0d63c997549f6398da8cc1647364915.avif",
        first_text: "Dining",
        second_text: "View the city's favorite dining venues"
    },
    {
        image: "./371de657644f1b5818fcb5d83387c8c91722851940.jpeg",
        first_text: "Live Events",
        second_text: "Discover India's best events & concerts"
    }
];
function middle_function(middle) {
    // Ensure that middle_div exists
    const middle_div = document.querySelector('.middle-div'); // Or replace with the correct selector

    middle.forEach((element) => {
        const middle_card_1 = document.createElement('div');
        middle_card_1.className = "middle-card-1";
        middle_card_1.style.backgroundImage = `url(${element.image})`;
        middle_div.appendChild(middle_card_1);

        const bottom_text = document.createElement('div');
        bottom_text.className = 'bottom-text';
        middle_card_1.appendChild(bottom_text);

        const bottom_text_top = document.createElement('div');
        bottom_text_top.className = "bottom-text-top";
        bottom_text_top.textContent = element.first_text;
        bottom_text.appendChild(bottom_text_top);

        const bottom_text_bottom = document.createElement('div');
        bottom_text_bottom.className = "bottom-text-bottom";
        bottom_text_bottom.textContent = element.second_text;
        bottom_text.appendChild(bottom_text_bottom);
    });
}
const third_part = [
    {
        image: "./image-1.avif",
        text_one: "Newly Opened Restaurant",
        text_two: "25 Places"
    },
    {
        image: "./image-2.avif",
        text_one: "Top Trending Spots",
        text_two: "30 Places"
    },
    {
        image: "./image-3.avif",
        text_one: "Best Buffets in town",
        text_two: "26 Places"
    },
    {
        image: "./image-4.avif",
        text_one: "The Legends of Ahmedabad",
        text_two: "16 Places"
    }
];
function third(third_part) {
    const slides_div = document.querySelector('.slides-div');

    third_part.forEach((element) => {
        const image_1 = document.createElement('div');
        image_1.className = 'image-1';
        image_1.style.backgroundImage = `url(${element.image})`;
        slides_div.appendChild(image_1);

        const image_1_text_div = document.createElement('div');
        image_1_text_div.className = "image-1-text-div";
        image_1.appendChild(image_1_text_div); // Corrected append

        const image_1_text_top = document.createElement('div');
        image_1_text_top.className = "image-1-text-top";
        image_1_text_top.textContent = element.text_one; // Use text_one, not first_text
        image_1_text_div.appendChild(image_1_text_top); // Corrected append

        const image_1_text_bottom = document.createElement('div');
        image_1_text_bottom.className = "image-1-text-bottom";
        image_1_text_bottom.textContent = element.text_two; // Use text_two, not second_text
        image_1_text_div.appendChild(image_1_text_bottom); // Corrected append
    });
}
third(third_part);
middle_function(middle_card);
AppendChild(locations_in_ahmedabad)

const one1 = document.getElementsByClassName('one')[0];
one1.addEventListener('click', () => {
    window.location.href = "./second.html";
})

