// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function () {

    let takeoff = document.getElementById("takeoff");
    let landing = document.getElementById("landing");
    let missionAbort = document.getElementById("missionAbort");

    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let spaceShuttleWidth = document.getElementById("spaceShuttleWidth");

    let rocket = document.getElementById("rocket");

    // Ready for click commands
    rocket.style.left = '0px';
    rocket.style.bottom = '0px';

    // Moves image to bottom left corner
    rocket.style.position = 'absolute';

    // Use these variables if you set ID's for buttons
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let right = document.getElementById("right");
    let left = document.getElementById("left");

    takeoff.addEventListener("click", function() {
        let response = window.confirm("Are you sure the shuttle is ready for takeoff?");
        if (response) {
            flightStatus.innerHTML = 'Shuttle in flight.';
            shuttleBackground.style.background = 'blue';
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000; 
        }
    });

    landing.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = 'The shuttle has landed.';
        shuttleBackground.style.background = 'green';
        spaceShuttleHeight.innerHTML = '0';
        rocket.style.bottom = 0;
    });

    missionAbort.addEventListener("click", function() {
        let response = window.confirm("Are you sure you want to abort the mission?");
        if (response) {
            flightStatus.innerHTML = 'Mission aborted.';
            shuttleBackground.style.background = 'darkred';
            spaceShuttleHeight.innerHTML = '0';  
            rocket.style.bottom = 0;  
        }
    });
    
    // Place listeners for ID approach inside window listener

    up.addEventListener("click", function() {
        if (spaceShuttleHeight.innerHTML < 250000) {
            let movement = parseInt(rocket.style.bottom) + 10 + 'px';
            rocket.style.bottom = movement;
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
        }
    });
    
    down.addEventListener("click", function() {
        if (spaceShuttleHeight.innerHTML > 10000) {
            let movement = parseInt(rocket.style.bottom) - 10 + 'px';
            rocket.style.bottom = movement;
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
        }
    });
    
    right.addEventListener("click", function() {
        if (spaceShuttleWidth.innerHTML < 550000) {
            let movement = parseInt(rocket.style.left) + 10 + 'px';
            rocket.style.left = movement;
            spaceShuttleWidth.innerHTML = Number(spaceShuttleWidth.innerHTML) + 10000;
        }
    });
    
    left.addEventListener("click", function() {
        if (spaceShuttleWidth.innerHTML > -20000) {
            let movement = parseInt(rocket.style.left) - 10 + 'px';
            rocket.style.left = movement;
            spaceShuttleWidth.innerHTML = Number(spaceShuttleWidth.innerHTML) - 10000;
        }
    });
    
});


// Place outside of window listener if you do onclick approach

// function up() {
//     if (spaceShuttleHeight.innerHTML < 250000) {
//         let movement = parseInt(rocket.style.bottom) + 10 + 'px';
//         rocket.style.bottom = movement;
//         spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
//     }
// };

// function down() {
//     if (spaceShuttleHeight.innerHTML > 10000) {
//         let movement = parseInt(rocket.style.bottom) - 10 + 'px';
//         rocket.style.bottom = movement;
//         spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
//     }
// };

// function right() {
//     if (spaceShuttleWidth.innerHTML < 550000) {
//         let movement = parseInt(rocket.style.left) + 10 + 'px';
//         rocket.style.left = movement;
//         spaceShuttleWidth.innerHTML = Number(spaceShuttleWidth.innerHTML) + 10000;
//     }
// };

// function left() {
//     if (spaceShuttleWidth.innerHTML > -20000) {
//         let movement = parseInt(rocket.style.left) - 10 + 'px';
//         rocket.style.left = movement;
//         spaceShuttleWidth.innerHTML = Number(spaceShuttleWidth.innerHTML) - 10000;
//     }
// }



