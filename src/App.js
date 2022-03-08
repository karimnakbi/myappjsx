
import './style.css';
import imageInSrc from  './imageInSrc.jpg';





function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className="title red">Workshop JSX</h1>

<br/>

<img className="img2" src={imageInSrc} alt="img2"/>


<br/>

<img className="img1" src="/imageInPublic.jpg" alt="img1"/>

</div>

<video className="vid" width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
    </div>


);
}

export default App;