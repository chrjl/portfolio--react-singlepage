import { useState } from 'react';

import githubMark from './assets/github-mark.svg';
import nodeLogo from './assets/nodejs-stacked-dark.svg';
import reactLogo from './assets/react.svg';
import tsLogo from './assets/ts-logo-128.svg';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid';

import Card from './components/Card';

import * as content from '../.contentlayer/generated';
const { allPosts, allStubs, allArchives } = content;

function App({ development = false }) {

  return (
    <div className="container relative mx-auto my-8 max-w-screen-sm font-sans">
      {development && (
        <div className="right absolute end-0 top-0 ml-auto rounded bg-black  px-2 font-bold text-white">
          DEV
        </div>
      )}
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
              {development && (
                <CardTooltip
                  text={`${document.type} -- ${document._raw.flattenedPath}`}
                />
              )}
              <Card {...document} />
            </li>
          ))}

        {allStubs &&
          allStubs.map((document) => (
            <li key={document._id} className="group relative m-8">
              {development && (
                <CardTooltip
                  text={`${document.type} -- ${document._raw.flattenedPath}`}
                />
              )}
              <Card {...document} />
            </li>
          ))}

        {allArchives &&
          allArchives.map((document) => (
            <li
              key={document._id}
              className="group relative m-8 italic opacity-75"
            >
              {development && (
                <CardTooltip
                  text={`${document.type} -- ${document._raw.flattenedPath}`}
                />
              )}
              <Card {...document} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export function DevApp() {
  const [isDevelopment, setDevelopment] = useState(true);

  return (
    <>
      <div className="sticky top-0 z-50 h-8 bg-black">
        <div className="mx-auto max-w-screen-sm align-middle font-sans font-bold  text-white">
          <button
            type="button"
            className="rounded border-2 border-solid border-white px-2"
            onClick={() => setDevelopment(!isDevelopment)}
          >
            <ArrowsRightLeftIcon className="inline h-4 stroke-2 pr-1" />
            {isDevelopment ? 'DEV' : 'PROD'}
          </button>
        </div>
      </div>

      <App development={isDevelopment} />
    </>
  );
}

interface CardTooltipProps {
  text: string;
}

function CardTooltip({ text }: CardTooltipProps) {
  return (
    <div className="collapse absolute end-0 top-0 m-0 rounded bg-black p-1 text-xs font-bold uppercase text-white group-hover:visible">
      {text}
    </div>
  );
}

export default App;
