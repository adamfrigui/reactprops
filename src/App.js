import Profile from './profile/Profile';
import './App.css';

function App() {
  const handleName = (fullName) =>{
    alert(`my name is ${fullName}`);
}
  return (
    <div className="App">
      <Profile fullName ='ademfrigui' bio='front-end student' profession='student' handleName={handleName}>
      <img src="https://cdn.vox-cdn.com/thumbor/N7E4hPnlQT-gkairuvCVi4CNmOs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19658558/the_child_star_wars_gallery_5e3204be4f668.jpg" alt="baby yoda" width="270" height="300"/>
      </Profile>
    </div>
  );
}

export default App;
