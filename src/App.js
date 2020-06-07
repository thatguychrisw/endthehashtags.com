import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './assets/main.css'
import { GiCandleLight } from 'react-icons/gi'
import { FaFistRaised } from 'react-icons/fa'

import victimData from './data/victims.js'

function App () {
    const introduction = (
      <VerticalTimelineElement
        className="border-b-0"
        iconClassName="bg-gray-900 text-yellow-500"
        textClassName="bg-gray-800 text-white rounded-none shadow-none"
        contentArrowStyle={{borderRight: '0'}}
        icon={<FaFistRaised/>}
      >
          <h3 className="text-2xl font-bold text-yellow-400">Black Victims of Police Murders</h3>
          <p>
              The following are victims of police brutality starting with <strong>Eric Gardner</strong> in 2014.
              This list was taken from NPR.

          </p>
          <h5 className="text-sm pt-4">Last Updated June 6th, 2020</h5>
      </VerticalTimelineElement>
    )

    const whatYouCanDo = (action) => (
      <VerticalTimelineElement
        className="border-b-0"
        iconClassName="bg-gray-900 text-yellow-500"
        textClassName="bg-gray-800 text-white rounded-none shadow-none"
        contentArrowStyle={{borderRight: '0'}}
        icon={<FaFistRaised/>}
      >
          <FaFistRaised className="text-4xl float-left pr-4"/>
          <h3 className="text-2xl font-bold text-yellow-400">Take Action</h3>
          <div className="p-2">
              {action}
          </div>
      </VerticalTimelineElement>
    )

    const victims = victimData.map((victim, key) => {
        const borderColor = key % 2 === 0 ? 'border-blue-500' : 'border-blue-500'
        const backgroundColor = key % 2 === 0 ? 'bg-blue-400' : 'bg-blue-400'

        victim.id = victim.fullName.toLowerCase().replace(/\s/, '-')
        victim.link = `#${victim.id}`

        return (
          <React.Fragment key={`fragment-${key}`}>
              {key > 0 && key % 12 === 0 &&
              whatYouCanDo((
                <ul>
                    <li>An action item</li>
                    <li>An action item</li>
                    <li>An action item</li>
                    <li>An action item</li>
                    <li>An action item</li>
                </ul>
              ))
              }

              <VerticalTimelineElement
                key={key}
                textClassName={`bg-gray-700 text-white border-t-4 !p-0 ${borderColor} shadow-none`}
                contentArrowStyle={{borderRight: '7px solid rgb(66, 153, 225)'}}
                date={victim.date.format("MMMM YYYY")}
                dateClassName="text-white mx-4 my-2 md:mx-0 md:my-0"
                iconClassName={`${backgroundColor} text-black`}
                icon={<GiCandleLight/>}
              >
                  <h4 id={victim.id} className="bg-blue-500 p-4 text-2xl font-bold shadow-md">{victim.fullName}</h4>
                  <div className="px-4" dangerouslySetInnerHTML={{__html: victim.description}}/>
                  <div className="px-4 pt-4 lg:py-8">
                      <a className="rounded text-white py-2 px-4 bg-blue-500 font-bold"
                         target="_blank"
                         rel="noopener noreferrer"
                         href={victim.reference}>
                          Learn more
                      </a>
                  </div>
              </VerticalTimelineElement>
          </React.Fragment>
        )
    })

    return (
      <div className="bg-gray-800">
          <VerticalTimeline className="text-white">
              {introduction}

              {victims}

              {whatYouCanDo('You can donate.')}
          </VerticalTimeline>
      </div>
    )
}

export default App
