
//function that get's the user's input and caculates what message to send based on the inputs
function validateUser(){
    //variable that gets the information put into the first name text box
    let first = document.getElementById("First Name").value;
    //variable that gets the information put into the last name text box
    let last = document.getElementById("Last Name").value;
    //variable that combines the first and last input.
    let submit= first + " " + last;
    //variable that gets the information put into the Badge number text box
    let badgeIN = document.getElementById("Badge Number").value;

    //If statement testing if the length of the full name is below 20 characters and if there are inputs for both the First and last name boxes
    if (submit.length > 21 && first.length != 0  && first.length != 0){
        //if so: tell the user that their name needs to be under 20 characters
        alert("Please limit your name to 20 characters");
    }
    //Test if there's any input in both of the first/last name 
    else if (first.length != 0 || first.length != 0){
        // If so: tell the user that their login information is good and they have logged in
         alert("Welcome, " + submit + ". Your name seems good! let's varify your badge number now!");
     }

    //Tests if the first name input doesn't have any characters [the user didn't fill that box]
    if (first.length == 0 ){
        //if they didn't put anything in the textbox, tell the user that that they need something in the box
        alert("You forgot to type in your first name");
    }

    //Tests if the last name input doesn't have any characters [the user didn't fill that box]
    if (last.length == 0){
        //if they didn't put anything in the textbox, tell the user that they need something in the box
        alert("You forgot to type in your last name");
    }

    //Also test if the length of the badge number is not exactly three characters long
    if (badgeIN.length != 3){
        //if it isn't, tell them that their badge number needs to be 3 digits long
        alert("Your Badge ID needs to be 3 digits");
    }
    
    //defaults to this when the badge length is 3 digits
    else{
        //tells the user that their badge number is accepted.
        alert("Your Badge number looks good!");
    }

    //tests if all required information for log in is correct
    if (badgeIN.length == 3 && submit.length < 21 && first.length != 0  && first.length != 0){
        //final message telling the user that they have passed all the requirments for logging in
        alert("Your login is good! Enjoy the site, " + submit + "!");
    }
}