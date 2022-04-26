import { commitAttributes } from './commitAttributes';
import type { Attributes, PWCElementTemplate, PWCElement, TemplateNodeValue } from '../type';
import { isTemplate } from '../utils';
import { updateView } from './updateView';

export interface ReactiveNode {
  commitValue: (value: any) => void;
}

export class TextNode implements ReactiveNode {
  #el: Text;

  constructor(commentNode: Comment, initialValue: string) {
    const textNode = document.createTextNode(initialValue);
    this.#el = textNode;
    commentNode.parentNode.insertBefore(textNode, commentNode);
  }

  commitValue(value: string) {
    this.#el.nodeValue = value;
  }
}

export class AttributedNode implements ReactiveNode {
  #el: Element;
  #root: PWCElement;
  #elIsCustom: boolean;

  constructor(commentNode: Comment, initialAttrs: Attributes, rootNode: PWCElement) {
    this.#el = commentNode.nextSibling as Element;
    this.#root = rootNode;
    this.#elIsCustom = Boolean(window.customElements.get(this.#el.localName));
    this.#commitAttributes(initialAttrs, true);
  }

  commitValue(value: Attributes) {
    this.#commitAttributes(value);

    // Any updating should trigger the child components's update method
    if (this.#elIsCustom && (this.#el as PWCElement)._requestUpdate) {
      (this.#el as PWCElement)._requestUpdate();
    }
  }

  #commitAttributes(value: Attributes, isInitial = false) {
    commitAttributes(this.#el, value, isInitial, this.#root);
  }
}

export class TemplateNode implements ReactiveNode {
  reactiveNodes: ReactiveNode[] = [];

  commitValue([prev, current]: TemplateNodeValue) {
    if (isTemplate(current)) {
      updateView(prev as PWCElementTemplate, current as PWCElementTemplate, this.reactiveNodes);
    } else {
      for (let index = 0; index < this.reactiveNodes.length; index++) {
        this.reactiveNodes[index].commitValue([prev[index], current[index]]);
      }
    }
  }
}
