import React from 'react';



class Search extends React.Component {
    state = {term:''};
        
    onSub = (event) => {
        event.preventDefault();
        this.props.submit(this.state.term);
    }

    deter = (e) => {
        this.setState({term:e.target.value})
    }
   

    render() {
           
        return(
            <form onSubmit={this.onSub} className='input'>
            <input autoComplete='off' onChange={this.deter} type="text" placeholder='Enter Something'  name="nothing" id="" />
             <br />
            </form>
        )
    }
}

export default Search;