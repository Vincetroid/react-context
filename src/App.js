import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Badge, Button, Icon, Switch, Collapse, Tabs, DatePicker } from 'antd';
import { Descriptions,Breadcrumb } from 'antd';
import { ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';
import {Link} from 'react-router-dom';
import Avatar from './Avatar';
const { TabPane } = Tabs;


// Un componente intermedio que utiliza ThemedButton.
function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

function Page(props) {
  const user = props.user;
  return (
    <Link href={user.permalink}>
      <Avatar user={user} size={props.avatarSize} />
    </Link>
  );
  // const userLink = (
  //   <Link href={user.permalink}>
  //     <Avatar user={user} size={props.avatarSize} />
  //   </Link>
  // );
  // return <PageLayout userLink={userLink} />;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    // El botón ThemedButton dentro de ThemeProvider
    // usa el tema del estado mientras que el exterior usa
    // el tema oscuro predeterminado
    return (
      <Page>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <div>
          <ThemedButton />
        </div>
      </Page>
    );
  }
}

export default App;
