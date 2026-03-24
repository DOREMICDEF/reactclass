function App() {
  const name = "박정민";
  const food = ["햄버거", "피자", "치킨", "잔치국수", "뼈해장국"];
  const isLogin = true;

  return (
    <div>
      <h1>안녕하세요 {name}님!</h1> 

      <h1>정민이의 react에 오신걸 환영합니다!</h1>

      <h2>좋아하는 음식</h2>
      <ul>
        {food.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>

      {isLogin ? <p>로그인 상태입니다.</p> : <p>로그아웃 상태입니다.</p>}

      <button className="btn">클릭</button>

    </div>
  );
}

export default App;