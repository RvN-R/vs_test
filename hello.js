function helloWord(){
    process.stdout.write("Hello World!\n");
}

function main(outputNum){
    for (let i = 0; i < outputNum; i++){
        helloWord();
    }
}

main(5);