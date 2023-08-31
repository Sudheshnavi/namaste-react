const parent = React.createElement("div",{id:"paret"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{id:"head1"},"I'm child1"),
        React.createElement("h2",{id:"head1"},"I'm child1 h2")]
    ),
    React.createElement("div",{id:"child2"},
        React.createElement("h1",{id:"head2"},"I'm child2")),

]);

// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);