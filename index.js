const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const FILE_PATH = './aawez.json';
const random = require('random');

const makeCommit = n =>{
    if(n===0) return simpleGit().push();
    const x = random.int(0,54);
    const y = random.int(0,6);
    const DATE =  moment().subtract(2,'year').add(1,'day').add(x,'week').add(y,'day').format();
    const data = {
    data : DATE
}
console.log(DATE);
jsonfile.writeFile(FILE_PATH,data,()=>{
    simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE }
    ,makeCommit.bind(this,--n));
});
}



makeCommit(600);
