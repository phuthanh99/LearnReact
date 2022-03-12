import React, { Component } from 'react';
import './Baitapchonxenangcao.css'
import dataFuture from '../Data/arrayFeatures.json';
import dataWheel from '../Data/wheels.json';

export default class Baitapchonxenangcao extends Component {

    // state thay doi thong tin
    state = {
        carCurrent: {
            "id": 1,
            "title": "Crystal Black",
            "type": "Pearl",
            "img": "./images/icons/icon-black.jpg",
            "srcImg": "images-black/images-black-1/",
            "color": "Black",
            "price": "19,550",
            "engineType": "In-Line 4-Cylinder",
            "displacement": "1996 cc",
            "horsepower": "158 @ 6500 rpm",
            "torque": "138 lb-ft @ 4200 rpm",
            "redline": "6700 rpm",
            "wheels": [
                {
                    "idWheel": 1,
                    "srcImg": "images-black/images-black-1/"
                },
                {
                    "idWheel": 2,
                    "srcImg": "images-black/images-black-2/"
                },
                {
                    "idWheel": 3,
                    "srcImg": "images-black/images-black-3/"
                }
            ]
        }
    }

    // phuong thuc doi xe
    changeCar = (newCar) => {

        this.setState({
            carCurrent: newCar

        })

    }

    renderIcon = () => {
        return dataFuture.map((item, index) => {
            return (
                <div
                    className="row mt-1 border boder-color-default m-3"
                    key={index}
                    style={{ cursor: "pointer" }}
                    onClick={() => { this.changeCar(item) }}
                >
                    <div className="col-2 ">
                        <img className="p-2" style={{ width: "100%" }} src={item.img} alt={item.title} />
                    </div>
                    <div className="col-10 p-3">
                        <h5>{item.title}</h5>
                        <p>{item.type}</p>
                    </div>
                </div>
            )
        })
    }

    // thay doi banh xe
    changeWheels = (newWheels) => {
        let oldWheel = this.state.carCurrent.wheels.find(
            item => item.idWheel === newWheels.idWheel
        );
        if (oldWheel !== -1) {
            this.setState({
                carCurrent: {
                    ...this.state.carCurrent,
                    srcImg: oldWheel.srcImg
                },
            })
        }
    }

    renderWheels = () => {
        return dataWheel.map((item, index) => {
            return (
                <div
                    className="row mt-1 border boder-color-default m-3"
                    key={index}
                    onClick={() => { this.changeWheels(item); }}
                    style={{ cursor: "pointer" }}
                >
                    <div className="col-2 ">
                        <img className="p-2" style={{ width: "100%" }} src={item.img} alt={item.title} />
                    </div>
                    <div className="col-10   align-self-center">
                        <span className="d-flex">{item.title}</span>
                        <span className="d-flex">$ {item.price}</span>
                    </div>
                    
                </div>
            )
        })
    }


    // componentDidMount = () => {
    //     let tagScripts = document.createElement("script");
    //     tagScripts.src = "https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.7.5/js-cloudimage-360-view.min.js"
    //     document.querySelector('#appendScript').appendChild(tagScripts);
    // }

    // componentDidUpdate = () => {
    // //     document.querySelector('#carCurrent').innerHTML = '';

    //     let tagScripts = document.createElement("script");
    //     tagScripts.src = "https://cdn.scaleflex.it/filerobot/js-cloudimage-360-view/v2.0.0.lazysizes.min.js"

    //     document.querySelector('#appendScript').innerHTML = '';
    //     document.querySelector('#appendScript').appendChild(tagScripts);
    // }

    render() {
        
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <div className="model">
                            <img style={{ width: "100%" }} src={"./images/" + this.state.carCurrent.srcImg + '/civic-1.jpg'} alt="black car" />
                            {/* <div
                                id='carCurrent'
                                className="cloudimage-360"
                                data-folder={"./images/" + this.state.carCurrent.srcImg}
                                data-filename-x="civic-{index}.jpg"
                                data-amount-x="8"
                                style={{ minWidth: "100%" }}
                            ></div> */}
                        </div>
                        {/* <div id="appendScript">
                        </div> */}
                        <div className="card mt-2">
                            <h5 className="card-header">Exterior Colors</h5>
                            <table className="table border boder-color-light" border='1'>
                                <thead>
                                    <tr>
                                        <td>Color</td>
                                        <td>{this.state.carCurrent.color}</td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td>$ {this.state.carCurrent.price}</td>
                                    </tr>
                                    <tr>
                                        <td>Engine Type</td>
                                        <td>{this.state.carCurrent.engineType}</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card text-dark ">
                            <h5 className="card-header text-primary">Exterior Colors</h5>
                            <div className="container-fluid">
                                {this.renderIcon()}
                            </div>
                        </div>

                        <div className="card text-dark mt-2 ">
                            <h5 className="card-header text-primary">Wheels</h5>
                            <div className="container-fluid">
                                {this.renderWheels()}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
