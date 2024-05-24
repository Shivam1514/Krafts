import PagesHeader from "../components/PagesHeader.jsx";
import Footer from "../components/Footer.jsx";
import BottomBar from "../components/BottomBar.jsx";
import "../styles/policies.css";

function Policies() {
  return (
    <div className="policies-page">
      <PagesHeader />

      <main className="policies-main-content">
        <h1>Our Policies</h1>

        <section className="shipping-policy">
          <h2>Shipping Policy</h2>
          <br />
          <p>
            At{" "}
            <a href="/" className="policies-title">
              Krafts
            </a>
            Our shipping policy at The Krafts is designed to provide a seamless and reliable experience for our customers. We offer worldwide shipping, ensuring that our artisanal crafts can reach customers across the globe.
            <br />
Once your order is placed, we carefully prepare and package your items within 1-3 business days. During peak seasons or promotional periods, processing times may be slightly longer. We partner with trusted shipping carriers to ensure safe and timely delivery of your order. At checkout, you will have the option to choose from the available shipping methods that best suit your needs.
<br />
Shipping costs are calculated based on the destination, weight, and dimensions of your order. You will see the exact shipping cost displayed at checkout before completing your purchase. The estimated delivery time varies depending on the shipping method selected and the destination. Generally, orders are delivered within 7-14 business days after they have been shipped. However, please note that international shipments may experience delays due to customs procedures or unforeseen circumstances beyond our control.
Once your order has been shipped, we will provide you with a tracking number via email. This allows you to monitor the progress of your shipment and estimate its arrival date. For international orders, please be aware that customs duties, taxes, or other fees imposed by the destination country may apply. These charges are the responsibility of the customer and may vary depending on the country’s regulations.
<br />
If you have any questions or concerns about your order, our customer support team is here to assist you. You can reach out to us through our contact page or by replying to the order confirmation email. We strive to ensure that your order arrives in excellent condition and in a timely manner. Your satisfaction is our top priority.
<br />
Please note that the shipping policy may be subject to change. For the most up-to-date information, we recommend reviewing the shipping details provided during the checkout process.
          </p>
        </section>

        <section className="return-policy">
          <h2>Return & Refund Policy</h2>
          <br />
          <p>
          Our return and refund policy at The Krafts allows for returns within 30 days of delivery for unused items in their original condition. 
          Personalized items are eligible for return only if damaged or defective. Customers must contact our support team for return instructions.
          Refunds can be issued to the original payment method or as store credit. Shipping costs are non-refundable, and return shipping fees are 
          the customer’s responsibility. Refunds are typically processed within 5-10 business days. Damaged or defective items will be replaced, 
          repaired, or refunded promptly. Certain items like earrings and perishable goods may not be eligible for return. For any concerns, 
          customers can reach out to our support team before making a purchase.
          </p>
        </section>

        <section className="privacy-policy">
          <h2>Privacy Policy</h2>
          <br />
          <p>
          Our privacy policy at The Krafts ensures the protection and confidentiality of your personal information. We collect and use your data 
          solely for order processing and to enhance your shopping experience. Your information is securely stored and not shared with third 
          parties, except for essential service providers. We employ industry-standard security measures to safeguard your data. By using our 
          website, you consent to our privacy practices. If you have any concerns, please contact us.
          </p>
        </section>

        <section className="terms-conditions">
          <h2>Terms & Conditions</h2>
          <br />
          <p>
            By accessing or using the Krafts website and our services, you
            agree to be bound by our terms and conditions. These terms cover
            important topics such as intellectual property rights, user conduct,
            disclaimers, and liability limitations. We encourage you to read
            these terms carefully before using our services.
          </p>
        </section>

        <section className="sustainability-commitment">
          <h2>Our Commitment to Community</h2>
          <br />
          <p>
          At The Krafts, we are dedicated to making a positive impact in our community. We support local initiatives, charities, and organizations 
          that align with our values. We prioritize ethical sourcing and sustainable practices. Join us in creating a stronger community by 
          getting involved and supporting causes you care about.
          </p>
        </section>
      </main>

      <Footer />
      <BottomBar />
    </div>
  );
}

export default Policies;
