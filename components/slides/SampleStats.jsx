import * as React from 'react'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/design'
import { motion } from 'framer-motion'

export const SampleStats = () => {
  return (
    <motion.div
      className={'flex flex-col px-20 h-screen justify-center'}
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
        Sample Stats
      </motion.h1>
    </motion.div>
  )
}

export default SampleStats
