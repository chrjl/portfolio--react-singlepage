import githubMark from './assets/github-mark.svg';
import faLocationDot from './assets/fa-location-dot.svg';
import nodeLogo from './assets/nodejs-stacked-dark.svg';
import reactLogo from './assets/react.svg';
import tsLogo from './assets/ts-logo-128.svg';

import Card from './components/Card';

import * as content from '../.contentlayer/generated';
const { allPosts, allStubs, allArchives } = content;

function App() {
  return (
    <div className="container mx-auto my-8 max-w-screen-sm font-sans">
      <header className="my-8 text-center">
        <h1 className="text-4xl font-extrabold">Christopher Lee</h1>

        <h2 className="mt-4 text-xl font-bold">
          JavaScript Developer
          <span className="ml-4 inline-block [&>a]:ml-1.5 [&_img]:inline [&_img]:h-6">
            <a href="https://nodejs.org/about" target="_blank">
              <img src={nodeLogo} />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} />
            </a>
            <a href="https://typescriptlang.org" target="_blank">
              <img src={tsLogo} />
            </a>
          </span>
          <div className="mt-1 text-base font-medium">
            AWS Certified Solutions Architect Associate
          </div>
        </h2>

        <h3 className="mt-4 text-sm [&>*]:align-middle">
          <img height="100%" className="mr-1 inline" src={faLocationDot} />
          <span>Los Angeles, California</span>
          <span className="px-4">|</span>
          <img className="mr-1 inline h-4" src={githubMark} />
          <a href="https://github.com/chrjl" target="_blank">
            chrjl
          </a>
        </h3>
      </header>

      <ul className="mt-16">
        {allPosts &&
          allPosts.map((document) => (
            <li key={document._id} className="group relative m-8">
              <Card {...document} />
            </li>
          ))}

        {allStubs &&
          allStubs.map((document) => (
            <li key={document._id} className="group relative m-8">
              <Card {...document} />
            </li>
          ))}

        {allArchives &&
          allArchives.map((document) => (
            <li
              key={document._id}
              className="group relative m-8 italic opacity-75"
            >
              <Card {...document} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
