
 import React from "react";
 


class List extends React.Component {

    state = {classname:"images"}; 

    hanlde = () => {
        if(this.state.classname === "images"){
            this.setState({classname:'list'}); 
        } else {
            this.setState({classname:'images'}); 
        }
    }


    render(){
        const result = this.props.images.map((image) => {
            return <img key={image.id} className="img-box" src={image.urls.regular} />
        }) 
            return(
                <>
               
                 <div className={this.state.classname}>
                     {result} 
                 </div>
                 <button onClick={this.hanlde} className="button">
                     <i className="fa fa-bars"></i>
                 </button>
                </>
             )
        

       
    }
}


export default List;