import React from 'react';
import ReactToPrint from 'react-to-print';
 
import DataComponent from './DataComponent';

 
class PdfComponent extends React.Component {
     
    render() {
      return (
        <div>
          <div>
          <ReactToPrint
            content={() => this.componentRef}
            trigger={() => <button className="btn btn-primary">Print to PDF!</button>}
          />
          </div>
          <div style={{display:'none'}}>
          <DataComponent data={this.props.job_id} ref={(response) => (this.componentRef = response)} />
          </div>
        </div>
      );
    }
 
}
 
export default PdfComponent;