/*document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var formData = new FormData(this);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/signup", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.getElementById("message").innerHTML = xhr.responseText;
            } else {
                console.error("Error:", xhr.statusText);
            }
        }
    };
    xhr.send(formData);
}); */

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        // Simple validation (you can add more complex validation as needed)
        if (!username || !email || !password) {
            document.getElementById("message").textContent = "Please fill in all fields";
            return;
        }

        axios
        .post("http://localhost:3000/auth/login", { username, email, password })
        .then((response) => {
          //alert(response.data);
          window.location.href = "./activity.html";
          //alert("Feedback Saved");
        })
        .catch((error) => {
          console.error("Error:", error);
          //window.location.href = "./activity.html";
          alert("Signup failed");
        });




        
        /*
        // AJAX form submission
        $.ajax({
            url:  "http://localhost:3000/mulname", 
            method: 'POST',
            data: {
                username: username,
                email: email,
                password: password
            },
            success: function(response) {
                // Handle successful form submission
                $('#message').text('Signup successful');
                window.location.href = "./activity.html";
                // Optionally, redirect to a new page
                // window.location.href = '/success.html';
            },
            error: function(xhr, status, error) {
                // Handle form submission errors
                $('#message').text('Error: ' + xhr.responseText);
                window.location.href = "./activity.html";
            }
        });  */
    });
});

