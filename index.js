//Step 1
const userName = window.prompt("Enter Your Name")

//step 2
if( window.confirm("Lamp doesn't work"))
{
    //step 3
    let plugIn = window.prompt("Is the lamp plugged in?").toLowerCase();
    console.log(plugIn);
    if (plugIn == "" || plugIn != "yes" && plugIn != "no") {
        plugIn = window.prompt("Is the lamp plugged in? yes or no")
    }
    if (plugIn == "no"){
        window.alert(userName + ": Plug in the lamp");
    } else if (plugIn == "yes") {
        let bulbOut = window.prompt("Is the bulb burned out?").toLowerCase();
        if (bulbOut == "" || bulbOut != "yes" && bulbOut != "no") {
            bulbOut = window.prompt("Is the bulb burned out? yes or no")
        }
        if(bulbOut == "yes") {
            window.alert(userName + " replace the bulb");
        } else if ( bulbOut == "no") {
            window.alert(userName + " repair the lamp");
        }
    }

} else {
    window.alert("Great your lamp is working just fine");
}



