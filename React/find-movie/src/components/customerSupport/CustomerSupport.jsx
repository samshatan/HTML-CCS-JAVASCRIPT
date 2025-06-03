import Header from "../Header";

function CustomerSupport(){
  return(
    <>
      <Header/>
      <div class="customersupport">
        <h2>Customer Support</h2>
        <br/>
        <p>If you have any questions or need assistance, please reach out to us through the following channels:</p><br/>
          <h3>Contact Us</h3>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:sanasaifi1420@gmail.com">sanasaifi1420@gmail.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+917351516425">+917351516425</a></li>
          </ul>
      </div>
      <div class="customersupport">
        <h3>Frequently Asked Questions (FAQs)</h3>
        <br/>
          <ul>
            <li><strong>How do I reset my password?</strong> <br/> Click on "Forgot Password" on the login page and follow the instructions.</li><br/>
            <li><strong>How can I update my account information?</strong> <br/> Log in to your account and navigate to the "Account Settings" section.</li><br/>
            <li><strong>What should I do if I encounter a technical issue?</strong> <br/> Please contact our support team via email or phone for assistance.</li>
          </ul>
      </div>
    </>
  )
}
export default CustomerSupport;