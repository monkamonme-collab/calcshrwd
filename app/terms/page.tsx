import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | CalcShrwd",
  description: "Terms of use for CalcShrwd.com.",
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Terms of Use</h1>
      <p className="text-slate-400 text-sm mb-8">Last updated: June 2025</p>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">1. Use of Site</h2>
        <p className="text-slate-700">
          By accessing CalcShrwd.com you agree to these Terms. You may use the site
          for personal, non-commercial purposes. You may not reproduce, redistribute,
          or resell any content without written permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">2. Accuracy of Information</h2>
        <p className="text-slate-700">
          CalcShrwd provides calculators and educational content for informational
          purposes only. Results are estimates and should not be relied upon as
          financial, medical, legal, or professional advice. Always verify critical
          numbers with an authoritative source before making decisions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">3. Intellectual Property</h2>
        <p className="text-slate-700">
          All content on this site -- including text, code, and design -- is owned
          by CalcShrwd or its licensors and is protected by copyright law. You may
          link to any page on CalcShrwd. You may not republish substantial portions
          of content without permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">4. No Warranties</h2>
        <p className="text-slate-700">
          This site is provided &quot;as is&quot; without warranties of any kind. We do not
          warrant that the site will be uninterrupted or error-free.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">5. Limitation of Liability</h2>
        <p className="text-slate-700">
          To the fullest extent permitted by law, CalcShrwd shall not be liable for
          any direct, indirect, incidental, or consequential damages arising from
          your use of this site or its content.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">6. Third-Party Links</h2>
        <p className="text-slate-700">
          CalcShrwd may contain links to third-party websites. We are not responsible
          for the content or accuracy of those sites.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">7. Changes to Terms</h2>
        <p className="text-slate-700">
          We reserve the right to update these Terms at any time. Continued use of
          the site after changes are posted constitutes acceptance.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">8. Contact</h2>
        <p className="text-slate-700">
          Questions? Email us at{" "}
          <a href="mailto:monkamonme@gmail.com" className="text-[#00B4A6] hover:underline">
            monkamonme@gmail.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
