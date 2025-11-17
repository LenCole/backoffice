export type FaqType = {
  index: string;
  category: string;
  title: string;
  faqText: string;
};

export const faqs: FaqType[] = [
  // Bookkeeping
  {
    index: "B1",
    category: "Bookkeeping",
    title: "I am way behind can you help me catch up?",
    faqText:
      "Yes, we can help you get organized and set you on the right path. It’s never to late to catch up",
  },
  {
    index: "B2",
    category: "Bookkeeping",
    title: "Should you outsource your bookkeeping?",
    faqText: `You should consider outsourcing your bookkeeping for the following reasons:
      <ul>
      <li>&#x2022;&emsp;Reduce and control operating costs.</li>
      <li>&#x2022;&emsp;Free up your limited resources for other purposes.</li>
      <li>&#x2022;&emsp;You do not have the resources internally.</li>
      <li>&#x2022;&emsp;Your record keeping is difficult to manage or is out of control.</li>
      <li>&#x2022;&emsp;Improve your business focus.</li>
      <li>&#x2022;&emsp;Ability to grow your organization</li>
      </ul>`,
  },
  {
    index: "B3",
    category: "Bookkeeping",
    title: "Questions to consider when deciding to outsource your bookkeeping.",
    faqText: `Ask yourself:
      <ul>
      <li>&#x2022;&emsp;If I were to start this business / company today would I choose to do the books myself?</li>
      <li>&#x2022;&emsp;Do you find it difficult to organize your records?</li>
      <li>&#x2022;&emsp;Are you always behind in getting your information to your accountant?</li>
      <li>&#x2022;&emsp;Am I so good at maintaining and updating my books and records that others would hire me to do it for them?</li>
      </ul>`,
  },
  {
    index: "B4",
    category: "Bookkeeping",
    title: "What are the benefits of outsourcing your bookkeeping.",
    faqText: `Outsourcing your bookkeeping allows you to:
      <ul>
      <li>&#x2022;&emsp;Focus on your core competencies.</li>
      <li>&#x2022;&emsp;Positioning Management (owners) as a “user” rather than a “generator” of your information.</li>
      <li>&#x2022;&emsp;Receive accurate and timely information.</li>
      <li>&#x2022;&emsp;Employ up-to-date accounting technology, without the upfront costs.</li>
      <li>&#x2022;&emsp;Reduce your costs of having an accountant/bookkeeper on staff.</li>
      <li>&#x2022;&emsp;Obtain greater access to skilled people.</li>
      <li>&#x2022;&emsp;No office space is required.</li>
      <li>&#x2022;&emsp;No training is needed.</li>
      <li>&#x2022;&emsp;No Payroll taxes (EI, CPP).</li>
      <li>&#x2022;&emsp;Pay only for work actually carried out.</li>
      <li>&#x2022;&emsp;Reports available each period. It summarizes your total business assets, liabilities and net worth at a given point in time so you can make the right decisions based on up-to-date information.</li>
      <li>&#x2022;&emsp;Monthly Income (Profit & Loss) Statement – a monthly breakdown of you sales and expenses for the current month, and a year-to-date total.</li>
      </ul>
      `,
  },
  {
    index: "B5",
    category: "Bookkeeping",
    title: "Does outsourcing cost more than hiring my own internal accountant?",
    faqText: `Generally it will cost NO more than it is currently costing you for up-to-date information and most time it will be less:
      <ul>
      <li>&#x2022;&emsp;You will not have employee benefits, pension contributions or employer costs for government programs</li>
      <li>&#x2022;&emsp;You will not have to provide training to employees to keep them up-to-date</li>
      <li>&#x2022;&emsp;You will not have to keep up-to-date with technology for your accounting.</li>
      <li>&#x2022;&emsp;Savings also come in the freeing up of your time to work on your business</li>
      </ul>`,
  },
  {
    index: "B6",
    category: "Bookkeeping",
    title: "Who controls my information?",
    faqText: ` <ul>
      <li>&#x2022;&emsp;Regardless of where the work is performed, you maintain ownership of your information.</li>
      <li>&#x2022;&emsp;Management retains control related to who can access to the information, no matter where it is located.</li>
      <li>&#x2022;&emsp;Control is also maintained through your acceptance of which services, pricing and contractual provisions you agree to.</li>
      </ul>`,
  },
  {
    index: "B7",
    category: "Bookkeeping",
    title: "Is my information secure?",
    faqText: `Yes, we use a variety of security measures including:
      <ul>
      <li>&#x2022;&emsp;Encrypted internal backups</li>
      <li>&#x2022;&emsp;Encrypted external offsite backups</li>
      <li>&#x2022;&emsp;Password protected client sites</li>
      <li>&#x2022;&emsp;Password protected and/or encrypted data transfer</li>
      <li>&#x2022;&emsp;Firewalls on all our computer systems</li>
      </ul>`,
  },
  {
    index: "B8",
    category: "Bookkeeping",
    title: "Can you come to my business?",
    faqText:
      "Working off-site is the most cost effective method for small to medium size businesses, as we have a state of the art office and equipment and there is no need for the client to purchase software, printers, computers etc.",
  },
  {
    index: "B9",
    category: "Bookkeeping",
    title: "Do you have remote or cloud options?",
    faqText:
      "Yes, we utilize cloud computing to allow you to access your data securely in your own private environment.",
  },
  // Payroll
  {
    index: "P1",
    category: "Payroll",
    title: "Who controls my information?",
    faqText: `<ul>
      <li>&#x2022;&emsp;Regardless of where the work is performed, you maintain ownership of your information.</li>
      <li>&#x2022;&emsp;Management retains control related to who can access to the information, no matter where it is located.</li>
      <li>&#x2022;&emsp;Control is also maintained through your acceptance of which services, pricing and contractual provisions you agree to.</li>
      </ul>`,
  },
  {
    index: "P2",
    category: "Payroll",
    title: "Do you process payroll?",
    faqText: `Yes, we process payroll for a number of our clients. This includes:
      <ul>
      <li>&#x2022;&emsp;Monthly, Semi-Monthly, Biweekly, Weekly Payroll Runs</li>
      <li>&#x2022;&emsp;CRA Payroll submissions</li>
      <li>&#x2022;&emsp;ROEs</li>
      <li>&#x2022;&emsp;Annual T4’s</li>
      <li>&#x2022;&emsp;T5018 Forms for contractors</li>
      </ul>`,
  },
  {
    index: "P3",
    category: "Payroll",
    title: "Is my information secure?",
    faqText: `Yes, we use a variety of security measures including:
      <ul>
      <li>&#x2022;&emsp;Encrypted internal backups</li>
      <li>&#x2022;&emsp;Encrypted external offsite backups</li>
      <li>&#x2022;&emsp;Password protected client sites</li>
      <li>&#x2022;&emsp;Password protected and/or encrypted data transfer</li>
      <li>&#x2022;&emsp;Firewalls on all our computer systems</li>
      </ul>`,
  },

  // Income Tax
  {
    index: "I1",
    category: "Income Tax",
    title: "Who controls my information?",
    faqText: `<ul>
      <li>&#x2022;&emsp;Regardless of where the work is performed, you maintain ownership of your information.</li>
      <li>&#x2022;&emsp;Management retains control related to who can access to the information, no matter where it is located.</li>
      <li>&#x2022;&emsp;Control is also maintained through your acceptance of which services, pricing and contractual provisions you agree to.</li>
      </ul>`,
  },
  {
    index: "I2",
    category: "Income Tax",
    title: "Do you prepare income tax returns?",
    faqText: `Yes, depending on your service level they may be included in your package<br/><br/>We also provide income tax preparation only services for:
      <ul>
      <li>&#x2022;&emsp;Personal Income Tax (T1)</li>
      <li>&#x2022;&emsp;Corporate Income Tax (T2)</li>
      <li>&#x2022;&emsp;Trust Income Tax (T3)</li>
      <li>&emsp;&#x2022;&emsp;Inter Vivos Trusts</li>
      <li>&emsp;&#x2022;&emsp;Testamentary Trusts</li>
      <li>&emsp;&#x2022;&emsp;Bare Trusts</li>
      <li>&#x2022;&emsp;Deceased Individuals</li>
      <li>&emsp;&#x2022;&emsp;Final Returns for Deceased Individuals</li>
      <li>&emsp;&#x2022;&emsp;Testamentary Trusts</li>
      <li>&emsp;&#x2022;&emsp;Optional Returns for Deceased Individuals</li>
      <li>&emsp;&emsp;&#x2022;&emsp;Returns for Rights or Things</li>
      <li>&emsp;&emsp;&#x2022;&emsp;Return for a Partner or Proprietor</li>
      <li>&emsp;&emsp;&#x2022;&emsp;Return for Income from a Graduated Rate Estate</li>
      </ul>`,
  },
  {
    index: "I3",
    category: "Income Tax",
    title: "Is my information secure?",
    faqText: `Yes, we use a variety of security measures including:
      <ul>
      <li>&#x2022;&emsp;Encrypted internal backups</li>
      <li>&#x2022;&emsp;Encrypted external offsite backups</li>
      <li>&#x2022;&emsp;Password protected client sites</li>
      <li>&#x2022;&emsp;Password protected and/or encrypted data transfer</li>
      <li>&#x2022;&emsp;Firewalls on all our computer systems</li>
      </ul>`,
  },

  // Price
  {
    index: "PR1",
    category: "Price",
    title: "How much do your services cost?",
    faqText: `
      <ul>
      <li>&#x2022;&emsp;We are of the opinion that our pricing should be determined by the value that our client is seeking.</li>
      <li>&#x2022;&emsp;We begin with a initial free consultation and after discussions on your needs needs we will prepare different options for your review.</li>
      </ul>`,
  },
  {
    index: "PR2",
    category: "Price",
    title: "What is your hourly rate?",
    faqText: `Our services are intellectual capital and decades of financial knowledge, not time. All our prices are based on a fixed price agreement that provides guaranteed results with no billing surprises.<br><br>
    <strong>Our pricing policy is fixed. Your quote is not an estimate.</strong>`,
  },
];
