# nodejs-password
Code Labs Academy Challenge

NodeJS Password challenge
In this challenge, you need to create a simple NodeJS app that can store and retrieve a password from a local file.

Modules used:

filesystem: 'fs'
Expected outcome:

Calling storePassword('./pass.txt', 'user', 'myPassword') should write a new line in pass.txt file, and printed line is simply key:pwd => user:myPassword

function storePassword(path,key,pwd) {
    //*First we check if the file already exists
    if (fs.existsSync(path)) {

        //* we define the format that we want to store as key:password 
        //* const write = ...?
        //* This function adds a new line to the content of the file ( because it already exists )
        fs.appendFileSync(path, write);
        //* Don't forget to document more on the filesystem methods like appendFileSync and existsSync
    }
      else
      {
        
         //* we define the format that we want to store as key:password 
         //* const write = ...?
        //* we store it directly to the FILE
        fs.writeFileSync(path,write)
      }
}
Calling retrievePassword('./pass.txt', 'user') should return whatever password stored for the key 'user'

function retrievePassword(path,key) {
    //*First we check if the file really exists
    
    if () {    //* check here (add condition)
      throw new Error("File does not exist, cannot retrieve password")
    }

    else
    {
        //* We read the file to get the contents and we split it by \n
        const lines = fs.readFileSync(path).toString().split("\n")
        
        //*we search for the line that has the required key and we split it to have the password
        for (const line of lines) {
          
           //* split it to have the password
          const [_key,pwd] = line.split(":")
          
           //* if key is correct return password
          if(_key === key && pwd!== undefined && pwd.length !==0) 
          {
            return pwd
          }
        }
        //* in all other cases we return undefined
        return undefined
    }
  } 
What to do?
Most code is already provided, only some edits are needed for this to work
Don't forget to import the core module you will be using fs
Try this on your side by calling both methods for testing, and making sure the expected outcome was reached.
Let us know if you have any questions regarding this homework
