import { useSelector, useDispatch } from "react-redux";
import {counterActions} from '../store/counter-slice';
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    // dispatch({ type: "increment" });
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    // dispatch({ type: "increase", amount: 5 });
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" });
    dispatch(counterActions.toggleCounter());
  };

  const resetHandler = () => {
    dispatch(counterActions.reset());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
