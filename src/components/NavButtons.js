import FilterButton from './FilterButton';
import Tags from './Tags';
import { useState } from 'react';
import { motion } from 'framer-motion';
import InfoButton from './InfoButton';

const NavButtons = ({ active }) => {
  return (
    <motion.div
      id="filters"
      className="nav-buttons"
      style={{ opacity: active ? 1 : 0}} >
      <FilterButton />
      <InfoButton />
    </motion.div>
  )
}

export default NavButtons;

