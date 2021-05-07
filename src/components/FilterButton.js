import Tags from './Tags';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FilterButton = ({ tags, toggleFilters, tagCount }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [tagsDisplay, setTagsDisplay] = useState('none');

  const handleClick = () => {
    setIsExpanded(isExpanded === true ? false : true);
  };

  useEffect(() => {
    setTagsDisplay('block')
  }, [])

  return (
    <>
      <motion.div
        className="filter-button"
        style={{ overflow: 'hidden' }}

        animate={{
          width: isExpanded ? '100vw' : 80,
          height: isExpanded ? 'auto' : 35,
        }}
        transition={{ duration: 0.6, stiffness: 30 }}
        >
        <span className="filter-title" onClick={handleClick}>Filters ({tagCount})</span>
        <div style={{ width: '90vw' }}>
          <Tags tagsDisplay={tagsDisplay} tags={tags} toggleFilters={toggleFilters} />
        </div>
      </motion.div>

    </>
  )
};

export default FilterButton;
