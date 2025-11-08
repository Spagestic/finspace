import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Make sure the import path is correct

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: "What is finspace and who is it for?",
    answer:
      "Finspace is a financial literacy and budgeting platform designed specifically for university students. It helps you track your expenses, create a budget that works for your student life, and build healthy financial habits that will last a lifetime.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Absolutely. We use bank-level security and end-to-end encryption to protect your data. Your privacy and security are our highest priorities, and we never sell your information to third parties.",
  },
  {
    question: "Is this app free for students?",
    answer:
      "Yes! The core features of finspace, including expense tracking, budgeting, and goal setting, are completely free for all university students. We may offer optional premium features in the future.",
  },
  {
    question: "Can I connect my bank account?",
    answer:
      "Yes, you can securely connect your bank accounts through our trusted provider. This allows for automatic transaction importing and categorization, saving you time and giving you a real-time view of your finances.",
  },
  {
    question: "How does finspace help me save money?",
    answer:
      "By giving you a clear picture of where your money goes, finspace empowers you to make smarter spending decisions. You can set category-specific budgets (like for 'dining out' or 'shopping') and receive alerts to help you stay on track and reach your savings goals.",
  },
];

export default function FAQ() {
  return (
    <div className="flex w-full items-start justify-center" id="faqs">
      <div className="flex w-full flex-col items-start justify-start gap-8 px-4 py-8 md:px-12 md:py-18 lg:flex-row lg:gap-12">
        {/* Left Column - Header */}
        <div className="flex w-full flex-col items-start justify-center gap-4 lg:max-w-md lg:flex-1 lg:py-5">
          <h2 className="w-full font-sans text-2xl font-semibold leading-tight tracking-tight text-foreground md:text-3xl lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="w-full font-sans text-sm font-normal leading-7 text-muted-foreground md:text-base">
            Everything you need to know about managing
            <br className="hidden md:block" />
            your finances as a student with finspace.
          </p>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="flex w-full flex-col items-center justify-center lg:flex-1">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left text-base font-medium md:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground md:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
