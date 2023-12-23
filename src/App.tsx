import { useState } from 'react';
import './App.css';

function App() {
  const bgColors = [
    'bg-white-100',
    'bg-red-100',
    'bg-orange-100',
    'bg-yellow-100',
    'bg-green-100',
    'bg-blue-100',
    'bg-purple-100',
    'bg-pink-100',
    'bg-gray-200',
    'bg-gray-300',
  ];
  const [totalNum] = useState(bgColors.length);
  // const [page, setPage] = useState(Math.round(Math.random() * (totalNum - 1)));
  const [page, setPage] = useState(0);

  const onClickPrevHandle = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    } else {
      setPage(totalNum - 1);
    }
  };

  const onClickNextHandle = () => {
    if (page < totalNum - 1) {
      setPage((prev) => prev + 1);
    } else {
      setPage(0);
    }
  };

  const BTN_STYLE =
    'text-gray-500 border-pink-300 border-4 shadow-lg hover:bg-yellow-200 transition-all p-2';
  return (
    <>
      <div className={`${bgColors[page]} w-full h-[100vh] transition-all `}>
        <section className='flex align-center justify-center items-center border-2 h-full'>
          <div className='text-8xl pb-4 border-b-2 border-blue-200'>
            <button className={BTN_STYLE} onClick={onClickPrevHandle}>
              이전
            </button>
            <button className={BTN_STYLE} onClick={onClickNextHandle}>
              다음
            </button>
            <div className='text-8xl text-center'>{page}</div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
