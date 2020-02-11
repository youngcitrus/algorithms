class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
    breadthFirstSearch(array) {
      const q = [this];
          while (q.length) {
              for (let i = 0; i < q[0].children.length; i++) {
                  q.push(q[0].children[i]);
              }
              array.push(q.shift().name);
          }
          return array;
    }
}

