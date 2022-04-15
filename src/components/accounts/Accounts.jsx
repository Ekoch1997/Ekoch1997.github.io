import React from 'react'
import './accounts.css'
import {SiSalesforce} from 'react-icons/si'
import {FaFreeCodeCamp} from 'react-icons/fa'
import {SiCss3} from 'react-icons/si'
import {SiPluralsight} from 'react-icons/si'
import {SiLeetcode} from 'react-icons/si'
import {SiTableau} from 'react-icons/si'


const Accounts = () => {
    return (
      <section id ="accounts">
        <h5>Accounts I Work On</h5>
        <h2>Progress</h2>
  
        <div className='container account__container'>

          <div className='account__content'>
            <div className="account__cards">
              <article className='account__card'>
                <a href="https://trailblazer.me/id/ekoch1997" target='_blank' rel="noreferrer">
                  <SiSalesforce className='account__card-icon' />
                  <h5>Salesforce Trailhead</h5>
                </a>
                <div className='account__items salesforce'>
                  <div className='account__item'>
                    <h5>4</h5>
                    <small>Superbadges</small>
                  </div>
                  <div className='account__item'>
                    <h5>77,825</h5>
                    <small>Points</small>
                  </div>
                  <div className='account__item'>
                    <h5>76</h5>
                    <small>Badges</small>
                  </div>
                </div>
              </article>
              <article className='account__card'>
                <a href="https://www.freecodecamp.org/Ekoch1997" target='_blank' rel="noreferrer">
                  <FaFreeCodeCamp className='account__card-icon' />
                  <h5>Free Code Camp</h5>
                </a>
                <div className='account__items freecodecamp'>
                  <div className='account__item'>
                    <h5>1</h5>
                    <small>Certificate</small>
                  </div>
                  <div className='account__item'>
                    <h5>410</h5>
                    <small>Total Points</small>
                  </div>
                </div>
              </article>
              <article className='account__card'>
                <a href="https://cssbattle.dev/player/ekoch1997" target='_blank' rel="noreferrer">
                  <SiCss3 className='account__card-icon' />
                  <h5>CSS Battle</h5>
                </a>
                <div className='account__items cssbattle'>
                  <div className='account__item'>
                    <h5>36 / 188065</h5>
                    <small>Global Rank</small>
                  </div>
                  <div className='account__item'>
                    <h5>68,650</h5>
                    <small>Total Score</small>
                  </div>
                  <div className='account__item'>
                    <h5>108 / 108</h5>
                    <small>Targets Played</small>
                  </div>
                </div>
              </article>
              <article className='account__card'>
                <a href="https://app.pluralsight.com/profile/ethan-koch-52" target='_blank' rel="noreferrer">
                  <SiPluralsight className='account__card-icon' />
                  <h5>Pluralsight</h5>
                </a>
                <div className='account__items pluralsight'>
                  <div className='account__item'>
                    <h5>23</h5>
                    <small>Badges</small>
                  </div>
                  <div className='account__item'>
                    <h5>22 Hours</h5>
                    <small>Viewed Material</small>
                  </div>
                </div>
              </article>
              <article className='account__card'>
                <a href="https://leetcode.com/Ekoch1997/" target='_blank' rel="noreferrer">
                  <SiLeetcode className='account__card-icon' />
                  <h5>LeetCode</h5>
                </a>
                <div className='account__items leetcode'>
                  <div className='account__item'>
                    <h5>7</h5>
                    <small>Easy</small>
                  </div>
                  <div className='account__item'>
                    <h5>1</h5>
                    <small>Medium</small>
                  </div>
                  <div className='account__item'>
                    <h5>0</h5>
                    <small>Hard</small>
                  </div>
                </div>
              </article>
              <article className='account__card'>
                <a href="https://accounts.skilljar.com/accounts/profile/wgcw5p0zd67x?d=wgcw5p0zd67x&next=%2F" target='_blank' rel="noreferrer">
                  <SiTableau className='account__card-icon' />
                  <h5>Tableau eLearning</h5>
                </a>
                <div className='account__items tableau'>
                  <div className='account__item'>
                    <h5>Metrics Coming Soon</h5>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Accounts