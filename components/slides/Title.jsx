import * as React from 'react'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/design'
import { motion } from 'framer-motion'

export const Title = () => {
  return (
    <motion.div
      className={'flex flex-col items-start'}
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
      <motion.h1 className="text-6xl" variants={FADE_DOWN_ANIMATION_VARIANTS}>
        Working Mother Dilemma
      </motion.h1>
    </motion.div>
  )
}

export default Title
