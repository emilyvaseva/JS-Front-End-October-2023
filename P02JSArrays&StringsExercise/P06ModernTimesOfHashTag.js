function modernTimes (text) {
    let words = text.split(' ');

    let result = [];
    for (const word of words) {
        if (/#[A-Za-z]+/.test(word)) {
            result.push(word.slice(1));
        }
    }

    console.log(result.join('\n'));
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');