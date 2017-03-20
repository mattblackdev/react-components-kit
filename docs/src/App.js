import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ThemeChanger from './ThemeChanger';
import logo from './taito_ukkeli.png';
import './App.css';

// Components
import {
  Layout,
  Box,
  Heading,
  LineSeparator,
  Button,
  Padder,
  Spinner,
  ToggleSwitch,
  PlaceholderRows,
  Card,
  CircleProgress,
  Text,
  Tooltip,
  FormControl,
  Input,
  Select,
  Textarea,
  Badge,
  Icon,
  defaultTheme,
} from 'react-components-kit';

const SECTION_SEPARATION = '42px';

const isNumeric = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const AppWrapper = styled(Layout)`
  padding: 32px 42px;
  position: relative;
`;
const Logo = styled.img`
  width: 30px;
  height: auto;
  margin-left: 16px;
`;
const ThemeColorChangerButton = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
`;
const Fab = styled.button`
  border-radius: 50%;
  border: none;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: tomato;
  color: #fff;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateThemeColor = this.updateThemeColor.bind(this);
    this.openColorPanel = this.openColorPanel.bind(this);
    this.closeColorPanel = this.closeColorPanel.bind(this);

    this.state = {
      inputOne: '',
      inputTwo: '',
      selectInput: 'foo1',
      textareaOne: '',
      theme: { ...defaultTheme },
      colorPanelOpen: false,
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = (target.type && target.type === 'checkbox')
      ? target.checked
      : target.value;

    const name = target.name;

    this.setState({ [name]: value });
  }

  updateThemeColor(colorName, newColorValue) {
    this.setState(prevState => ({
      theme: {
        ...prevState.theme,
        [colorName]: newColorValue,
      },
    }))
  }

  closeColorPanel() {
    this.setState({ colorPanelOpen: false });
  }

  openColorPanel() {
    this.setState({ colorPanelOpen: true });
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <AppWrapper column>
          <ThemeChanger
            theme={this.state.theme}
            updateThemeColor={this.updateThemeColor}
            isOpen={this.state.colorPanelOpen}
            close={this.closeColorPanel}
          />

          <ThemeColorChangerButton>
            <Tooltip content='Change theme colors'>
              <Fab onClick={this.openColorPanel}>
                <Icon className='ion-android-color-palette' size='24px' />
              </Fab>
            </Tooltip>
          </ThemeColorChangerButton>

          <Layout align='center'>
            <Box flex='1'>
              <Heading>react-components-kit</Heading>
            </Box>
            <Box>
              <Logo src={logo} />
            </Box>
          </Layout>
          <LineSeparator horizontal />

          <Heading el='h2'>Buttons</Heading>
          <Layout column>
            <Layout align='center'>
              <Button primary>Primary</Button>
              <Padder />
              <Button secondary>Secondary</Button>
              <Padder />
              <Button danger>Danger</Button>
              <Padder />
              <Button danger disabled>Danger</Button>
            </Layout>

            <Padder vert='16px' />

            <Layout align='center'>
              <Button primary outline>Primary</Button>
              <Padder />
              <Button secondary outline>Secondary</Button>
              <Padder />
              <Button danger outline>Danger</Button>
              <Padder />
              <Button danger outline disabled>Danger</Button>
            </Layout>

            <Padder vert='16px' />

            <Layout align='center'>
              <Button primary clear>Primary</Button>
              <Padder />
              <Button secondary clear>Secondary</Button>
              <Padder />
              <Button danger clear>Danger</Button>
              <Padder />
              <Button danger clear disabled>Danger</Button>
            </Layout>
          </Layout>

          <Padder vert={SECTION_SEPARATION} />

          <Heading el='h2'>Headings</Heading>
          <Layout align='center'>
            <Heading color='tomato'>
              Heading 1
            </Heading>
            <Padder horiz='32px' />
            <Heading el='h2' color='slategrey'>
              Heading 2
            </Heading>
            <Padder horiz='32px' />
            <Heading el='h3'>
              Heading 3
            </Heading>
            <Padder horiz='32px' />
            <Heading el='h4' color='rebeccapurple'>
              Heading 4
            </Heading>
          </Layout>

          <Padder vert={SECTION_SEPARATION} />

          <Heading el='h2'>Text</Heading>
          <Layout align='center'>
            <Text color='tomato'>
              Colored span
            </Text>
            <Padder horiz='32px' />
            <Text color='slategrey' el='i' size='12px'>
              Italic smaller
            </Text>
            <Padder horiz='32px' />
            <Text el='p'>
              Paragraph
            </Text>
            <Padder horiz='32px' />
            <Text color='rebeccapurple' el='strong' size='18px'>
              Strong text
            </Text>
          </Layout>

          <Padder vert={SECTION_SEPARATION} />

          <Heading el='h2'>Spinner</Heading>
          <Layout align='center'>
            <Spinner sm/>
            <Padder horiz='32px' />
            <Spinner md color='tomato'/>
            <Padder horiz='32px' />
            <Spinner lg color='papayawhip'/>
          </Layout>

          <Padder vert={SECTION_SEPARATION} />

          <Heading el='h2'>Badge</Heading>
          <Layout align='center'>
            <Badge mright='16px'>
              Badge default
            </Badge>
            <Badge primary mright='16px'>
              Badge primary
            </Badge>
            <Badge secondary mright='16px'>
              Badge secondary
            </Badge>
            <Badge error mright='16px'>
              Badge error
            </Badge>
            <Badge success>
              Badge success
            </Badge>
          </Layout>

          <Padder vert={SECTION_SEPARATION} />

          <Heading el='h2'>ToggleSwitch</Heading>
          <Padder vert='16px' />
          <Layout align='center'>
            <ToggleSwitch onToggle={() => console.log('TOGGLE!')}/>
            <Padder horiz='32px' />
            <ToggleSwitch
              onToggle={() => console.log('TOGGLE!')}
              ballColor='blue'
              borderColor='rebeccapurple'
              bgToggled='rebeccapurple'
            />
            <Padder horiz='32px' />
            <ToggleSwitch
              onToggle={() => console.log('TOGGLE!')}
              ballColor='tomato'
              borderColor='papayawhip'
              bgToggled='papayawhip'
              outerLabel='toggle me!'
              innerLabelLeft='on'
              innerLabelRight='off'
            />
          </Layout>

          <Padder vert={SECTION_SEPARATION} />

          <Heading el='h2'>Card</Heading>
          <Layout>
            <Box>
              <Card depth={1}>Depth 1</Card>
            </Box>
            <Padder />
            <Box>
              <Card depth={2}>Depth 2</Card>
            </Box>
            <Padder />
            <Box>
              <Card depth={3}>Depth 3</Card>
            </Box>
          </Layout>

          <Padder vert={SECTION_SEPARATION} />

          <Heading el='h2'>Tooltip</Heading>
          <Layout>
            <Box>
              <Tooltip content='Hovering yey!'>
                <Text>Hover over me</Text>
              </Tooltip>
            </Box>
            <Padder horiz='32px' />
            <Box>
              <Tooltip
                content='Down here!'
                color='tomato'
                bg='papayawhip'
                bottom
              >
                <Button secondary>Hover over me too</Button>
              </Tooltip>
            </Box>
            <Padder horiz='32px' />
            <Box>
              <Tooltip
                color='rebeccapurple'
                bg='white'
                top
                content={
                  <Layout align='center'>
                    <Spinner color='tomato' sm />
                    <Padder horiz='8px' />
                    <Text color='tomato' el='p'>
                      Custom content works too!
                    </Text>
                  </Layout>
                }
              >
                <Button danger>Don't you dare hover over me!</Button>
              </Tooltip>
            </Box>
          </Layout>

          <Padder vert={SECTION_SEPARATION} />

          <Heading el='h2'>Form stuff</Heading>
          <Layout>
            <Box flex='1'>
              <FormControl label='Label color is based on primary color'>
                <Input
                  onChange={this.handleInputChange}
                  name='inputOne'
                  value={this.state.inputOne}
                />
              </FormControl>
            </Box>
            <Padder horiz='24px' />
            <Box flex='1'>
              <FormControl label='Try to type something else than a number'>
                <Input
                  onChange={this.handleInputChange}
                  name='inputTwo'
                  value={this.state.inputTwo}
                  validator={isNumeric}
                  validationMessage='Must be a number!'
                />
              </FormControl>
            </Box>
            <Padder horiz='24px' />
            <Box flex='1'>
              <FormControl label='Awesomeness level is:'>
                <Padder vert='8px' />
                <Select
                  onSelect={this.handleInputChange}
                  value={this.state.selectInput}
                  name='selectInput'
                >
                  <option value='foo1'>Legen...</option>
                  <option value='foo2'>wait for it</option>
                  <option value='foo3'>...dary</option>
                </Select>
              </FormControl>
            </Box>
          </Layout>

          <Padder vert='16px' />

          <Layout>
            <FormControl label='I`m a textarea - type a lot to make me auto-grow'>
              <Textarea
                onChange={this.handleInputChange}
                name='textareaOne'
                value={this.state.textareaOne}
                autoResize
              />
            </FormControl>
          </Layout>

          <Padder vert={SECTION_SEPARATION} />

          <Heading el='h2'>CircleProgress</Heading>
          <Layout>
            <CircleProgress
              size='200px'
              progress={64}
            />
          </Layout>

          <Padder vert={SECTION_SEPARATION} />

          <Heading el='h2'>PlaceholderRows</Heading>
          <Layout>
            <PlaceholderRows rows={6} />
          </Layout>
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;