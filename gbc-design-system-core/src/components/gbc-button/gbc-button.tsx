import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'gbc-button',
  styleUrl: 'gbc-button.css',
  scoped: true,
})
export class GbcButton {
  @Prop() type: string;

  render() {
    return (
      <Host>
        <button type={this.type}><slot></slot></button>
      </Host>
    );
  }
}
