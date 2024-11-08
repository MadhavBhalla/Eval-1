import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./TermsAndCondition.css"; // This will import the custom CSS
import styles from './TermsAndCondition.module.css';
const TermsAndCondition = () => {
  return (
    <div>

      {/* Center Section */}
      <section id="center" className= {`box ${styles.box}`}>

        <div className="container-xl">
          <div className="boxa ">
            <div className="col-md-12">
              <h1 className="boxb">Terms & Conditions</h1>
              <h6 className="boxc">
                <a className="b" href="index.html">Home &nbsp;|</a>&nbsp;T&C
              </h6>
            </div>
          </div>
        </div>
      </section>

      <main className="main">
        <div className="container1">
          <h1>Terms and Conditions</h1>
          <p>Effective as of 1 September 2024</p>
          
          <section className={`terms-section ${styles.termssection}`} >
            <h2>Introduction</h2>
            <p>
              Welcome to <b>EDUTECH</b>. These Terms and Conditions govern your use of our website and services. By using
              our website and services, you agree to be bound by these Terms.
            </p>
          </section>

          <section className={`terms-section ${styles.termssection}`}>
            <h2>Definitions</h2>
            <p>In these Terms, the following definitions apply:</p>
            <ul>
              <p>"We" refers to <b>EDUTECH</b>, the provider of the website and its services.</p>
              <p>"You" means the user of our website and services.</p>
              <p>"Services" means the services provided by us through our website.</p>
            </ul>
          </section>

          <section className={`terms-section ${styles.termssection}`}>
            <h2>Use of Services</h2>
            <p>
              You must be at least 18 years old to use our services. By using our services, you represent and warrant that
              you are at least 18 years old.
            </p>
            <p>You agree to use our services only for lawful purposes and in accordance with these Terms.</p>
          </section>

          <section className={`terms-section ${styles.termssection}`}>
            <h2>Intellectual Property</h2>
            <p>
              All intellectual property rights in and to our website and services, including but not limited to trademarks,
              copyrights, and trade secrets, are owned by us or our licensors.
            </p>
          </section>

          <section className={`terms-section ${styles.termssection}`}>
            <h2>Disclaimer of Warranties</h2>
            <p>
              Our website and services are provided on an "as is" and "as available" basis. We make no warranties, express
              or implied, regarding the accuracy, completeness, or reliability of our website and services.
            </p>
          </section>

          <section className={`terms-section ${styles.termssection}`}>
            <h2>Limitation of Liability</h2>
            <p>
              In no event shall we be liable for any damages, including but not limited to incidental, consequential, or
              punitive damages, arising out of or related to your use of our website and services.
            </p>
          </section>

          <section className={`terms-section ${styles.termssection}`}>
            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of <b>INDIA</b>.
            </p>
          </section>

          <section className={`terms-section ${styles.termssection}`}>
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify or update these Terms at any time without notice. Your continued use of our
              website and services after any changes to these Terms shall constitute your acceptance of the modified Terms.
            </p>
          </section>

          <section className={`terms-section ${styles.termssection}`}>
            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about these Terms, please contact us at <b>+91 123456789</b>.
            </p>
          </section>
        </div>
      </main>

    </div>
  );
};

export default TermsAndCondition;
