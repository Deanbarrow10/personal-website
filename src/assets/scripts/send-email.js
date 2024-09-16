import nodemailer from 'nodemailer';

export async function sendEmail(data) {
  const { firstName, lastName, email, phone, message } = data;

  // Create a transporter using SMTP
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: "dean33261@gmail.com", // Replace with your Gmail address
      pass: "spdr iskc sxyz dfvu" // Replace with your app password
    },
  });

  // Email content
  let mailOptions = {
    from: '"Your Website" <dean33261@gmail.com>', // Replace with your Gmail address
    to: "dean33261@gmail.com",
    subject: "New Contact Form Submission",
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  // Send email
  await transporter.sendMail(mailOptions);
}