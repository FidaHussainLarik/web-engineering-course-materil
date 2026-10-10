
function countWords(str){
    list_of_words = str.split(' ')
    console.log(list_of_words)
    return list_of_words.length
}

// COUNT WORDS
sentence = "the quick brown fox"
let num_of_word = countWords(sentence)

console.log("Number of words: ",num_of_word)