import Link from "next/link";

const lastUpdated = "FEB 2025";

export default function Page() {
  return (
    <article className="prose mt-8 pb-16 dark:prose-invert">
      <div className="space-y-4">
        <h1 className="title text-5xl">Privacy Policy</h1>
        <p>Last Updated: {lastUpdated}</p>
      </div>
      <div className="space-y-4">
        <h2 className="title text-3xl">Welcome!</h2>
        <p>
          Thank you for visiting my portfolio website. This <b>Privacy Policy</b> outlines how I handle your information while you explore my work. As a researcher and developer, I prioritize transparency and respect for your privacy.
        </p>
        <h2 className="title">Information I Collect</h2>
        <p>
          This website is a static portfolio, meaning I do not actively collect personal data. There are no user accounts, tracking cookies, or hidden data collection mechanisms.
        </p>
        <h3>1. Chatbot Interactions</h3>
        <p>
          If you use the chatbot feature, your messages may be stored temporarily for caching and training purposes. Please avoid sharing sensitive or confidential information in the chat.
        </p>
        <h3>2. Contact Information</h3>
        <p>
          If you reach out via email or the contact form, I will only use the information you provide to respond to your inquiry. Your data will not be shared or used for any other purpose.
        </p>
        <h2 className="title">How I Use Your Information</h2>
        <p>Any information collected is used solely for the following purposes:</p>
        <ul>
          <li>Ensuring the website functions properly</li>
          <li>Improving the site based on user feedback</li>
          <li>Responding to your questions or messages</li>
        </ul>
        <h2 className="title">Sharing Your Information</h2>
        <p>
          I do not sell, trade, or rent your personal information. If you accidentally share sensitive details, please contact me, and I will assist in removing them promptly.
        </p>
        <h2 className="title">Security Measures</h2>
        <p>
          While I take reasonable steps to protect your information, no system is entirely secure. I cannot guarantee absolute security, but I am committed to safeguarding your data to the best of my ability.
        </p>
        <h2 className="title">Policy Updates</h2>
        <p>
          This policy is current as of <b>{lastUpdated}</b>. Any changes will be reflected here, ensuring you are always informed. I recommend checking this page periodically for updates.
        </p>
        <h2 className="title">Contact Me</h2>
        <p>
          If you have any questions or concerns about this privacy policy, feel free to reach out via email at{" "}
          <Link href="mailto:nilanjana.debnath24@gmail.com">nilanjana.debnath24@gmail.com</Link> or use the{" "}
          <Link href="/contact">contact form</Link>. I’d be happy to assist you!
        </p>
      </div>
    </article>
  );
}

