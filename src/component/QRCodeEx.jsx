import React, { useRef, useState } from "react";
import QrReader from "react-qr-reader";
import { Link, useNavigate } from "react-router-dom";
import { Fab } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";

const QRCodeEx =()=>{
    //const qrRef=useRef(null);
    const qrRef =useRef(null);
    const[webcamResult, setWebcamResult]=useState();
    const navigate = useNavigate();
  
    const webcamError=(error)=>{
        if(error){
            console.log(error);
        }
    }
    const webcamScan=(result)=>{
        if(result){
            setWebcamResult(result);
        }
    };
    // const webcamLoad=()=>{
    //     if(qrRef.current && qrRef.current.videoWidth){
    //         const videoWidth = qrRef.current.videoWidth;
    //         console.log('Video Width:', videoWidth)
    //     }        
    //     else{
    //         console.error("QR code reader not loaded")
    //     }
    // };
    const urlRedirect=()=>{
      console.log("hello");
      //window.open(webcamResult, "_blank");
      window.location.href=webcamResult;
    }
    const handleClick=()=>{
        navigate(-1);
    }
    return(
        
        <div className="container  mt-2">
            <div className="row">
                <h2 className="col-sm-14 bg-secondary text-center text-Gray" > QR Code Scanner</h2>

            </div>
          
           {/* // <Link to="/"> */}
            <Fab style={{marginRight:10}} color="primary">
                <ArrowBack onClick={handleClick}/>
            </Fab>
          
           {/* // </Link> */}

            <div className="row">
                 <div className="card col-sm-3 position-absolute bottom-10 start-50 translate-middle-x" >
                    <div className="card-header m-2 rounded text-center ">
                        <h3 >
                            Web Cam Scanner
                        </h3>
                        </div>
                        <div className="card-body text-center ">
                            <QrReader
                            ref={qrRef}
                           // ref={videoRef}
                            delay={300}
                            onError={webcamError}
                            onScan={webcamScan}
                            //onLoad={webcamLoad}
                            legacyMode={false}
                            facingMode={"user"}
                            />
                        </div>
                        <div className="card-footer rounded mb-1">
                            <h6 onClick={webcamResult && urlRedirect()}>Web Cam Result:{webcamResult} </h6>
                        </div>
                </div>
            </div>
        </div>
    )
    
};

export default QRCodeEx;