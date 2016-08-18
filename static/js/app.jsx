var App = React.createClass ({
    componentWillMount: function () {
        this.setState({idToken:null})
    },
    render: function () {
        if (this.state.idToken) {
            return (<LoggedIn idToken={this.state.idToken}/>);
        } else {
            return (<Home/>);
        }
    }
});

var Home = React.createClass ({
   render: function () {
       return (
           <div className="container">
               <div className="small-12 jumbotron text-center">
                   <h1>We R VR</h1>
                   <p>Provide valuable feedback to VR</p>
                   <div className="small-6 small-offset-3">
                       <a className="hollow expanded button">Sign in</a>
                   </div>
               </div>
           </div>
       )
   }
});

var LoggedIn = React.createClass ({
    getInitialState: function () {
        return {
            profile: null,
            products: null
        }
    },
    render: function () {
        if (this.state.profile) {
            return (
                <div className="large-12">
                    <span className="pull-right">{this.state.profile.nickname} <a onClick={this.logout}>Log out</a></span>
                    <h2>Welcome to We R VR</h2>
                    <p>Below you'll find the latest games that need feedback. Please provide honest feedback so developers can make the best games.</p>
                    <div className="row">
                        {this.state.products.map(function(product, i){
                            return <Product key={i} product={product} />
                        })}
                    </div>
                </div>);
        } else {
            return (<div>Loading...</div>);
        }
    }
});

ReactDOM.render(<App />, document.getElementById('app'));