import React from 'react';
import './agriculture.css';
import perma from '../images/permaculture.jpg';
import yt from '../images/youtube.png';
import pond from '../images/pond.jpeg';
import agro from '../images/agro.jpg';
import biodynamic from '../images/biodynamic.jpg';
import msp from '../images/msp.jpg';
import cr from '../images/circlerate.jpg';

const calculate = () => {
  let q1=0,q2=0,q3=0,q4=0,q5=0,p1=0,p2=0,p3=0,p4=0,p5=0;
    q1=document.querySelector(".quantity1");
    p1=document.querySelector(".price1");
    q2=document.querySelector(".quantity2");
    p2=document.querySelector(".price2");
    q3=document.querySelector(".quantity3");
    p3=document.querySelector(".price3");
    q4=document.querySelector(".quantity4");
    p4=document.querySelector(".price4");
    q5=document.querySelector(".quantity5");
    p5=document.querySelector(".price5");
    let o1=0,o2=0,o3=0,o4=0,o5=0;
    if(q1!=null && p1!=null)
        o1=(q1.value)*(p1.value);
    else
        o1=0;
    document.querySelector(".value1").value=o1;

    if(q2!=null && p2!=null)
        o2=(q2.value)*(p2.value);
    else
        o2=0;
    document.querySelector(".value2").value=o2;
    
    if(q3!=null && p3!=null)
        o3=(q3.value)*(p3.value);
    else
        o3=0;
    document.querySelector(".value3").value=o3;

    if(q4!=null && p4!=null)
        o4=(q4.value)*(p4.value);
    else
        o4=0;
    document.querySelector(".value4").value=o4;

    if(q5!=null && p1!=null)
        o5=(q5.value)*(p5.value);
    else
        o5=0;
    document.querySelector(".value5").value=o5;

    let final=0;
    final=o1+o2+o3+o4+o5;
    document.querySelector(".final").value=final;
}


const Home = () => {
  const today=new Date();
  return (
    <>
    <div className='rates'>
      <div className='msp'>
        <h2 className='msp-head'>Minimum Support Price</h2>
        <img className='msp-img' src={msp} alt="" />
        <p className='msp-info'>MSP is price fixed by Government of India to protect the producer - farmers - against excessive fall in price during bumper production years.
        <br />Click on the button to know current msp rates.
        </p>
        <a className="msp-btn btn btn-light" href="https://farmer.gov.in/mspstatements.aspx" role="button">Know More</a>
      </div>

      <div className='cr'>
        <h2 className='cr-head'>Circle Rates</h2>
        <img className='cr-img' src={cr} alt="" />
        <p className='cr-info'>Circle rate is the lowest price, or minimum price, at which the sale or transfer of a residential or commercial property can be registered before being sold or transferred.
        <br />Click on the button to know more about circle rates.
        </p>
        <a className="cr-btn btn btn-light" href="https://www.magicbricks.com/blog/hi/circle-rates-in-up-uttar-pradesh/127505.html" role="button">Know More</a>
      </div>
    </div>


    <div className='calculate'>
      <h3 className='calculate-head'>Do you want to calculate your multiple crop prices?Do it here by just entering your crops quantity and prices.</h3>
      <div className='inputs'>
        <div className='ip input1'>
          <input type="text" className='quantity1 form-control' placeholder='Quantity 1' />
          <h3>*</h3>
          <input type="text" className='price1 form-control' placeholder='Price 1' />
          <h3>=</h3>
          <input type="text" className='value1 form-control' />
        </div>

        <div className='ip input2'>
          <input type="text" className='quantity2 form-control' placeholder='Quantity 2' />
          <h3>*</h3>
          <input type="text" className='price2 form-control' placeholder='Price 2' />
          <h3>=</h3>
          <input type="text" className='value2 form-control' />
        </div>

        <div className='ip input3'>
          <input type="text" className='quantity3 form-control' placeholder='Quantity 3' />
          <h3>*</h3>
          <input type="text" className='price3 form-control' placeholder='Price 3' />
          <h3>=</h3>
          <input type="text" className='value3 form-control' />
        </div>

        <div className='ip input4'>
          <input type="text" className='quantity4 form-control' placeholder='Quantity 4' />
          <h3>*</h3>
          <input type="text" className='price4 form-control' placeholder='Price 4' />
          <h3>=</h3>
          <input type="text" className='value4 form-control' />
        </div>

        <div className='ip input5'>
          <input type="text" className='quantity5 form-control' placeholder='Quantity 5' />
          <h3>*</h3>
          <input type="text" className='price5 form-control' placeholder='Price 5' />
          <h3>=</h3>
          <input type="text" className='value5 form-control' />
        </div>
      </div>
      <div className='output'>
        <input type="text" className='final form-control form-control-lg' placeholder='Total Price' />
      </div>
      <div className='cbtn'>
        <button className='calculate-btn btn btn-lg btn-dark' onClick={calculate}>GO</button>
      </div>
      <script src="calculate.js" charset="utf-8"></script>
    </div>


    <div className='alter-tech'>
      <h1 className='aft-head'>Alternative Farming Techniques</h1>

      <div className='technique'>
        <div><img className='perma-img' src={perma} alt="" /></div>
        <div className='perma-content'>
          <h3>Permaculture</h3>
          <p>Permaculture is an approach to land management and settlement design that adopts arrangements observed in flourishing natural ecosystems. It includes a set of design principles derived using whole-systems thinking. It applies these principles in fields such as regenerative agriculture, town planning, rewilding, and community resilience.
          <br /> Permaculture emphasises traditional and new practices in which all the input is produced by the farm itself, resulting in food self-sufficiency. 
          </p>
          <div className='aft-btns'>
            <button className='read-btn btn btn-success'><a className='btn-link-read' href="https://agriplus.in/news/what-is-permaculture-hindi/">Read More</a></button>
            <button className='video-btn btn btn-outline-success'><a className='btn-link-video' href="https://www.youtube.com/watch?v=LBIvBgmP-8g"><img src={yt} alt="" /> Video</a></button>
          </div>
        </div>
      </div>

      <div className='technique'>
        <div className='pond-content'>
          <h3>Farm Pond</h3>
          <p>Farm Pond is a dug out structure with definite shape and size having proper inlet and outlet structures for collecting the surface runoff flowing from the farm area. It is one of the most important rain water harvesting structures constructed at the lowest portion of the farm area.</p>
          <div className='aft-btns'>
            <button className='read-btn btn btn-success'><a className='btn-link-read' href="https://indiansfarmer.com/agriculture-farm-pond-%E0%A4%95%E0%A5%83%E0%A4%B7%E0%A4%BF-%E0%A4%A4%E0%A4%BE%E0%A4%B2%E0%A4%BE%E0%A4%AC/">Read More</a></button>
            <button className='video-btn btn btn-outline-success'><a className='btn-link-video' href="https://www.youtube.com/watch?v=aMdPMQdG5wo"><img src={yt} alt="" /> Video</a></button>
          </div>
        </div>
        <div><img className='pond-img' src={pond} alt="" /></div>
      </div>

      <div className='technique'>
        <div><img className='agro-img' src={agro} alt="" /></div>
        <div className='agro-content'>
          <h3>Agroforestry</h3>
          <p>Agroforestry is a collective name for land-use systems and technologies where woody perennials (trees, shrubs, palms, bamboos, etc.) are deliberately used on the same land-management units as agricultural crops and/or animals, in some form of spatial arrangement or temporal sequence.</p>
          <div className='aft-btns'>
            <button className='read-btn btn btn-success'><a className='btn-link-read' href="https://kisansahayata.com/agroforestry-hindi/#:~:text=%E0%A4%95%E0%A5%83%E0%A4%B7%E0%A4%BF%20%E0%A4%B5%E0%A4%BE%E0%A4%A8%E0%A4%BF%E0%A4%95%E0%A5%80%20%E0%A4%95%E0%A4%BE%20%E0%A4%85%E0%A4%B0%E0%A5%8D%E0%A4%A5%20%7C%20agroforestry,%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%AE%E0%A4%A4%E0%A4%BE%20%E0%A4%95%E0%A5%8B%20%E0%A4%AC%E0%A4%A2%E0%A4%BC%E0%A4%BE%E0%A4%AF%E0%A4%BE%20%E0%A4%9C%E0%A4%BE%E0%A4%A4%E0%A4%BE%20%E0%A4%B9%E0%A5%88%E0%A5%A4">Read More</a></button>
            <button className='video-btn btn btn-outline-success'><a className='btn-link-video' href="https://www.youtube.com/watch?v=khUlc_RjMJs"><img src={yt} alt="" /> Video</a></button>
          </div>
        </div>
      </div>

      <div className='technique'>
        <div className='biodynamic-content'>
          <h3>Biodynamic Farming</h3>
          <p>Biodynamic farming and gardening is a way for land cultivators to develop a symbiotic relationship with their soil. Biodynamic practices take the life force and natural elements of the land into consideration when cultivating crops, establishing a more biologically harmonious environment and more efficient farm management.</p>
          <div className='aft-btns'>
            <button className='read-btn btn btn-success'><a className='btn-link-read' href="https://www.gaonconnection.com/gaon-connection-tv/greater-noida-the-moon-the-stars-organic-farming-world-kumbh-dynamic-farming-nc-upadhyay#:~:text=%E0%A4%AC%E0%A4%BE%E0%A4%AF%E0%A5%8B%20%E0%A4%A1%E0%A4%BE%E0%A4%AF%E0%A4%A8%E0%A4%AE%E0%A4%BF%E0%A4%95%20%E0%A4%96%E0%A5%87%E0%A4%A4%E0%A5%80%20%E0%A4%95%E0%A4%BE%20%E0%A4%AE%E0%A4%A4%E0%A4%B2%E0%A4%AC,%E0%A4%95%E0%A4%88%20%E0%A4%97%E0%A5%81%E0%A4%A8%E0%A4%BE%20%E0%A4%9C%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%A6%E0%A4%BE%20%E0%A4%B9%E0%A5%8B%E0%A4%A4%E0%A4%BE%20%E0%A4%B9%E0%A5%88%E0%A5%A4">Read More</a></button>
            <button className='video-btn btn btn-outline-success'><a className='btn-link-video' href="https://www.youtube.com/watch?v=B2OZbVGanMo"><img src={yt} alt="" /> Video</a></button>
          </div>
        </div>
        <div><img className='biodynamic-img' src={biodynamic} alt="" /></div>
      </div>

    </div>

    
    <footer>
      <p>Copyright &copy; {today.getFullYear()} FARMERPRISM</p>
    </footer>
    </>
  );
};
  
export default Home;