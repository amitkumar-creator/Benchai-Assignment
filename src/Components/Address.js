import React, { Component } from 'react'
import { AddressList } from './AddressList'
import {Pagination} from './Pagination';

export default class Address extends Component {
    constructor(){
        super()
        this.state ={
            data:[],
            currentPage:1,
            postPerPage:10,
        }
    }

    paginate = (pageNumber)=>{
        this.setState({currentPage:pageNumber})
    }

    async componentDidMount (){
        var responce = await fetch("https://api.spacexdata.com/v3/payloads")
        var result = await responce.json()
        this.setState({
            data:result,
        })
    }


    render() {
        const {data, currentPage, postPerPage} = this.state;
        const indexOfLastPost = currentPage * postPerPage;
        const indexOfFristPost = indexOfLastPost - postPerPage;
        const currentData = data.slice(indexOfFristPost,indexOfLastPost)
        return (
            <>  
               
                <div>
                    <AddressList data={currentData} />
                </div>
                <div className="pagination_style">
                <Pagination totalPosts={data.length} postPerPage={postPerPage} paginate={this.paginate} />
            </div>
           </>
        )
    }
}
