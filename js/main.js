"use strict";

function wordRegexFilter(regex) {
    return words.filter(s => s.match(regex));
}

function createListFromWords(wordList) {
    wordListElementsHash.forEach(function(key) {
        key.hidden = true;
    });
    wordList.forEach(function(w) {
        wordListElementsHash.get(w).hidden = false;
    });
}

function onClick() {
    const ele = document.getElementById('text-box');
    const reg = new RegExp(ele.value);
    createListFromWords(wordRegexFilter(reg));
}
