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
const grid_card_info = [
    {
        image:"./card-images/one.avif",
        one :"Hedkey",
        two :"4.5",
        three : "Burger, Pizza, Sandwich",
        four : "₹400 for two",
        five: "Nikol, Ahmedabad",
        six: "Opens at 11am",
        seven : "3.3"
    },
    {
        image:"./card-images/two.avif",
        one :"Table Tales",
        two :"4.3",
        three : "North Indian, Italian, Asian",
        four : "₹1500 for two",
        five: "Nikol, Ahmedabad",
        six: "Opens at 11am",
        seven : "3.7"
    },
    {
        image:"./card-images/three.avif",
        one :"Sankalp",
        two :"3.4",
        three : "South Indian, North Indian",
        four : "₹400 for two",
        five: "Nikol, Ahmedabad",
        six: "Opens at 11am",
        seven : "2.6"
    },
    {
        image:"./card-images/four.avif",
        one :"Dakshin Bhojnam",
        two :"3.9",
        three : "South Indian",
        four : "₹450 for two",
        five: "Nikol, Ahmedabad",
        six: "Opens at 11am",
        seven : "3.8"
    },
    {
        image:"./card-images/five.avif",
        one :"Mirch Masala",
        two :"4.7",
        three : "Burger, Pizza, Sandwich",
        four : "₹400 for two",
        five: "Nikol, Ahmedabad",
        six: "Opens at 11am",
        seven : "3.8"
    },
    {
        image:"./card-images/six.avif",
        one :"The Potesta Restaurant",
        two :"3.7",
        three : "North Indian, Chinese,",
        four : "₹1,200 for two",
        five: "Nikol, Ahmedabad",
        six: "Opens at 11am",
        seven : "3.8"
    },
    {
        image:"./card-images/seven.avif",
        one :"Mint Restaurant Banquets",
        two :"3.8",
        three : "North Indian, Chinese",
        four : "₹1000 for two",
        five: "Nikol, Ahmedabad",
        six: "Opens at 11am",
        seven : "3.8"
    },
    {
        image:"./card-images/eight.avif",
        one :"Divine Dish Restaurant",
        two :"New",
        three : "Biryani, Chinese, North Indian",
        four : "₹1,164 for two",
        five: "Nikol, Ahmedabad",
        six: "Opens at 11am",
        seven : "2.4"
    },
    {
        image:"./card-images/nine.avif",
        one :"Pie Are Square Pizza",
        two :"4.5",
        three : "Burger, Pizza, Sandwich",
        four : "₹400 for two",
        five: "Nikol, Ahmedabad",
        six: "Opens at 11am",
        seven : "3.3"
    },
    {
        image:"./card-images/ten.avif",
        one :"Hedkey",
        two :"New",
        three : "Italian, Coffee",
        four : "₹1,000 for two",
        five: "Nikol, Ahmedabad",
        six: "Opens at 11am",
        seven : "2.5"
    },
     {
        image:"./card-images/eleven.avif",
        one :"1944 - The HOCCO Kitchen",
        two :"4.3",
        three : "North Indian, Chinese, Biryani",
        four : "₹1500 for two",
        five: "Nikol, Ahmedabad",
        six: "Opens at 11am",
        seven : "3.8"
    },
    {
        image:"./card-images/twelve.avif",
        one :"Jacaranda - The Ummed",
        two :"4.5",
        three : "North Indian, Continental, Gujarati, Italian",
        four : "₹3000 for two",
        five: "The Gateway Hotel Ummed, Hansol",
        six: "Opens at 11am",
        seven : "4.4"
    },
     {
        image:"./card-images/thirteen.avif",
        one :"Eminence Restaurant And Banquet",
        two :"3.7",
        three : "North Indian, Chinese, Fast Food",
        four : "₹950 for two",
        five: "Naroda, Ahmedabad",
        six: "Opens at 11am",
        seven : "4.2"
    }, {
        image:"./card-images/fourteen.avif",
        one :"Kesar - The Ummed",
        two :"3.9",
        three : "North Indian, Mughlai, Biryani",
        four : "₹3000 for two",
        five: "The Gateway Hotel Ummed, Hansol, Ahmedabad",
        six: "Opens at 11am",
        seven : "4.5"
    },
    {
        image:"./card-images/fifteen.avif",
        one :"Sam's Pizza",
        two :"4.0",
        three : "Pizza, Fast Food",
        four : "₹1,000 for two",
        five: "Bapunagar, Ahmedabad",
        six: "Opens at 11am",
        seven : "3.9"
    },
    {
        image:"./card-images/sixteen.avif",
        one :"Kahanvi Garden Restaurant",
        two :"4.0",
        three : "North Indian, Rajasthani, Fast Food",
        four : "₹400 for two",
        five: "Naroda, Ahmedabad",
        six: "Opens at 11am",
        seven : "5"
    },
    {
        image:"./card-images/seventeen.avif",
        one :"La Milano Pizzeria",
        two :"4.5",
        three : "Pizza, Pasta, Italian, American",
        four : "₹700 for two",
        five: "Nikol, Ahmedabad",
        six: "Opens at 11am",
        seven : "2.4"
    },

     {
        image:"./card-images/eighteen.avif",
        one :"William John's pizza",
        two :"4.1",
        three : "Pizza, Fast Food, Chinese",
        four : "₹450 for two",
        five: "Bapunagar, Ahmedabad",
        six: "Opens at 11am",
        seven : "4.1"
    },
    {
        image:"./card-images/nineteen.avif",
        one :"Meesaavi Cafe",
        two :"4.1",
        three : "Fast Food, Waffle, Sandwich, Pizza, Momos, Beverages",
        four : "₹350 for two",
        five: "Nikol, Ahmedabad",
        six: "Opens at 11am",
        seven : "3.8"
    },
    {
        image:"./card-images/twenty.avif",
        one :"Megma Restaurant & Banquets",
        two :"4.6",
        three : "North Indian, Oriental, Salad",
        four : "₹1400 for two",
        five: "Odhav, Ahmedabad",
        six: "Opens at 11am",
        seven : "4.4"
    },
    {
        image:"./card-images/twentyone.avif",
        one :"Inu's Chinese",
        two :"3.0",
        three : "Chinese",
        four : "₹250 for two",
        five: "Nikol, Ahmedabad",
        six: "Opens at 11am",
        seven : "1.6"
    },{
        image:"./card-images/twelve.avif",
        one :"Jacaranda - The Ummed",
        two :"4.5",
        three : "North Indian, Continental, Gujarati, Italian",
        four : "₹3000 for two",
        five: "The Gateway Hotel Ummed, Hansol",
        six: "Opens at 11am",
        seven : "4.4"
    },
    {
        image:"./card-images/twenty.avif",
        one :"Megma Restaurant & Banquets",
        two :"4.6",
        three : "North Indian, Oriental, Salad",
        four : "₹1400 for two",
        five: "Odhav, Ahmedabad",
        six: "Opens at 11am",
        seven : "4.4"
    },{
        image:"./card-images/fourteen.avif",
        one :"Kesar - The Ummed",
        two :"3.9",
        three : "North Indian, Mughlai, Biryani",
        four : "₹3000 for two",
        five: "The Gateway Hotel Ummed, Hansol, Ahmedabad",
        six: "Opens at 11am",
        seven : "4.5"
    }
];
function load_cards(grid_card_info){
    const last_grid = document.getElementsByClassName('last-grid')[0];
    grid_card_info.forEach((element)=>{
        const grid_card = document.createElement('div');
        grid_card.className = 'grid-card';  // Fixed class assignment
        last_grid.appendChild(grid_card);

        const hotel_image = document.createElement('img');
        hotel_image.className = 'hotel-image';
        hotel_image.src = element.image;
        grid_card.appendChild(hotel_image);

        const top_hotel_text = document.createElement('div');
        top_hotel_text.className = "top-hotel-text";
        grid_card.appendChild(top_hotel_text);

        const left_top_hotel_text = document.createElement('div');
        left_top_hotel_text.className = "left-top-hotel-text";
        left_top_hotel_text.textContent = element.one;
        top_hotel_text.appendChild(left_top_hotel_text);

        const right_top_hotel_text = document.createElement('div');
        const star = document.createElement('img');
        star.src ="./white-star.svg";
        star.className = "star-img";
        right_top_hotel_text.className = "right-top-hotel-text";
        right_top_hotel_text.textContent = element.two;  // Fixed typo from 'tow' to 'two'
        right_top_hotel_text.appendChild(star);
        top_hotel_text.appendChild(right_top_hotel_text);

        const middle_hotel_text = document.createElement('div');
        middle_hotel_text.className = "middle-hotel-text";
        grid_card.appendChild(middle_hotel_text);

        const middle_hotel_text_left = document.createElement('div');
        middle_hotel_text_left.className = "middle-hotel-text-left";  // Fixed class assignment
        middle_hotel_text_left.textContent = element.three;
        middle_hotel_text.appendChild(middle_hotel_text_left);

        const middle_hotel_text_right = document.createElement('div');
        middle_hotel_text_right.className = "middle-hotel-text-right";
        middle_hotel_text_right.textContent = element.four;
        middle_hotel_text.appendChild(middle_hotel_text_right);

        const last_second_div = document.createElement('div');
        last_second_div.className = "last-second-div";
        last_second_div.textContent = element.five;
        grid_card.appendChild(last_second_div);

        const last_card_text_div = document.createElement('div');
        last_card_text_div.className = 'last-card-text-div';
        grid_card.appendChild(last_card_text_div);

        const last_card_text_div_left = document.createElement('div');
        last_card_text_div_left.className  = 'last-card-text-div-left';
        last_card_text_div_left.textContent = element.six;
        last_card_text_div.appendChild(last_card_text_div_left);

        const last_card_text_div_right = document.createElement('div');
        last_card_text_div_right.className  = 'last-card-text-div-right';
        last_card_text_div_right.textContent = `${element.seven} km`;
        last_card_text_div.appendChild(last_card_text_div_right);
    })
}

function middle_load(third_part) {
    const slides_div = document.getElementsByClassName('slides-div')[0];
    third_part.forEach((item) => {
        const image_1 = document.createElement('div');
        image_1.className = "image-1";
        image_1.style.backgroundImage = `url(${item.image})`; // Fixed the syntax for backgroundImage
        slides_div.appendChild(image_1);
    
        const image_1_text_div = document.createElement('div');
        image_1_text_div.className = "image-1-text-div";
        image_1.appendChild(image_1_text_div);
    
        const image_1_text_top = document.createElement('div');
        image_1_text_top.className = "image-1-text-top";
        image_1_text_top.textContent = item.text_one; // Corrected item access
        image_1_text_div.appendChild(image_1_text_top);
    
        const image_1_text_bottom = document.createElement('div');
        image_1_text_bottom.className = "image-1-text-bottom";
        image_1_text_bottom.textContent = item.text_two; // Corrected item access
        image_1_text_div.appendChild(image_1_text_bottom); 
    });
}

middle_load(third_part);
load_cards(grid_card_info);

const zomato_button = document.getElementsByClassName('zomato-div')[0];
function zomato_button_call(){
    zomato_button.addEventListener('click',()=>{
        window.location.href = "./index.html";
    })
}
zomato_button_call();

function lastPart(){
    const main_container = document.getElementsByClassName('main-container')[0];
    const footer = document.createElement('footer');
    main_container.appendChild(footer);

    const two_part_container = document.createElement('div');
    two_part_container.className = "two-part-conatiner";
   footer.appendChild(two_part_container);


    const firstElement = document.createElement('div');
    firstElement.textContent = "End of search results";
    firstElement.className = "footer-first";
    two_part_container.appendChild(firstElement);

    const secondElement = document.createElement('img');
   secondElement.src = "./endImage.avif";
    secondElement.className = "footer-second";
    two_part_container.appendChild(secondElement);
}
lastPart();