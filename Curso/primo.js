let num = prompt()
let isCousin = true
let wHelper = 2

if(num <= 0){
    alert("nao eh primo")
}
if(num > 0 && num <= 2){
    alert("eh primo")
}
else if(num > 2){
    while(wHelper < num){
        if(num % wHelper === 0){
            isCousin = false
            break
        }
        else{
            wHelper ++
        }
    }

    if(isCousin){
        alert("eh primo")
    }
    else{
        alert("nao eh primo")
    }
}
