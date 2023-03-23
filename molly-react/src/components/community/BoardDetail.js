import React, { useState } from 'react';
import Board from './Board';
import styles from '../../css/BoardDetail.module.css';
import { useParams } from 'react-router-dom';
import {IoMdThumbsUp} from 'react-icons/io';
import {FaComment} from 'react-icons/fa';
import {CgProfile} from 'react-icons/cg';
import { Button } from '../Button';

const BoardDetail = (props) => {
  let {id} = useParams();
  const [text] = useState([
    {
      id: 1,
      title: '강아지 자랑',
      detail: '제 강아지 귀엽죠?',
      time: '7분전',
      writer: 'hollymolly',
      views: 52,
      good: 3,
      comment: 4,
      commentwriter: 'dangdang',
      commenttime: '2분전',
      commenttext: 'ㄱㅇㅇ'
    }, 
    {
      id: 2,
      title: '나만 고양이 없어',
      detail: '😞😞',
      time: '20분전',
      writer: '랜선집사',
      views: 28,
      good: 2,
      comment: 8,
      commentwriter: 'dangdang',
      commenttime: '2분전',
      commenttext: 'ㄱㅇㅇ'
    }, 
    {
      id: 3,
      title: '종강',
      detail: 'd-104',
      time: '26분전',
      writer: 'illdang100',
      views: 30,
      good: 0,
      comment: 2,
      commentwriter: 'dangdang',
      commenttime: '2분전',
      commenttext: 'ㄱㅇㅇ'
    }
  ]);

  let post = text.filter((item) => item.id === parseInt(id));

  return (
    <div style={{position:"relative", width:"75%", margin:"auto"}}>
      <Board />
      <div className={styles.board}>
        <h2>{post[0].title}</h2>
        <span><CgProfile /></span>
        <span>{post[0].writer}</span>
        <span>{post[0].time}</span>
        <p>{post[0].detail}</p>
        {post[0].id === 1 ? <img src={process.env.PUBLIC_URL + '/img/puppy.jpg'} alt="puppy"/> : null}
        <div className={styles.count}>
          <span><IoMdThumbsUp color="#B27910" size="18px"/></span>
          <span>{post[0].good}</span>
          <span><FaComment color="#B27910" size="13px"/></span>
          <span>{post[0].comment}</span>
        </div>
      </div>
      <div className={styles.comment}>
        <span><CgProfile /></span>
        <span>{post[0].commentwriter}</span>
        <span>{post[0].commenttime}</span>
        <span>{post[0].commenttext}</span>
      </div>
      <div className={styles.footer}>
        <input></input>
        <Button name={"등록"} />
      </div>
    </div>
  );
};

export default BoardDetail;