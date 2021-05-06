import Tags from './Tags';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FilterButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [tagsDisplay, setTagsDisplay] = useState('none');

  const handleClick = () => {
    // setTagsDisplay(tagsDisplay == 'none' ? 'block' : 'none')
    setIsExpanded(isExpanded === true ? false : true)
  };

  useEffect(() => {
    setTagsDisplay('block')
  }, [])


  return (
    <>
      <motion.div
        className="filter-button"
        style={{ overflow: 'hidden' }}
        onClick={handleClick}
        animate={{
          width: isExpanded ? '100vw' : 80,
          height: isExpanded ? 'auto' : 35,
        }}
        transition={{ duration: 0.6, stiffness: 30 }}
        >
        <span className="filter-title">Filters</span>
        <div style={{ width: '90vw' }}>
          <Tags tagsDisplay={tagsDisplay} />
        </div>
      </motion.div>

    </>
  )
};

export default FilterButton;
