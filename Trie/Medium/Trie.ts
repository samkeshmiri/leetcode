class Trie {
  rootNode: TrieNode;

  constructor(rootNode: TrieNode = new TrieNode()) {
    this.rootNode = rootNode;
  }

  insert(word: string): void {
    let currentNode = this.rootNode;

    for (const char of word) {
      if (currentNode.children[char]) {
        currentNode = currentNode.children[char];
      } else {
        currentNode.children[char] = new TrieNode();
        currentNode = currentNode.children[char];
      }
    }

    currentNode.children["*"] = new TrieNode();
  }

  search(word: string): boolean {
    let currentNode = this.rootNode;

    for (const char of word) {
      if (currentNode.children[char]) {
        currentNode = currentNode.children[char];
      } else {
        return false;
      }
    }

    if (currentNode.children["*"]) {
      return true;
    }

    return false;
  }

  startsWith(prefix: string): boolean {
    let currentNode = this.rootNode;

    for (const char of prefix) {
      if (currentNode.children[char]) {
        currentNode = currentNode.children[char];
      } else {
        return false;
      }
    }

    return true;
  }
}

class TrieNode {
  children: Record<string, TrieNode>;

  constructor(children: Record<string, TrieNode> = {}) {
    this.children = children;
  }
}

// const root = new TrieNode({
//   c: new TrieNode({
//     a: new TrieNode({
//       b: new TrieNode({ "*": new TrieNode() }),
//       t: new TrieNode({ "*": new TrieNode() }),
//     }),
//   }),
// });

const testTrie = new Trie();
testTrie.insert("apple");
console.log(testTrie.search("apple")); // true
console.log(testTrie.search("app")); // false
console.log(testTrie.startsWith("app")); // true
testTrie.insert("app");
console.log(testTrie.search("app")); // true
