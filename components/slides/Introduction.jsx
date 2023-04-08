import * as React from 'react'
import classNames from 'clsx'
import { SITE_DESCRIPTION, SITE_NAME } from '@/lib/constants'
import { BranchColorMode } from '@/components/branch/BranchColorMode'
import { DEPLOY_URL } from '@/lib/constants'
import { FADE_DOWN_ANIMATION_VARIANTS, FADE_UP_LG_ANIMATION_VARIANTS } from '@/lib/design'
import { motion } from 'framer-motion'

export const Introduction = ({ className }) => {
  const classes = classNames(className, 'Introduction', 'container mx-auto max-w-screen-xl', 'flex flex-col text-left min-h-[70vh]')
  return (
    <motion.div
      className={'flex'}
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
        Working Women Dilemma
      </motion.h1>
    </motion.div>
  )
}

export default Introduction
