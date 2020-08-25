import React, { Component } from 'react'
import { Pagination } from './Pagination'
import { HistoryList } from './HistoryList'
import { Searchbar } from './Searchbar'

export default class History extends Component {
    constructor(){
        super()
        this.state ={
            data:[],
            currentPage:1,
            postPerPage:5,
            
        }
    }

    async componentDidMount (){
        var responce = await fetch("https://api.spacexdata.com/v3/history")
        var result = await responce.json()
        this.setState({
            data:result,
        })
    }

    paginate = (pageNumber)=>{
         this.setState({currentPage:pageNumber})
    }
 
    SearchItem = (title,value) =>{
        let itemList = [...this.state.data];
        if(title === 'title'){
            itemList = itemList.filter((item) => item.title.toLowerCase() === value.toLowerCase());
            console.log(itemList)
        }
        if(!value){
            itemList = [...this.state.data];
        }
        this.setState({data:itemList})
      }

    render() {
        var {data,currentPage,postPerPage}= this.state
        const indexOfLastPost = currentPage * postPerPage;
        const indexOfFristPost = indexOfLastPost - postPerPage;
        const currentPosts = data.slice(indexOfFristPost,indexOfLastPost)
        return (
            <>
           <div>
             <Searchbar SearchItem = {this.SearchItem} />
             <HistoryList dataList={currentPosts} />
           </div>
           <div className="pagination_style">
              <Pagination totalPosts={data.length} postPerPage={postPerPage} paginate={this.paginate} />
           </div>
           </>
        );
    }
}
