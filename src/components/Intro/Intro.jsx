import React from 'react'
import { motion } from 'framer-motion';
import './Intro.css';
const Intro = () => {
    return (
        <motion.div
        className="intro"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2>Welcome to VARA!!</h2>
        <p>
        Welcome to VARA, where tradition meets innovation. Inspired by the GI-tagged Channapatna Handicraft Toys, VARA is more than just a store—it’s a bridge between heritage and the future.
        </p>
      </motion.div>
    )
}

export default Intro;