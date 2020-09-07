import React from 'react';
import './App.css';
import LopHoc from "./LopHoc";
import axios from 'axios';
import Adapter from './Adapter';
// tạo create axios API
const API = axios.create({
  baseURL : Adapter.BASE_URL
});

 export default class App extends React.Component{
   // tạo component con
   constructor(props) { // tạo đối tượng
     super(props);
     // tạo state để dùng sẵn
     this.state = {
       lophocs : []
     }
   }
   // dùng hàm sau khi render và dùng api ở hàm này
   async componentDidMount() {
     // cách 1:
     // API.get(Adapter.api_list.url)
     //     .then(res=>{
     //      this.setState({
     //        lophocs:res.data
     //      });
     //     }).catch(err=>{
     //
     // });
     // cách 2 :
     let data = [];
     try{
       const res = await API.get(Adapter.api_list.url);
       data = res.data
     }catch (e){
     }finally {
       this.setState({
         lophocs : data
         // set lai state ở finally
       });
     }
   }

   render(){   // truyền props như truyền thẻ trong html // dùng map function để render ra các biến gửi vào component con tương tự foreach
     const lophocs = this.state.lophocs;
     return (
         <div className="App">
           <h1>Danh Sách Lớp Học</h1>

           <header className="App-header">
           </header>
           {
             lophocs.map((e,i)=>{
               return <LopHoc key={i} lophoc={e}/>
             })
           }
         </div>
     );
   }
}
