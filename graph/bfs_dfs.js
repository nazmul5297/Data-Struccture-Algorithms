import Queue from './queue.js'

// create a graph class
class Graph {
	// defining vertex array and
	// adjacent list
	constructor(noOfVertices)
	{
		this.noOfVertices = noOfVertices;
		this.AdjList = new Map();
	}

    // add vertex to the graph
addVertex(v)
{
	// initialize the adjacent list with a
	// null array
	this.AdjList.set(v, []);
}

	// addEdge(v, w)

    // add edge to the graph
addEdge(v, w)
{
	// get the list for vertex v and put the
	// vertex w denoting edge between v and w
	this.AdjList.get(v).push(w);

	// Since graph is undirected,
	// add an edge from w to v also
	this.AdjList.get(w).push(v);
}

	// printGraph()

    // Prints the vertex and adjacency list
printGraph()
{
	// get all the vertices
	var get_keys = this.AdjList.keys();

	// iterate over the vertices
	for (var i of get_keys)
{
		// great the corresponding adjacency list
		// for the vertex
		var get_values = this.AdjList.get(i);
		var conc = "";

		// iterate over the adjacency list
		// concatenate the values into a string
		for (var j of get_values)
			conc += j + " ";

		// print the vertex and its adjacency list
		console.log(i + " -> " + conc);
	}
}


	// bfs(v)

    // function to performs BFS
bfs(startingNode)
{
	var visited = {};
	var q = new Queue();
	visited[startingNode] = true;
	q.enqueue(startingNode);
	while (!q.isEmpty) {
		var getQueueElement = q.dequeue();
        console.log(getQueueElement)
		var get_List = this.AdjList.get(getQueueElement);
		for (var i in get_List) {
			var neigh = get_List[i];
            if (!visited[neigh]) {
				visited[neigh] = true;
				q.enqueue(neigh);
			}
		}
	}
}

	// dfs(v)

    // Main DFS method
dfs(startingNode)
{

	var visited = {};

	this.DFSUtil(startingNode, visited);
}

// Recursive function which process and explore
// all the adjacent vertex of the vertex with which it is called
DFSUtil(vert, visited)
{
	visited[vert] = true;
	console.log("vert",vert);

	var get_neighbours = this.AdjList.get(vert);
    console.log("get_neighbours",get_neighbours);

	for (var i in get_neighbours) {
        console.log("i",i)
		var get_elem = get_neighbours[i];
        console.log("get_elem",get_elem)
		if (!visited[get_elem])
			this.DFSUtil(get_elem, visited);
	}
}

}


// Using the above implemented graph class
var g = new Graph(6);
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
	g.addVertex(vertices[i]);
}

// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.printGraph();
console.log("DFS");
g.dfs('A')
console.log("BFS");
g.bfs('A')