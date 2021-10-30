import React from 'react';
import Button, {ButtonSize, ButtonType} from './components/Button/button';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Button> Hello </Button>
        <Button disabled> Disabled Button </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Large Primary </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}> Small Danger </Button>
        <Button btnType={ButtonType.Link} href="http://www.google.com"> Baidu Link </Button>
        <Button btnType={ButtonType.Link} href="http://www.google.com" disabled> Disabled Link </Button>

        <p>
          Hong-UI Landing Page
        </p>
      </header>
    </div>
  );
}

export default App;
