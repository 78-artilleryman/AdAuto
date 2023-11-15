import React from 'react'
import ChatGPT from '../components/Chatgpt'
import MenuBar from '../components/MenuBar'
import styles from "./ItagPage.module.scss"

//bootstrap icon
import { Instagram } from 'react-bootstrap-icons';

function ItagPage() {
  return (
 
    <div className={styles.container}>
        <MenuBar></MenuBar>

        <div>
          <Instagram/>
          <span>인스타그램 해시태그</span>
          <h2>인스타그램에 업로드할 게시글을 더욱 많은 사람이 볼 수 있게 만들어 보세요</h2>

          <div>
            <p>제품 / 브랜드 이름</p>
            <input></input>
          </div>

          <div>
            <p>제품 종류</p>
            <input></input>
          </div>

          <div>
            <p>게시글 내용</p>
            <p>해시 태그를 추천받고 싶은 내용을 작성해 주세요</p>
            <input></input>
          </div>
          <button>생성</button>
        </div>
      <ChatGPT></ChatGPT>
      
    </div>
  
  )
}

export default ItagPage