import * as React from 'react'
import { FADE_DOWN_ANIMATION_VARIANTS, FADE_UP_ANIMATION_VARIANTS } from '@/lib/design'
import { motion } from 'framer-motion'
import { DataContext } from '@/lib/context/DataContext'
import { useContext } from 'react'
import { Chart } from 'react-google-charts'
import { useEffect } from 'react'

export const MomAge = () => {
  const { data } = useContext(DataContext)
  const [formattedData, setFormattedData] = React.useState([])
  const [question, setQuestion] = React.useState('')
  useEffect(() => {
    setQuestion(data.data ? data.data[1].title : '')
    setFormattedData([
      ['Age', 'Number of Responses'],
      ['25-30', data.data ? data.data[1].responses.filter((response) => response === '25-30').length : 0],
      ['30-35', data.data ? data.data[1].responses.filter((response) => response === '30-35').length : 0],
      ['35-40', data.data ? data.data[1].responses.filter((response) => response === '35-40').length : 0],
      ['40-45', data.data ? data.data[1].responses.filter((response) => response === '40-45').length : 0],
      ['50 above', data.data ? data.data[1].responses.filter((response) => response === '50 above').length : 0],
      ['No Idea', data.data ? data.data[1].responses.filter((response) => response === 'No Idea').length : 0],
    ])
  }, [data])
  return (
    <motion.div
      className={'flex flex-col justify-center px-20 py-28'}
      initial="hidden"
      whileInView="show"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}>
      <motion.h1 className="text-3xl" variants={FADE_DOWN_ANIMATION_VARIANTS}>
        What is the age group of working mom interviewed?
      </motion.h1>
      <motion.div className="w-full mt-16 h-96" variants={FADE_UP_ANIMATION_VARIANTS}>
        <Chart
          width={'100%'}
          height={'100%'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={formattedData}
          options={{
            backgroundColor: 'transparent',
            titleTextStyle: {
              color: '#fff',
            },
            legend: {
              textStyle: {
                color: '#fff',
              },
            },
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </motion.div>
    </motion.div>
  )
}

export default MomAge
