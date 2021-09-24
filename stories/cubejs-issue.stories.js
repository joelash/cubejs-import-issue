import { html } from 'lit';
import '../src/cubejs-issue.js';

export default {
  title: 'CubejsIssue',
  component: 'cubejs-issue',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <cubejs-issue
      style="--cubejs-issue-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </cubejs-issue>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
