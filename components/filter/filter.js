import React from 'react'
import CardContainer from '../card/cards'
import css from './filter.module.scss'

const Filter = ({ year }) => { 
    return (
      <div className={css.FilterContainer}>
      <div className={css.filterContainer}>
      <h3>Filters</h3>
      <div className={css.secondTitle}>Launch Year</div>
      <div className={css.underScore} />
      <div className={css.yearContainer}>
        {year.map(year => (
          <button className={css.year}>{year}</button>
        ))}
      </div>
      <div className={css.secondTitle}>Successful Launch</div>
      <div className={css.underScore} />
      <div className={css.successLaunch}>
         <button className={css.bool}>True</button>
         <button className={css.bool}>False</button>
      </div>
      <div className={css.secondTitle}>Successful Landing</div>
      <div className={css.underScore} />
      <div className={css.successLaunch}>
         <button className={css.bool}>True</button>
         <button className={css.bool}>False</button>
      </div>
      </div>
      </div>
    )
}

export default Filter