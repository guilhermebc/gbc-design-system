import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'gbc-input',
  styleUrl: 'gbc-input.css',
  scoped: true,
})
export class GbcInput {
  @Prop() type: string;

  render() {
    return (
      <Host>
        <input type={this.type} />
      </Host>
    );
  }
}
