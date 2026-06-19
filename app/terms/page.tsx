import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | CalcShrwd",
  description: "Terms of use for CalcShrwd.com. Read our terms before using our free online calculators.",
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Terms of Use</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: June 2025</p>

      <p className="mb-6">
        By accessing or using CalcShrwd ("the Site"), you agree to be bound by these terms.
        If you do not agree, please do not use the Site.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Use of the Site</h2>
      <p className="mb-4">
        CalcShrwd provides free online calculators for informational and educational purposes only.
        You may use the Site for personal, non-commercial purposes. You may not use the Site for
        any unlawful purpose or in a way that could damage, disable, or impair the Site.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Accuracy of Information</h2>
      <p className="mb-4">
        We strive to provide accurate calculations, but results are provided for general
        informational purposes only. CalcShrwd is not a substitute for professional financial,
        medical, legal, or tax advice. Always consult a qualified professional before making
        important decisions based on calculator results.
      </p>
      <p className="mb-4">
        Tax rates, health guidelines, and other underlying data may change. We cannot guarantee
        that all information is current or accurate at all times.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
      <p className="mb-4">
        All content on CalcShrwd, including but not limited to text, graphics, and code, is owned
        by CalcShrwd or its content providers and is protected by applicable intellectual property
        laws. You may not reproduce, distribute, or create derivative works without our express
        written permission.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Disclaimer of Warranties</h2>
      <p className="mb-4">
        The Site is provided "as is" without warranties of any kind, express or implied. We do not
        warrant that the Site will be uninterrupted, error-free, or free of viruses or other
        harmful components.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
      <p className="mb-4">
        To the fullest extent permitted by law, CalcShrwd shall not be liable for any indirect,
        incidental, special, or consequential damages arising from your use of the Site or reliance
        on any content provided herein.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Links</h2>
      <p className="mb-4">
        The Site may contain links to third-party websites. We are not responsible for the content,
        privacy practices, or accuracy of any third-party sites.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to These Terms</h2>
      <p className="mb-4">
        We reserve the right to modify these terms at any time. Continued use of the Site after
        changes are posted constitutes your acceptance of the revised terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
      <p className="mb-4">
        For questions about these terms, contact us at{" "}
        <a href="mailto:hello@calcshrwd.com" className="text-blue-600 underline">
          hello@calcshrwd.com
        </a>
        .
      </p>
    </main>
  );
}
