export default function decodeMessage(message) {
    // const regex = /\(\w*\(|\)\w*\)/g;
    const regexOneLevel = /\(\w*\)/g;
    const levelOne = message.matchAll(regexOneLevel);
    // const levelTwo = message.matchAll(regex);

    return {
        levelOne: [...levelOne],
        // levelTwo: [...levelTwo],
    };
}

const c = decodeMessage('sa(u(cla)atn)s we(sdc)(werc(anto)(jose))');
console.log(c);
