interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
    <p>Hi {name},</p>
    <p>
      Thank you for reaching out! Here’s a copy of the message you sent:
    </p>
    <p>
      <strong>Your Email:</strong> {email}
    </p>
    <p>
      <strong>Your Message:</strong>
    </p>
    <p style={{ background: '#f9f9f9', padding: '10px', borderLeft: '4px solid #ccc' }}>
      {message}
    </p>
    <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '20px 0' }} />
    <p>
      I’ve received your message and will get back to you as soon as possible. If you have any additional questions or need further assistance, feel free to reply to this email.
    </p>
    <p>
      Best regards,<br />
      <strong>Nilanjana Debnath</strong><br />
      <small>Researcher & Developer</small>
    </p>
    <p style={{ fontSize: '0.9em', color: '#777', marginTop: '20px' }}>
      &copy; 2025 Nilanjana Debnath. All rights reserved.
    </p>
  </div>
);

export default ContactFormEmail;