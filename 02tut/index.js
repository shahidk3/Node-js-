const fsPromises = require('fs').promises;
const path = require('path')


const fileOps = async () => {
    try{
        const data = await fsPromises.readFile( path.join(__dirname, 'files', 'starter.txt'), 'utf-8');
        console.log(data)
        await fsPromises.unlink( path.join(__dirname, 'files', 'promisesWrite.txt'));
        await fsPromises.writeFile( path.join(__dirname, 'files', 'promisesWrite.txt'), data);
        await fsPromises.appendFile( path.join(__dirname, 'files', 'promisesWrite.txt'), '/n/n Nice to meet you');
        await fsPromises.rename( path.join(__dirname, 'files', 'promisesWrite.txt'), path.join(__dirname, 'files', 'promisesComplete.txt'))
        const newData = await fsPromises.readFile( path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf-8');
        console.log(newData)
    } catch (err) {
        console.log(err);
    }
    
}

fileOps()

// fs.readFile( path.join(__dirname, 'files', 'starter.txt'), (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// });


// console.log('Hello...')


// fs.writeFile( path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you', (err) => {
//     if (err) throw err;
//     console.log('operation complete');
// });



// process.on('uncaughtException', err => {
//     console.error(`There was an uncaught error: ${err}`);
//     process.exit(1);
// })