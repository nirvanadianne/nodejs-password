const { info } = require('console');
const { existsSync, appendFileSync, writeFileSync, readFileSync, toString } = require ('fs');
const path = "./pass.txt";

const storePass = (path, user, password) => {

    if (existsSync(path)) {
        console.log('input will be added to file')
        const input = `${user}:${password}\n`
            if (user !== path.user) {
                appendFileSync(path, input)
                console.log(info)
            }
    } else {
        console.log('file not found, a new one will be created')
        const input = `${user}:${password}\n`
        writeFileSync(path, input)

    }
}

const retrievePass = (path, user) => {
    if (!existsSync (path)){
        console.log("file does not exist, cannot retrieve password :(")
    } else {
        const info = readFileSync(path).toString().split('\n')
        console.log(info)
        info.forEach(info => {
            const [_name, pass] = info.split(':')
            if (user == _name){
            console.log(pass)
            }
        });
    }
}

storePass(path, 'user', 'pass')
storePass(path, 'nirvana', 'pass123')
storePass(path, 'dummy', 'hell0123')
retrievePass (path, 'nirvana')