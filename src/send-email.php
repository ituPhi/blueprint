<?php
require_once 'vendor/autoload.php';

use Resend\Resend;

// Retrieve form data
$name = $_POST['name'] ?? 'Anonymous'; // Default to 'Anonymous' if not set
$email = $_POST['email'] ?? 'no-reply@example.com';
$message = $_POST['message'] ?? '';

// Initialize Resend client with your API key
$resend = Resend::client('re_RxjyMjc5_HjHXA8Rn9kxEu7C2ecr2D2f9');

// Send email using the provided data
$resend->emails->send([
  'from' => 'onboarding@resend.dev',
  'to' => 'jfiturbeo@gmail.com',
  'subject' => "New message from $name",
  'html' => "<p>$message</p>"
]);

// Redirect or display a message after sending the email
echo "Email sent successfully!";
