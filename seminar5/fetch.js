async function fetchData() { 
    try { 
        const response = await fetch('https://api.github.com/users/MihaiAdrianLungu',); 
        const data = await response.json(); 
        
        console.log(data); 
    } catch (error) { 
        console.log(error); 
    } 
} 

fetchData(); // Call the async function to start the data fetching process