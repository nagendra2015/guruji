
import Head from "next/head";
import { motion } from "framer-motion";

import CarouselList from "../components/CarouselList";
import Layout from "../components/Layout"

function About()
{
    return <Layout         mainTitle="My Home Page built with Next JS"
    footer={`Copyright ${new Date().getFullYear()}`}>

<Head>
        <title>A</title>
        <meta name="description" content="About page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>






<div>

<CarouselList></CarouselList>
      <div className="mt-3" >
        <div className="card  titlestrip ">
          <div className="card-header">
          <motion.div
            initial={{x:300,scale:0.5}} animate={{x:0,scale:1}} transition={{duration:2}}
          >

<h1>About Us</h1>
          </motion.div>


          </div>
          <div className="justifytext fs-5 p-3">
          XXXX is an organization to bring about the right information on swara yoga, an ancient science of breathing and to guide the sadhaks in their swara yoga sadhana. This website is under the direct guidance of Sannyasi Charanashrit who is involved in the practice and research on this ancient science from many years. This website is absolutely free and all the calculations of Swara Yoga are freely available online.
          </div>


          <div className="justifytext fs-5 p-3 ">
            <p>
            The knowledge of Swara Yoga will surprise many that Yogis have discovered thousands of years back much more than what we know today about the breath. As per Swara Yoga, 
            Breath is the language of our Self and it has connection to all the movement of time (KALA) - persent past and future
          </p>
          </div>




          


          



        </div>
      </div>



    </div>

    </Layout>
}

export default About