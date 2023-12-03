function checkForSpam(message) {
    const loveredCaseMessage = message.toLowerCase();
    const banWord1 = 'spam';
    const banWord2 = 'sale';
    let result = false;

    if(loveredCaseMessage.includes(banWord1) || loveredCaseMessage.includes(banWord2)) {
        result = true;
    }

    return result;
}


console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true