import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CalcShrwd",
  description: "CalcShrwd privacy policy. Learn how we handle your data when you use our free online calculators.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: June 2025</p>

      <p className="mb-6">
        CalcShrwd ("we", "us", or "our") operates calcshrwd.com. This page describes what
        information we collect when you use our site and how we use it.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
      <p className="mb-4">
        <strong>Calculator inputs:</strong> All calculations on CalcShrwd run entirely in your
        browser. We do not transmit, store, or log the values you enter into any calculator.
      </p>
      <p className="mb-4">
        <strong>Usage data:</strong> Like most websites, we collect standard server log information
        such as your IP address, browser type, referring URL, and pages visited. This data is used
        in aggregate to understand how visitors use the site and to improve our tools.
      </p>
      <p className="mb-4">
        <strong>Cookies:</strong> We use cookies to serve advertisements through third-party ad
        networks. These cookies may collect information about your browsing activity across websites
        to show you relevant ads. You can opt out of interest-based advertising through your browser
        settings or through the ad network opt-out mechanisms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Advertising</h2>
      <p className="mb-4">
        We display advertisements served by third-party networks. These networks may use cookies
        and tracking technologies to deliver ads based on your interests. We do not control the
        data practices of these third parties. Please review their privacy policies for more
        information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Analytics</h2>
      <p className="mb-4">
        We may use analytics services to understand site traffic and usage patterns. These services
        collect anonymized data about how visitors interact with our site.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Data Sharing</h2>
      <p className="mb-4">
        We do not sell, trade, or otherwise transfer your personally identifiable information to
        third parties. We may share aggregate, anonymized data for analytics purposes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Children's Privacy</h2>
      <p className="mb-4">
        CalcShrwd is not directed to children under 13. We do not knowingly collect personal
        information from children under 13.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
      <p className="mb-4">
        We may update this privacy policy from time to time. We will post changes on this page
        with an updated date.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
      <p className="mb-4">
        If you have questions about this privacy policy, contact us at{" "}
        <a href="mailto:hello@calcshrwd.com" className="text-blue-600 underline">
          hello@calcshrwd.com
        </a>
        .
      </p>
    </main>
  );
}
