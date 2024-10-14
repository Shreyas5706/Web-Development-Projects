
function GenerateRecords() {

    const uname = ["Shreyas", "Rahul", "Harry", "Neeraj", "Shraddha", "Rohit", "Shubham "];
    const language = ["Python", "C++", "Java", "Javascript", "PHP" , "Ruby", "kotlin", "Go", "C", "c#"];
    const city = ["New York", "Mumbai", "Ahmedabad", "London", "San Francisco ","Hyderabad", "Tokyo", "Surat","Washington DC"];
    const salary = [45000000,50000000,60000000,700000,23000000,5634588,23341231,745600000];
    const managers = ["Shreyas", "Rohit"];
    let records = [];
    for (let i=0;i<10;i++) {
        let obj = {
            name: uname[Math.floor(Math.random() * uname.length)],
            salary: salary[Math.floor(Math.random() * salary.length)],
            language: language[Math.floor(Math.random() * language.length)],
            city: city[Math.floor(Math.random() * city.length)],
        };
        obj.isManager = managers.includes(obj.name)
        records.push(obj);
    }
    let jsonString = JSON.stringify(records);
    console.log("JSON String:");
    console.log(jsonString);
    fetch('/save-to-databse', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: jsonString
    })
        
        .then(response => {
            console.log(response.status)
            return response.text();
        })
        .then(rec => {
            let mes= JSON.parse(rec).message; 
            console.log(mes); 
            return mes;  
        })
        .then(mess=>{            
            alert(mess  || "No message received");
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error Records cannot be saved into database');
        });
}