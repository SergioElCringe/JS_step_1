


//не смог решить задачу(







function start() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let a = Math.floor(Math.random() * 9)
    let one = arr[a]
    arr.splice(a, 1);

    a = Math.floor(Math.random() * 8)
    let two = arr[a]
    arr.splice(a, 1);

    a = Math.floor(Math.random() * 7)
    let three = arr[a]
    arr.splice(a, 1);

    a = Math.floor(Math.random() * 6)
    let four = arr[a]
    arr.splice(a, 1);
    let game = [one, two, three, four];
}
function attempt() {
    let b=0 , y=0;
    let p = prompt();
    let arr1 = p.split(" ");
    console.log(arr1)
    for (let i = 0; arr1 < arr1.length; i++) {
        if(arr1[i]==game[i]){
            b=b++;
        }else if (arr1[i]==game[1]||arr1[i]==game[2]||arr1[i]==game[3]||arr1[i]==game[4]){
            y++
        };
        
    };
    console.log(b);
}
