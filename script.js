
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

    //If statement testing if the length of the variable for the User's full name is greater than 20 characters [21 in this case be cause it automaticly inputs a space taking up a character]
    if (submit.length > 21 && first.length != 0  && first.length != 0){
        //if so: tell the user that their name needs to be under 20 characters
        alert("Please limit your name to 20 characters");
    }
    else if (first.length != 0 || first.length != 0){
        //tell the user that their login information is good and they have logged in
         alert("Welcome, " + submit + ". Your name seems good! let's varify your badge number now!");
     }

    //Also test if the length if the user input anything for the first name text box
    if (first.length == 0 ){
        //if they didn't put anything in the textbox, tell the user that that they need something in the box
        alert("You forgot to type in your first name");
    }

    //Also test if the length if the user input anything for the last name text box
    if (last.length == 0){
        //if they didn't put anything in the textbox, tell the user that that they need something in the box
        alert("You forgot to type in your last name");
    }

    //Also test if the length of the badge number is not exactly three characters long
    if (badgeIN.length != 3){
        //if it isn't, tell them that their badge ID number needs to be 3 digits long
        alert("Your Badge ID needs to be 3 digits");
    }
    
    else{
        alert("Your Badge number looks good!");
    }

    if (badgeIN.length == 3 && submit.length < 21 && first.length != 0  && first.length != 0){
        alert("Your login is good! Enjoy the site, " + submit + "!");
    }
}