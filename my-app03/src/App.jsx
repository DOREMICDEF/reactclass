function App() {
const name = "박정민";
const age = 25;
const major = "컴퓨터소프트웨어공학과";
  return (
    <div style={{border:"1px solid red",padding:"20px", width:"400px"}}>
      <h1>프로필</h1>
      <p style={{color:"black", fontSize:"30px"}}>{name}</p>
      <p style={{color:"orange", fontSize:"24px"}}>나이: {age}</p>
      <p style={{color:"blue  ", fontSize:"24px"}}>전공: {major}</p>

      <h1>좋아하는 것</h1>

      <ul>
        <li style={{color:"red", fontSize:"24px"}}>게임</li>
        <li style={{color:"green", fontSize:"24px"}}>음악</li>
        <li style={{color:"blue", fontSize:"24px"}}>여행</li>
      </ul>
    </div>
  )
};  
export default App