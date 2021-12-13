

function search() {
    const searchTerms = document.getElementById('searchInput').value
    requestData(searchTerms)
}
function addGIF(firstGif) { 
        document.getElementById('output').innerHTML += "<img class=img-box src='"+firstGif.images.original.url+"'>" 
        }


function requestData(input) {
    
    if (input.length == 0) {
       alert('Nothing in input box')
       document.getElementById('searchInput').focus()
    }
     else {
    var request = $.ajax({
        url: `http://api.giphy.com/v1/gifs/search`,
        method: "GET",
        data: { q: input, api_key: 'R2YSeNi91xO6VKFsmQ7U5NKu28CJ2GCz' },
        dataType: "json"
    });

    request.done(async function (msg) {
        let res = msg.data;
        addGIF(res[Math.floor(Math.random()*res.length)])
        
        console.log(res[0].images.original.url)
    });

    request.fail(function (jqXHR, textStatus) {
        console.log("Request failed: " + textStatus);
    });}
}
function clearMemory () {
    document.getElementById('output').innerHTML = null;
}
