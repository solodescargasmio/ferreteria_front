import React,{ createContext,useEffect } from "react";

/*
const HOST_API = "http://localhost:8080/volante";
const initialState = {
  volante: { list: [], item: {} }
};
const Store = createContext(initialState)*/

class Conexion extends React.Component{
    constructor(props){
        super(props);
        const inventario={
                id:null,
                precio:null,
                producto:null,
                cantidad:0,
                cedulaProveedor:null
        }
        this.state = {
            dato:inventario

        };
    }
    async componentDidMount(){
       //GET usando fetch
       const response= await fetch('http://localhost:8080/inventario',{
           method:'GET'

       }); 
       const data = await response.json();
       console.log(data)
       this.setState({dato : data})
    }
    render(){
        const {dato} = this.state;
        return(
            <div className="card text-center m-3">
            <h5 className="card-header">GET Request with Async/Await</h5>
            <div className="card-body">
                Total react packages: {dato}
            </div>
        </div> 
        )
    }                                         
}
export default Conexion;