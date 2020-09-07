import React from "react";

export default class Demo extends React.Component{
    constructor(props) { // tạo ra các đối tượng
        super(props);
        this.state = { // trạng thái duy nhất của state
          age : props.age
        };
        this.changeAge = this.changeAge.bind(this);
        //state là trạng thái riêng của mỗi đối tượng đc tạo ra
    }
    componentDidMount() {
        this.setState({age:22});
    }

    changeAge(){
        let v = this.state.age+1 ; // lấy ra trạng thái của props
        this.setState({age:v}); // set lại state ở trên
    }
    render() { // render giao diện người dùng
        return <h2 onClick={this.changeAge}>{this.props.title+ this.props.name + this.state.age}</h2> // hàm khai báo trong react không có ngặc đơn
    }
}