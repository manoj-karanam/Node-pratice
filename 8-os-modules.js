const os= require('os')

//info about current user
const user= os.userInfo()
console.log(user)

//returns the number of seconds the system is up
const uptime=os.uptime()
console.log(uptime)

// current infor about pc
const currentos={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentos)