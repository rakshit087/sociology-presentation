import * as React from 'react'
import { FADE_DOWN_ANIMATION_VARIANTS, FADE_UP_ANIMATION_VARIANTS } from '@/lib/design'
import { motion } from 'framer-motion'
import { DataContext } from '@/lib/context/DataContext'
import { useContext } from 'react'
import { useEffect } from 'react'
import ReactWordcloud from 'react-wordcloud'

const getWords = (responses) => {
  const words = []
  responses.forEach((response) => {
    const wordsInResponse = response.split(' ')
    wordsInResponse.forEach((word) => {
      word = word.toLowerCase()
      if (
        word.length <= 3 ||
        word === 'with' ||
        word === 'that' ||
        word === 'have' ||
        word === 'this' ||
        word === 'from' ||
        word === 'will' ||
        word === 'your' ||
        word === 'they' ||
        word === 'what' ||
        word === 'when' ||
        word === 'where' ||
        word === 'which' ||
        word === 'who' ||
        word === 'why' ||
        word === 'how' ||
        word === 'there' ||
        word === 'their' ||
        word === 'then' ||
        word === 'than' ||
        word === 'that' ||
        word === 'these' ||
        word === 'those' ||
        word === 'COVID-19' ||
        word === 'during'
      ) {
        return
      }
      const wordInWords = words.find((wordInWords) => wordInWords.text === word)
      if (wordInWords) {
        wordInWords.value += 1
      } else {
        words.push({ text: word, value: 1 })
      }
    })
  })
  return words
}

export const WordCloud = ({ title }) => {
  const { data } = useContext(DataContext)
  const [words, setWords] = React.useState([])
  const [question, setQuestion] = React.useState('')
  useEffect(() => {
    setQuestion(data.data ? data.data.filter((question) => question.title === title) : '')
  }, [title])
  useEffect(() => {
    setWords(getWords(question ? question[0].responses : []))
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
        <ReactWordcloud
          words={words}
          options={{
            colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'],
            enableTooltip: false,
            deterministic: false,
            fontFamily: 'impact',
            fontSizes: [16, 60],
            fontStyle: 'normal',
            fontWeight: 'normal',
            padding: 1,
            rotations: 3,
            rotationAngles: [0, 90],
            scale: 'sqrt',
            spiral: 'archimedean',
            transitionDuration: 1000,
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export default WordCloud
