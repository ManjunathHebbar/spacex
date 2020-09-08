import React from 'react'
import axios from "axios"
import CardContainer from '../card/cards'
import Filter from '../filter/filter'
import css from '../main/main.module.scss'

class cards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      year: []
    }
  }

  componentDidMount = () => {
    axios
    .get(`https://api.spaceXdata.com/v3/launches?limit=100`)
    .then((response) => {
      this.setState({ data: response.data })
      console.log(response.data)
    })
    .catch(function (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    })
    this.yearArray()
  };

  yearArray = () => {
    const { year } = this.state
    for(let i=2006;i<=2020;i++) {
      year.push(i)
    }
  }

  render() {
    const { data, year } = this.state 
    return (
      <div className={css.mainContainer}>
      <div className={css.filterContainer}>
      <Filter year={year} />
      </div>
      <div className={css.cardContainer}>
      <CardContainer data={data} />
      </div>
      </div>
    )
  }
}

export default cards