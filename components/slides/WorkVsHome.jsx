import * as React from 'react'
import { FADE_DOWN_ANIMATION_VARIANTS, FADE_UP_ANIMATION_VARIANTS } from '@/lib/design'
import { motion } from 'framer-motion'
import { DataContext } from '@/lib/context/DataContext'
import { useContext } from 'react'
import { Chart } from 'react-google-charts'
import { useEffect } from 'react'

export const WorkVsHome = () => {
  const { data } = useContext(DataContext)
  const [formattedData, setFormattedData] = React.useState([])
  const [question, setQuestion] = React.useState('')
  const title = 'If at all you have to choose between a working professional and a stay at home mother, which role would you select? '
  useEffect(() => {
    setQuestion(data.data ? data.data.filter((question) => question.title === title) : '')
  }, [title])
  useEffect(() => {
    setFormattedData([
      ['Response', 'Number of Responses'],
      ['Stay at Home', question ? question[0].responses.filter((response) => response === 'Stay at Home').length : 0],
      ['Working', question ? question[0].responses.filter((response) => response === 'Working').length : 0],
    ])
  }, [question])
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
        {title}
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

export default WorkVsHome
