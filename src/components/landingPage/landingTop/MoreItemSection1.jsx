import Slider from "react-slick"
import axios from "axios"
import React from "react"
import { useEffect } from "react"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./landingTop.css"
export const MoreItemSection1 = () => {
  const [state, setState] = React.useState([])
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://serpapi.com/search.json?engine=walmart&query=bestSeller&api_key=aef5c16f5780f06192267ec05c103b83410f52e226e2505b13e5d1a622a81ed8`
      )
      console.log(response.data.organic_results)
      setState(response.data.organic_results)
    } catch (error) {
      console.log("err")
    }
  }
  useEffect(() => {
    getData()
  }, [])

  let settings = {
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 7,
    slidesToScroll: 5,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  }
  return (
    <>
      <div className="cont1" style={{ backgroundColor: "white" }}>
        <h1 className="cont_h1_tag">Explore More Items</h1>
        <Slider {...settings}>
          {state.map(item => (
            <div className="out">
              <img className="img_height" src={item.thumbnail} alt="imae" />
              <div className="Price_item">
                {" "}
                ${item.primary_offer.offer_price}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}
