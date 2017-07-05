"use strict";

function wordRegexFilter(regex) {
    return words.filter(s => s.match(regex));
}

function createListFromWords(wordList) {
    console.log(wordList);
}

function onClick() {
    const ele = document.getElementById('text-box');
    const reg = new RegExp(ele.value);
    createListFromWords(wordRegexFilter(reg));
}
