import React, { useState } from "react";

import flag from '../../content/theme-image/us_flag_small.png'
import dotGov from '../../content/theme-image/icon-dot-gov.svg'
import https from '../../content/theme-image/icon-https.svg'


const showArrowClass = "stroke-current mr-2 w-3 max-w-full ml-1 hover:stroke-[#1a4480]"
const hideArrowClass = showArrowClass + " hidden"
const showGovBanner = "py-6 px-8 text-base mx-auto max-w-5xl w-full overflow-hidden"
const hideGovBanner = showGovBanner + " hidden"

export const GovBanner: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  const downArrowClass = isExpanded ? hideArrowClass : showArrowClass
  const upArrowClass = isExpanded ? showArrowClass : hideArrowClass
  const govBannerClass = isExpanded ? showGovBanner : hideGovBanner

  return (
    <div className="font-sans text-base bg-govbanner pb-0">
      <div className="font-sans text-base bg-govbanner">
        <header className="text-small font-normal py-1 relative">
          <div className="items-center flex flex-wrap ml-auto mr-auto max-w-5xl pl-8 pr-8 pr-0">
            <div className="max-w-full w-auto flex-initial">
              <img
                className="float-left mr-2 w-4"
                src={flag}
                alt="U.S. flag"
              />
            </div>
            <div className="flex-initial max-w-full min-w-1 w-auto text-xs">
              <p className="text-xs mb-0 mt-0">
                An official website of the United States government
              </p>
              <p className="sr-only mb-0 mt-0.5 underline text-[#005ea2] hover:text-[#1a4480]">
                Here’s how you know
              </p>
            </div>
            <button
              aria-controls="gov-banner"
              aria-expanded={false}
              className="left-auto inline mb-0 ml-2 underline text-[#005ea2] hover:stroke-[#1a4480] hover:text-[#1a4480] text-xs flex items-center"
              onClick={handleButtonClick}
            >
              <span className="usa-banner__button-text">Here's how you know</span>
              <svg id="up-arrow" fill="none" viewBox="0 -3 26 26"
                   stroke-width="2.75"  className={upArrowClass}>
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
              <svg id="down-arrow" fill="none" viewBox="0 -3 26 26"
                   stroke-width="2.75" className={downArrowClass}>
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>
        </header>
        <div
          className={govBannerClass}
        >
          <div className="my-0 -mx-3 flex flex-wrap" >
            <div className="px-3 flex-initial w-1/2 relative">
              <img
                src={dotGov}
                alt="Dot gov"
                className="mr-2 w-10 max-w-full"
              />
              <div className="usa-media-block__body">
                <p>
                  <strong>The .gov means it’s official.</strong>
                  <br />
                  Federal government websites often end in .gov or .mil. Before
                  sharing sensitive information, make sure you’re on a federal
                  government site.
                </p>
              </div>
            </div>
            <div className="px-3 flex-initial w-1/2 relative">
              <img
                src={https}
                alt="Https"
                className="mr-2 w-10 max-w-full"
              />
              <div className="usa-media-block__body">
                <p>
                  <strong>The site is secure.</strong>
                  <br />
                  The <strong>https://</strong> ensures that you are connecting to
                  the official website and that any information you provide is
                  encrypted and transmitted securely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}