<style>
    @import url('https://fonts.googleapis.com/css?family=VT323');

body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #bebebe;
}

.container {
  width: 800px;
  height: 600px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: 'VT323', monospace;

}

nav {
  width: 100%;
  height: 500px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav .img_bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
}

nav .img_bg img {
  width: 95%;
  height: 100%;
  position: absolute;
}

.microsoft_logo {
  position: absolute;
  top: 75px;
}

.microsoft_logo p {
  color: #00ffff;
  font-size: 100px;
  text-align: center;
  font-weight: 900;
  margin: 0;
  padding: 0;
  text-shadow: 2px 1px 1px rgba(0, 0, 0, 1);
  letter-spacing: -6px
}

.microsoft_logo span {
  font-size: 30px;
  position: relative;
  bottom: 40px;
  left: 10px;
}

.menu_nav {
  width: 95%;
  height: 85%;
  position: absolute;
}

.list-left {
  width: 200px;
  height: 300px;
  position: absolute;
  left: 20px;
  top: 140px;
}

ul a {
  color: #00ffff;
  font-size: 20px;
}

li {
  list-style: none;
  margin-bottom: 40px;
}

.list-left a:nth-child(1) {
  position: relative;
  left: -45px;
}

.list-left a:nth-child(2) {
  position: relative;
  left: -25px;
}

.list-left a:nth-child(3) {
  position: relative;
  left: 10px;
}

.list-right {
  width: 220px;
  height: 150px;
  position: absolute;
  right: 20px;
  top: 140px;
  text-align: right;
}

.list-right a:nth-child(1) {
  position: relative;
  left: 0px;
}

.list-right a:nth-child(2) {
  position: relative;
  left: -20px;
}

.list-right a:nth-child(3) {
  position: relative;
  left: -50px;
}

.list-mid {
  width: 300px;
  height: 200px;
  position: absolute;
  left: 220px;
  top: 140px;
  text-align: center;
  margin: 0;
  padding: 0;
}

.no_margin {
  margin-bottom: 20px !important;
}

.list-mid li {
  margin-bottom: 35px;
}

.list-bottom {
  width: 470px;
  height: 100px;
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.list-bottom li {
  margin: 0;
  padding: 0;
}

.list-bottom a:nth-child(1) {
  margin-top: 20px;
  position: relative;
  left: -35px;
}

.list-bottom a:nth-child(2) {
  margin-top: 20px;
  position: relative;
  left: -5px;
}

.list-bottom a:nth-child(3) {
  position: relative;
  left: -15px;
  top: 15px;
}
</style>


<div class="container">
    <nav>
      <div class="img_bg">
        <img src="https://i.ibb.co/w7s4m4y/oJSqVgX.png">
      </div>
      <div class="microsoft_logo">
        <p><em>Atilla Alsan</em><span>&trade;</span></p>
      </div>
      <div class="menu_nav">
        <ul class="list-left">
          <a href="#">
            <li>Github</li>
          </a>
          <a href="#">
            <li>Twitter</li>
          </a>
          <a href="#">
            <li>Email</li>
          </a>
        </ul>
        <ul class="list-right">
          <a href="#">
            <li>Space Pictures</li>
          </a>
          <a href="#">
            <li>Blog</li>
          </a>
          <a href="#">
            <li>Impressum</li>
          </a>
        </ul>
        <ul class="list-mid">
          <a href="#">
            <li class="no_margin">Software Developer</li>
          </a>
          <a href="#">
            <li>Mid-level Engineer</li>
          </a>
          <a href="#">
            <li>FulLstack</li>
          </a>
        </ul>
      </div>
    </nav>
  </div>