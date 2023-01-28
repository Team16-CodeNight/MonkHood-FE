/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
    {
        question: "How do I schedule an appointment or event in a calendar?",
        answer:
            "To schedule an appointment or event in a calendar, you can typically use the New Event or Create Event button to open a form where you can enter the details of the event such as the name,location,start and end time and invitees.",
    },
    {
    question: "How do I invite others to an event or meeting in my calendar?",
        answer: "To invite others to an event or meeting in your calendar, you can typically use the Invite  or Add Guests button when creating or editing the event. This will open a form where you can enter the email addresses of the people you want to invite.",
        question: "How do I view my calendar on different devices?",
    },
    {
         question: "How do I sync my calendar with other calendars?",
        answer: "To view your calendar on different devices, you can typically use the calendar app that is built into the device, or a third-party calendar app that is compatible with the device's operating system. For example, if you're using an iPhone, you can use the built-in Calendar app, or a third-party app like Google Calendar.",
    },
    {
        question: "How do I set up reminders for events in my calendar?",
        answer: "To set up reminders for events in your calendar, you can typically use the reminder feature that is built into the calendar app or service that you're using. For example, in Google Calendar, you can set reminders for events by clicking on the event, then click on the three dots on the top right corner, and then select Remind me",
    }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FAQ() {
      return ( 
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently asked questions</h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
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
  )
}