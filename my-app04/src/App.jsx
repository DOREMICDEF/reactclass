function Book(props) {
  return(
    <div>
      <h2>이 책의 제목은 {props.title} 입니다.</h2>
      <p>이 책의 저자는 {props.author} 입니다.</p>
      <p>이 책의 가격은 {props.price} 입니다.</p>
    </div>
  )
}

function App() {
  <div>
  <Book title = "파이썬" author = "김길동" price = "30000" />
  <Book title = "데이터베이스" author = "황길동" price = "35000" />
  <Book title = "인공지능" author = "우길동" price = "45000" />
  <Book title = "리액트" author = "최길동" price = "25000" />
  </div>
}

export default App;