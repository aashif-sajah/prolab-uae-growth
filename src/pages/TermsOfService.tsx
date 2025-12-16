import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | PROLAB - Dubai Shopify Development Agency</title>
        <meta name="description" content="Read PROLAB's terms of service. Understand the terms and conditions for using our Shopify development and web design services." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background pt-24">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: December 2024</p>
            
            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using PROLAB's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  PROLAB provides Shopify store development, website design, e-commerce solutions, and related digital services. The specific scope of work will be outlined in individual project agreements or proposals.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Project Timeline</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to deliver projects within agreed timelines, typically within 3-7 business days depending on project complexity. Delays may occur due to client feedback response times, scope changes, or unforeseen technical challenges.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Payment terms are as follows:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>A deposit may be required before project commencement</li>
                  <li>Final payment is due upon project completion</li>
                  <li>All prices are in AED/USD unless otherwise specified</li>
                  <li>Late payments may incur additional fees</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Client Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Clients are responsible for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Providing necessary content, images, and materials</li>
                  <li>Timely feedback and approvals</li>
                  <li>Access to required accounts and platforms</li>
                  <li>Accuracy of provided information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Upon full payment, clients receive ownership of the final deliverables. PROLAB retains the right to showcase completed work in portfolios unless otherwise agreed. Third-party assets (themes, plugins) remain subject to their respective licenses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Revisions</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our packages include a specified number of revision rounds. Additional revisions beyond the included amount may incur extra charges at our standard hourly rate.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  PROLAB shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service in question.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate a project with written notice. In case of termination, payment is due for all work completed up to the termination date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes shall be resolved in the courts of Dubai, UAE.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p className="text-muted-foreground mt-4">
                  <strong className="text-foreground">PROLAB</strong><br />
                  Email: info@eduraise.io<br />
                  Phone: +971 50 712 3574<br />
                  Location: Dubai, UAE
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
