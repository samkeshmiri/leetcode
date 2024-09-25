class WordDictionary {
  rootNode: TrieNode;

  constructor(rootNode: TrieNode = new TrieNode()) {
    this.rootNode = rootNode;
  }

  addWord(word: string): void {
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
    return this.searchHelper(word, this.rootNode);
  }

  searchHelper(word: string, node: TrieNode): boolean {
    let currentNode = node;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (char === ".") {
        for (const key in currentNode.children) {
          if (this.searchHelper(word.slice(i + 1), currentNode.children[key])) {
            return true;
          }
        }
        return false;
      } else if (currentNode.children[char]) {
        currentNode = currentNode.children[char];
      } else {
        return false;
      }
    }

    return !!currentNode.children["*"];
  }
}

class TrieNode {
  children: Record<string, TrieNode>;

  constructor(children: Record<string, TrieNode> = {}) {
    this.children = children;
  }
}

// console.log(dictionary.search("c...h"));
const dictionary = new WordDictionary();
dictionary.addWord("bad");
dictionary.addWord("dad");
dictionary.addWord("mad");
// console.log(dictionary.search("pad"));
// console.log(dictionary.search(".ad"));
console.log(dictionary.search("..d"));
