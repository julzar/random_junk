$(document).ready(function() {

    
    let corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
    let baseURL = 'https://api.yelp.com/v3/businesses/search?term=restaurants'
    let currentLocation;
    let searchRadius = '&radius=8000'
    let openNow = '&open_now=true'
    let limit = '&limit=50'
    let offset = '&offset=50'



    $('#search-btn').on('click', function() {
        currentLocation = `&location=${$('#location-input').val().trim()}`

    $.ajax({
        headers: {
           Authorization :'Bearer 4vjsOR6GBTFRdIl44Ji-AMEPHq0n1fyy-Y_iHYDkByXR5JDIl2K1Ni-kGavey75v3Xw0Mmwqrz0Kh1O23pFejvCIO8fiKP5N7zJKeCBEWdyelO1B3BESJhk2gyJtXnYx',
        },
            url: `${corsAnywhere + baseURL + currentLocation + searchRadius + openNow + limit + offset}`,
            method: 'GET'
    }).then(function(response) {

        response.businesses.forEach(business => {
            console.log(business.name)
        });
        console.log(response)
        
        let restaurants = response.businesses
        let randomRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)]
        console.log(randomRestaurant.name)

        let randomBlock = `
        <h3>${randomRestaurant.name}</h3>
        <p>${randomRestaurant.rating} Stars based on ${randomRestaurant.review_count} Reviews</p>
        <p>Address: ${randomRestaurant.location.address1}</p>
        <img src="${randomRestaurant.image_url}">
        `
        $('#random-restaurant').html(randomBlock)

        
    })

})



// End of script    
})


// 'Access-Control-Allow-Origin':'*',


// https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=42.045597&longitude=-87.688568&radius=8000