import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";
import { currentYear } from "@workspace/utils";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { company_data } from "@/data/company-data";

export default function TermsOfUse() {
  return (
    <div className="mx-auto w-full max-w-[95%] bg-background px-5 pt-10 backdrop-blur md:max-w-5xl">
      <h1 className="mb-1 text-center font-extrabold text-3xl text-primary leading-tight md:text-left">
        Terms of Use
      </h1>
      <p className="mb-6 text-center text-lg text-primary md:text-left">
        Allowable usage of the Cole CPA Group website
      </p>
      <Accordion
        className="max-w-3xl"
        collapsible
        defaultValue="item-1"
        type="single"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold text-lg">
            01. Your acceptance of these terms of use
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              These Terms of Use are a binding agreement between you and{" "}
              <span className="italic">
                {" "}
                Lenard Cole CPA Professional Corporation [operating as Cole CPA
                Group]
              </span>{" "}
              (“the Company”) regarding your access to and use of the Lenard
              Cole CPA Professional Corporation WEBSITE (the “Website”). Each
              time you use the Website, you signify your unconditional
              acceptance and agreement, without limitation or qualification, to
              the most current version of these Terms of Use. If you do not
              unconditionally accept and agree to these Terms of Use, then you
              may not use the Website.
            </p>
            <p>
              In these Terms of Use, a reference to the Website includes all of
              the Website&apos;s content (including all text, graphics, images,
              video, and other elements available on or through the Website) and
              the design, structure, selection, arrangement and look and feel of
              each element of Website content and the Website as a whole.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-bold text-lg">
            02. Lenard Cole CPA Professional Corporation
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              You acknowledge that the Company is a Professional Corporation
              incorporated under{" "}
              <span className="italic">The Business Corporations Act</span> and
              the{" "}
              <span className="italic">
                {" "}
                Professional Corporations Act of Saskatchewan.
              </span>
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-bold text-lg">
            03. Other agreements
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              These Terms of Use related to the Website only. Products and
              services advertised on or available through the Website are
              governed by other applicable agreements prescribed by the Company
              (collectively, the “Other Agreements”). If there is a conflict or
              inconsistency between any Other Agreements and these Terms of Use,
              the Other Agreements will govern regarding the specific purchase,
              portion, feature or service to which they apply.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="font-bold text-lg">
            04. Changes to these Terms of Use
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              The Company in its discretion may change these Terms of Use at any
              time and from time to time, without any prior notice, by posting
              the changed Terms of Use. The changed Terms of Use are effective
              immediately on posting on the Website, unless the changed Terms of
              Use expressly state otherwise. It is your responsibility to check
              the <span className="italics">“Last Updated”</span> date at the
              bottom of these Terms of Use and review any changes since the
              previous version. By using the Website after these Terms of Use
              have been changed by the Company, you signify your unconditional
              acceptance and agreement to be bound by the changed Terms of Use.
              You may not change these Terms of Use in any manner.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="font-bold text-lg">
            05. Permitted users
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              The Website may be used only by individuals (natural persons) and
              are the age of majority (which in most jurisdictions is either 18
              or 19 years) in the jurisdiction in which they live and are
              capable of forming a binding contract under applicable law. You
              may not use the Website if you do not accept and agree to these
              Terms of Use, if you have breached these Terms of Use or if your
              permission to use the Website has been suspended or terminated by
              the Company.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="font-bold text-lg">
            06. Privacy Policy
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              The Website collects information that you specifically and
              knowingly provide, and uses technological measures to collect
              information about your use of the Website. By using the Website,
              you consent to the collection, use, disclosure and retention of
              your personal information by or on behalf of the Company as
              explained in the Company&apos;s{" "}
              <Link
                className="inline-flex items-center gap-1"
                href="/privacy-policy"
              >
                Privacy Policy <LinkIcon className="size-3 text-red-500" />
              </Link>
              , as revised from time to time, and as otherwise permitted by
              applicable law.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="font-bold text-lg">
            07. No advice
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              The Website is for{" "}
              <span className="italics font-bold">
                informational and educational purposes only
              </span>
              . The Website is not intended to be a comprehensive or detailed
              statements concerning the matters addressed, and is not
              professional advice or recommendations (including accounting, tax,
              financial or other professional advice). It is your responsibility
              to obtain appropriate advice suitable to your particular
              circumstances from a qualified professional before acting or
              omitting to act based on any information obtained on or though the
              Website.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger className="font-bold text-lg">
            08. Permitted and prohibited use of the website
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              Subject to these Terms of Use and all applicable laws, you may use
              the Website for your lawful, personal use for non-commercial
              purposes only, only in the manner purposefully made available by
              the Website and subject to these Terms of Use and all applicable
              laws. Use of the Website for any other purpose or in any other
              manner is strictly prohibited. You will not:
            </p>
            <ul className="ml-12">
              <li className="mt-2 list-decimal font-normal text-sm" id="081">
                use the Website in any manner or for any purpose except as
                expressly permitted by these Terms of Use;
              </li>
              <li className="mt-2 list-decimal font-normal text-sm" id="082">
                use the Website for a commercial or business purpose (whether or
                not for profit) or on behalf of, or for the benefit of, any
                other person;
              </li>
              <li className="mt-2 list-decimal font-normal text-sm" id="083">
                attempt to circumvent the ordinary navigational structure,
                technical delivery systems or display of the Website or attempt
                to access or use the Website by any means that is not purposely
                made available for that purpose by the Company;
              </li>
              <li className="mt-2 list-decimal font-normal text-sm" id="084">
                use the Website in a way that interferes with or disrupts the
                security, integrity, functionality, operation or performance of
                the Website or any related computer system, network or data;
              </li>
              <li className="mt-2 list-decimal font-normal text-sm" id="085">
                license, sublicense, grant, sell, resell, lend, rent, lease,
                loan, share, transfer, assign, pledge, copy, reproduce,
                distribute, imitate, publish, republish, translate, re-post,
                publicly display, publicly perform, transmit, distribute, create
                any interest in, commercially exploit, or otherwise give or make
                available or permit access or use of the Website to or for the
                benefit of any other person, whether as a service bureau or
                otherwise, and with or without charge;
              </li>
              <li className="mt-2 list-decimal font-normal text-sm" id="086">
                index, crawl, catalogue, mirror, frame, scrape, cache, or
                otherwise collect or mine data from the Website for any purpose
                whatsoever, using any technologies, tools or methods (including
                robots, spiders, crawlers, or other automatic devices, programs
                or methodologies) whatsoever;
              </li>
              <li className="mt-2 list-decimal font-normal text-sm" id="087">
                alter, violate, circumvent, conceal, modify or remove any
                notices (including proprietary rights notices), proprietary
                codes or locks, means of identification, digital rights tools or
                management information, technological protection measures,
                security or control measures, or agreements on, in or in
                relation to the Website; or
              </li>
              <li className="mt-2 list-decimal font-normal text-sm" id="088">
                authorize, permit, assist, encourage or enable any other person
                to do any of the foregoing or to use the Website in a way that
                would constitute an infringement of the rights of the Company or
                a breach of these Terms of Use if it were done by you. The
                foregoing restrictions do not apply if and to the extent, but
                only to the extent, that the restrictions are prohibited by
                applicable law.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger className="font-bold text-lg">
            09. Ownership of website
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              Copyright © 2019 - {currentYear()}{" "}
              {company_data.map((company) => company.legal_name).join(", ")}.
              All Rights Reserved. The Website and the technologies and data
              used to operate the Website and all related proprietary rights
              (including copyright) are owned solely by the Company and its
              licensors and are protected by Canadian and international
              intellectual property laws. You will not acquire any right, title
              or interest in, to or associated with the Website or any related
              technologies and data.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger className="font-bold text-lg">
            10. Feedback
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              If you give feedback about the Website (including any ideas or
              suggestions for enhancements or improvements) to the Company, then
              the Company, suppliers and licensors and their respective
              successors, assigns and licensees may use and commercialize the
              feedback in any way and for any purpose without providing any
              compensation or attribution to you or any other person.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-11">
          <AccordionTrigger className="font-bold text-lg">
            11. Linked Websites and References
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              For your convenience, the Website may provide links or references
              to Internet sites or resources operated by independent persons
              (collectively “Linked Sites”). Activating a link may cause your
              browser to leave the Website and connect with the Linked Site.
              Linked Sites are independent from the Company, and the Company
              does not endorse, and have responsibility or liability for or
              control over, any Linked Site, any products, services or content
              available through a Linked Site or the collection of your personal
              information through a Linked Site or by the owner or operator of a
              Linked Site. Your use of a Linked Site and your dealings with the
              owner or operator of a Linked Site, are at your own risk, and you
              will not make any claim against the Company arising from,
              connected with, or relating to your use of a Linked Site, your
              dealings with the owner or operator of a Linked Site, or any
              product, service or content available through a Linked Site.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-12">
          <AccordionTrigger className="font-bold text-lg">
            12. DISCLAIMERS AND EXCLUSION OF LIABILITY
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              GENERAL DISCLAIMERS: TO THE FULLEST EXTENT PERMITTED BY APPLICABLE
              LAW, THE WEBSITE IS MADE AVAILABLE AND PROVIDED TO YOU ON AN “AS
              IS”, “AS AVAILABLE” AND “WITH ALL FAULTS” BASIS AND WITHOUT ANY
              REPRESENTATION, WARRANTY, CONDITION OR GUARANTEE OF ANY NATURE OR
              KIND WHATSOEVER, WHETHER EXPRESS, IMPLIED OR STATUTORY, OR ARISING
              FROM CUSTOM OR TRADE USAGE OR BY ANY COURSE OF DEALING OR COURSE
              OF PERFORMANCE, INCLUDING ANY REPRESENTATION, WARRANTY, CONDITION
              OR GUARANTEE OF OR RELATING TO ACCURACY, AVAILABILITY,
              COMPLETENESS, TIMELINESS, LACK OF ERRORS, VIRUSES OR OTHER HARMFUL
              COMPONENTS, CORRECTION OF DEFECTS, SECURITY, RELIABILITY, QUALITY,
              FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY,
              NON-INFRINGEMENT OR RESULTS, ALL OF WHICH ARE HEREBY WAIVED BY YOU
              AND DISCLAIMED BY THE COMPANY TO THE FULLEST EXTENT PERMITTED BY
              APPLICABLE LAW; AND NO REPRESENTATION, WARRANTY, CONDITION OR
              GUARANTEE IS OR WILL BE CREATED BY ANY ADVICE OR INFORMATION,
              WHETHER ORAL OR WRITTEN, PROVIDED BY OR ON BEHALF OF THE COMPANY.
            </p>
            <p>
              IF YOU ARE DISSATISFIED WITH THE WEBSITE, YOUR SOLE REMEDY IS TO
              STOP USING THE WEBSITE.
            </p>
            <p>
              TECHNOLOGY DISCLAIMERS: THE WEBSITE MAY BE SUBJECT TO LIMITATIONS,
              DELAYS AND OTHER PROBLEMS INHERENT IN THE USE OF THE INTERNET AND
              ELECTRONIC COMMUNICATIONS. THE COMPANY IS NOT RESPONSIBLE OR
              LIABLE FOR ANY DELAYS, DELIVERY FAILURES OR OTHER DAMAGE OR LOSS
              RESULTING FROM ANY OF THOSE PROBLEMS. LINKED SITES DISCLAIMERS:
              WITHOUT LIMITING ANY OTHER DISCLAIMER, YOU ARE SOLELY RESPONSIBLE
              FOR THE SELECTION OF LINKED SITES TO ACHIEVE YOUR INTENDED
              RESULTS, AND YOU ACCESS AND USE LINKED SITES AT YOUR OWN RISK. THE
              COMPANY DOES NOT MAKE OR GIVE ANY REPRESENTATION, WARRANTY,
              CONDITION OR GUARANTEE OF ANY NATURE OR KIND WHATSOEVER (WHETHER
              EXPRESS, IMPLIED OR STATUTORY, OR ARISING FROM CUSTOM OR TRADE
              USAGE OR BY ANY COURSE OF DEALING OR COURSE OF PERFORMANCE)
              REGARDING ANY LINKED SITE.{" "}
              <span className="font-semibold">
                THE COMPANY DOES NOT CONTROL, AND IS NOT RESPONSIBLE OR LIABLE
                FOR, ANY LINKED SITE.
              </span>
            </p>
            <p>
              EXCLUSION OF LIABILITY: TO THE FULLEST EXTENT PERMITTED BY
              APPLICABLE LAW, IN NO EVENT AND UNDER NO CIRCUMSTANCES WILL THE
              COMPANY BE LIABLE TO YOU OR ANY OTHER PERSON FOR ANY LOSS, DAMAGE
              OR LIABILITY (INCLUDING DIRECT, INDIRECT, SPECIAL, INCIDENTAL,
              CONSEQUENTIAL, EXEMPLARY AND PUNITIVE DAMAGES) ARISING FROM,
              CONNECTED WITH OR RELATING TO YOUR USE OF OR INABILITY TO USE THE
              WEBSITE OR ANY RELATED MATTER UNDER ANY THEORY (INCLUDING
              CONTRACT, TORT, STRICT LIABILITY, STATUTORY LIABILITY OR ANY OTHER
              THEORY OF LAW), REGARDLESS OF ANY NEGLIGENCE OR OTHER FAULT OR
              WRONGDOING (INCLUDING FUNDAMENTAL BREACH OR GROSS NEGLIGENCE) BY
              OR ON BEHALF OF THE COMPANY EVEN IF OTHER REMEDIES ARE NOT
              AVAILABLE OR DO NOT ADEQUATELY COMPENSATE YOU OR ANY OTHER PERSON
              FOR THE LOSS, DAMAGE AND LIABILITY, AND EVEN IF THE COMPANY KNEW
              OR SHOULD HAVE KNOWN THE POSSIBILITY OF THE LOSS, DAMAGE OR
              LIABILITY BEING INCURRED.
            </p>
            <p>
              DEFINITION: IN THESE TERMS OF USE, “THE COMPANY” MEANS{" "}
              <span className="uppercase">
                {company_data.map((company) => company.legal_name).join(", ")}
              </span>{" "}
              AND EACH OF ITS MEMBER FIRMS, LICENSORS, SUPPLIERS AND SERVICE
              PROVIDERS, AND EACH OF THEIR RESPECTIVE DIRECTORS, OFFICERS,
              EMPLOYEES, CONTRACTORS, AGENTS, SHAREHOLDERS, DISTRIBUTORS AND
              REPRESENTATIVES, JOINTLY AND SEVERALLY.
            </p>
            <p>
              THE FOREGOING DISCLAIMERS AND EXCLUSIONS OF LIABILITY DO NOT APPLY
              IF AND TO THE EXTENT PROHIBITED BY APPLICABLE LAW.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-13">
          <AccordionTrigger className="font-bold text-lg">
            13. Restrictions / Changes / Termination
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              The Website may contain technologies that restrict or limit the
              use of the Website (including restrictions based on time or
              location). The Company in its discretion may change, suspend or
              terminate the Website, or limit, suspend or terminate your use of
              the Website, effective immediately at any time and without any
              prior notice or liability to you or any other person. The Website
              may be interrupted or unavailable from time to time, including for
              maintenance or due to causes beyond the control of the Company,
              all without notice or liability to you or any other person. If
              your permission to use the Website is terminated for any reason,
              then these Terms of Use will continue to apply and be binding
              regarding your access to and use of the Website before termination
              and all related matters (including any related dispute).
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-14">
          <AccordionTrigger className="font-bold text-lg">
            14. Governing Law
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              These Terms of Use and the Website and all related matters are
              governed by, and will be construed and interpreted solely in
              accordance with, the laws of the Province of Saskatchewan, Canada
              and applicable federal laws of Canada, excluding any rules of
              private international law or the conflict of laws that would lead
              to the application of the laws of any other jurisdiction.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-15">
          <AccordionTrigger className="font-bold text-lg">
            15. Disputes
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              All disputes arising from, connected with or relating to these
              Terms of Use, your use of the Website or any related matter will
              be resolved before the{" "}
              <span className="italic">
                Court of Queen&apos;s Bench for Saskatchewan
              </span>{" "}
              or
              <span className="italic"> Provincial Court of Saskatchewan</span>{" "}
              sitting in the City of Saskatoon, and you and the Company each
              hereby irrevocably submit and attorn to the original and exclusive
              jurisdiction of that court in respect of all disputes, except that
              the Company in its discretion may commence legal proceedings
              against you in the courts of any other jurisdiction seeking
              injunctive relief (or similar urgent legal remedies) to enforce
              these Terms of Use and protect the Company’s rights in, to and
              associated with the Website and its content.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-16">
          <AccordionTrigger className="font-bold text-lg">
            16.Indemnification of{" "}
            {company_data.map((company) => company.legal_name).join(", ")}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              You will defend, indemnify and save and hold harmless the Company,
              their staff and their successors and assigns from and against any
              and all losses, damages, liabilities, costs, claims, complaints,
              demands, actions, suits and proceedings (including reasonable
              lawyers&apso; fees) arising from, connected with or relating to
              any breach by you of these Terms of Use or your use of the
              Website.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-17">
          <AccordionTrigger className="font-bold text-lg">
            17. General matters
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              <span className="font-bold">Miscellaneous:</span> These Terms of
              Use are binding on you and your heirs, executors, administrators,
              successors and personal representatives. These Terms of Use are
              for the benefit of the Company. No consent or waiver by the
              Company to or of any breach of these Terms of Use by you will be
              effective unless in writing and signed by the Company or will be
              considered to be a consent to or waiver of a continuing breach or
              any other breach by you. The rights and remedies of the Company
              under these Terms of Use are cumulative and not exhaustive or
              exclusive of any other rights or remedies to which the Company may
              be lawfully entitled under these Terms of Use or at law, and the
              Company may pursue any and all rights and remedies concurrently,
              consecutively and alternatively. You will not assign or transfer
              these Terms of Use or any of your rights and obligations under
              these Terms of Use without the express prior written consent of
              the Company, which consent may be withheld in the Company’s
              discretion. The Company may, without your consent, assign its
              rights and obligations under these Terms of Use. If any provision
              of these Terms of Use is held by a court or arbitrator of
              competent jurisdiction to be unenforceable or invalid for any
              reason, then the provision will be deemed severed from these Terms
              of Use and the remaining provisions will continue in full force
              and effect unless as a result of the severance these Terms of Use
              would fail in their essential purpose.
            </p>
            <p>
              <span className="font-bold">Interpretation:</span> In these Terms
              of Use:
            </p>
            <ul className="ml-12">
              <li className="my-5 list-decimal font-normal text-sm">
                {" "}
                a reference to “Terms of Use” refers to these General Terms of
                Use as a whole, and not just to the particular provision in
                which those words appear;
              </li>
              <li className="my-5 list-decimal font-normal text-sm">
                headings are for reference only;
              </li>
              <li className="my-5 list-decimal font-normal text-sm">
                words importing the singular number only include the plural, and
                vice versa;
              </li>
              <li className="my-5 list-decimal font-normal text-sm">
                “person” includes an individual, corporation and any other legal
                entity;
              </li>
              <li className="my-5 list-decimal font-normal text-sm">
                “including” or “includes” means including or includes (as
                applicable) without limitation or restriction;
              </li>
              <li className="my-5 list-decimal font-normal text-sm">
                “law” includes common law, equity, statutes and regulations; and
              </li>
              <li className="my-5 list-decimal font-normal text-sm">
                “discretion” mean a person’s sole, absolute and unfettered
                discretion.
              </li>
            </ul>
            <p>
              <span className="font-bold">Complete Agreement:</span> These Terms
              of Use set out the entire agreement between you and the Company
              regarding your use of the Website. These Terms of Use may not be
              modified except as set out in section 3. There are no
              representations, warranties, terms, conditions, undertakings or
              collateral agreements, express, implied or statutory, between you
              and the Company regarding the Website. For greater certainty,
              products and services advertised on or available through the
              Website are governed by other applicable agreements.
            </p>
            <p>
              <span className="font-bold">Language:</span> You and the Company
              have each expressly requested and required that these Terms of Use
              and all related notices and other documents be drawn up in the
              English language. Les parties conviennent et exigent expressément
              que ce Contrat et tous les documents qui s’y rapportent soient
              rédigés en anglais. Subject to applicable law, any non-English
              translation of these Terms of Use provided by the Company is for
              convenience only, and if there is a conflict or inconsistency
              between the English version and a non-English version then the
              English version of these Terms of Use will take priority and
              govern. If you have any questions or comments regarding these
              Terms of Use, please contact the Company’s customer care at
              <Link href="/contact">Contact Page.</Link>
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-18">
          <AccordionTrigger className="font-bold text-lg">
            18. ACCEPTANCE
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              IF YOU<span className="font-bold"> DO NOT ACCEPT AND AGREE</span>{" "}
              TO THESE TERMS AND CONDITIONS, THEN YOU MAY NOT USE THE WEBSITE.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-19">
          <AccordionTrigger className="font-bold text-lg">
            19. Changes Made
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
