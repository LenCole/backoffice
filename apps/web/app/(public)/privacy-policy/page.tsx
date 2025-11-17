import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { company_data } from "@/data/company-data";

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto w-full max-w-[95%] bg-background px-5 pt-10 backdrop-blur md:max-w-5xl">
      <h1 className="mb-1 text-center font-extrabold text-3xl text-primary leading-tight md:text-left">
        Privacy Policy
      </h1>
      <p className="mb-6 text-center text-lg text-primary md:text-left">
        How {company_data.map((company) => company.dba).join(", ")} protects
        your information
      </p>
      <Accordion
        className="max-w-3xl"
        collapsible
        defaultValue="item-1"
        type="single"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold text-lg">
            01. Introduction
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              {company_data.map((company) => company.legal_name).join(", ")}{" "}
              [operating as{" "}
              {company_data.map((company) => company.dba).join(", ")}] (“the
              Company”) is a Professional Corporation incorporated under{" "}
              <span className="italic">The Business Corporations Act</span> and{" "}
              <span className="italic">
                The Professional Corporations Act of Saskatchewan
              </span>
              . The Company is committed to maintaining robust privacy
              protections for our clients and employees as well as other with
              whom the Company deals. We are governed by the Rules and
              Professional Conduct of our profession. These rules guarantee the
              privacy and confidentiality of your information. Our Privacy
              Policy (“Privacy Policy”) is designed to help you understand how
              we collect, use and safeguard the information you provide to us
              and to assist you in making informed decisions when using our
              Service.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-bold text-lg">
            02. Your Consent
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              By providing the Company with your personal information, you
              consent to the collection, use, disclosure and retention of that
              information by the Company in accordance with this Privacy Policy
              and as otherwise permitted by applicable law. You may withdraw
              your consent at any time, subject to legal or contractual
              restrictions and on reasonable notice to the Company, but then you
              might not be able to proceed with your intended interactions or
              transactions with the Company or otherwise receive the full
              benefit of the Company&apos;s products and services. Please refer
              to section 7 of this Privacy Policy to learn about your options
              with respect to the withdrawal of your consent.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-bold text-lg">
            03. How the Company Defines Personal Information
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              <span className="font-bold">
                “Personal information” is broadly defined and includes any
                information about an identifiable individual, as well as more
                technical information that is collected automatically.
                Information that is business contact information or aggregated
                or anonymized is not considered to be personal information.
              </span>
            </p>
            <p>
              In this Privacy Policy, “personal information” means information
              about an identifiable individual, such as an individual&apos;s
              name and email address, but does not include (to the extent
              permitted by law) information that is publicly available in a
              telephone directory or that is business contact information that
              enables an individual to be contacted at a place of business.
              Personal Information also does not include information that has
              been aggregated or anonymized, as explained in section 12, below.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="font-bold text-lg">
            04. Personal Information that the Company Collects
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p className="font-bold">
              “The Company usually collects personal information directly from
              you, such as when you purchase a service or product from us. We
              may also collect personal information automatically, such as when
              you visit the Company&apos;s websites.”
            </p>
            <p>
              Information you provide:
              <ul className="ml-12">
                <li className="my-5 list-disc font-normal text-sm">
                  You may be asked to voluntarily give your personal information
                  to the Company when you interact with the Company, including
                  when you subscribe to a newsletter, request information or use
                  a product or service provided by the Company. For example, we
                  may collect:
                </li>
                <li className="my-5 list-disc font-normal text-sm">
                  contact information (such as name, email address, postal
                  address and phone number) when you make an inquiry or contact
                  us;
                </li>
                <li className="my-5 list-disc font-normal text-sm">
                  contact information, social insurance number, birth date,
                  driver&apos;s license, employment information, bank account
                  information and other financial information, including payment
                  card information, financial background check and credit
                  information, and information about your spouse and other
                  family members when you sign up for a product or service with
                  the Company.;
                </li>
                <li className="my-5 list-disc font-normal text-sm">
                  contact information and employment information when you apply
                  for an employee position with the Company; and
                </li>
                <li className="my-5 list-disc font-normal text-sm">
                  communications preferences and correspondence you send to us.
                </li>
              </ul>
            </p>
            <p>
              In those circumstances, you can choose not to provide certain
              requested personal information, but then you might not be able to
              proceed with your intended interaction or transaction with the
              Company or otherwise receive the full benefit of the desired
              product or service.
            </p>
            <p>
              If you give the Company the personal information of another
              individual, then you are solely responsible for complying with all
              applicable laws, including obtaining that individual&apos;s valid
              consent to your collection and disclosure of that
              individual&apos;s personal information to the Company and to the
              Company&apos;s use, disclosure and retention of that
              individual&apos;s personal information.
            </p>
            <p className="font-bold">Automated Collection</p>
            <ul className="">
              <li className="mb-5 list-none font-normal text-sm">
                The Company may automatically collect certain information
                regarding your use of the Company&apos;s websites made available
                to you, such as the dates and times that you use the websites,
                the browsers, operating systems, software and devices that you
                use to access the websites and details of your use of the
                websites.
              </li>
              <li className="my-5 list-none font-normal text-sm">
                The Company&apos;s websites, email messages and advertisements
                may use technologies (e.g. cookies, web beacons, tokens, pixels
                or tags) to collect information that assists the Company to
                improve its products, services, customer communications and
                advertising and to prevent fraud. The Company may use
                information collected through technological means to recognize
                you as a user of the Company&apos;s websites, to facilitate and
                improve your use of the Company&apos;s websites, to confirm that
                messages have been delivered to and opened by you and to provide
                you with targeted advertisements. You may choose to decline or
                disable cookies if your web browser or device permits, but doing
                so may affect your ability to access or use certain features of
                a website. More information about cookies used for
                interest-based advertising is set out in section 5(3) below.
              </li>
              <li className="my-5 list-none font-normal text-sm">
                Some of the information automatically collected by technological
                means is non-personal information (because the information does
                not identify you), and the Company will deal with that
                non-personal information as explained below in this Privacy
                Policy unless applicable law requires otherwise.
              </li>
            </ul>
            <p className="font-bold">Third Party</p>
            <ul className="">
              <li className="mb-5 list-none font-normal text-sm">
                Occasionally, the Company may collect personal information from
                third parties. The Company will only collect your personal
                information from a third party if we have obtained your consent
                to do so, if you have provided your consent to the third party,
                or if we are legally required or permitted to do so.
              </li>
              <li className="my-5 list-none text-sm">
                For Example
                <ul className="ml-12">
                  <li className="my-5 list-disc font-normal text-sm">
                    If you apply for a product or service from the Company, the
                    Company may request your consent to obtain a credit check in
                    connection with your application.
                  </li>
                  <li className="my-5 list-disc font-normal text-sm">
                    We may obtain your personal information from a referral
                    source, a lawyer or banker with whom you have previously
                    worked.
                  </li>
                </ul>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="font-bold text-lg">
            05. How the company uses personal information
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p className="font-bold">
              “The Company may use your personal information to provide our
              products and services to you, for our own internal purposes and
              for additional purposes, subject to your right to withdraw consent
              as set out in this Privacy Policy.”
            </p>
            <p>General</p>
            <ul className="">
              <li className="my-5 list-none font-normal text-sm">
                The Company may use your personal information collected by the
                Company for purposes relating to or arising from your
                relationship and transactions with the Company and as otherwise
                set out in this Privacy Policy or permitted by applicable law,
                including:
                <ul className="ml-12">
                  <li className="my-5 list-disc font-normal text-sm">
                    to administer your relationship with the Company, including
                    to contact and correspond with you regarding the products
                    and services you have purchased from the Company and related
                    matters;
                  </li>
                  <li className="my-5 list-disc font-normal text-sm">
                    to facilitate your interactions and transactions with the
                    Company;
                  </li>
                  <li className="my-5 list-disc font-normal text-sm">
                    to provide products and services to you;
                  </li>
                  <li className="my-5 list-disc font-normal text-sm">
                    to process and respond to your inquiries, requests and other
                    communications;
                  </li>
                  <li className="my-5 list-disc font-normal text-sm">
                    to provide you with information (including by email and
                    other electronic messages) regarding the Company and its
                    business, products and services and products and services
                    offered by other businesses, to the extent permitted by
                    applicable law;
                  </li>
                  <li className="my-5 list-disc font-normal text-sm">
                    to maintain, protect and improve the Company&apos;s products
                    and services and to develop new products and services;
                  </li>
                  <li className="my-5 list-disc font-normal text-sm">
                    to protect and enforce the Company&apos;s legal rights,
                    interests and remedies and to protect the business,
                    operations and customers of the Company or other persons;
                    and
                  </li>
                  <li className="my-5 list-disc font-normal text-sm">
                    to comply with legal and regulatory requirements.
                  </li>
                </ul>
              </li>
              <p>
                Subject to your right to withdraw consent as described in this
                Privacy Policy, the Company may also use your personal
                information collected by the Company for the following
                additional purposes that are not required for the Company to
                provide you with products and services:
              </p>
              <ul className="ml-12">
                <li className="my-5 list-disc font-normal text-sm">
                  to communicate with you for the purposes of providing you with
                  advertising and marketing messages pertaining to additional
                  products or services that may be of interest to you;
                </li>
                <li className="my-5 list-disc font-normal text-sm">
                  to administer and facilitate your participation in promotions
                  related to the Company; and
                </li>
                <li className="my-5 list-disc font-normal text-sm">
                  to conduct surveys on the quality of our products and
                  services.
                </li>
              </ul>

              <p>
                The Company may use your personal information to create
                non-personal information, and the Company may then use,
                disclose, transfer and retain the non-personal information as
                set out below in this Privacy Policy.
              </p>
            </ul>

            <p className="font-bold">
              Confidential Profile
              <ul className="">
                <li className="my-5 list-none font-normal text-sm">
                  The Company may develop and maintain a confidential profile
                  for you for use by the Company to provide information,
                  products and services to you, to facilitate your dealings with
                  the Company and as otherwise set out in this Privacy Policy.
                </li>
              </ul>
            </p>
            <p className="font-bold">
              Interest-based advertising
              <ul className="">
                <li className="my-5 list-none font-normal text-sm">
                  The Company&apos;s websites may use cookies, web beacons and
                  other tracking technologies to store on your browser
                  information about your use of the Company&apos;s websites
                  (including the Internet address of your computer) so that the
                  Company&apos;s third party service providers (such as
                  Facebook) may display advertisements likely to be of interest
                  to you when you access other websites, social media sites or
                  other online services.
                </li>
                <li className="my-5 list-none font-normal text-sm">
                  You may opt out of receiving interest-based advertisements on
                  a website, social media site or other online service by using
                  their advertising preferences settings. If you do so, you may
                  still see the Company&apos;s ads on the site, but the ads will
                  not be based on tracking technologies.
                </li>
                <li className="my-5 list-none font-normal text-sm">
                  Information about online interest-based advertising and how
                  you can opt out of receiving those ads are available here:
                  Your ad Choices, About Ads and Network Advertising.
                  Information about ads on Facebook is available here.
                </li>
              </ul>
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="font-bold text-lg">
            06. How the company discloses personal information
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p className="font-bold">
              “The Company may disclose your personal information to our service
              providers, and to other persons in accordance with specific
              consents that you give to us. In some situations, we may also
              disclose your personal information to third parties as permitted
              or required by law (for example, in response to a court order or
              investigation).”
              <ul className="ml-12">
                <li className="my-5 list-decimal font-bold text-sm" id="061">
                  General
                  <ul className="">
                    <li className="my-5 list-none font-normal text-sm">
                      The Company discloses your personal information for
                      purposes relating to or arising from your relationship and
                      transactions with the Company and as otherwise set out in
                      this Privacy Policy or permitted by applicable law. Only
                      those employees of the Company or trusted service
                      providers who need access for business reasons, or whose
                      duties reasonably so require, will be granted access to
                      your personal information. the Company will not sell, rent
                      or trade your personal information to any third party.
                      Please refer to section 7 of this Privacy Policy to learn
                      about your options with respect to the withdrawal of your
                      consent.
                    </li>
                  </ul>
                </li>
                <li className="my-5 list-decimal font-bold text-sm" id="062">
                  Specific Consents
                  <ul className="">
                    <li className="my-5 list-none font-normal text-sm">
                      The Company may disclose your personal information to
                      other persons in accordance with express or implied
                      consents that you give during your interactions and
                      transactions with the Company.
                    </li>
                  </ul>
                </li>
                <li className="my-5 list-decimal font-bold text-sm" id="063">
                  Affiliates and Business Partners
                  <ul className="">
                    <li className="my-5 list-none font-normal text-sm">
                      The Company and business partners may share your personal
                      information with each other and use it in connection with
                      our relationship with you for the provision of our
                      products and services, all in accordance with this Privacy
                      Policy. In certain circumstances, we may share personal
                      information with our business partners with your consent
                      or as otherwise permitted by applicable law.
                    </li>
                  </ul>
                </li>
                <li className="my-5 list-decimal font-bold text-sm" id="064">
                  Suppliers and Service Providers
                  <ul className="">
                    <li className="my-5 list-none font-normal text-sm">
                      The Company may disclose your personal information to its
                      suppliers and service providers (including cloud service
                      providers, payment processors and Backup storage
                      facilities) to assist the Company in the provision of
                      information, products and services to you, to provide
                      services to the Company, to assist the Company to use your
                      personal information as set out in this Privacy Policy and
                      as otherwise permitted by applicable law.
                    </li>
                  </ul>
                </li>
                <li className="my-5 list-decimal font-bold text-sm" id="065">
                  Law Enforcement / Legal Disclosures
                  <ul className="">
                    <li className="my-5 list-none font-normal text-sm">
                      The Company may disclose your personal information as
                      required or authorized by applicable law, including to
                      comply with a subpoena, warrant or court or arbitral order
                      or litigation disclosure obligation. the Company may
                      disclose your personal information to law enforcement
                      agencies or other independent organizations if the Company
                      reasonably believes the disclosure is necessary or
                      appropriate in connection with national security, law
                      enforcement or other issues of public importance, or if
                      the Company reasonably believes the disclosure is
                      necessary or appropriate to protect and enforce the
                      Company&apos;s legal rights, interests and remedies or to
                      protect the rights, interests, business, operations or
                      customers of the Company or other persons (including to
                      detect and prevent fraud and other illegal activities, or
                      to enforce any of the terms of use, terms of service or
                      other agreements that govern access to or use of any of
                      the Company&apos;s products or services). The Company has
                      no control over, or responsibility or liability for, the
                      use, disclosure or retention of your personal information
                      by the agencies, independent organizations or other
                      persons to whom the Company discloses the information in
                      the foregoing circumstances, and the collection, use,
                      disclosure and retention of the disclosed information by
                      those agencies, independent organizations or other persons
                      is not subject to this Privacy Policy.
                    </li>
                  </ul>
                </li>
                <li className="my-5 list-decimal font-bold text-sm" id="066">
                  Business transactions
                  <ul className="">
                    <li className="my-5 list-none font-normal text-sm">
                      The Company may disclose your personal information in
                      connection with a proposed or actual business transaction
                      in which the Company is involved (e.g. a corporate
                      amalgamation, reorganization, merger or acquisition, or
                      the sale or transfer of some or all of the Company&apos;s
                      business or assets), and in those circumstances the
                      Company will require the information recipient to agree to
                      protect the privacy of your personal information in
                      accordance with applicable law.
                    </li>
                  </ul>
                </li>
              </ul>
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="font-bold text-lg">
            07. Your right to withdrawal consent
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p className="font-bold">
              When you interact with the Company, through its websites, in
              person or by other means, you consent to the collection, use,
              disclosure and retention of your personal information as set out
              in this Privacy Policy.
            </p>
            <p className="font-bold">
              You have a right to withdraw your consent at any time. However, if
              you withdraw your consent to purposes that are integral to the
              provision of our products and services, we may have to limit the
              products or services we are able to provide to you. Other
              purposes, such as advertising purposes, are not integral to the
              provision of our products and services and your withdrawal of
              consent to those purposes will not impact the provision of our
              products and services to you.
            </p>
            <p>
              As described in section 2 of this Privacy Policy, in general, when
              you interact with the Company, you consent to the collection, use,
              disclosure and retention of personal information as set out in
              this Privacy Policy. You may withdraw your consent at any time,
              subject to legal or contractual restrictions and reasonable
              notice.
            </p>
            <p>
              <span className="font-bold">
                Withdrawing your consent for integral purposes.
              </span>{" "}
              You may withdraw your consent for purposes that are integral to
              the provision of our products and services, subject to legal or
              contractual restrictions and on reasonable notice to the Company,
              but then you might not be able to proceed with your intended
              interactions or transactions with the Company or otherwise receive
              the full benefit of the Company&apos;s products and services.
            </p>
            <p>
              <span className="font-bold">
                Withdrawing your consent for additional purposes.
              </span>{" "}
              . Withdrawing your consent for additional purposes that are not
              integral to the provision of our products and services will not
              impact the provision of our products and services to you. You may
              withdraw your consent to your personal information being used or
              shared for the following additional purposes:
            </p>
            <ul className="ml-12">
              <li className="my-5 list-disc font-normal text-sm">
                to communicate with you for the purposes of providing you with
                advertising and marketing messages pertaining to additional
                products or services that may be of interest to you. You can
                always limit the electronic communications that the Company
                sends to you. To opt-out of commercial emails, simply click the
                link labelled “unsubscribe” at the bottom of any commercial
                electronic communication we send you. Please note that even if
                you opt out of promotional communications, we may still need to
                contact you with important information about your product or
                service; and
              </li>
              <li className="my-5 list-disc font-normal text-sm">
                to conduct surveys on the quality of our products and services.
              </li>
            </ul>
            <p>
              To withdraw your consent, you may contact the Company&apos;s
              Privacy Officer by mail or email at:
            </p>
            <p>
              {company_data.map((company) => company.legal_name).join(", ")}
              <br />
              {company_data.map((company) => company.address).join(", ")}
              <br />
              {company_data.map((company) => company.city).join(", ")}{" "}
              {company_data.map((company) => company.province).join(", ")}{" "}
              {company_data.map((company) => company.postal).join(", ")}
            </p>
            <p>
              <Link className="inline-flex items-center gap-1" href="/contact/">
                Contact Page <LinkIcon className="size-3 text-red-500" />
              </Link>
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger className="font-bold text-lg">
            08. Location of personal information
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p className="font-bold">
              Generally, we store your personal information in Canada. Some of
              our service providers may process, store and use your personal
              information outside your province or territory or in other
              countries. As a result, your personal information may be subject
              to the laws of other jurisdictions.
            </p>
            <p>
              In general, the Company stores, accesses and uses personal
              information in Canada. Some of the Company&apos;s service
              providers may process, store and use your personal information at
              facilities outside of your province, territory or Canada in the
              course of providing their services to the Company. When the
              Company engages a service provider that operates outside of
              Canada, personal information may be stored, processed, accessed or
              used in any country in which the service provider operates. The
              personal information protection laws of those other countries
              might be different from the laws of the jurisdiction in which you
              reside, and might permit courts, government, law enforcement
              agencies, regulatory agencies and security authorities to access
              your personal information without notice. The Company uses all
              reasonable safeguards, including contractual requirements with our
              service providers, to protect your personal information wherever
              it is located.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger className="font-bold text-lg">
            09. Retention of personal information
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p className="font-bold">
              We only retain your personal information for the period necessary
              to fulfill the purpose for which it was collected, unless required
              or permitted by applicable law.
            </p>
            <p>
              The Company will retain your personal information for the period
              reasonably necessary for the purposes set out or referenced in
              this Privacy Policy and to comply with the Company&apos;s legal
              obligations or enforce or protect the Company&apos;s legal rights,
              or a longer period required or permitted by applicable law.
            </p>
            <p>
              The Company will delete or dispose of your personal information,
              or depersonalize the information, when the Company is no longer
              required or permitted by applicable law to retain the information
              for the purposes set out or referenced in this Privacy Policy.
            </p>
            <p>
              If you ask the Company to delete your information, we will do so
              within a reasonable period of time. Please note that the Company
              may need to retain some information about you in order to satisfy
              our legal and security obligations. For example, some of your
              information may remain in back-up storage even if you ask the
              Company to delete it.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger className="font-bold text-lg">
            10. Protection of personal information
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p className="font-bold">
              We strive to protect your personal information against
              unauthorized access. We maintain administrative, technical and
              physical safeguards to protect your personal information.
            </p>
            <p>
              The privacy and security of your personal information is extremely
              important to us. The Company uses reasonable safeguards, including
              administrative, physical and technical security and safeguarding
              measures, appropriate to the sensitivity of the personal
              information in the Company&apos;s possession or under the
              Company&apos;s control to help protect the information from
              unauthorized access, collection, use, disclosure, deletion or
              similar risks. For example, we use industry-standard encryption
              technology to secure sensitive personal information when it is
              being collected and transmitted over the Internet as well as
              firewalls, site monitoring and/or intrusion detection software.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-11">
          <AccordionTrigger className="font-bold text-lg">
            11. Accuracy and access to personal information
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p className="font-bold">
              You have the right to access your personal information and to have
              it corrected by contacting us as set out in section 19 below.
            </p>
            <p>
              The Company will rely on you to ensure that the personal
              information that you provide to the Company is as accurate,
              complete and up to date as necessary for the purposes for which
              the Company uses the personal information. You will promptly
              notify the Company of any changes to the personal information that
              you provide to the Company using the procedures made available for
              that purpose by the Company or by contacting the Company&apos;s
              Privacy Officer using the contact information set out in Section
              19 below.
            </p>
            <p>
              You may reasonably request access to your personal information
              collected by the Company and information about the Company&apos;s
              use, disclosure and retention of that personal information by
              submitting a written request to the Company&apos;s Privacy Officer
              using the contact information set out in Section 19 below. Subject
              to applicable exceptions and limitations prescribed by applicable
              law, you will be given reasonable access to your personal
              information and you will be entitled to verify the accuracy and
              completeness of your personal information and to have the
              information revised as appropriate. You may be required to pay a
              reasonable fee for access to your personal information. the
              Company may decline to process a request that is unreasonably
              repetitive, frivolous, vexatious or impracticable, that infringes
              or jeopardizes the privacy of other persons, or for other reasons
              permitted by applicable law.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-12">
          <AccordionTrigger className="font-bold text-lg">
            12. Protection of personal information
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p className="font-bold">
              The Company may use non-personal information (information that is
              not about an identifiable individual) for any purpose, unless it
              is combined with personal information.
            </p>
            <p>
              The Company may use your personal information to create and
              collect non-personal information (information that is not about an
              identifiable individual), including personal information that has
              been aggregated or otherwise depersonalized so that the
              information no longer relates to an identifiable individual. the
              Company may use, disclose, transfer and retain non-personal
              information for any purpose and in any manner whatsoever. If
              non-personal information is combined with your personal
              information, then the Company will treat the combined non-personal
              information as personal information for the purposes of this
              Privacy Policy for as long as the non-personal information is
              combined with your personal information.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-13">
          <AccordionTrigger className="font-bold text-lg">
            13. Other Websites and Businesses
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p className="font-bold">
              This Privacy Policy only addresses the collection, use, disclosure
              and retention of personal information by the Company. Other
              websites have their own privacy policies and practices.
            </p>
            <p>
              The Company&apos;s websites and correspondence (including emails
              and messages) may include advertisements for products and services
              offered by independent businesses or links to websites or mobile
              apps operated by independent businesses. the Company has no
              responsibility or liability for, or control over, those other
              websites, mobile apps, online services or businesses, their
              products or services, or their collection, use, disclosure or
              retention of your personal information. This Privacy Policy does
              not apply to the collection, use, disclosure or retention of your
              personal information by those websites, mobile apps, online
              services and independent businesses. If you have questions about
              how those websites, online services or independent businesses
              collect, use, disclose or retain personal information, please
              contact the owner or operator of the website, service or business.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-14">
          <AccordionTrigger className="font-bold text-lg">
            14. Social media and similar situations
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p className="font-bold">
              This Privacy Policy only addresses the collection, use, disclosure
              and retention of personal information by the Company. Social media
              websites have their own privacy policies and practices and you are
              responsible for the personal information you post to those
              websites.
            </p>
            <p>
              When you use certain aspects of the Company&apos;s websites or
              other services to access or post information to social media
              websites (e.g. there may be links to the Company&apos;s Facebook,
              Twitter, Instagram or LinkedIn pages), the personal information
              that you post or share in connection with these third party
              websites is visible to other persons and can be read, collected,
              used and disclosed by other persons, including to send unsolicited
              messages to you. When you click on a link to a social media
              website, you will leave the the Company websites and go to that
              social media website. Any information provided to such third party
              social media websites and other websites is governed by their own
              privacy policies, which you may read on the applicable website.
              You are solely responsible for the personal information that you
              choose to post or share in those situations. The Company has no
              control over, or responsibility or liability for, the collection,
              use, disclosure and retention of the personal information that you
              disclose in those situations, and this Privacy Policy{" "}
              <span className="font-bold">does not</span> apply to the
              collection, use, disclosure or retention of your personal
              information by those websites.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-15">
          <AccordionTrigger className="font-bold text-lg">
            15. Children and personal information
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p className="font-bold">
              We do not knowingly collect personal information from children
              under 13 years of age without the consent of a legal guardian.
            </p>
            <p>
              We do not knowingly collect personal information from children
              under 13 years of age without the consent of a legal guardian. To
              purchase our products and services, we must obtain the consent of
              your parent or legal guardian if you are under the age of majority
              and consent is a requirement in the jurisdiction of your
              residence. If we learn we have collected or received personal
              information from a child where parental consent was required, we
              will delete that information. If you believe we might have any
              information from or about a child where we should have obtained
              parental consent, please contact the Company&apos;s Privacy
              Officer using the contact information set out in Section 19 below.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-16">
          <AccordionTrigger className="font-bold text-lg">
            16. Disclaimers, liability exclusions/limitations and disputes
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p className="font-bold">
              The other agreements you have with the Company may contain
              disclaimers, liability exclusions and limitations and dispute
              resolution provisions that apply to matters arising in relation to
              this Privacy Policy, to the extent permitted by applicable law.
            </p>
            <p>
              The agreements (including any website terms of use) that you
              accept when you apply or register for, or order or use, the
              Company&apos;s products and services contain important provisions,
              including provisions disclaiming, limiting or excluding the
              liability of the Company and other persons (including service
              providers) and provisions determining the applicable law and
              jurisdiction for the resolution of disputes. To the extent
              permitted by applicable law, each of those provisions applies to
              any dispute that may arise in relation to this Privacy Policy or
              the Company&apos;s collection, use, disclosure and retention of
              your personal information, and are of the same force and effect as
              if they were reproduced directly in this Privacy Policy. Nothing
              in this Privacy Policy amends any of those other agreements.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-17">
          <AccordionTrigger className="font-bold text-lg">
            17. Changes to this policy
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p className="font-bold">
              Generally, changes to this Privacy Policy will be posted to the
              Company&apos;s websites. Please check the “Last Updated” date at
              the top of this Privacy Policy and review any changes since the
              last version.
            </p>
            <p>
              The Company may change this Privacy Policy as it applies to the
              Company from time to time by posting a new version of this Privacy
              Policy on the Company&apos;s websites. the Company&apos;s
              collection, use, disclosure and retention of your personal
              information will be governed by the version of this Privacy Policy
              in effect at that time. Your continued dealings with the Company
              after any change to this Privacy Policy will signify your consent
              to the collection, use, disclosure and retention of your personal
              information by the Company as set out in the changed Privacy
              Policy. Accordingly, you should check the “Last Updated” date of
              this Privacy Policy (at the top of this Privacy Policy) and review
              any changes since the last version.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-18">
          <AccordionTrigger className="font-bold text-lg">
            18. Notices to you
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              You consent to the Company sending you emails (to the email
              address you provide to the Company) regarding this Privacy Policy
              and related matters.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-19">
          <AccordionTrigger className="font-bold text-lg">
            19. Who Do I Contact with Privacy Questions?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              If you have any comments or questions about this Privacy Policy or
              how the Company deals with your personal information, please
              contact the Company&apos;s Privacy Officer by mail or email at:
            </p>
            <p>
              {company_data.map((company) => company.legal_name).join(", ")}
              <br />
              {company_data.map((company) => company.address).join(", ")}
              <br />
              {company_data.map((company) => company.city).join(", ")}{" "}
              {company_data.map((company) => company.province).join(", ")}{" "}
              {company_data.map((company) => company.postal).join(", ")}
            </p>
            <p>
              <Link className="inline-flex items-center gap-1" href="/contact/">
                Contact Page <LinkIcon className="size-3 text-red-500" />
              </Link>
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-20">
          <AccordionTrigger className="font-bold text-lg">
            20. Changes Made
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>Last Updated: November 1, 2025</p>
            <p>Original: September 1, 2021</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
