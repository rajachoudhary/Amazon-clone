import Slider from "react-slick"
import axios from "axios"
import React from "react"
import { useEffect } from "react"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./landingTop.css"
export const FetchRequest = () => {
  const [state, setState] = React.useState([])
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://serpapi.com/search.json?engine=walmart&query=electronic&api_key=553a91d893834e300d0fd9775fb2c67c180c04ebabdca991027c948cc595cce2`
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
        {/* <h1 className="cont_h1_tag">Explore More Items</h1> */}
        <Slider {...settings}>
          {state.map(item => (
            <div className="out">
              <img src={item.thumbnail} alt="imge" />
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
