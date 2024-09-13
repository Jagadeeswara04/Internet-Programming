function displayPage(page) {
    // Clear the current content
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    // Update the body background and content based on the clicked page
    document.body.className = page; // Change background

    switch (page) {
        case 'home':
            contentDiv.innerHTML = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Online Insurance</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-image: url('https://assets.onecompiler.app/42q9x745f/42ru7qdk5/BG.jpg'); /* Replace with your background image */
            background-size: cover;
            color: #333;
            padding: 0;
            margin: 0;
        }
        h1 {
            text-align: center;
            padding: 20px;
            color: #fff;
            background-color: rgba(0, 0, 0, 0.7);
        }
        h2 {
            text-align: center;
            margin: 20px 0;
            color: #fff;
        }
        .insurance-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
        }
        .insurance-item {
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 8px;
            overflow: hidden;
            text-align: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 15px;
        }
        .insurance-item img {
            width: 100%;
            height: auto;
            border-bottom: 2px solid #333;
        }
        .insurance-item h3 {
            margin: 10px 0;
        }
        .insurance-item p {
            padding: 10px;
            color: #666;
        }
    </style>
</head>
<body>

    <h1>Welcome to Online Insurance</h1>
    <p style="text-align:center; color:blue;">At Online Insurance, we offer comprehensive insurance solutions tailored to meet the needs of individuals and businesses alike.</p>

    <h2><style"color:blue"> Our Insurance Services</h2>
    <div class="insurance-grid">
        <div class="insurance-item">
            <img src="https://assets.onecompiler.app/42q9x745f/42ru7qdk5/BIKE.webp" alt="Bike Insurance">
            <h3>Bike Insurance</h3>
            <p>Protect your bike with our comprehensive insurance plans that offer coverage against theft, damage, and accidents.</p>
        </div>
        <div class="insurance-item">
            <img src="https://assets.onecompiler.app/42q9x745f/42ru7qdk5/CAR.jpeg" alt="Car Insurance">
            <h3>Car Insurance</h3>
            <p>Customized auto insurance solutions to cover all types of vehicles, providing protection on and off the road.</p>
        </div>
        <div class="insurance-item">
            <img src="https://assets.onecompiler.app/42q9x745f/42ru7qdk5/LIFE.jpg" alt="Life Insurance">
            <h3>Life Insurance</h3>
            <p>Secure your family’s financial future with a life insurance policy that suits your needs and budget.</p>
        </div>
        <div class="insurance-item">
            <img src="https://assets.onecompiler.app/42q9x745f/42ru7qdk5/HEALTH.jpg" alt="Health Insurance">
            <h3>Health Insurance</h3>
            <p>Affordable health insurance plans to ensure that you and your family get access to the best medical care.</p>
        </div>
        <div class="insurance-item">
            <img src="https://assets.onecompiler.app/42q9x745f/42s3cer29/r11.jpg" alt="Renter's Insurance">
            <h3>Renter's Insurance</h3>
            <p>Protect your personal property and cover liabilities with our renter's insurance policies.</p>
        </div>
        <div class="insurance-item">
            <img src="https://assets.onecompiler.app/42q9x745f/42s3cer29/r12.jpeg" alt="Homeowner's Insurance">
            <h3>Owner's Insurance</h3>
            <p>Comprehensive homeowner's insurance to safeguard your home and belongings from unforeseen events.</p>
        </div>
        <div class="insurance-item">
            <img src="https://assets.onecompiler.app/42q9x745f/42s2j9tdc/d11.jpeg" alt="Disability Insurance">
            <h3>Disability Insurance</h3>
            <p>Get financial security in case of a disability that prevents you from working with our tailored plans.</p>
        </div>
        <div class="insurance-item">
            <img src="https://assets.onecompiler.app/42q9x745f/42s3cer29/c11.jpg" alt="Cyber Insurance">
            <h3>Cyber Insurance</h3>
            <p>Protect your business and personal assets from cyber threats with our advanced cyber insurance solutions.</p>
        </div>
        <div class="insurance-item">
            <img src="https://assets.onecompiler.app/42q9x745f/42s2j9tdc/l11.jpeg" alt="Land Insurance">
            <h3>Land Insurance</h3>
            <p>Safeguard your land from potential risks with our land insurance plans, designed to give you peace of mind.</p>
        </div>
    </div>

</body>
</html>


                <h2>About Life Insurance</h2>
                <p>Life insurance provides financial protection to your loved ones in the event of your death...</p>`;
            break;

        case 'signin':
            contentDiv.innerHTML = `
                <h1>Sign In </h1>
               <!-- save this code as 'insurance_form.php' -->

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {font-family: Arial, Helvetica, sans-serif;}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

/* Extra styles for the cancel button */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the image and position the close button */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
  position: relative;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  padding-top: 60px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button (x) */
.close {
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: red;
  cursor: pointer;
}

/* Add Zoom Animation */
.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s
}

@-webkit-keyframes animatezoom {
  from {-webkit-transform: scale(0)} 
  to {-webkit-transform: scale(1)}
}
  
@keyframes animatezoom {
  from {transform: scale(0)} 
  to {transform: scale(1)}
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}
</style>
</head>
<body>

<h2>Modal Login Form</h2>

<button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Login</button>

<div id="id01" class="modal">
  
  <form class="modal-content animate" action="/action_page.php" method="post">
    <div class="imgcontainer">
      <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
      <img src="https://assets.onecompiler.app/42q9x745f/42ru7qdk5/12.webp" alt="Avatar" class="avatar">
    </div>

    <div class="container">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>
        
      <button type="submit">Login</button>
      <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>
    </div>

    <div class="container" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
      <span class="psw">Forgot <a href="#">password?</a></span>
    </div>
  </form>
</div>

<script>
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>

</body>
</html>
<link href="index.html" rel="stylesheet" type="text/css" />

               <p>NOTE: Please enter your Valid details`;
            break;

        case 'signup':
            contentDiv.innerHTML = `
                <h1>Registration</h1>
                <!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {font-family: Arial, Helvetica, sans-serif;}

/* Full-width input fields */
input[type=text], input[type=password], input[type=email] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

/* Extra styles for the cancel button */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the image and position the close button */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
  position: relative;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  padding-top: 60px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button (x) */
.close {
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: red;
  cursor: pointer;
}

/* Add Zoom Animation */
.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s
}

@-webkit-keyframes animatezoom {
  from {-webkit-transform: scale(0)} 
  to {-webkit-transform: scale(1)}
}
  
@keyframes animatezoom {
  from {transform: scale(0)} 
  to {transform: scale(1)}
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}
</style>
</head>
<body>

<h2>Modal Sign Up Form</h2>

<button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Sign Up</button>

<div id="id01" class="modal">
  
  <form class="modal-content animate" action="/action_page.php" method="post">
    <div class="imgcontainer">
      <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
      <img src="https://assets.onecompiler.app/42q9x745f/42ru7qdk5/12.webp" alt="Avatar" class="avatar">
    </div>

    <div class="container">
      <label for="email"><b>Email</b></label>
      <input type="email" placeholder="Enter Email" name="email" required>

      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>
        
      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
        
      <button type="submit">Sign Up</button>
      <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>
    </div>

    <div class="container" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
      <span class="psw">Already have an account? <a href="#">Login here</a></span>
    </div>
  </form>
</div>

<script>
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>

</body>
</html>
<br>


                <p>We offer a variety of insurance products to meet your individual and business needs...</p>`;
            break;
            case 'about':
            contentDiv.innerHTML = `
            
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us - Saveetha University</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to external CSS -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            background-image: url('https://www.yourimagelink.com/background.jpg'); /* Replace with your background image URL */
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            margin: 0;
            padding: 0;
        }

        .about-us-section {
            padding: 40px;
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 10px;
            margin: 20px auto;
            max-width: 800px;
        }

        .about-us-section h2 {
            text-align: center;
            margin-bottom: 20px;
        }

        .about-us-section p {
            line-height: 1.6;
            margin-bottom: 20px;
        }

        .team {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }

        .team-member {
            flex: 1 1 calc(33.333% - 20px);
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        .team-member img {
            border-radius: 50%;
            width: 120px;
            height: 120px;
            object-fit: cover;
        }

        .team-member h3 {
            margin: 10px 0;
        }

        .team-member p {
            color: #666;
        }
    </style>
</head>
<body>


    <section class="about-us-section">
        <h2>About Us</h2>
        <p>Online Insurance At SIMATS UNIVERSITY, we are committed to revolutionizing the way you buy and manage insurance by bringing simplicity, convenience, and transparency to the process. We understand that insurance can often be confusing and time-consuming, which is why our mission is to offer a seamless and hassle-free digital experience for all your insurance needs. Whether you're looking for health, life, motor, or travel insurance, our platform is designed to help you find the best policies with just a few clicks.</p>
        <h3>Why Choose Us?</h3>
        <p>Customer-Centric Approach: Your peace of mind is our priority. We provide easy access to comprehensive information and customizable policies so you can make informed decisions that suit your unique requirements.
Transparent and Simple: We break down the complexities of insurance into easy-to-understand terms, ensuring that you know exactly what you’re getting. There are no hidden fees or confusing jargon—just straightforward, honest information.</p>
        <h3>What We Offer</h3>
        <p>What We Offer
Health Insurance: Comprehensive health plans that cover medical expenses, including hospitalization, critical illnesses, and preventive care.<br>
Life Insurance: A range of life insurance options including term plans, whole life, and investment-linked policies that secure your family's financial future.<br>
Motor Insurance: Protect your vehicle with our affordable and comprehensive motor insurance plans, including third-party liability and own-damage coverage.<br>
Travel Insurance: Enjoy worry-free travel with policies that cover trip cancellations, medical emergencies, lost luggage, and more.<br
For inquiries, assistance, or policy-related questions, feel free to reach out to our customer support team at:<br>
Phone: [8121580632]<br>
Email: [jagadeeswarapoli@gmail.com]<br>
Website: [www.saveetha university.com]<br>
At SIMATS UNIVERSITY, we’re here to help you every step of the way. Secure your future with confidence—choose the right insurance, the easy way!</p>
        <h3>Meet Our Team</h3>
        <div class="team">
            <div class="team-member">
                <img src="https://assets.onecompiler.app/42q9x745f/42ru7qdk5/12.webp" alt="Team Member 1">
                <h3>Mr Jagadeeswara Reddy</h3>
                <p>Team Member 1</p>
            </div>
            <div class="team-member">
                <img src="https://assets.onecompiler.app/42q9x745f/42ru7qdk5/12.webp" alt="Team Member 2">
                <h3>Mr Tharun kumar Reddy</h3>
                <p>Team Member 2</p>
            </div>
            <div class="team-member">
                <img src="https://assets.onecompiler.app/42q9x745f/42ru7qdk5/12.webp" alt="Team Member 3">
                <h3>Dr A Moorty</h3>
                <p>Course Faculty</p>
            </div>
            <!-- Add more team members as needed -->
        </div>
    </section>

</body>
</html>
                <p>We offer a variety of insurance products to meet your individual and business needs...</p>`;
            break;
            case 'application':
            contentDiv.innerHTML = `
                <h1>Appication Form</h1>
                <!-- save this file as 'application_form.php' -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insurance Application Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .container {
            width: 50%;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            background-color: #f9f9f9;
        }
        input[type=text], input[type=number], input[type=email], select {
            width: 100%;
            padding: 12px;
            margin: 8px 0;
            border: 1px solid #ccc;
            box-sizing: border-box;
        }
        button {
            background-color: #04AA6D;
            color: white;
            padding: 12px 20px;
            border: none;
            width: 100%;
            cursor: pointer;
        }
        button:hover {
            opacity: 0.8;
        }
    </style>
</head>
<body>

<div class="container">
    <h2>Insurance Application Form</h2>

    <form method="POST" action="print_application.php">
        <label for="name">Full Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter Full Name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter Email" required>

        <label for="policy">Policy Type:</label>
        <select id="policy" name="policy" required>
             <option value="Health">Health Insurance</option>
      <option value="Life">Life Insurance</option>
      <option value="Land">Land Insurance</option>
      <option value="Travel">Travel Insurance</option>
      <option value="Bike">Bike Insurance</option>
      <option value="Car">Car Insurance</option>
      <option value="Homeowners">Homeowners Insurance</option>
      <option value="Disability">Disability Insurance</option>
      <option value="Renters">Renters Insurance</option>
      <option value="Cyber">Cyber Insurance</option>
        </select>

        <label for="amount">Sum Insured (in $):</label>
        <input type="number" id="amount" name="amount" placeholder="Enter Sum Insured" required>

        <label for="age">Age:</label>
        <input type="number" id="age" name="age" placeholder="Enter Age" required>

       <button onclick="window.print()">Print this page</button>
    </form>
</div>

</body>
</html> 

                <p>         <br> We offer a variety of insurance products to meet your individual and business needs...</p>`;
            break;

        case 'contact':
            contentDiv.innerHTML = `
                <h1>Contact Us</h1>
                <address>
        Organization Name: SIMATS UNIVERSITY <br>
        Person Name:Poli Jagadeeswara Reddy<br>
        Id:192211787<br>
        Mobile No:8121580632<br>
        visit us: <br>
        HOME : Saveetha School of Engineering, <br>
        STREET:  Saveetha Nagar,<br>
       DISTRICT : Kanchipuam ,<br>
        STATE:    Tamil Nadu .<br>
        4th Floor, room no. 23,
        near round building,
        chennai - 600123
    </address>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50810.084235702576!2d80.01929342416676!3d13.039972296803672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528b827687f127%3A0xca9d2e9fba575931!2sSaveetha%20University!5e0!3m2!1sen!2sin!4v1726030429944!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <p>Feel free to reach out to us for any inquiries or support...</p>`;
            break;

        default:
            contentDiv.innerHTML = `<h1>Welcome to Online Insurance</h1><p>Your trusted partner for all insurance needs.</p>`;
            break;
    }
}
