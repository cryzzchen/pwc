export interface PWCElement {
  connectedCallback?: () => void;
  disconnectedCallback?: () => void;
  attributeChangedCallback?: (name: string, oldValue: any, newValue: any) => void;
  adoptedCallback?: () => void;
}

export type Attributes = Record<string, any>;

export type TemplateValue = Attributes | string;

export type ElementTemplate = [] | [string] | [string, TemplateValue[]];

export interface CustomHTMLBaseElement extends HTMLBaseElement {
  template?: ElementTemplate;
  shadowOptions: ShadowRootInit;
}

export type Warning = ((template: string, ...args: any[]) => void);

export type ReflectProperties = Map<string, boolean>;
