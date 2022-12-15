
src="https://smtpjs.com/v3/smtp.js"

function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "testSenderEmail12@gmail.com",
      Password: "Enter1ngTh3P@ssword",
      To: 'ecoscapesllc@aol.com',
      From: "testSenderEmail12@gmail.com",
      Subject: "Test Email using javascript",
      Body: "Well that was easy!!",
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
  }