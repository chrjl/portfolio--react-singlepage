import githubMark from './assets/github-mark.svg';
import faLocationDot from './assets/fa-location-dot.svg';

import { allPosts, allStubs } from '../.contentlayer/generated';

function App() {
  return (
    <div className="container mx-auto my-8 max-w-screen-sm whitespace-pre-line font-sans">
      <header className="my-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">Christopher Lee</h1>
        <h2 className="text-xl font-semibold">
          JavaScript Developer (Node.js, React)
          <div className="text-base font-medium">
            AWS Certified Solutions Architect Associate
          </div>
        </h2>
        <h3 className="mt-2 text-sm [&>*]:align-middle">
          <img height="100%" className="mr-1 inline" src={faLocationDot} />
          <span>Los Angeles, California</span>
          <span className="px-4">|</span>
          <img className="mr-1 inline h-4" src={githubMark} />
          <a href="https://github.com/chrjl" target="_blank">
            chrjl
          </a>
        </h3>
      </header>
    </div>
  );
}

export default App;
