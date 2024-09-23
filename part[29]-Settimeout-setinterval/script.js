setTimeout( `
    console.log("hi");console.log('I am Ayush');`//  two    String 
  , 1000);
  const timer1=setTimeout(`console.log("hi-54)`,1000);
  const timer2=setTimeout(`console.log("hi-89")`,5000);
  const timer3 = setTimeout(a,2000,'fcvbn',78);

  clearInterval(timer2);


  function a()
  {
    console.log(arguments);
    console.log("ayush part one");
  }

  setTimeout(function() {
    console.log("hi");
    console.log('I am Ayush');
  }, 1000);
  