import { useEffect, useState } from "react";
import styles from "./afterWork.module.css";
import { CheckIcon } from "@heroicons/react/solid";
import Sentiments from "./Sentiments";
import Categories from "./Categories";
import Recommendations from "./Recommendations";

const sampleSentiments = ["Relaxing", "Productive", "Creative", "Something Totally New"];

const sampleCategories = ["Watch Movie", "Listen to Music", "Read a Book", "Play a Game", "Do Meditation", "Do Exercise", "Do Something Totally New"];

const AfterWork = () => {
  const [sentiment, setSentiment] = useState("");
  const [category, setCategory] = useState("");
  const [stage, setStage] = useState(0);
  let currStage = 0;
  const [steps, setSteps] = useState([
    { id: "01", name: "Mood Analysis", href: "#", status: "current" },
    { id: "02", name: "Category Selection", href: "#", status: "upcoming" },
    { id: "03", name: "Recommendations", href: "#", status: "upcoming" },
  ]);

  const handleUpdateStage = () => {
    setStage(stage + 1);
    currStage = stage + 1;
    console.log("currStage: ", currStage);
    if (currStage === 0) {
      setSteps([
        { id: "01", name: "Mood Analysis", href: "#", status: "current" },
        { id: "02", name: "Category Selection", href: "#", status: "upcoming" },
        { id: "03", name: "Recommendations", href: "#", status: "upcoming" },
      ]);
    } else if (currStage === 1) {
      setSteps([
        { id: "01", name: "Mood Analysis", href: "#", status: "complete" },
        { id: "02", name: "Category Selection", href: "#", status: "current" },
        { id: "03", name: "Recommendations", href: "#", status: "upcoming" },
      ]);
    } else if (currStage === 2) {
      setSteps([
        { id: "01", name: "Mood Analysis", href: "#", status: "complete" },
        { id: "02", name: "Category Selection", href: "#", status: "complete" },
        { id: "03", name: "Recommendations", href: "#", status: "current" },
      ]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.progressContainer}>
        <nav aria-label="Progress">
          <ol role="list" className="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0">
            {steps.map((step, stepIdx) => (
              <li key={step.name} className="relative md:flex-1 md:flex">
                {step.status === "complete" ? (
                  <a href={step.href} className="group flex items-center w-full">
                    <span className="px-6 py-4 flex items-center text-sm font-medium">
                      <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-red-600 rounded-full group-hover:bg-red-800">
                        <CheckIcon className="w-6 h-6 text-white" aria-hidden="true" />
                      </span>
                      <span className="ml-4 text-sm font-medium text-gray-900">{step.name}</span>
                    </span>
                  </a>
                ) : step.status === "current" ? (
                  <a href={step.href} className="px-6 py-4 flex items-center text-sm font-medium" aria-current="step">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-red-600 rounded-full">
                      <span className="text-red-600">{step.id}</span>
                    </span>
                    <span className="ml-4 text-sm font-medium text-red-600">{step.name}</span>
                  </a>
                ) : (
                  <a href={step.href} className="group flex items-center">
                    <span className="px-6 py-4 flex items-center text-sm font-medium">
                      <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                        <span className="text-gray-500 group-hover:text-gray-900">{step.id}</span>
                      </span>
                      <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">{step.name}</span>
                    </span>
                  </a>
                )}

                {stepIdx !== steps.length - 1 ? (
                  <>
                    {/* Arrow separator for lg screens and up */}
                    <div className="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
                      <svg className="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
                        <path d="M0 -2L20 40L0 82" vectorEffect="non-scaling-stroke" stroke="currentcolor" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </>
                ) : null}
              </li>
            ))}
          </ol>
        </nav>
      </div>

      {stage === 0 && <Sentiments sampleSentiments={sampleSentiments} setSentiment={setSentiment} handleUpdateStage={handleUpdateStage} />}
      {stage === 1 && <Categories sampleCategories={sampleCategories} setCategory={setCategory} handleUpdateStage={handleUpdateStage} />}
      {stage === 2 && <Recommendations />}

      {/* <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Delete your account</h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>Once you delete your account, you will lose all data associated with it.</p>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
            >
              Delete account
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AfterWork;
