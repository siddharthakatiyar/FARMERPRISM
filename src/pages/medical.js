import React from "react";
import './medical.css';

const Home = () => {
  const today=new Date();
  return (
    
    <div>
      <br />
      <h1 style={{ textAlign: "center" }}>
        <b>WELCOME TO MEDICAL SECTION</b>{" "}
      </h1>
      <h5 style={{ textAlign: "center" }}>
        <b>Here are some of the common diseases and their prevention methods</b>{" "}
      </h5>
      <br />
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/medicall.jpg"})`,
          width: "100%",
          height: "200vh",
          marginTop: "2px",
          fontSize: "25px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="cough-content">
          <p>
            <b>
              1. <u>COLD,COUGH,FEVER</u>
            </b>{" "}
            <br />
            The common cold is a viral infection of your nose and throat (upper
            respiratory tract).
            <br />
            It's usually harmless, although it might not feel that way. Many
            types of viruses can cause a common cold. your body’s cells for use
            as energy.
          </p>
          <div className="aft-btns">
            <button className="read-btn btn btn-success">
              <a
                className="btn-link-read"
                href="https://www.mayoclinic.org/diseases-conditions/common-cold/symptoms-causes/syc-20351605"
              >
                Read More
              </a>
            </button>
            <button className="video-btn btn btn-outline-success">
              <a className="btn-link-video" href="https://youtu.be/i0PKpOvxaM4">
                Video
              </a>
            </button>
          </div>
        </div>
        <br />
        <div className="sugar-content">
          <p>
            <b>
              2. <u>DIABETES</u>
            </b>
            <br />
            Diabetes is a chronic (long-lasting) health condition that affects
            how your body turns food into energy.
            <br /> When your blood sugar goes up, it signals your pancreas to
            release insulin. Insulin acts like a key to let the blood sugar into
            your body’s cells for use as energy.
          </p>
          <div className="aft-btns">
            <button className="read-btn btn btn-success">
              <a
                className="btn-link-read"
                href="https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes"
              >
                Read More
              </a>
            </button>
            <button className="video-btn btn btn-outline-success">
              <a
                className="btn-link-video"
                href=" https://youtu.be/RNL4JuHLlmY"
              >
                Video
              </a>
            </button>
          </div>
        </div>
        <br />
        <div className="highBP-content">
          <p>
            <b>
              3. <u>HIGH BLOOD PRESSURE</u>
            </b>
            <br />
            High blood pressure, also called hypertension, is blood pressure
            that is higher than normal.
            <br />
            Having blood pressure measures consistently above normal may result
            in a diagnosis of high blood pressure (or hypertension).
          </p>
          <div className="aft-btns">
            <button className="read-btn btn btn-success">
              <a
                className="btn-link-read"
                href="https://www.cdc.gov/bloodpressure/about.htm#:~:text=High%20blood%20pressure%2C%20also%20called,blood%20pressure%20(or%20hypertension)."
              >
                Read More
              </a>
            </button>
            <button className="video-btn btn btn-outline-success">
              <a className="btn-link-video" href="https://youtu.be/N5EH5aAYElc">
                Video
              </a>
            </button>
          </div>
        </div>
        <br />
        <div className="bone-content">
          <div>
            <img className="photo" src={"videos/photo.jpeg"} alt="" />
          </div>
          <p>
            <b>
              4. <u>OSTEOPOROSIS(BONE WEAKNESS)</u>
            </b>
            <br />
            Osteoporosis causes bones to become weak and brittle — so brittle
            that a fall or even mild stresses such as bending over or coughing
            can cause a fracture.
            <br />
            Vitamin D deficiency can lead to a loss of bone density, which can
            contribute to osteoporosis and fractures (broken bones).
          </p>
          <div className="aft-btns">
            <button className="read-btn btn btn-success">
              <a
                className="btn-link-read"
                href="https://www.mayoclinic.org/diseases-conditions/osteoporosis/symptoms-causes/syc-20351968#:~:text=Osteoporosis%20causes%20bones%20to%20become,being%20broken%20down%20and%20replaced."
              >
                Read More
              </a>
            </button>
            <button className="video-btn btn btn-outline-success">
              <a className="btn-link-video" href="https://youtu.be/qkotZZ5-ONY">
                Video
              </a>
            </button>
          </div>
        </div>
      </div>
    <footer>
      <p>Copyright &copy; {today.getFullYear()} FARMERPRISM</p>
    </footer>
    </div>
  );
};

export default Home;
