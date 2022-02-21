import * as React from 'react';
// import styles from '../HelloWorld2.module.scss';
import {IListDataViewerProps} from '../ChildComponents/IListDataViewerProps';

export default class ListDataViewer extends React.Component<IListDataViewerProps, {}> {

    constructor(props) {
        super(props);
      }
    public render(): React.ReactElement<IListDataViewerProps> {
    return <div>
            {this.props.listdata? 
            Object.keys(this.props.listdata).map((key)=>(
                // <p>{[`${this.props.listdata[key].Title}`]}<br></br>{[`${this.props.listdata[key].testColumn}`]}</p>
                <p>{[`${this.props.listdata[key].Title}`]}</p>
            )):<div><p>loading</p><p>loading</p><p>loading</p><p>loading</p><p>loading</p><p>loading</p></div>}
    </div>;
    }

}

