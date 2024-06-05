import obj from './start.js';
import figlet from 'figlet';
import { generate } from 'random-words';

console.log(obj);
console.log(obj.sum(7,8));

var d=process.argv;
for(let i=0;i<d.length;i++)
{
    console.log('hii ' + d[i]);
}

figlet('Siddharth' , function(err, data) {
    if(err)
    {
        console.log('Something went wrong');
        console.dir(err);
        return;

    }
    console.log(data);
});

console.log(generate());