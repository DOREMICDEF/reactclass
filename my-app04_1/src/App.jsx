function VideoCard({title, channel, views}) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{channel}</p>
      <p>조회수 : {views}</p>
    </div>
  );
}

function VideoList({videos}) {
  return (
    <div>
      {videos.map((video, index) => (
        <VideoCard
          key={index}
          title={video.title}
          channel={video.channel}
          views={video.views}
        />
      ))}
    </div>
  );
}

function App() {
  const videos = [
    {
      title: "리액트 기초 강의",
      channel: "코딩채널",
      views: "10만"
    },
    {
      title: "자바스크립트 완벽 정리",
      channel : "개발자TV",
      views : "25만"
    }
  ];

  return (
    <div>
      <h1>추천 영상</h1>
      <VideoList videos={videos} />
    </div>
  );  
}

export default App;