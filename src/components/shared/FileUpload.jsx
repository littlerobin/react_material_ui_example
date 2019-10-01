import React from 'react';
import { Button, Modal } from 'react-bootstrap';

// icons..............
import Browse from '../../assets/icons/ue9c6-c-icon--product-search-document.svg';
import CloseIcon from '../../assets/icons/uea33-c-icon--close-circle-o.svg';
import CheckIcon from '../../assets/icons/ue911-c-icon--check.svg';
import WarningIcon from '../../assets/icons/ue979-c-icon--product-cross-triangle.svg';
import AddAccountIcon from '../../assets/icons/uea60-c-icon--plus-circle-o.svg';


class FileUpload extends React.Component  {
    constructor(props) {
      super(props);
        this.state = {
          selectedFile: null,
          fileName : "",
          show: false,
          fileStatusContent: "",
          isSuccess: true
        }
        this.onFileChangeHandler = this.onFileChangeHandler.bind(this);
        this.onHide = this.onHide.bind(this);
        this.removeFile = this.removeFile.bind(this);   
    }
    
    onFileChangeHandler(event) {
      console.log(event.target.files[0]);
      (event.target.files[0].size > 8000000 ? 
        this.setState({
        show: true,
        fileStatusContent: "Sorry. File size cannot be more than 8mb.",
        isSuccess: false
      }) : ( 
            this.setState({
            show: true,
            fileStatusContent: "File attached successfully.",
            selectedFile: event.target.files[0],
            fileName: event.target.files[0].name,
            isSuccess: true
          })
       )
      )
    }
    onHide (event){
      this.setState({
        show: false
      });
    }
    removeFile(event){
       this.setState({
            show: false,
            fileName: "",
            isSuccess: true
          })
    }
    render (){
      return (
        <div>
          <div className="text-right">
            <input id="myInput" type="file" ref={(ref) => this.upload = ref } onChange = {this.onFileChangeHandler} style={{ visibility: 'hidden' }} />
              <Button
              variant="outline-primary"
              onClick={(e) => this.upload.click() }
              ><Browse height="20" width="20" stroke="#007ab3" /><span>&nbsp;&nbsp;Browse..</span>
              </Button>
          </div>
          { this.state.show ? null : (<div className="filesContainer">
               
                  <div className="filesContainerFileName">{ this.state.fileName }</div>{ this.state.fileName == "" ? null : (<div className="filesContainerIcon"><CloseIcon height="20" width="20" stroke="#007ab3" onClick= {this.removeFile}></CloseIcon></div>) }
                
            </div>) 
          }
          <Modal show={this.state.show} onHide={this.onHide}>
            <Modal.Header className="customModalHeader" closeButton>
              <div className="text-center modalIconClass">
                { this.state.isSuccess ? <CheckIcon height="100" widht="100" stroke="white" fill="green"/> : <WarningIcon height="100" widht="100" stroke="red" fill="red"/>}
              </div>
            </Modal.Header>
            <Modal.Body className="fileStatusBody">{ this.state.fileStatusContent }</Modal.Body>
            
          </Modal>
        </div>
      );
    }    
  }

  export default FileUpload;