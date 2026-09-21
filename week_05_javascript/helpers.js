function getInitials(str){

    const splited_str = str.split(' ')
    let initials = ''

    for (const word of splited_str){
        if (word.length > 0) {
            initials += word[0].toUpperCase()
        }        
    }
    return initials
}



let result = getInitials("Fida Hussain")
console.log("Result: ",result)