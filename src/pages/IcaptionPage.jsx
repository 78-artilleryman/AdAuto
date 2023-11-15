import {useState} from 'react'
import ChatGPT from '../components/Chatgpt'
import MenuBar from '../components/MenuBar'
import styles from "./IcaptionPage.module.scss"

//bootstrap icon
import { Instagram } from 'react-bootstrap-icons';

function Home() {
  const [openGPT,setOpenGPT] = useState(false);
  const [result, setResult] = useState("123");

  function resultBuuton(){
    setOpenGPT(true);
  }

  function resultChange(event){
    setResult(`${event.target.value}라는 주제를 가지는 인스타 캡션 글을 한국어로 하나만 추천해줘`);
  }

  function handleGenerateCaption() {
    // Pass the 'result' state as a prop to the ChatGPT component
    // You can also perform additional logic before passing the value
    // For example: Call an API, invoke a function, etc.
    console.log('Generated caption:', result);
  }

  return (
    <div className={styles.container}>
      <MenuBar></MenuBar>

      <div>
        <Instagram/>
        <span>인스타그램 캡션</span>
        <h2>인스타그램에 업로드할 사진을 더욱 빛내줄 게시글을 생성해보세요.</h2>
        <p>사진설명</p>
        <p>인스타그램에 업로드할 사진에 대해 설명해주세요.</p>
        <input  onChange={resultChange}></input>
        <button onClick={resultBuuton}>보내기</button>
      </div>
      {openGPT  && <ChatGPT result={result} />} 
      
    </div>
  )
}

export default Home