// tạo biến Adapter
const Adapter = {
    BASE_URL : 'http://127.0.0.1:8000',
    api_list:{
        url: "api/lophoc",
        params : {

        },
        method : "GET"
    },
    api_lophoc_update:{
      url:"/update/lophoc",
        param:{
          _token:"",
            lophoc:{}
        },
        method: "POST"
    }
}
export default Adapter;