const getFileStream = async (url) => {
    // implementation
  };
  
  (async () => {
    const stream = await getFileStream("https://domain.name/path/file.ext");
    for await (const chunk of stream) {
      console.log({ chunk });
    }
  })();

  
  (function () {
    console.log('IIFE');
  })();

  +function () {
    console.log('IIFE');
  }();

  -new function () {
    console.log('IIFE');
  }();

  new function () {
    console.log('IIFE');
  }();

  true &&
(function () {
  console.log('IIFE');
})();

false ||
(function () {
  console.log('IIFE');
})();

try {
    throw (function () {
      console.log('IIFE');
    })();
  } catch (e) {
    console.log(e);
  }
  
  void function () {
    console.log('IIFE');
  }();
  
  (() => {
    console.log("IIFE");
  })();
  