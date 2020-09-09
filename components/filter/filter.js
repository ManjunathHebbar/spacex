import React from 'react'
import axios from "axios"
import css from './filter.module.scss'

const Filter = ({ year, onSuccessLaunchTrue, onSuccessLaunchFalse, onSuccessfullLandingTrue, onSuccessfullLandingFalse, onFilterByYear }) => { 

    const successLaunchTrue = () => {
      axios
      .get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true`)
      .then((response) => {
        onSuccessLaunchTrue(response.data)
      })
      .catch(function (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      })
    }
    const successLaunchFalse = () => {
      axios
      .get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=false`)
      .then((response) => {
        onSuccessLaunchFalse(response.data)
      })
      .catch(function (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      })
    }
    const successfullLandingTrue = () => {
      axios
      .get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true`)
      .then((response) => {
        onSuccessfullLandingTrue(response.data)
      })
      .catch(function (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      })
    }
    
    const successfullLandingFalse = () => {
      axios
      .get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=false`)
      .then((response) => {
        onSuccessfullLandingFalse(response.data)
      })
      .catch(function (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      })
    }
    const filterByYear = (e) => {
      axios
      .get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${e}`)
      .then((response) => {
        onFilterByYear(response.data)
      })
      .catch(function (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      })
    }
    return (
      <div className={css.FilterContainer}>
      <div className={css.filterContainer}>
      <h3>Filters</h3>
      <div className={css.secondTitle}>Launch Year</div>
      <div className={css.underScore} />
      <div className={css.yearContainer}>
        {year.map((newYear, i) => (
          <button className={css.year} key={i} onClick={() => filterByYear(newYear)}>{newYear}</button>
        ))}
      </div>
      <div className={css.secondTitle}>Successful Launch</div>
      <div className={css.underScore} />
      <div className={css.successLaunch}>
         <button className={css.bool} onClick={successLaunchTrue}>True</button>
         <button className={css.bool} onClick={successLaunchFalse}>False</button>
      </div>
      <div className={css.secondTitle}>Successful Landing</div>
      <div className={css.underScore} />
      <div className={css.successLaunch}>
         <button className={css.bool} onClick={successfullLandingTrue}>True</button>
         <button className={css.bool} onClick={successfullLandingFalse}>False</button>
      </div>
      </div>
      </div>
    )
}

export default Filter