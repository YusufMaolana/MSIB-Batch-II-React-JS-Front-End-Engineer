import TodosApp from './component/TodosApp';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './store/TodosSlice';

const store = configureStore({
  reducer: {
    // nama state yang nantinya disimpan di dalam store
    todo: todoReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <TodosApp />
    </Provider>
  );
}

export default App;
