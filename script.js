

let $searchinput = $("input")
let $button  = $('#submit')

$button.on('click', ()  => {
let text =$searchinput.val().toLowerCase()
$.ajax(`https://pokeapi.co/api/v2/pokemon/${text}/`).then(
(data) => {

    console.log(data)

    const $img = $('<img id="#imagebox">');

$img.attr(`{data.sprites.front_default}`.data.url)
// notice how plug in the info for the api, call upon data,the object then the section

$img.attr("src" , data.url)

// notice how plug in the info for the api, call upon data,the object then the section

$img.appendTo(".#imageholder");


 $('#title').text(data.title);
 $('#name').text(data.name);
 $('#weight').text(data.weight);
 })

 });
 
// add the then part

// there is no value, ajax call is running on ageoad and not value


// //document.querySelector("#imageBox").class = `
//<div>
////<img src="${data.sprites.other["official-artwork"].front_default}"
// </div>`