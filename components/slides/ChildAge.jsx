import * as React from 'react'
import { FADE_DOWN_ANIMATION_VARIANTS, FADE_UP_ANIMATION_VARIANTS } from '@/lib/design'
import { motion } from 'framer-motion'
import { DataContext } from '@/lib/context/DataContext'
import { useContext } from 'react'
import { Chart } from 'react-google-charts'
import { useEffect } from 'react'

export const ChildAge = () => {
  const { data } = useContext(DataContext)
  const [formattedData, setFormattedData] = React.useState([])
  const [question, setQuestion] = React.useState('')
  useEffect(() => {
    setQuestion(data.data ? data.data.filter((question) => question.title === 'What is the age group of the children she had?') : '')
  }, [data])
  useEffect(() => {
    console.log(question)
    setFormattedData([
      ['Age', 'Number of Responses'],
      ['1-5', question ? question[0].responses.filter((response) => response === '1-5').length : 0],
      ['5-10', question ? question[0].responses.filter((response) => response === '5-10').length : 0],
      ['10-15', question ? question[0].responses.filter((response) => response === '10-15').length : 0],
      ['15-20', question ? question[0].responses.filter((response) => response === '15-20').length : 0],
      ['20 above', question ? question[0].responses.filter((response) => response === '20 above').length : 0],
      ['No Idea', question ? question[0].responses.filter((response) => response === 'No Idea').length : 0],
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
        What is the age group of the children of mom interviewed?
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

export default ChildAge
