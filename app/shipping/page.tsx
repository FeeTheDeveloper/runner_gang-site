export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen py-24 px-6 bg-rg-black">
      <div className="rg-container max-w-3xl">
        <div className="space-y-12">
          {/* Header */}
          <div className="border-b border-rgCharcoal pb-12">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-rg-bone mb-4">
              SHIPPING POLICY
            </h1>
            <p className="text-rg-sunset text-sm uppercase tracking-widest font-medium">
              You Move. We Deliver.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-light text-rg-bone">Processing Time</h2>
              <p className="text-rg-bone/80 leading-relaxed">
                Orders are processed within 2-3 business days. You'll receive a shipping confirmation email with tracking information once your order ships.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-light text-rg-bone">Shipping Rates</h2>
              <p className="text-rg-bone/80 leading-relaxed">
                Domestic shipping starts at $10. International shipping rates vary by location. Expedited shipping options available at checkout.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-light text-rg-bone">Tracking</h2>
              <p className="text-rg-bone/80 leading-relaxed">
                All orders include tracking. Monitor your shipment in real time from dispatch to arrival. Typical delivery time is 5-7 business days for domestic orders.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-light text-rg-bone">International</h2>
              <p className="text-rg-bone/80 leading-relaxed">
                We ship worldwide. International orders may incur customs duties. Delivery times vary by region. Contact us for specific international rates.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-light text-rg-bone">Issues</h2>
              <p className="text-rg-bone/80 leading-relaxed">
                Having problems with your shipment? Contact us at contact@runnergangls.com with your order number and we'll resolve it immediately.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="border-t border-rgCharcoal pt-12">
            <p className="text-rg-bone/80">
              Questions? Reach out to <a href="mailto:contact@runnergangls.com" className="text-rg-bone hover:opacity-70 transition-opacity">contact@runnergangls.com</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
