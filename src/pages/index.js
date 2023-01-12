import React from 'react';
import farmer from '../images/farmer.jpg';
import './index.css';

const Home = () => {
  const today=new Date();
  return (
    <>
      <div className='intro'>
        <img className='farmer-img' src={farmer} alt="" />
        <p className='farmer-intro'>“Farmers are the backbone of India". Almost the entire economy is sustained by agriculture, which is the mainstay of the villages. It contributes 16% of the overall GDP and accounts for employment of approximately 52% of the Indian population. Rapid growth in agriculture is essential not only for self-reliance but also to earn valuable foreign exchange.
        <br />  With provision of timely and adequate inputs such as fertilizers, seeds, pesticides and by making available affordable agricultural credit /crop insurance, Indian farmers are going to ensure food and nutritional security to the Nation.
        </p>
      </div>
      <div className='about-us'>
        <h1 className='about-head'>About Us</h1>
        <p className='about'>It is envisaged to make available relevant information and services to the farming community and private sector through the use of information and communication technologies, to supplement the existing delivery channels provided for by the department. FARMERPRISM is an endeavour in this direction to create one stop for meeting all informational needs relating to Agriculture, Finance and Medical sectors for an Indian farmer. With this Indian Farmer will not be required to sift through maze of websites created for specific purposes.
        <br /> Once in the Farmerprism, a farmer will be able to get all relevant information on specific subjects around his village. Farmers will also be able to ask specific queries as well as give valuable feedback through the Feedback module specially developed for the purpose.
        </p>
      </div>
      <footer>
        <p>Copyright &copy; {today.getFullYear()} FARMERPRISM</p>
      </footer>
    </>
    
  );
};
  
export default Home;