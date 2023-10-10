const student = {
    name: 'Adrian',
    logName: function() {
        console.log(this)
    },
    logName2: () => {
        console.log(this)
    }
}

student.logName()
student.logName2()