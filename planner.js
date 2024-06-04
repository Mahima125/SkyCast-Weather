document.getElementById('travelForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Get form values
    var destination = document.getElementById('destination').value;
    var departureDate = document.getElementById('departureDate').value;
    var returnDate = document.getElementById('returnDate').value;
    var travelers = document.getElementById('travelers').value;
    var transportation = document.getElementById('transportation').value;
    var accommodation = document.getElementById('accommodation').value;
    
    // Display trip details
    var tripDetails = document.getElementById('tripDetails');
    tripDetails.innerHTML = `
      <h2>Trip Details</h2>
      <p><strong>Destination:</strong> ${destination}</p>
      <p><strong>Departure Date:</strong> ${departureDate}</p>
      <p><strong>Return Date:</strong> ${returnDate}</p>
      <p><strong>Number of Travelers:</strong> ${travelers}</p>
      <p><strong>Transportation:</strong> ${transportation}</p>
      <p><strong>Accommodation:</strong> ${accommodation}</p>
    
    `;
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    var tripDetails = document.getElementById('tripDetails');
    tripDetails.classList.add('show');
  });

  
  function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }