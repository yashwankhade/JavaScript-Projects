document.querySelector('input').addEventListener('click',getQuote=>
fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    let a = data;
    document.getElementById('quote').innerHTML=a.content;
    document.getElementById('author').innerHTML='~ '+a.author;
  })
);


(function getquote(){
  fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    let a = data;
    document.getElementById('quote').innerHTML=a.content;
    document.getElementById('author').innerHTML='~ '+a.author;
  });
})();




