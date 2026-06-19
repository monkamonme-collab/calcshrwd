import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CalcShrwd",
  description: "Privacy policy for CalcShrwd.com.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Privacy Policy</h1>
      <p className="text-slate-400 text-sm mb-8">Last updated: June 2025</p>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">1. Information We Collect</h2>
        <p className="text-slate-700 mb-4">
          <strong>Calculator inputs.</strong> All calculations run entirely in your
          browser. We do not transmit, store, or log any values you enter into our
          calculators.
        </p>
        <p className="text-slate-700">
          <strong>Usage data.</strong> We use Google Analytics to collect anonymous
          information about how visitors interact with the site. This data is
          aggregated and cannot be used to identify you personally.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">2. Cookies</h2>
        <p className="text-slate-700">
          CalcShrwd uses cookies for analytics (Google Analytics) and advertising
          (our ad network). You can disable cookies in your browser settings at any
          time without affecting calculator functionality.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">3. Advertising</h2>
        <p className="text-slate-700">
          CalcShrwd displays ads to support free access to all tools. Our ad partners
          may use cookies to serve ads based on your prior visits to this and other
          websites. You can opt out of personalized advertising through your ad
          network&apos;s opt-out page.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">4. Third-Party Services</h2>
        <p className="text-slate-700">
          We use Google Analytics and AdCash. Each operates under its own privacy
          policy. We do not sell your personal information to any third party.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">5. Children</h2>
        <p className="text-slate-700">
          CalcShrwd is not directed at children under 13 and we do not knowingly
          collect personal information from children.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">6. Changes to This Policy</h2>
        <p className="text-slate-700">
          We may update this Privacy Policy from time to time. Changes will be posted
          on this page with an updated &quot;Last updated&quot; date.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">7. Contact</h2>
        <p className="text-slate-700">
          Questions about this policy? Email us at{" "}
          <a href="mailto:monkamonme@gmail.com" className="text-[#00B4A6] hover:underline">
            monkamonme@gmail.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
