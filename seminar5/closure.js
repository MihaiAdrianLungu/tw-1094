const privateCounter = (() => { 
    let count = 0; 
    
    console.log(`initial value of count: ${count}`); 
    
    return () => { 
        count++; 
        console.log(`current value of count: ${count}`); 
    }; 
})(); 

privateCounter(); 
// first log: initial value of count: 0 
// second log: current value of count: 1 
privateCounter(); 
// first log: current value of count: 2 
privateCounter(); 
// first log: current value of count: 3