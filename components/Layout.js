import Navbarmenu from "./Navbarmenu";
import { motion } from "framer-motion";
import { FacebookEmbed } from 'react-social-media-embed';
const Layout = ({ mainTitle, footer, children }) => (
  <div>
    <Navbarmenu />

    {/* <!-- About Start --> */}
    <div className="container-xxl">
      <div className="container">
        <div className="pageColor rounded">
          <div className="row">
            {/* <!--content page Start --> */}
            <div className="col-lg-9">{children}</div>
            {/* <!-- page end --> */}
            {/* <!-- page right side Start --> */}

            <div className="col-lg-3 rightsidebar">
              <div className="pt-3">
                <motion.div
                  className="card  titlestrip"
                  initial={{ x: -300, scale: 0.5 }}
                  animate={{ x: 0, scale: 1 }}
                  transition={{ duration: 2 }}
                >
                  <div className="card-header text-white">
                    <h3> News and Updates</h3>
                  </div>
                  <div className="fs-5 justifytext">
                    <ul>
                      <li>Swara Yoga news 1</li>
                      <li>Swara Yoga news 2</li>
                      <li>Swara Yoga news 3</li>
                      <li>Swara Yoga news 4</li>
                      <li>Swara Yoga news 5</li>
                      <li>Swara Yoga news 6</li>
                      <li>Swara Yoga news 7</li>
                      <li>Swara Yoga news 8</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  className="card  titlestrip"
                  initial={{ x: 300, scale: 0.5 }}
                  animate={{ x: 0, scale: 1 }}
                  transition={{ duration: 2 }}
                >
                  <div className="card-header text-white">
                    <h3> Youtube Video</h3>
                  </div>
                  <div className="fs-5 justifytext">
                    <div className="video-responsive">
                      <iframe
                        src={
                          "https://www.youtube.com/embed/4bLFMdYjtCU?list=PL2vbAqrds2D2JSMZbUANuZHXHEM8rDLoN"
                        }
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                      />
                    </div>
                  </div>


                  <div className="fs-5 pt-3 justifytext">
                    <div className="video-responsive">
                      <iframe
                        src={
                          "https://www.youtube.com/embed/sWlR-QjYcsU"
                        }
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                      />
                    </div>
                  </div>



                  <div className="fs-5 pt-3 justifytext">
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
  <FacebookEmbed url="https://www.facebook.com/SwaraShastra"  />
</div>
                  </div>


                </motion.div>
              </div>
            </div>

            {/* <!--end page right side Start --> */}
          </div>
        </div>
      </div>
    </div>


<div className="row footer pt-4">

<div className="container-xxl">
<div className="container">
<center><h1>Footer Information</h1></center>

</div>
</div>
</div>




  </div>
);

export default Layout;
