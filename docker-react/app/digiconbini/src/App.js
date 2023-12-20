import { Route, Routes } from "react-router-dom";
import React, { useEffect,useCallback } from 'react';
import './App.css';
import Opening from "./views/pages/opening"
import Ending from "./views/pages/Ending"
import Stage1 from "./views/pages/Stage1.jsx"
import Stage1R2 from "./views/pages/Stage1R2.jsx";

import Gameover from "./views/pages/Gameover.jsx";
import Clear from "./views/pages/Clear.jsx";
import Girl from "./views/pages/girl.jpeg";
import Ojisan from "./views/pages/ojiisan.png";
import AW from "./views/pages/angry_woman.png"
import OW from "./views/pages/ojiisan_angry.png"
import Otaku from "./views/pages/otaku.png"
function App() {
  
  const blockBrowserBack = useCallback(() => {
    window.history.go(1)
}, [])

useEffect(() => {
    // 直前の履歴に現在のページを追加
    window.history.pushState(null, '', window.location.href)

    // 直前の履歴と現在のページのループ
    window.addEventListener('popstate', blockBrowserBack)

    // クリーンアップは忘れない
    return () => {
        window.removeEventListener('popstate', blockBrowserBack)
    }
}, [blockBrowserBack])

  return (
    <div className="App">
        
    <Routes> 
        <Route path="/" element={<Opening />} />
        <Route path="/stage1/round1" element={<Stage1 Customer={Girl} pop1={"..."} pop2={"レジ袋はご利用ですか？"} root='/stage1/round2' value="客:これください" gameover="/gameover"/>} />
        <Route path="/stage1/round2" element={<Stage1R2 Customer={Girl} pop11={"なんて言いました？"} pop22={"Sサイズでよろしかったでしょうか？"} root='/stage1/round3' value="客:袋はご利用ですか？"gameover="/gameover2"/>} />
        <Route path="/stage1/round3" element={<Stage1 Customer={Girl} pop1={"IDですか？"} pop2={"EDYですね!"} root='/stage1Clear'  value="客:EDYで払います" gameover="/gameover3"/>} />
        <Route path="/gameover" element={<Gameover angry={"レジ袋聞けよ！"} AngryPerson={AW} root="/stage1/round1"/>} />
        <Route path="/gameover2" element={<Gameover angry={"袋って言ってんだろ！"} AngryPerson={AW} root="/stage1/round2"/>} />
        <Route path="/gameover3" element={<Gameover angry={"ちゃんと聞けよ！"} AngryPerson={AW} root="/stage1/round3" />} />
        <Route path="/stage1Clear" element={<Clear root="/stage2/round1"/>}/>
        <Route path="/stage2/round1" element={<Stage1 Customer={Ojisan} pop1={"いらっしゃいませ!!!"} pop2={"いらっしゃいませ"} root='/stage2/round2' value="客:..." gameover="/gameover2-1"/>} />
        <Route path="/stage2/round2" element={<Stage1 Customer={Ojisan} pop1={"お箸はおつけしますか？"} pop2={"お箸おつけいたしますね"} root='/stage2/round3' value="客:..." gameover="/gameover2-2"/>} />
        <Route path="/stage2/round3" element={<Stage1R2 Customer={Ojisan} pop11={"QuickPayですね!"} pop22={"PayPayですね!"} root='/stage2Clear' value="客:...Pay(ボソッ)" gameover="/gameover2-3"/>} />
        <Route path="/gameover2-1" element={<Gameover angry={"うるさい！！！！"}AngryPerson={OW}root="/stage2/round1" />} />
        <Route path="/gameover2-2" element={<Gameover angry={"手で食えっていうのか！！！！！！！"}AngryPerson={OW}root="/stage2/round2" />} />
        <Route path="/gameover2-3" element={<Gameover angry={"ちゃんと聞けよ！"}AngryPerson={OW}root="/stage2/round3" />} />
        <Route path="/stage2Clear" element={<Clear root="/stage3/round1"/>} />
        <Route path="/stage3/round1" element={<Stage1 Customer={Otaku} pop1={"帰れ"} pop2={"いらっしゃいませ！"} root='/stage3/round2' value="デジコン会員:チーチー" gameover="/gameover3-1"/>} />
        <Route path="/stage3/round2" element={<Stage1 Customer={Otaku} pop1={"手で食え"} pop2={"お箸おつけいたしますね"} root='/stage3/round3' value="デジコン会員:チーチー" gameover="/gameover3-2"/>} />
        <Route path="/stage3/round3" element={<Stage1R2 Customer={Otaku} pop11={"温玉Payですね!"} pop22={"QuickPayですね!"} root='/stage3Clear' value="デジコン会員:チーチー" gameover="/gameover3-3"/>} />
        <Route path="/gameover3-1" element={<Gameover angry={"喋んな"}AngryPerson={Otaku}root="/stage3/round1" />} />
        <Route path="/gameover3-2" element={<Gameover angry={"そういう意見もある"}AngryPerson={Otaku}root="/stage3/round2" />} />
        <Route path="/gameover3-3" element={<Gameover angry={"いいな"}AngryPerson={Otaku}root="/stage3/round3" />} />
        <Route path="/stage3Clear" element={<Clear root="/ending"/>} />
        <Route path="/ending" element={<Ending />} />
    </Routes> 
    
    </div>
  );
}

export default App;
