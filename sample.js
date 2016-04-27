
var p = [
    'a/b/c/d',
    'a/b/c',
    'a/m/y/w',
    'a/m/k/p',
    'a/v',
    'q/u/r',
    'q/u/x',
    'a/b/l/j/c',
];
var id = {};

var getPrevNode = function (n) {
    var result = rootNode;
    if (!n) {
        return result;
    }

    for (var j = 0; j < n; j++) {
        result.Nodes = result.Nodes || [];
        result = result.Nodes[id[parts[j]]] || {};
    }
    return result;
};
var rootNode = {};
rootNode.Content = "Root Node";

for (var i = 0; i < p.length; i++) {
    var parts = p[i].split('/');
    rootNode.Nodes = rootNode.Nodes || [];
    var lastLevelNode = rootNode.Nodes;
		  n = parts.length;
    for (var j = 0; j < n; j++) {
        if (parts[j]) {
            id[parts[j]] = (id[parts[j]] || id[parts[j]] === 0) ? id[parts[j]] : lastLevelNode.length;
            lastLevelNode = getPrevNode(j).Nodes[id[parts[j]]] ? getPrevNode(j).Nodes[id[parts[j]]].Nodes : [];
            getPrevNode(j).Nodes[id[parts[j]]] = { Content: parts[j] };
            getPrevNode(j).Nodes[id[parts[j]]].Nodes = lastLevelNode;
        }
    }
}	
		
// Get the reference to a container layer
var container = document.getElementById("dvTreeContainer");

// Build tree with options
DrawTree({
    Container: container,
    RootNode: rootNode
});
    
   