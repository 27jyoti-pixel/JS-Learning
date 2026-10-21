function execute(){
  console.log('db executed');
}

execute();


(function x(){
  console.log("hi");
})();


(function bye(){
  // name iife
  console.log("bye");
})();


(()=>{
  // unnamed iife
  console.log("3rd iif")
})();
