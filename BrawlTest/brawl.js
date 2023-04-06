const api = ' https://brawlhalla.fly.dev/v1/legends/name?legend_name=cassidy';

let firstLine = document.querySelector('#firstLine');
let secondLine = document.querySelector('#secondLine');
let thirdLine = document.querySelector('#thirdLine');
let Fourth = document.querySelector('#fourth')
const message = document.querySelector('#message');


function getData(){
    
    const searchBar = document.querySelector('#searchbar').value;

    fetch(`https://brawlhalla.fly.dev/v1/legends/name?legend_name=${searchBar}`)
    .then((response) => response.json())
    .then((data) => {
        
   console.log(data)
   window.location.href = "file:///C:/Users/Brian/Downloads/personalCodeWork/BrawlTest/BrawlResults.html";
    const bioName = data.data.bio_name;
    const bio = data.data.bio_text;
    const forms = data.data.bio_quote
    const iconURL = data.data.thumbnail


   let icon =  document.createElement('img');
     icon.src = iconURL;

    
    document.getElementById('fourth').appendChild(icon);


        message.textContent = `${bioName}`
        secondLine.textContent = `${forms}`
        thirdLine.textContent = `${bio}`
    }) 
    
  
}