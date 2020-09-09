import React from 'react'
import axios from "axios"
import css from '../card/cards.module.scss'

const cards = ({data}) => {
    return (
      <div className={css.mainContainer}>
        {data.length > 0 ? 
        data.map((newData, i) => {
          return(
          <div key={newData.flight_number} className={css.CardContainer}>
            <img className={css.cardImage} src={newData.links.mission_patch_small} />
            <div className={css.cardTitle}>{`${newData.mission_name} #${newData.flight_number}`}</div>
            <div>
              <b>Mission Ids</b>
              <li className={css.secondText}>{`{list Mission}`}</li>
            </div>
          <div><b>Launch Year:</b> <span className={css.secondText}>{newData.launch_year}</span></div>
          <div><b>Successful Launch:</b> <span className={css.secondText}>{newData.launch_success ? 'True' : 'False'}</span></div>
          <div><b>Successful Landing:</b> <span className={css.secondText}>{`{Launch Landing}`}</span>
          </div>
          </div>
          ) 
        }) : (
          <div className={css.noData}>No Data Available</div>
        )
      }
      </div>
    )
}

export default cards