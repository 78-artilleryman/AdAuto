import React from 'react'
import { Link } from 'react-router-dom'

//bootstrap icon
import { Instagram } from 'react-bootstrap-icons';
import { ArrowUpShort } from 'react-bootstrap-icons';

//style
import styles from "../components/MenuBar.module.scss"

function MenuBar() {

  return (
    <div className={styles.container}>
      <aside className={styles.sideBar}>
          <div className={styles.instaButton}>
            <Instagram className={styles.instaLogo}/>
            <span>인스타그램</span>
            <ArrowUpShort className={styles.arrowUpShort}/>
          </div>
        <ul>
          <Link to='/'>
            <li>
              <span>캡션 생성</span>
            </li>
          </Link>
          <Link to='/tag'>
            <li>
              <span>해시태그 생성</span>
            </li>
          </Link>
          <Link to='/dm'>
            <li>
              <span>광고 DM 문구 생성</span>
            </li>
          </Link>
        </ul>
      </aside>
    </div>
  )
}

export default MenuBar
