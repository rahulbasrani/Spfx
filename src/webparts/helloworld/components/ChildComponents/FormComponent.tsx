import * as React from 'react';
// import styles from '../HelloWorld2.module.scss';
import {IFormComponentProps} from './IFormComponentProps';

export default class ListDataViewer extends React.Component<IFormComponentProps, {customerdata:any, productdata:any, producttype:any,productexpiry:any,productvalue:any,productunits:any,salevalue:any}> {

    constructor(props) {
        super(props);
        this.state = { customerdata:"", productdata:"", producttype:"",productexpiry:"",productvalue:"",productunits:"",salevalue:""};
      }

      setCustomerData=(e)=>{
        this.setState({ customerdata: e });
        console.log(e);
        this.state
      }

      setUnitPrice=(e)=>{
        this.setState({productunits:e});
        this.setState({salevalue:(e*this.state.productvalue)});
      }
      // setSaleValue=(e)=>{
      //     this.setState({salevalue:(this.state.productunits*this.state.productvalue)});
      // }
    
      setProductData=(e)=>{
        this.setState({ productdata: e });
        console.log(this.state.productdata);
        // document.getElementById("product_type").nod=e;
        console.log(this.props.productdata);
        
        var product_data=this.props.productdata;

        for(let i in product_data){
          if(product_data[i].ProductName==e){
            this.setState({producttype:product_data[i].ProductType});
            this.setState({productexpiry:product_data[i].ProductExpiryDate});
            this.setState({productvalue:product_data[i].ProductUnitPrice});

          }
          

        }
        // this.setState({producttype:e});
      //   for(let i in this.props.productdata)
      // if(this.props.productdata[i].ProductType===e){
      //   this.setState({producttype:this.props.productdata[i].ProductType})
    // }
        
      }

      public async componentDidMount(): Promise<void> {
        // const items:any[]=await sp.web.lists.getByTitle("Customers").items.get();
        // const productdata:any[]=await sp.web.lists.getByTitle("Products").items.get();
        // console.log("ppww");
        
        // console.log(items);
        // console.log(productdata);
        // this.setState({ listData: items,productdata:productdata });

        
    }

      // const [hostel, setHostel] = useState("select");
    public render(): React.ReactElement<IFormComponentProps> {
    return( <div>
            {this.props.listdata&&this.props.productdata? 
            ( <form >
                <label htmlFor="customername">Customer Name</label><br />
                <select
                name="customername"
                id="customername"
                onChange={(e) => {
                  this.setCustomerData(e.target.value);
                }}
                // value={dropdown}
                // className=" custom-select dropdown-year col-md-12 "
                // onChange={(e) => {
                //   setDropdown(e.target.value);
                // }}
                required
              >
                <option value="select">--Select One--</option>
               { Object.keys(this.props.listdata).map((key)=>(
                // <p>{[`${this.props.listdata[key].Title}`]}<br></br>{[`${this.props.listdata[key].testColumn}`]}</p>
                // <p>{[`${this.props.listdata[key].Title}`]}</p>
                <option value={this.props.listdata[key].Title}>{[`${this.props.listdata[key].Title}`]}</option>
               ))}
                {/* <option value="1">1</option>
                <option value="2">3</option>
                <option value="3">5</option>
                <option value="4">7</option> */}
              </select>

              <br />

              <label htmlFor="productname">Product Name</label><br />
              <select
                name="productname"
                id="productname"
                // value={dropdown}
                // className=" custom-select dropdown-year col-md-12 "
                onChange={(e) => {
                  this.setProductData(e.target.value);
                }}
                required
              >
                <option value="select">--Select One--</option>
               { Object.keys(this.props.productdata).map((key)=>(
                // <p>{[`${this.props.listdata[key].Title}`]}<br></br>{[`${this.props.listdata[key].testColumn}`]}</p>
                // <p>{[`${this.props.listdata[key].Title}`]}</p>
                <option value={this.props.productdata[key].ProductName}>{[`${this.props.productdata[key].ProductName}`]}</option>
               ))}
                {/* <option value="1">1</option>
                <option value="2">3</option>
                <option value="3">5</option>
                <option value="4">7</option> */}
              </select>
              <br />
              <label htmlFor="product_type">Product Type</label><br />
              <input
                type="text"
                id="product_type"
                name="product_type"
                value={this.state.producttype}
                disabled
              />
              <br />
              <label htmlFor="product_exipry">Product Expiry</label><br />
              <input
                type="text"
                id="product_exipry"
                name="product_exipry"
                value={this.state.productexpiry.substring(0,10).concat(" (YYYY-MM-DD)")}
                disabled
              />
              <br />
              <label htmlFor="product_unit_price">Product Unit Price</label><br />
              <input
                type="text"
                id="product_unit_price"
                name="product_unit_price"
                value={this.state.productvalue.toString()}
                disabled
              />
<br />
              <label htmlFor="product_units">Product Units</label><br />
              <input
                type="number"
                id="product_units"
                name="product_units"
                value={this.state.productunits}
                onChange={(e) => {
                  this.setUnitPrice(e.target.value);
                }}
              />
              <br />
              <label htmlFor="sale_value">Sale Value</label><br />
              <input
                type="number"
                id="sale_value"
                name="sale_value"
                value={this.state.salevalue}
                // onChange={(e) => {
                //   this.setSaleValue(e.target.value);
                // }}
                disabled
              />
              <br />


             </form>
            ):<div><p>loading</p><p>loading</p><p>loading</p><p>loading</p><p>loading</p><p>loading</p></div>}
    </div>);
    }

}

