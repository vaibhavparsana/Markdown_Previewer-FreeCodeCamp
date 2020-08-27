import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

marked.setOptions({
  breaks: true,
});


const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      content: editorContent
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  render() {
    return (

      <div className="grid-container">
        <div className="header"><h1>React Markdown Previewer</h1></div>
        <div className="editor-box">
          <div className="editor-title">
            Editor
            </div>
          <textarea id="editor"
            value={this.state.content}
            onChange={this.handleChange}
            type="text" />
        </div>
        <div className="preview-box">
          <div className="preview-title">
            Previewer
            </div>
          <div id='preview' dangerouslySetInnerHTML={{ __html: marked(this.state.content, { renderer: renderer }) }} />
        </div>
      </div>
    );
  }
}


const editorContent =
  `# React!

## Declarative
> React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug.

### A Simple Component
React components implement a **\`render()\`** method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by \`render()\` via **_\`this.props\`!_**.

\`\`\`
class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('hello-example')
);
\`\`\`
- An Application
  - Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.

Reference [link](https://reactjs.org/)

![React Logo w/ Text](https://goo.gl/Umyytc)
`

ReactDOM.render(<App />, document.getElementById('root'));

