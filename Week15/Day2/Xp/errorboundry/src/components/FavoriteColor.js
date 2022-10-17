import React from "react";
class FavoriteColor extends React.Component {
  constructor() {
    super();
    this.state = {
      favoriteColor: "red",
    //   colorMessage: null,
    //   beforeColor: null,
    };
  }

  colorChange = () => {
    this.shouldComponentUpdate === true ? this.setState({ favoriteColor: "red" }) 
    : this.setState({ favoriteColor: "pink" })
    
  };
// shouldComponentUpdate() {
//     return true;
//   }
//   componentDidUpdate() {
//     this.setState({  favoriteColor: "pink"});
//   }
//   colorChange = () =>{
//     this.setState({ favoriteColor: "blue"})
//   }



//   componentDidMount() {
//     // setTimeout(() => {
//       this.setState({ favoriteColor: "yellow" })
//     };
// //     }, 5000);
// //   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     this.setState({ beforeColor: prevState.favoriteColor });
//     // return null;
//   }

  render() {
    return (
      <>
        <button onClick={this.colorChange}>My favorite color is </button>
        <h1>{this.state.favoriteColor}</h1> 
     
        {/* <div>{this.state.colorMessage && this.state.colorMessage}</div>
        <div>{this.state.beforeColor && this.state.beforeColor}</div> */}
      </>
    );
  }
}

export default FavoriteColor;