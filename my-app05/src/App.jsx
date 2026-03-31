import { useState } from "react"; // state를 사용하기 위해 import 사용

function VideoCard({ title, channel, views }) { // 영상 카드 컴포넌트
  const [likes, setLikes] = useState(0); // 좋아요 상태
  const [clicks, setClicks] = useState(0); // 클릭 수 상태

  const handleCardClick = () => { // 카드 클릭 시
    setClicks(clicks + 1); // 클릭 수 증가
  };

  const handleLikeClick = (event) => { // 좋아요 버튼 클릭 시
    event.stopPropagation(); // 카드 클릭 이벤트 막기
    setLikes(likes + 1); // 좋아요 증가
  }

  return (
    <div
      onClick={handleCardClick} // 카드 클릭 이벤트
      style={{
        border : "1px solid #ccc", // 테두리
        borderRadius : "12px", // 둥근 모서리
        padding : "16px", // 내부 여백
        marginBottom : "12px", // 아래 여백
        cursor : "pointer", // 마우스 포인터
      }}
      >
        <h3>{title}</h3> {/* 영상 제목 */}
        <p>채널 : {channel}</p> {/* 채널 이름 */}
        <p>조회수 : {views}</p> {/* 조회수 */}
        <p>클릭 수 : {clicks}</p> {/* 클릭 수 */}
        <p>좋아요 수 : {likes}</p> {/* 좋아요 수 */}
        <button onClick={handleLikeClick}> 좋아요</button> {/* 좋아요 버튼 */}
    </div>
  );
}

function VideoList({ videos }) { // 영상 목록 컴포넌트
  return (
    <div>
      {videos.map((video) => ( // 배열을 카드로 출력
        <VideoCard
          key={video.id} // 고유 key
          title={video.title} // 제목 전달
          channel={video.channel} // 채널 전달
          views={video.views} // 조회수 전달
        />
      ))}
    </div>
  );
}

function App() { // 메인 컴포넌트
  const [filter, setFilter] = useState("전체"); // 필터 상태

  const videos = [ // 영상 데이터 배열
    {
      id : 1,
      title: "리액트 기초 강의",
      channel: "코딩채널",
      views: "10만",
      category : "공부"
    },
    {
      title: "자바스크립트 완벽 정리",
      channel: "개발자TV",
      views: "25만",
      category : "자바스크립트"
    },
    {
      title: "프론트엔드 취업 로드맵",
      channel: "코딩랩",
      views: "5만",
      category : "공부"
    },
    {
      title: "취업 관련 강의",
      channel: "취뽀",
      views: "100만",
      category : "취업"
    },
  ];

  const filteredVideos = // 필터링된 영상 목록
    filter === "전체"
      ? videos
      : videos.filter((video) => video.category === filter);

  return (
    <div style = {{ padding : "20px"}}> {/* 전체 영역 */}
      <h1>추천 영상</h1>

      <div style = {{ marginBottom : "20px" }}>
        {/* 필터 버튼 */}
        <button onClick = {() => setFilter("전체")}>전체</button>
        {/* 전체 버튼 */}
        <button onClick = {() => setFilter("공부")} style = {{marginLeft : "8px"}}>공부</button>
        {/* 공부 버튼 */}
        <button onClick = {() => setFilter("자바스크립트")} style = {{marginLeft : "8px"}}>자바스크립트</button>
        {/* 자바스크립트 버튼 */}
        <button onClick = {() => setFilter("취업")} style = {{marginLeft : "8px"}}>취업</button>
        {/* 취업 버튼 */}
      </div>

      <p>현재 필터 : {filter}</p> {/* 현재 필터 표시 */}

      <VideoList videos={filteredVideos} /> {/* 영상 목록 출력 */}
    </div>
  );
}

export default App; // 컴포넌트 내보내기