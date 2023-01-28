/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqs = [
  {
    question: "How does it increase my productivity?",
    answer:
      "Our platform helps you to be more productive by prioritizing your tasks and saving time spent on managing your schedule. It does that by syncing your tasks with your calendar schedule, so you can focus on getting things done. Plus, you can explore new interests and hobbies during your free time.",
  },
  {
    question: "How does my tasks gets scheduled?",
    answer:
      'As you keep adding tasks/todos in our page giving us the desired time to complete it, our platform will automatically schedule it in your calendar free time. You can also manually schedule your tasks in your calender by using the "Push to Calender" button',
    question: "How do I view my calendar on different devices?",
  },
  {
    question: "How do I sync my calendar with other calendars?",
    answer:
      "To view your calendar on different devices, you can typically use the calendar app that is built into the device, or a third-party calendar app that is compatible with the device's operating system. For example, if you're using an iPhone, you can use the built-in Calendar app, or a third-party app like Google Calendar.",
  },
  {
    question: "How does it help me after work hours as well?",
    answer:
      "It gives you the personalized opinion by asking you questions about your interests and hobbies. It also gives you the option to explore new interests and hobbies. You can also add your own interests and hobbies to the list.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FAQ() {
  return (
    <div className="bg-gray-50 -mt-18">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl mb-10">Frequently asked questions</h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon className={classNames(open ? "-rotate-180" : "rotate-0", "h-6 w-6 transform")} aria-hidden="true" />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
