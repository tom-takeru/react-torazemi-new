import Article from './components/Article/Article';
import TextInput from './components/TextInput';
import Counter from './components/Counter';
import BadCounter from './components/BadCounter';
import ToggleButton from './components/ToggleButton';
import CallApiSample from "./components/CallApiSample";

function App() {
  return (
    <div>
      <Article
        title={'タイトルだよ'}
        content={'コンテントだよーーーーーーーーーーー'}
      />
      <TextInput/>
      <Counter/>
      <BadCounter/>
      <ToggleButton/>
      <CallApiSample/>
    </div>
  );
}

export default App;
