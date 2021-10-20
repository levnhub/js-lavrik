export class Parody {
  constructor(props) {
    if (typeof props !== 'object') {
      props = {};
    }
    this.props = props;
    this.isMount = false;
    this.targetNode;
  }

  bindMount(selector) {
    this.isMount = true;
    this.targetNode = document.querySelector(selector);
    return this;
  }

  render(node) {
    if (this.isMount) {
      this.targetNode.innerHTML = '';
      this.targetNode.appendChild(node);
    }
    return node;
  }
}

export function createNode(tagName, props, children) {
  let node = document.createElement(tagName);
  for (const name in props) {
    node[name] = props[name];
  }
  return node;
}

export function ParodyDom(tag, props, ...children) {
  if (typeof tag === 'function') {
    return new tag(props).render();
  }
  // console.log('tag', tag);
  // console.log('props', props);
  // console.log('children', children);

  let node = document.createElement(tag);
  // let fragment = document.createDocumentFragment(); // empty node list for perfomace

  children.forEach((child) => {
    if (child instanceof HTMLElement) {
      // check is not txt
      node.appendChild(child);
    } else {
      // text node
      const textNode = document.createTextNode(child);
      node.appendChild(textNode);
    }
  });
  // Objects merge
  Object.assign(node, props);

  return node;
}
