import React from 'react';
import { useNavigate } from 'react-router-dom';
import  { useState } from 'react';
import Staff from "../components/Staff"
import Customer from '../components/customer';

import Roundgirl from '../components/roundgirl';
import Fukidashi from '../components/fukidashi';
import SelectPop1 from '../components/selectpop1';
const Stage1 = (props) => {
  
  const [isGameOver, setIsGameOver] = useState(false);
  const [vis, setVis] = useState("hidden");
  const [isDisabled, setIsDisabled] = useState(false); // Fukidashiから移動
  const navigate = useNavigate();
  const makeVisible = () => {
    setVis("visible");
  };
  const handleClick = () => {
    setIsGameOver(true);
    navigate(props.gameover);
  };
  const trueAnswer = () => {
    setVis("hidden");
  };
  const returnAnswer = () => {
    setIsDisabled(true) ;
  };
  const enableFukidashi = () => {
    setIsDisabled(false); // Fukidashiを有効にする関数
  };
  const disableFukidashi = () => {
    setIsDisabled(true); // Fukidashiのボタンを無効化
  };
  
     // useNavigateフックを使用してnavigate関数を取得
  
    const Stage1Round2 = () => {
      navigate(props.root); // ボタンがクリックされたときに/stage1にナビゲート
    };
  
    
  return (
    <div>
        <Staff/>
        <Roundgirl />
        <Customer src={props.Customer} />
        <Fukidashi value={props.value} makeVisible={makeVisible} isDisabled={isDisabled} onButtonClick={disableFukidashi}/>
        <SelectPop1 
        pop1={props.pop1}
        pop2={props.pop2}
        vis={vis}
        onPop1Click={handleClick} 
        trueAnswer={trueAnswer}
        returnAnswer={enableFukidashi}
        stage1Round={Stage1Round2}
        />
        
    </div>
  );
}

export default Stage1;