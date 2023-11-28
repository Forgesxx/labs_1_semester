function countdown(i) 
    {
    console.log(i);
    if (i <= 0) return;
    countdown(i - 1);
    }
  
  countdown(1);


function greet2(name) 
    {
    console.log("how are you, " + name + "?");
    }
  function bye() 
    {
    console.log("ok bye!");
    }
  function greet(name) 
    {
    console.log("hello, " + name + "!");
    greet2(name);
    console.log("getting ready to say bye...");
    bye();
    }
  
  greet("Ilya");

  function fact(x) 
    {
    if (x === 0) return 1;
    return x * fact(x - 1);
    }
  
  console.log(fact(4));
  