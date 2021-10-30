import React from 'react';
import Button, {ButtonSize, ButtonType} from './components/Button/button';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Button disabled>Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
        <Button btnType={ButtonType.Link} href="www.google.com">Google</Button>

        <p>
          Hong-UI Landing Page
        </p>
      </header>
    </div>
  );
}

export default App;
