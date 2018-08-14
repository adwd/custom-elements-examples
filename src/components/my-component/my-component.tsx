import { Component, Prop, Event, EventEmitter } from '@stencil/core';

export type ExampleObject = {
  name: string;
  id: number;
}

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() name: string;
  @Prop() repeat: number = 0;
  @Prop() obj: ExampleObject;
  @Event() ok: EventEmitter<{ message: string }>;

  render() {
    console.log(`render my-component, name: ${this.name}, repeat: ${this.repeat}, obj: ${JSON.stringify(this.obj)}`);
    return (
      <div>
        <p>Hello, World! I'm {[...new Array(this.repeat || 1)].map(() => this.name).join(' ')}</p>
        <p>obj: {JSON.stringify(this.obj)}</p>
        <button onClick={() => this.ok.emit({ message: 'ok' })}>ok</button>
      </div>
    );
  }
}
