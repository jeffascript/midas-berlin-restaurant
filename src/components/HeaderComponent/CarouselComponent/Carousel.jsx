import React from 'react';
// import 'antd/dist/antd.css';
// import { Carousel } from 'antd';
// import "./Carousel.css"
import food1 from "../../../img/slider/slide_1.jpg"
import food2 from "../../../img/slider/slide_2.jpg"
import food3 from "../../../img/slider/slide_3.jpg"

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './Carousel-Styles.css';
import './Slider-Animations.css';

import { Link  } from "react-scroll";



const content = [
	// {
	// 	title: 'Vulputate Mollis Ultricies Fermentum Parturient',
	// 	description:
	// 	'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
	// 	button: 'Read More',
	// 	image: 'https://i.imgur.com/ZXBtVw7.jpg',
	// 	user: 'Luan Gjokaj',
	// 	userProfile: 'https://i.imgur.com/JSW6mEk.png'
  // },
  

	{
		title: 'Tortor Dapibus Commodo Aenean Quam',
		description:
		'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
		button: 'learn more',
		image: food1,
		user: 'Erich Behrens',
    userProfile: 'https://i.imgur.com/0Clfnu7.png',
    section:"offer"
	},
	{
		title: 'Phasellus volutpat metus',
		description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
		button: "Today's meal",
    image: food2,
    section:"about",
		user: 'Bruno Vizovskyy',
		userProfile: 'https://i.imgur.com/4KeKvtH.png'
  },
  {
		title: 'Tortor Dapibus Commodo Aenean Quam',
		description:
		'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
		button: 'Discover',
    image: food3,
    section:"offer",
		user: 'Erich Behrens',
		userProfile: 'https://i.imgur.com/0Clfnu7.png'
	},
];




const CarouselComponent = () => {
    return (

//autoplay={3000}

<Slider className="slider-wrapper" autoplay={5000} >
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat 0 0 scroll` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<button className="text-white">
            <Link
   
    to={item.section}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>
              {item.button}
              
           </Link>   
              </button>
					</div>
					{/* <section>
						<img src={item.userProfile} alt={item.user} />
						<span>
							Posted by <strong>{item.user}</strong>
						</span>
					</section> */}
				</div>
			))}
		</Slider>


















    //     <Carousel effect="fade">
    //     <div >
         
    //    <div className="caro">

    //    </div>
  
 
    //   </div>
    //   <div>
    //     <h3>2</h3>
    //   </div>
    //   <div>
    //     <h3>3</h3>
    //   </div>
    //   <div>
    //     <h3>4</h3>
    //   </div>

  /* <img
    src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    style={{
      display: 'block',
      height: '100%',
      margin: 'auto',
      width: '100%'
    }}
  />
  <img
    src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    style={{
      display: 'block',
      height: '100%',
      margin: 'auto',
      width: '100%'
    }}
  />
  <img
    src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    style={{
      display: 'block',
      height: '100%',
      margin: 'auto',
      width: '100%'
    }}
  />
  <img
    src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    style={{
      display: 'block',
      height: '100%',
      margin: 'auto',
      width: '100%'
    }}
  />
  <img
    src="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    style={{
      display: 'block',
      height: '100%',
      margin: 'auto',
      width: '100%'
    }}
  /> */
//   </Carousel>
    )  
};

export default CarouselComponent;