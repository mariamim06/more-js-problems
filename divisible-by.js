// write 1-50 and show digits divisible by 3, 5, both and none of them
for(let i=0; i <= 50; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('foobar');
    }
    else if (i % 3 == 0) {
        console.log('foo');
    }
    else if(i % 5 == 0){
        console.log('bar');
    }
    else{
        console.log(i);
    }
}