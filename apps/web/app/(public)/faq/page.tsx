import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";
import { Badge } from "@workspace/ui/components/badge";
import { type FaqType, faqs } from "@/data/faq";

export default function FormsPage() {
  // Group FAQs by category
  const groupedFaqs = faqs.reduce<Record<string, FaqType[]>>((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    (acc[faq.category] as FaqType[]).push(faq);
    return acc;
  }, {});

  return (
    <div className="mx-auto w-full max-w-[95%] bg-background px-5 pt-10 backdrop-blur md:max-w-5xl">
      <h1 className="mb-1 text-center font-extrabold text-3xl text-primary leading-tight md:text-left">
        Frequently Asked Questions
      </h1>
      <p className="mb-6 text-center text-lg text-primary md:text-left">
        Answers to the most common questions
      </p>
      <div>
        {Object.entries(groupedFaqs).map(([category, items]) => (
          <div className="mb-8" key={category}>
            {/* Category Section Heading */}
            <Badge className="mb-4 text-xl" variant="default">
              {category}
            </Badge>
            <Accordion collapsible type="single">
              {/* Render FAQs for this Category */}
              {items.map((faq: FaqType) => (
                <AccordionItem key={faq.index} value={String(faq.index)}>
                  <AccordionTrigger className="font-bold">
                    {faq.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    {/** biome-ignore lint/security/noDangerouslySetInnerHtml: I override this */}
                    <div dangerouslySetInnerHTML={{ __html: faq.faqText }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}
