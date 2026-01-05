const xhr=new XMLHttpRequest();

xhr.addEventListener('load',()=>{
    console.log(xhr.response);
});

// GET request is equivalent to using a browser to visit a webpage 
xhr.open('GET','https://supersimplebackend.dev');
// xhr.open('GET','https://supersimplebackend.dev/products/first');   --fetch first product details(json string)
// xhr.open('GET','https://supersimplebackend.dev/hello');    --fetch hello message(text string)
// xhr.open('GET','https://supersimplebackend.dev/documentation');  --fetch documentation(html string)
// xhr.open('GET','https://supersimplebackend.dev/images/apple.jpg');  --fetch image(binary data)
xhr.send();


// Status codes
/*
Starts with 4 client errors(400,404)
Starts with 5 server errors(500,503)
Starts with 2 success(200,201,204)
*/

// JSON.parse to convert string to object
// JSON.stringify to convert object to string
// URL Documentation link: supersimplebackend.dev/documentation