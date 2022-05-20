import React from 'react'
import stats from '../assets/icon-brand-recognition.svg'
import details from '../assets/icon-detailed-records.svg'
import custom from '../assets/icon-fully-customizable.svg'

const Statistics = () => {
  const Feature = ({ img, header, content }) => {
    return (
      <div className="shortly__statistics-feature">
        <div className="h-[80px] w-[80px] bg-[#3b3154] rounded-[40px] relative mt-[-64px] mx-auto">
          <img src={img} alt={header} className="w-1/2 mx-auto mt-[25%]" />
        </div>
        <h3 className="text-center text-slate-700 my-6">{header}</h3>
        <p className="base-p text-center">{content}</p>
      </div>
    )
  }

  return (
    <section id="statistics">
      <div className="shortly__statistics box-div py-12">
        <h2 className="text-center text-slate-700 my-6">Advanced Statistics</h2>
        <p className="base-p text-center mb-6 lg:mb-12 max-w-sm mx-auto">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="flex-3-col xl:max-w-6xl mx-auto">
          <Feature
            img={stats}
            header="Brand Recognition"
            content="Boost your brand recognition with each click. Generic links don`t mean a thing. Branded links help instil confidence in your content"
          />
          <Feature
            img={details}
            header="Detailed Records"
            content="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions"
          />
          <Feature
            img={custom}
            header="Fully customizable"
            content="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement"
          />
        </div>
      </div>
    </section>
  )
}

export default Statistics
