document.querySelector('button').addEventListener('click', nintendo)

function nintendo(){
    let character = document.querySelector('input').value



    fetch(`https://www.amiiboapi.com/api/amiibo/?name=${character}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.amiibo[0].character
        document.querySelector('.gameSeries').innerText = data.amiibo[0].gameSeries
        document.querySelector('img').src = data.amiibo[0].image
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}
