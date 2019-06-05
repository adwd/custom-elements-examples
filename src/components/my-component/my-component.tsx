import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() name: string;
  @Prop() repeat: number = 0;
  @Event() ok: EventEmitter<{ message: string }>;

  render() {
    console.log(`render my-component, name: ${this.name}, repeat: ${this.repeat}`);
    return (
      <div>
        <p>Hello, World! I'm {[...new Array(this.repeat || 1)].map(() => this.name).join(' ')}</p>
        <button onClick={() => this.ok.emit({ message: 'yay' })}>ok</button>
      </div>
    );
  }
}
