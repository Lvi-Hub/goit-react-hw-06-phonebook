import { useDispatch, useSelector } from 'react-redux';
import { getClicksValue, update } from 'redux/clicksSlice';

export const App = () => {
  const dispatch = useDispatch();
  const numberOfClicks = useSelector(getClicksValue);
  console.log();
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <h1>Number of clicks: {numberOfClicks}</h1>
      <button type="button" onClick={() => dispatch(update(5))}>
        Add 5
      </button>
      <button type="button" onClick={() => dispatch(update(10))}>
        Add 10
      </button>
      <button type="button" onClick={() => dispatch(update(20))}>
        Add 20
      </button>
    </div>
  );
};
