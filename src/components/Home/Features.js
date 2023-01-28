/* This example requires Tailwind CSS v2.0+ */
import { ArchiveIcon,StopIcon, LightningBoltIcon, CalendarIcon,IdentificationIcon } from "@heroicons/react/outline";

const transferFeatures = [
  {
    id: 1,
    name: "Stop prioritizing",
    description:
      "If you would like to stop prioritizing tasks, it would mean not considering the importance or urgency of tasks and completing them in any order",
    icon: StopIcon,
  },
  {
    id: 2,
    name: "Increase Productivity",
    description:
      "Determine which tasks are most important and should be completed first.Use tools like calendars and to-do lists to manage your time effectively.",
    icon:IdentificationIcon,
  },
  {
    id: 3,
    name: "Finish More Tasks",
    description:
      "Break large tasks into smaller, more manageable chunks. This will make it easier to focus on completing one part of the task at a time.",
    icon: LightningBoltIcon,
  },
];
const communicationFeatures = [
  {
    id: 1,
    name: "Explore different after work hours",
    description:
      "Take a class or learn a new skill. It can be something you always wanted to do but didn't have the time for.",
    icon: ArchiveIcon,
  },
  {
    id: 2,
    name: "One Calender for all management",
    description:
      "Set reminders for important deadlines or meetings.Review your calendar regularly to make sure you are on track and adjust as needed.",
    icon: CalendarIcon,
  },
];

const Features = () => {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
        </svg>

        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">A better way to Monkhood</h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            Use a task management tool in addition to your calendar: Some calendar apps have built-in task management features, but other apps such as Trello, Asana, or Todoist, have more advanced features and can integrate with your calendar.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Features of Calendar Scheduler</h3>
            <p className="mt-3 text-lg text-gray-500">
               Ability to create, edit, and delete events, appointments, and tasks.Ability to set reminders for events, appointments, and tasks.Ability to invite others to events and appointments.
            </p>

            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={784} height={300} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
            </svg>
            <img className="relative mx-auto" width={800} src="calendar.png" alt="Image" />
          </div>
        </div>

        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
        </svg>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Features of Calendar Scheduler</h3>
              <p className="mt-3 text-lg text-gray-500">
                A calendar scheduler can help you manage your time by allowing you to schedule tasks and appointments, set reminders,
                and view your schedule in a visual format.
                It can also help you prioritize tasks and ensure that you are using your time effectively.
              </p>

              <dl className="mt-10 space-y-10">
                {communicationFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
              </svg>
              <img className="relative mx-auto" width={490} src="6-2.jpg" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;