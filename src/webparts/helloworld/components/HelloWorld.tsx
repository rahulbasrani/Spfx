import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
// import { escape } from '@microsoft/sp-lodash-subset';
import ListDataViewer from './ChildComponents/ListDataViewer';
import FormComponent from './ChildComponents/FormComponent';
import { sp } from '@pnp/sp';
import { PrimaryButton } from 'office-ui-fabric-react';

export default class HelloWorld extends React.Component<IHelloWorldProps, { webdata: any, listData: any, productdata:any }> {
  constructor(props) {
    super(props);
    this.state = { webdata: null, listData: null ,productdata:null};
  }

  private async updateItem(){
    // alert("update");
    let list = await sp.web.lists.getByTitle("Customers").items.getById(9).update({
      Title: "My Updated Title",
      // testColumn: "Here is a updated description"
    });


    const items: any[] = await sp.web.lists.getByTitle("Customers").items.get();
    //  sp.web.lists.getByTitle("Country").items.get()
    console.log(items);
    this.setState({ listData: items });
   
    
  }

  public async GetListItems() {
    //code to create new item in list

    await sp.web.lists.getByTitle('Customers').items.add({  
      Title: "new-" + Date.now().toString(),
    });  
    
    // const items: any[] = await sp.web.lists.getByTitle("HR Team Test").items.get();
    //  sp.web.lists.getByTitle("Country").items.get()
    // console.log(items);
    // this.setState({ listData: items });
    // get a specific item by id.
    // const item: any = await sp.web.lists.getByTitle("Country").items.getById(1).get();
    // console.log(item);

  }

  btnOnclick =  (e) => {
    //Get list items from Coutry list.
    this.GetListItems();
     // get all the items from a list
   
  }

  public async componentDidMount(): Promise<void> {
      const items:any[]=await sp.web.lists.getByTitle("Customers").items.get();
      const productdata:any[]=await sp.web.lists.getByTitle("Products").items.get();
      // console.log("ppww");
      
      console.log(items);
      console.log(productdata);
      this.setState({ listData: items,productdata:productdata });
      
  }
  public render(): React.ReactElement<IHelloWorldProps> {
    var _listData = this.state.listData;
    var _productdata = this.state.productdata;
    return (
      <div className={ styles.helloWorld }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
            <button onClick={() => this.btnOnclick(this)}>Add news item </button>
            <PrimaryButton text="Update Item" onClick={()=>this.updateItem()} />
            <ListDataViewer listdata={_listData ? _listData : null}></ListDataViewer>
            <FormComponent listdata={_listData ? _listData : null} productdata={_productdata?_productdata:null}
            ></FormComponent>
            
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}
