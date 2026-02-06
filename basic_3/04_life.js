//immediately invoked function expression

(function chai(){
    console.log("Hello world");
    
})();

(() => {
    console.log("Hello chai");
})
();

((name) => {
    console.log(`hello ${name}`);
    
})("Om");