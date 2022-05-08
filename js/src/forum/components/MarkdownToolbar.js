import Component from 'duroom/common/Component';

export default class MarkdownToolbar extends Component {
  view(vnode) {
    return <div class="MarkdownToolbar">{vnode.children}</div>;
  }
}
