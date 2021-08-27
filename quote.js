let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quote =['“The purpose of our lives is to be happy.” — Dalai Lama',
            '“Life is what happens when you’re busy making other plans.” — John Lennon',
            '“Get busy living or get busy dying.” — Stephen King',
            '“You only live once, but if you do it right, once is enough.” — Mae West',
            '“Not how long, but how well you have lived is the main thing.” — Seneca',
            ' “In order to write about life first you must live it.”– Ernest Hemingway',
           ];
           btn.addEventListener('click',function(){
                 var randomQuote =quote[Math.floor(Math.random()* quote.length)];
                 output.innerHTML = randomQuote;
           });
  
