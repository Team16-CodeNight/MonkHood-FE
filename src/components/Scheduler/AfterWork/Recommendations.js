import { directory } from "../../../Util/Movies.js";
import styles from "./afterWork.module.css";

export default function Recommendations() {
  return (
    <>
      <h2 className="mx-10 text-3xl font-semibold">Some Recommendations from Our Side</h2>
      <nav className={`h-full overflow-y-auto ${styles.movieContainer}`} aria-label="Directory">
        {Object.keys(directory).map((letter) => (
          <div key={letter} className="relative">
            <div className="z-10 sticky top-0 border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"></div>
            <ul role="list" className="relative z-0 divide-y divide-gray-200">
              {directory.map((movie, idx) => (
                <li key={idx} className="bg-white">
                  <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={movie.imageUrl} alt="" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <a href="#" className="focus:outline-none">
                        {/* Extend touch target to entire panel */}
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-sm font-medium text-gray-900">{movie.name}</p>
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </>
  );
}
