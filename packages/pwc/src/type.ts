export interface PWCElement {
  connectedCallback?: () => void;
  disconnectedCallback?: () => void;
  attributeChangedCallback?: (name: string, oldValue: any, newValue: any) => void;
  adoptedCallback?: () => void;
}

export interface Attribute {
  name: string;
  value: any;
  capture?: boolean;
  [key: string]: any;
}

export type Attributes = Attribute[];

export type TemplateValue = Attributes | string;

export type ElementTemplate = [] | [string] | [string, TemplateValue[]];

export interface CustomHTMLBaseElement extends HTMLBaseElement {
  template?: ElementTemplate;
  shadowOptions: ShadowRootInit;
}

export type Warning = ((template: string, ...args: any[]) => void);

export type ReflectProperties = Map<string, {
  attrName: string;
  isBoolean: boolean;
  value?: unknown;
  initialValue: unknown;
}>;
