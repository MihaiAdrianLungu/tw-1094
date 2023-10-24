// global scope
const x = 10;

function parentFunction() {
    // local scope - parent
    const parentVariable = 11;

    function childFunction() {
        // local scope - child

        console.log(parentFunction);
        console.log(x);
    }

    childFunction();
}

parentFunction();