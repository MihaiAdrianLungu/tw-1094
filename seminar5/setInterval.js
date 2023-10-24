let count = 0; 

const privateCounter = setInterval(() => { 
    count++; 
    console.log(`current value of count: ${count}`); 
    
    if (count === 5) { 
        clearInterval(privateCounter); 
        console.log('counter stopped'); 
    } 
}, 1000);