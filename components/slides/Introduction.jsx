import * as React from 'react'
import { FADE_DOWN_ANIMATION_VARIANTS, FADE_UP_ANIMATION_VARIANTS } from '@/lib/design'
import { motion } from 'framer-motion'

export const Introduction = () => {
  return (
    <motion.div
      className={'flex flex-col justify-center px-20 py-44'}
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
        Introduction
      </motion.h1>
      <motion.h6 className="mx-auto mt-16 text-4xl" variants={FADE_UP_ANIMATION_VARIANTS}>
        "We expect women to work like they don't have children, and raise children as if they don't work"
      </motion.h6>
    </motion.div>
  )
}

export default Introduction
