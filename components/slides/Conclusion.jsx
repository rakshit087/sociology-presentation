import * as React from 'react'
import { FADE_DOWN_ANIMATION_VARIANTS, FADE_UP_ANIMATION_VARIANTS } from '@/lib/design'
import { motion } from 'framer-motion'
import { DataContext } from '@/lib/context/DataContext'
import { useContext } from 'react'

export const Conclusion = () => {
  const { data } = useContext(DataContext)
  console.log(data)
  return (
    <motion.div
      className={'flex flex-col justify-center px-20 py-20'}
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
      <motion.h1 className="text-4xl" variants={FADE_DOWN_ANIMATION_VARIANTS}>
        Conclusion
      </motion.h1>
      <motion.h6 className="mt-16 text-2xl" variants={FADE_UP_ANIMATION_VARIANTS}>
        1. The survey respondents varied in terms of age group, children's age group, and experiences with the working mom dilemma.
      </motion.h6>
      <motion.h6 className="mt-8 text-2xl" variants={FADE_UP_ANIMATION_VARIANTS}>
        2. Many respondents reported facing biases at the workplace due to their maternal role, and some had to make compromises with their health and
        dignity to balance their roles as mothers and workers.
      </motion.h6>
      <motion.h6 className="mt-8 text-2xl" variants={FADE_UP_ANIMATION_VARIANTS}>
        3. COVID-19 pandemic brought significant changes to the working mothers' lifestyles and professional roles, with some experiencing job losses
        and salary cuts.
      </motion.h6>
      <motion.h6 className="mt-8 text-2xl" variants={FADE_UP_ANIMATION_VARIANTS}>
        4. Respondents' views on the role of working mothers and stay-at-home mothers were mixed, with some thinking that working mothers were more
        effective and others thinking that stay-at-home mothers had a better sense of living life.
      </motion.h6>
      <motion.h6 className="mt-8 text-2xl" variants={FADE_UP_ANIMATION_VARIANTS}>
        5. Finally, some respondents faced situations where they made mistakes as mothers, and their ways of dealing with such situations varied, with
        some introspecting and others seeking advice from family or friends.
      </motion.h6>
    </motion.div>
  )
}

export default Conclusion
