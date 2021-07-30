import React from "react";
import UserInfo from "../../components/Profile/UserInfo";
import UserActivity from "../../components/Profile/UserActivity";
import DealItem from "../../components/Profile/DealItem";
import CommentItem from "../../components/CommentItem";
import "./style.scss";
import { useState, useEffect } from "react";

function Profile() {
  const [userObj, setUserObject] = useState({});
  const [activeTab, setActiveTab] = useState({});
  const [tabInfo, setTabInfo] = useState([]);
  useEffect(() => {
    // 정보받아옴
    setUserObject({
      nickname: "변대웅짱",
      image:
        "https://blog.kakaocdn.net/dn/0mySg/btqCUccOGVk/nQ68nZiNKoIEGNJkooELF1/img.jpg",
      dong: "덕명동",
      mannerScore: 3.5,
      info: "Lorem ipsum dolor, sit amet consec tetur adipisicing elit. sit amet consectetur adip isici ng elit ",
      dealCnt: 10,
      followerCnt: 10,
      followingCnt: 11,
    });
    setTabInfo([
      {
        id: 12,
        img: "http://ccimg.hellomarket.com/images/2019/item/02/19/16/1121_3704470_1.jpg?size=s6",
        title: "어린왕자",
        price: 1000,
        author: "생텍쥐페리",
        publisher: "하이",
        deal_title: "쿨거래원함",
        like: 23,
        user_like: true,
        time: "몇시간전",
      },
      {
        id: 13,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6FgDQnQ7o_Fjbw6ABv9OvbTAGfzxZQEfOSQ&usqp=CAU",
        price: 1050,
        title: "어린왕자",
        author: "생텍쥐페리",
        publisher: "물구나무",
        deal_title: "네고가능",
        like: 23,
        user_like: true,
        time: "몇시간전",
      },
      {
        id: 15,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6FgDQnQ7o_Fjbw6ABv9OvbTAGfzxZQEfOSQ&usqp=CAU",
        price: 1000,
        title: "어린왕자",
        author: "생텍쥐페리",
        publisher: "하이",
        deal_title: "쿨거래원함",
        like: 1,
        user_like: false,
        time: "몇시간전",
      },
      {
        id: 14,
        img: "https://img1.yna.co.kr/etc/inner/KR/2020/09/04/AKR20200904035600005_01_i_P2.jpg",
        price: 1000,
        title: "어린왕자",
        author: "생텍쥐페리",
        publisher: "하이",
        quality: "상",
        deal_title: "판매중",
        like: 4,
        user_like: false,
        time: "몇시간전",
      },
    ]);
  }, []);

  const handleTabClick = (id) => {
    if (activeTab !== id) {
      setActiveTab(id);
      handleTabInfo(id);
    }
  };

  const handleTabInfo = (id) => {
    // 내거래인지, 관심거래인지, 한줄평인지에 따라 api 받아서
    if (id === 0) {
      // api요청
      // setTabInfo
    } else if (id === 1) {
      //api 요청
      // setTabInfo
    } else {
      //api 요청
      // setTabInfo
    }
  };

  return (
    <div>
      <UserInfo userObj={userObj} />
      <UserActivity
        dealCnt={userObj.dealCnt}
        followingCnt={userObj.followerCnt}
        followerCnt={userObj.followerCnt}
      />
      {/* 탭 */}
      <div className="wrapper">
        <ul className="tabs">
          <li
            onClick={() => handleTabClick(0)}
            className={activeTab === 0 ? "active" : ""}
          >
            판매중
          </li>
          <li
            onClick={() => handleTabClick(1)}
            className={activeTab === 1 ? "active" : ""}
          >
            관심거래
          </li>
          <li
            onClick={() => handleTabClick(2)}
            className={activeTab === 2 ? "active" : ""}
          >
            한줄평
          </li>
        </ul>
      </div>
      {/* 탭에 따라 컴포넌트 교체 */}
      {activeTab === 0 || activeTab === 1
        ? tabInfo.map((deal) => <DealItem key={deal.id} dealObj={deal} />)
        : tabInfo.map((comment) => (
            <CommentItem key={comment.id} commentObj={comment} />
          ))}
    </div>
  );
}

export default Profile;
