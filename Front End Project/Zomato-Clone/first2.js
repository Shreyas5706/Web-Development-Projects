const locations_in_ahmedabad = [
    { place: "Bodakdev", numbers: 480 },
    { place: "Navarangpur", numbers: 408 },
    { place: "Prahlad Nagar", numbers: 248 },
    { place: "Satellite", numbers: 422 },
    { place: "Vastrapur", numbers: 305 },
    { place: "C G Road", numbers: 113 },
    { place: "Gurukul", numbers: 124 },
    { place: "Thaltej", numbers: 461 }
];

function AppendChild(obj) {

    obj.forEach(element => {
        // main div to append divs
        const one = document.createElement('div');
        one.className = "one";
        select_grid.appendChild(one);
        parent = one;
        const one_1 = document.createElement('div');
        one_1.className = "one-1";
        one_1.textContent = element.place;
        one.appendChild(one_1);

        const one_2 = document.createElement('div');
        one_2.className = "one-2";
        one_2.textContent = `${element.numbers} places`;
        one.appendChild(one_2);
    });
    const last_child = document.createElement('div');
    last_child.className = "one";
    select_grid.appendChild(last_child);

    const last_child_one = document.createElement('div');
    last_child_one.className = "one-1";
    last_child_one.textContent = "see more";
    last_child.appendChild(last_child_one);

    const last_child_two = document.createElement('div');
    last_child_two.className = "one-2";
    last_child_two.textContent = "";
    last_child.appendChild(last_child_two);
    return last_child;
}

let see_more = AppendChild(locations_in_ahmedabad);
see_more.addEventListener('click',()=>{
    if(locations_in_ahmedabad.length === 8){
        const newLocations = [
            { place: "Bodakdev", numbers: 480 },
            { place: "Navarangpur", numbers: 408 },
            { place: "Prahlad Nagar", numbers: 248 },
            { place: "Satellite", numbers: 422 },
            { place: "Vastrapur", numbers: 305 },
            { place: "C G Road", numbers: 113 },
            { place: "Gurukul", numbers: 124 },
            { place: "Thaltej", numbers: 461 },
            { place: "Bodakdev", numbers: 480 },
            { place: "Navarangpur", numbers: 408 },
            { place: "Prahlad Nagar", numbers: 248 },
            { place: "Satellite", numbers: 422 },
            { place: "Vastrapur", numbers: 305 },
        ];
        
        // Append the new locations to the locations_in_ahmedabad array
        locations_in_ahmedabad.push(...newLocations);
        AppendChild(locations_in_ahmedabad)
        see_more.remove();
    }
    else{
       locations_in_ahmedabad.splice(0,8)
        select_grid.innerHTML = " ";
        AppendChild(locations_in_ahmedabad)
    }
})
AppendChild(locations_in_ahmedabad)