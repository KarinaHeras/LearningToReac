import React from 'react'
import './home.css'

function Home() {
  return (
    <div className="home">
      <div className="home_banner">
      <h1>Learning <strong>Reactjs</strong></h1>
      </div>
      <div className="home_sub_banner">
      <p>Product | Category | Other </p>
      </div>
      <div className="home_content" id="project">
          <div className="home_content_title">
              <h2>Product</h2>
          </div>
          <div className="home_clousters">
              <div>
                  <a href=""></a>
                  <h3>Product 1</h3>
              </div>
              <div>
              <a href=""></a>
                  <h3>Product 2</h3>
              </div>
              <div>
              <a href=""></a>
                  <h3>Producto 3</h3>
              </div>
              <div>
              <a href=""></a>
                  <h3>Product 4</h3>
              </div>
              <div>
                  <a href=""/>
                  <h3>Product 5</h3>
              </div>
              <div>
              <a href=""></a>
                  <h3>Producto 6</h3>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Home
