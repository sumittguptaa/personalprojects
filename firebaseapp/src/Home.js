import React from 'react'
import "./Home.css"
import hack1 from './images/hack1.jpg'
import hack2 from './images/hack2.png'
import hack3 from './images/hack3.jpg'
import hack4 from './images/hack4.jpg'
import hack5 from './images/hack5.jpg'
import hack6 from './images/hack6.jpg'
function Home() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light   navbar-dark bg-dark custom_nav">
            <div className="container">
                <a className="navbar-brand" href="/">YourWisher</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Homepage</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="...Registration.html..//">Registration</a>
              </li>
    
              <li className="nav-item">
                <a className="nav-link active " href="/">Concerned topics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">Consultation</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">Data House</a>
              </li>
            </ul>
            <form className="d-flex rgstr">
             <a href="/"><div className="btn-lg btn-success">Register</div></a>
            </form>
          </div>
            </div>
        </nav>
        

 <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={hack1} className="d-block w-100"  alt="img1"/>
          </div>
          <div className="carousel-item active">
            <img src={hack2} className="d-block w-100" alt="img2"/>
          </div>
          <div className="carousel-item ">
            <img src={hack3} className="d-block w-100" alt="img3"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <div className="maincontent">
        <h2>What is mental health?</h2>
        <p>
          Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.

Over the course of your life, if you experience mental health problems, your thinking, mood, and behavior could be affected. Many factors contribute to mental health problems, including:

Biological factors, such as genes or brain chemistry
Life experiences, such as trauma or abuse
Family history of mental health problems.</p>
<h2>Early Warning Signs</h2>
<p>Not sure if you or someone you know is living with mental health problems? Experiencing one or more of the following feelings or behaviors can be an early warning sign of a problem:
<ul>
  <li>Eating or sleeping too much or too little</li>
  <li> Pulling away from people and usual activities</li>
  <li>Having low or no energy</li>
  <li> Feeling numb or like nothing matters</li>
  <li>Having unexplained aches and pains</li>
  <li> Feeling helpless or hopeless</li>
  <li> Feeling unusually confused, forgetful, on edge, angry, upset, worried, or scared</li>
  <li> Yelling or fighting with family and friends</li>
  <li> Experiencing severe mood swings that cause problems in relationships</li>
  <li> Hearing voices or believing things that are not true</li>
  <li> liThinking of harming yourself or others</li>
  <li> Inability to perform daily tasks like taking care of your kids or getting to work or school</li>
 
</ul> 
</p>  
       
<h3>People can experience different types of mental health problems. <br/> These problems can affect your thinking, mood, and behavior.</h3>

<div className="container">
  <div id="colm" className="row row-cols-4 ">
    <div className="col">Anxiety Disorders </div>
    <div className="col">Behavioral Disorders</div>
    <div className="col">Eating Disorders</div>
    <div className="col">Mood Disorders</div>
    <div className="col">Suicidal Behavior</div>
    <div className="col">Personality Disorders</div>
    <div className="col">Obsessive-Compulsive Disorder</div>
    <div className="col">Psychotic Disorders</div>
  </div>
</div>

<h3>Mental Health Myths and Facts</h3>
<p>Can you tell the difference between a mental health myth and fact? Learn the truth about the most common mental health myths.</p>

<h3>Mental Health Problems Affect Everyone <br/> </h3>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      
       <h1> Myth: Mental health problems don't affect me.</h1>
    </div>
    <div className="flip-card-back">
     <p><p>Fact: Mental health problems are actually very common. In 2014, about:</p>
      <ul>
        <li>One in five American adults experienced a mental health issue</li>
        <li>One in 10 young people experienced a period of major depression</li>
        <li>One in 25 Americans lived with a serious mental illness, such as schizophrenia, bipolar disorder, or major depression</li>
      </ul></p>
    </div>
  </div>
</div>
<div className="clearfix"></div>
<div className="flip-card card2" >
  <div className="flip-card-inner">
    <div className="flip-card-front">
  
       <h1>Myth: Children don't experience mental health problems.</h1>
    </div>
    <div className="flip-card-back">
     <p>Fact: Even very young children may show early warning signs of mental health concerns. These mental health problems are often clinically diagnosable,<br/> and can be a product of the interaction of biological, psychological, and social factors.

      Half of all mental health disorders show first signs before a person <br/> turns 14 years old, and three quarters of mental health disorders begin before age 24.</p>

    </div>
  </div>
</div>

<div className="clearfix"></div>
<div className="flip-card card3" >
  <div className="flip-card-inner">
    <div className="flip-card-front">
   
       <h1>Myth: Prevention doesn't work. It is impossible to prevent mental illnesses.</h1>
    </div>
    <div className="flip-card-back">
     <p>Fact: Prevention of mental, emotional, and behavioral disorders focuses on addressing known risk factors such as exposure to trauma that can affect the chances <br/> that children, youth, and young adults will develop mental health problems. Promoting the social-emotional well-being of children and youth leads to:</p>
     <ul>
       <li>Higher overall productivity</li>
       <li>Stronger economies</li>
       <li>Lower crime rates</li>
       <li>Better educational outcomes</li>
     </ul>

    </div>
  </div>
</div>

      </div>
      <div className="card-group">
        <div className="card">
          <img src={hack4} className="card-img-top" alt="img4"/>
          <div className="card-body">
            <h5 className="card-title">Nature:how connecting with nature benefits our mental health</h5>
            <p className="card-text">Research shows that people who are more connected with nature are usually happier in life and more likely to report feeling their lives are worthwhile. Nature can generate a multitude of positive emotions, such as calmness, joy, creativity and can facilitate concentration.

              Nature connectedness is also associated with lower levels of poor mental health; in particular lower depression and anxiety levels.
              
              Perhaps not surprisingly, people with strong nature connectedness are also more likely to have pro-environmental behaviours such as recycling items or buying seasonal food. This is likely to lead to further benefits, if these pro-environmental activities can lead to improvements in nature that we can then go on to enjoy. At a time of devastating environmental threats, developing a stronger mutually supportive relationship between people and the environment will be critical.</p>
            <p className="card-text"><small className="text-muted"></small></p>
          </div>
        </div>
        <div className="card">
          <img src={hack5} className="card-img-top" alt="img5"/>
          <div className="card-body">
            <h5 className="card-title">Mental health and nature policies briefing INDIA</h5>
            <p className="card-text">Research shows that people who are more connected with nature are usually happier in life and more likely to report feeling their lives are worthwhile. Nature can generate a multitude of positive emotions, such as calmness, joy, creativity and can facilitate concentration.

              Nature connectedness is also associated with lower levels of poor mental health; in particular lower depression and anxiety levels.
              
              Perhaps not surprisingly, people with strong nature connectedness are also more likely to have pro-environmental behaviours such as recycling items or buying seasonal food. This is likely to lead to further benefits, if these pro-environmental activities can lead to improvements in nature that we can then go on to enjoy. At a time of devastating environmental threats, developing a stronger mutually supportive relationship between people and the environment will be critical.</p>
            <p className="card-text"><small className="text-muted"></small></p>
          </div>
        </div>
        <div className="card">
          <img src={hack6} className="card-img-top" alt="img6"/>
          <div className="card-body">
            <h5 className="card-title">Top tips for connecting with nature</h5>
            <p className="card-text">Nature is all around us. It might be a garden, a local park, a nearby beach or open countryside. Even in cities where nature can be harder to find, there’s things community gardens or courtyards to discover and explore. Look out for the unexpected – an urban fox on your way out for the early shift, changes in the weather or birdsong outside your window. Try to notice nature wherever you are, in whatever way is meaningful for you. <br/> Taking some quiet time to reflect in natural surroundings using all your senses can be a real boost to your mental health. Whether you’re relaxing in the garden or on your way to work, try listening out for birdsong, look for bees and butterflies, or notice the movement of the clouds. All of these good things in nature can help you to find a sense of calm and joy.If you can, try to spend time visiting natural places - green spaces like parks, gardens or forests – or blue spaces like the beach, rivers and wetlands.   </p>
            <p className="card-text"><small className="text-muted"></small></p>
          </div>
        </div>
      </div>
      <br/><br/><br/>

         <iframe className="video" width="840" height="345" src="https://www.youtube.com/embed/zzIMNr49-j0?start=65" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      <br/><br/><br/><br/><br/><br/>

 <footer id="dk-footer" className="dk-footer">
              <div className="container">
                  <div className="row">
                      <div className="col-md-12 col-lg-4">
                          <div className="dk-footer-box-info">
                              <a href="index.html" className="footer-logo">
                                  <img src="https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_960_720.png" alt="footer_logo" className="img-fluid"/>
                              </a>
                              <p className="footer-info-text">
                                 YourWisher is always ready to help you when you need
                              </p>
                              <div className="footer-social-link">
                                  <h3>Follow us</h3>
                                  <ul>
                                      <li>
                                          <a href="/">
                                              <i className="fa fa-facebook"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="/">
                                              <i className="fa fa-twitter"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="/">
                                              <i className="fa fa-google-plus"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="/">
                                              <i className="fa fa-linkedin"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="/">
                                              <i className="fa fa-instagram"></i>
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div className="footer-awarad">
                              <img src="images/icon/best.png" alt=""/>
                              <p>Best Design Company 2019</p>
                          </div>
                      </div>
                      <div className="col-md-12 col-lg-8">
                          <div className="row">
                              <div className="col-md-6">
                                  <div className="contact-us">
                                      <div className="contact-icon">
                                          <i className="fa fa-map-o" aria-hidden="true"></i>
                                      </div>
                                     
                                      <div className="contact-info">
                                          <h3>Ghaziabad India</h3>
                                          <p>Near KIET college</p>
                                      </div>
                                    
                                  </div>
                               
                              </div>
                             
                              <div className="col-md-6">
                                  <div className="contact-us contact-us-last">
                                      <div className="contact-icon">
                                          <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                                      </div>
                                     
                                      <div className="contact-info">
                                          <h3>8936940345</h3>
                                          <p>Give us a call</p>
                                      </div>
                                     
                                  </div>
                                 
                              </div>
                           
                          </div>
                    
                          <div className="row">
                              <div className="col-md-12 col-lg-6">
                                  <div className="footer-widget footer-left-widget">
                                      <div className="section-heading">
                                          <h3>Useful Links</h3>
                                          <span className="animate-border border-black"></span>
                                      </div>
                                      <ul>
                                          <li>
                                              <a href="/">About us</a>
                                          </li>
                                          <li>
                                              <a href="/">Services</a>
                                          </li>
                                          <li>
                                              <a href="/">Projects</a>
                                          </li>
                                          <li>
                                              <a href="/">Our Team</a>
                                          </li>
                                      </ul>
                                      <ul>
                                          <li>
                                              <a href="/">Contact us</a>
                                          </li>
                                          <li>
                                              <a href="/">Blog</a>
                                          </li>
                                          <li>
                                              <a href="/">Testimonials</a>
                                          </li>
                                          <li>
                                              <a href="/">FAQ</a>
                                          </li>
                                      </ul>
                                  </div>
                                 
                              </div>
                           
                              <div className="col-md-12 col-lg-6">
                                  <div className="footer-widget">
                                      <div className="section-heading">
                                          <h3>Subscribe</h3>
                                          <span className="animate-border border-black"></span>
                                      </div>
                                      <p>
                                        https://YourWisher.com
                                     </p>
                                      <form action="#">
                                          <div className="form-row">
                                              <div className="col dk-footer-form">
                                                  <input type="email" className="form-control" placeholder="Email Address"/>
                                                  <button type="submit">
                                                      <i className="fa fa-send"></i>
                                                  </button>
                                              </div>
                                          </div>
                                      </form>
                                   
                                  </div>
                                 
                              </div>
                            
                          </div>
                       
                      </div>
                    
                  </div>
                
              </div>
             
      
      
              <div className="copyright">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-6">
                              <span>Copyright © 2021, All Right Reserved </span>
                          </div>
                        
                          <div className="col-md-6">
                              <div className="copyright-menu">
                                  <ul>
                                      <li>
                                          <a href="/">Home</a>
                                      </li>
                                      <li>
                                          <a href="/">Terms</a>
                                      </li>
                                      <li>
                                          <a href="/">Privacy Policy</a>
                                      </li>
                                      <li>
                                          <a href="/">Contact</a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      
                      </div>
                 
                  </div>
                
              </div>
            
              <div id="back-to-top" className="back-to-top">
                  <button className="btn btn-dark" title="Back to Top" style={{ display: "block"}}>
                      <i className="fa fa-angle-up"></i>
                  </button>
              </div>
            
      </footer>

      </div>
    )
}

export default Home
