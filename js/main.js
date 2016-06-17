$(function(){
// document ready function

    $("#enter-city").click(updateCity);
    // listen for a click event on an element with an ID of 'submit-btn'
    // when heard, call function 'updateCity'

    function updateCity(event) {
        event.preventDefault();
        // prevent default submit guidelines
        
        var submitCity = $('#city-type').val();
        var city = submitCity.toLowerCase();

        if (city == 'new york' || city == 'new york city' || city == 'nyc') {
            $('body').attr('class', 'nyc');
        } else if (city == 'san francisco' || city == 'sf' || city == 'bay area') {
        // if a user types any of the 'San Francisco' keywords,
        // add/replace a class to change the background image to an image of SF
            $('body').attr('class', 'sf');
        } else if (city == 'los angeles' || city == 'la' || city == 'lax') {
        // if a user types any of the 'Los Angeles' keywords,
        // add/replace a class to change the background image to an image of LA
            $('body').attr('class', 'la');
        } else if (city == 'austin' || city == 'atx') {
        // if a user types any of the 'Austin' keywords,
        // add/replace a class to change the background image to an image of Austin
            $('body').attr('class', 'austin')
        } else if (city == 'sydney' || city == 'syd') {
        // if a user types any of the 'Sydney' keywords,
        // add/replace a class to change the background image to an image of Sydney
            $('body').attr('class', 'sydney');
        } else {
            $('body').attr('class', '');
        // if user input does not match any of the provided cities, revert to default background
        }

        $('#city-type').val('');
        // clear the input field after user clicks submit
    }   

});