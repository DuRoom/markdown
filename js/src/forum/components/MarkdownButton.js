import Component from 'duroom/common/Component';
import icon from 'duroom/common/helpers/icon';
import Tooltip from 'duroom/common/components/Tooltip';

export default class MarkdownButton extends Component {
  oncreate(vnode) {
    super.oncreate(vnode);
  }

  view() {
    const button = (
      <button
        className="Button Button--icon Button--link"
        type="button"
        data-hotkey={this.attrs.hotkey}
        onkeydown={this.keydown.bind(this)}
        onclick={this.attrs.onclick}
      >
        {icon(this.attrs.icon)}
      </button>
    );

    if (this.attrs.title) {
      return <Tooltip text={this.attrs.title}>{button}</Tooltip>;
    }

    return button;
  }

  keydown(event) {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this.element.click();
    }
  }
}
