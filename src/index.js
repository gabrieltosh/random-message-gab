const messages = [
    "Gabriel",
    "Ana",
    "Diego",
    "Yerko",
    "Carolina",
    "Joel",
    "Luis"
];

const randomMsg = () =>{
    const message = messages[Math.floor(Math.random()*messages.length)]
    console.log(message);
}

module.exports = {randomMsg}