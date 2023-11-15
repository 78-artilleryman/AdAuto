import React from 'react'
import ChatGPT from '../components/Chatgpt'
import MenuBar from '../components/MenuBar'
import styles from "./IdmPage.module.scss"

//bootstrap icon
import { Instagram } from 'react-bootstrap-icons';

function IdmPage() {
  return (
    <div className={styles.container}>
      <MenuBar></MenuBar>

        <div>
          <Instagram/>
          <span>인스타그램 DM 문구 생성</span>
          <h2>고객에게 보낼 DM을 간단하게 생성해 보세요</h2>
      
          <div>
            <p>제품 / 브랜드 이름</p>
            <input></input>
          </div>

          <div>
            <p>제품 종류</p>
            <input></input>
          </div>

          <div>
            <p>포함시키고 싶은 DM 내용</p>
            <input></input>
          </div>
          <button>생성</button>
        </div>
      <ChatGPT></ChatGPT>
    
  </div>
  )
}

export default IdmPage