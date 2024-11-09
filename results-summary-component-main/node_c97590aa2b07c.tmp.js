* {
  padding: 0;
  margin: 0;
  border: 0;
}
body {
  height: 100vh;
  width: 100vw;
  background-color: #ecf2ff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  height: 512px;
  width: 736px;
  border-radius: 32px;
  background-color: white;
  display: flex;
}
.section1 {
  height: 100%;
  width: 50%;
  background: linear-gradient(#7755ff, #6943ff, #2f2ce9);
  /* border-radius: 32px; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  text-align: center;
  /* color: white; */
}
.box1 {
  color: #cac9ff;
  /* color: white; */
  font-size: 1.5rem;
}
.box2 {
  height: 200px;
  width: 200px;
  /* border-radius: 50%; */
  background-image: linear-gradient(#4d21c9, #2521, #2521);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.score {
  color: white;
  font-size: 5rem;
  font-weight: bolder;
}
.score1 {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin: 10px;
}
.no {
  color: #cac9ff;
  font-size: 1.4rem;
}
.box3 {
  height: 113px;
  width: 260px;
  font-size: 1.2rem;
  /* align-items: center; */
  color: #cac9ff;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  h1 {
    color: white;
    font-size: 2rem;
  }
}
.section2 {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
#box1 {
  color: #303b59;
  height: 28px;
  width: 288px;
}
#box2 {
  width: 288px;
  height: 272px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
}
.pic {
  display: flex;
  align-items: center;
}
.text {
  margin-left: 15px;
  width: 71px;
}
.result {
  font-size: 1.2rem;
  color: #303b59;
}
button {
  height: 56px;
  width: 288px;
  background-color: #303b59;
  border-radius: 40px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
}
button:hover {
  background: linear-gradient(#7755ff, #6943ff, #2f2ce9);
}
