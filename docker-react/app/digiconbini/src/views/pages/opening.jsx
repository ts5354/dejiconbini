import React from 'react'
import  OPP from "./opening.gif"
import { useNavigate } from 'react-router-dom';
import "./Opening.css"
const Opening = () => {
  
    // Handler for popup2 click
   
    const [name, setName] = React.useState(''); // 名前の状態を追加
    const navigate = useNavigate();

    const handleNameChange = (event) => {
    setName(event.target.value); // ユーザーの入力を状態に設定
    };
    const handleSubmit = async () => {
      try {
        const response = await fetch('http://localhost:2000/opening', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name }), // 入力された名前を送信
        });
        const data = await response.json();
        console.log('Name updated:', data);
        sessionStorage.setItem('userId', data.id);
        navigate('/stage1/round1');
      } catch (error) {
        console.error('Error updating name:', error);
      }
    };
return (
    <div>
        <img src={OPP} style={{ width: '100%' }}/>
        <button onClick={handleSubmit}>
          スタート
        </button>
        
        <input 
          type="text"
          id="text3"
          name="name" 
          required minlength="4" 
          maxlength="8" 
          size="10" 
          value={name}
          placeholder="名前を入力する"
          onChange={handleNameChange}
        />
        <div class="text_underline"></div>
    </div>
  )
}
export default Opening