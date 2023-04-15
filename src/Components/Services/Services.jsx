import React, { Component } from 'react'

// imports react-icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

// imports components
import Title from '../Title/Title'

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktails',
        info: "Enjoy complimentary cocktails and unwind after a long day at our hotel's happy hour."
      },
      {
        icon: <FaHiking />,
        title: 'endless hiking',
        info: 'Embark on an adventure with endless hiking trails and breathtaking views in the surrounding mountains.'
      },
      {
        icon: <FaShuttleVan />,
        title: 'free shuttle',
        info: 'Experience stress-free travel with our complimentary shuttle service to nearby attractions and destinations.'
      },
      {
        icon: <FaBeer />,
        title: 'storages beer',
        info: 'Keep your beer cool and fresh with our convenient on-site storage facilities for your favorite brews.'
      }
    ]
  }

  render() {
    return (
      <section className="services">
        <Title title="services" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}
