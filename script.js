function displayPage(page) {
    // Clear the current content
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    // Update the body background and content based on the clicked page
    document.body.className = page; // Change background

    switch (page) {
        case 'home':
            contentDiv.innerHTML = `
                <h1>Welcome to Online Insurance</h1>
                <p>At Online Insurance, we offer comprehensive insurance solutions tailored to meet the needs of individuals and businesses alike.</p>

                <h2>Our Insurance Services</h2>
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
                </div>

                <h2>About Life Insurance</h2>
                <p>Life insurance provides financial protection to your loved ones in the event of your death...</p>`;
            break;

        case 'signin':
            contentDiv.innerHTML = `
                <h1>Sign In </h1>
               <!-- save this code as 'insurance_form.php' -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Insurance Form</title>
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
    input[type=text], input[type=email], input[type=number], select {
      width: 100%;
      padding: 12px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }
    button {
      background-color: #04AA6D;
      color: white;
      padding: 12px 20px;
      border: none;
      cursor: pointer;
      width: 100%;
      margin: 8px 0;
    }
    button:hover {
      opacity: 0.8;
    }
  </style>
</head>
<body>

<div class="container">
  <h2>Enter Insurance Details</h2>
  
  

  <form method="POST" action="">
    <label for="name"><b>Full Name</b></label>
    <input type="text" id="name" name="name" placeholder="Enter Full Name" required>

    <label for="email"><b>Email</b></label>
    <input type="email" id="email" name="email" placeholder="Enter Email" required>

    <label for="policy_type"><b>Policy Type</b></label>
    <select id="policy_type" name="policy_type" required>
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

    <label for="sum_insured"><b>Sum Insured</b></label>
    <input type="number" id="sum_insured" name="sum_insured" placeholder="Enter Sum Insured Amount" required>

    <label for="age"><b>Age</b></label>
    <input type="number" id="age" name="age" placeholder="Enter Age" required>

    <button type="submit">Submit & Show Details</button>
  </form>
  <div class="container">
  <?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $policyType = htmlspecialchars($_POST['policy_type']);
    $sumInsured = htmlspecialchars($_POST['sum_insured']);
    $age = htmlspecialchars($_POST['age']);
    echo "
    <div id='printable'>
    <button onclick='window.print()'>Print Details</button>
    <hr>
</div>

</body>
</html>

  <br>

                
                <p>.....THANK YOU😊 ...</p>`;
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
      <img src="img_avatar2.png" alt="Avatar" class="avatar">
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
                <h1>About Us</h1>
                About Us: Online Insurance
At SIMATS UNIVERSITY, we are committed to revolutionizing the way you buy and manage insurance by bringing simplicity, convenience, and transparency to the process. We understand that insurance can often be confusing and time-consuming, which is why our mission is to offer a seamless and hassle-free digital experience for all your insurance needs. Whether you're looking for health, life, motor, or travel insurance, our platform is designed to help you find the best policies with just a few clicks.
<br>
Why Choose Us?
Customer-Centric Approach: Your peace of mind is our priority. We provide easy access to comprehensive information and customizable policies so you can make informed decisions that suit your unique requirements.<br>

Transparent and Simple: We break down the complexities of insurance into easy-to-understand terms, ensuring that you know exactly what you’re getting. There are no hidden fees or confusing jargon—just straightforward, honest information.<br>

Compare and Save: Our platform allows you to compare policies from top insurers in the market, ensuring you get the best coverage at competitive rates. Save time and money by reviewing multiple options in one place.<br>

Secure and Reliable: We prioritize the safety of your personal information. Our platform uses the latest security protocols to ensure your data is protected at all times.<br>

End-to-End Support: From helping you choose the right policy to assisting with claims, we offer comprehensive customer support. Our team of insurance experts is always ready to guide you through every step of the process.<br>

Our Vision<br>
Our vision is to make insurance accessible to everyone by leveraging technology. We aim to become a trusted partner for individuals and businesses seeking reliable, affordable, and customizable insurance solutions. By offering a wide range of policies through a user-friendly online platform, we strive to ensure that protecting yourself and your loved ones is simpler than ever before.<br>

What We Offer<br>
Health Insurance: Comprehensive health plans that cover medical expenses, including hospitalization, critical illnesses, and preventive care.<br>

Life Insurance: A range of life insurance options including term plans, whole life, and investment-linked policies that secure your family's financial future.<br>

Motor Insurance: Protect your vehicle with our affordable and comprehensive motor insurance plans, including third-party liability and own-damage coverage.<br>

Travel Insurance: Enjoy worry-free travel with policies that cover trip cancellations, medical emergencies, lost luggage, and more.<br>

For inquiries, assistance, or policy-related questions, feel free to reach out to our customer support team at:<br>

Phone: [8121580632]<br>
Email: [jagadeeswarapoli@gmail.com]<br>
Website: [www.saveetha university.com]<br>
At SIMATS UNIVERSITY, we’re here to help you every step of the way. Secure your future with confidence—choose the right insurance, the easy way!

                <p>We offer a variety of insurance products to meet your individual and business needs...</p>`;
            break;
            case 'services':
            contentDiv.innerHTML = `
                <h1>Sign Up</h1>
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
            <option value="Auto">Auto Insurance</option>
            <option value="Travel">Travel Insurance</option>
        </select>

        <label for="amount">Sum Insured (in $):</label>
        <input type="number" id="amount" name="amount" placeholder="Enter Sum Insured" required>

        <label for="age">Age:</label>
        <input type="number" id="age" name="age" placeholder="Enter Age" required>

        <button type="submit">Submit and Print</button>
    </form>
</div>

</body>
</html>

                <p>We offer a variety of insurance products to meet your individual and business needs...</p>`;
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
