function NextNumber(value) {
    this.currentValue = value % 2 === 0 ? value : value + 1;
    this.next = function() {
        this.currentValue += 2;
        return this.currentValue;
    }
}

const obj = new NextNumber(4);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());