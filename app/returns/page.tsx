export default function ReturnsPolicyPage() {
  return (
    <main className="min-h-screen py-24 px-6 bg-rg-black">
      <div className="rg-container max-w-3xl">
        <div className="space-y-12">
          {/* Header */}
          <div className="border-b border-rgCharcoal pb-12">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-rg-bone mb-4">
              RETURNS POLICY
            </h1>
            <p className="text-rg-sunset text-sm uppercase tracking-widest font-medium">
              Your Satisfaction. Guaranteed.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-light text-rg-bone">Return Window</h2>
              <p className="text-rg-bone/80 leading-relaxed">
                Items can be returned within 30 days of purchase. Return shipping is free on all orders. We'll issue a refund within 5-7 business days of receiving your return.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-light text-rg-bone">Condition</h2>
              <p className="text-rg-bone/80 leading-relaxed">
                Items must be unworn, unwashed, and in original condition with all tags attached. Items showing signs of wear are not eligible for return.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-light text-rg-bone">Refunds</h2>
              <p className="text-rg-bone/80 leading-relaxed">
                Refunds are issued to the original payment method. Shipping costs are non-refundable. Please allow 5-7 business days for refund to appear in your account.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-light text-rg-bone">Exchanges</h2>
              <p className="text-rg-bone/80 leading-relaxed">
                Want a different size or color? Exchanges are free within 30 days. We'll send your replacement immediately and include a prepaid return label.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-light text-rg-bone">Final Sale</h2>
              <p className="text-rg-bone/80 leading-relaxed">
                Clearance and limited drop items marked "Final Sale" cannot be returned or exchanged. All other items follow our standard return policy.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-light text-rg-bone">Contact</h2>
              <p className="text-rg-bone/80 leading-relaxed">
                To initiate a return, contact <a href="mailto:contact@runnergangls.com" className="text-rg-bone hover:opacity-70 transition-opacity">contact@runnergangls.com</a> with your order number. We'll provide you with a prepaid shipping label and return instructions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
