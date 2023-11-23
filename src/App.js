import { Route, Routes } from "react-router-dom";
import './App.css';
import Opening from "./views/pages/opening"
import Stage1 from "./views/pages/Stage1.jsx"
import Stage1R2 from "./views/pages/Stage1R2.jsx";
import Stage1R3 from "./views/pages/Stage1R3.jsx";
import Gameover from "./views/pages/Gameover.jsx";
import Clear from "./views/pages/Clear.jsx";
import Girl from "./views/pages/girl.jpeg";
import Ojisan from "./views/pages/ojiisan.png";
function App() {
  return (
    <div className="App">
    <Routes> 
        <Route path="/" element={<Opening />} />
        <Route path="/stage1/round1" element={<Stage1 Customer={Girl} pop1={"..."} pop2={"レジ袋はご利用ですか？"} root='/stage1/round2' value="客:これください"/>} />
        <Route path="/stage1/round2" element={<Stage1R2 Customer={Girl} pop11={"なんて言いました？"} pop22={"Sサイズでよろしかったでしょうか？"} root='/stage1/round3' value="客:袋はご利用ですか？"/>} />
        <Route path="/stage1/round3" element={<Stage1 Customer={Girl} pop1={"IDですか？"} pop2={"EDYですね!"} root='/stage1Clear'  value="客:EDYで払います"/>} />
        <Route path="/gameover" element={<Gameover angry={"レジ袋聞けよ！"} />} />
        <Route path="/gameover2" element={<Gameover angry={"袋って言ってんだろ！"} />} />
        <Route path="/gameover3" element={<Gameover angry={"ちゃんと聞けよ！"} />} />
        <Route path="/stage1Clear" element={<Clear />} />
        <Route path="/stage2/round1" element={<Stage1 Customer={Ojisan}/>} />
        <Route path="/stage2/round2" element={<Stage1 Customer={Ojisan}/>} />
        
    </Routes> 
    </div>
  );
}

export default App;
