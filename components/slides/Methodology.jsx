import * as React from 'react'
import { FADE_DOWN_ANIMATION_VARIANTS, FADE_UP_ANIMATION_VARIANTS } from '@/lib/design'
import { motion } from 'framer-motion'

export const Methodology = () => {
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
        Methodology
      </motion.h1>
      <motion.h6 className="mt-16 text-4xl" variants={FADE_UP_ANIMATION_VARIANTS}>
        We surveyed the entire class and got 15 responses of varying age groups
      </motion.h6>
    </motion.div>
  )
}

export default Methodology
