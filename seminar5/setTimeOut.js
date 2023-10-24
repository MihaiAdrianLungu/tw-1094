function fetchDataFromServer(url, callback) { 
    setTimeout(function () { 
        const data = { name: "John", age: 30 }; 
        callback(data); 
    }, 3000);
} 

function displayData(data) { 
    console.log("Data received from the server:", data); 
} 

fetchDataFromServer("https://example.com/api/data", displayData); 
console.log("The request has been initiated.");