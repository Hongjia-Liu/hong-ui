import React from 'react';
import Button, {ButtonSize, ButtonType} from './components/Button/button';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Button className="custom"> Hello </Button>
        <Button disabled> Disabled Button </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Large Primary </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}> Small Danger </Button>
        <Button btnType={ButtonType.Link} href="http://www.google.com" target="_blank"> Google </Button>
        <Button btnType={ButtonType.Link} href="http://www.google.com" disabled> Google  </Button>

        <p>
          Hong-UI Landing Page
        </p>
      </header>
    </div>
  );
}

export default App;
