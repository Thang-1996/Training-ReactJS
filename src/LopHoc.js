import React from 'react';
import axios from "axios";
import Adapter from "./Adapter";
const API = axios.create({
    baseURL : Adapter.BASE_URL
});

export default class LopHoc extends React.Component{
    constructor(props) {
        // component con được gửi qua từ class props cha
        super(props);
        this.state = {
            form : false,
            lophoc : props.lophoc
        }
        this.openForm = this.openForm.bind(this); // bind this vao function openform
        this.submit = this.submit.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }
    // các hàm xử lý change value giá trị khi nạp lại giá trị mới gắn vào event để nhận bắt sự kiện sẵn có
    changeValue(event){
        const lophoc = this.state.lophoc;
        lophoc.tenlophoc = event.target.value;
        this.setState({
            // truyền lại lớp học mới
            lophoc:lophoc
        });
    }
    submit(){
        API.post(Adapter.api_lophoc_update.url,{
          _token : "",
          lophoc : this.props.lophoc
        }).then(res=>{
        });
    }
    openForm(){
        const form = this.state.form;
        this.setState({form:!form})
    }
    render() {
        const lophoc = this.state.lophoc; // api sẽ đẩy thẳng lớp học lên
        const form = this.state.form; // tạo ra các biến để handle các function được khai báo ở trên khi nạp lại vào state
        return (
            <div>
                <h2 onClick={this.openForm}>{lophoc.tenlophoc}</h2>
                <div style={{display:form?"":"none"}}>
                    <input type="text" onChange={this.changeValue} value={lophoc.tenlophoc}/>
                    <button onClick={this.submit}>SUBMIT</button>
                </div>
            </div>
        );
    }

}