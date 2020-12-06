
import React from 'react';
import './submit.css';
import { category } from '../config/category';
import { province, cities } from '../config/india';
import axios from 'axios';
import NotificationSystem from 'react-notification-system';

const _userId = JSON.parse(localStorage.getItem('UserObject'));

class SubmitAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allcategory: category,
            allprovince: province,
            allcities: cities,
            selectindex: undefined,
            condition: true,
            img1: '',
            img2: '',
            img3: '',
            img4: ''


        };
        

    }
    onchange = (event) => {
        event.preventDefault();

        switch (event.target.name) {

            case 'img1':
                this.setState({ img1: event.target.files[0].name })
                break;
            case 'img2':
                this.setState({ img2: event.target.files[0].name })
                break;
            case 'img3':
                this.setState({ img3: event.target.files[0].name })
                break;
            case 'img4':
                this.setState({ img4: event.target.files[0].name })
                break;

            default:
                break;
        }


    }
    //this will make you in contact with home after log in.

    componentWillMount() {
        if (_userId === null) {

            window.location = '/user/login';
        }
    }
    // Notification

    _notificationSystem = null

    _addNotification = (level, msg) => {
        
        this._notificationSystem.addNotification({
            message: msg,
            level: level
        });
    }

    componentDidMount() {
        this._notificationSystem = this.refs.notificationSystem;
    }
    // Axios Request
   postAdd = (e) => {
        e.preventDefault();
        var form = document.getElementById('addform')
        var formData = new FormData(form);
        if (this.props.match.path === '/posting') {


            axios.post('http://localhost:5000/item/ads', formData).then(res => {
                console.log(res.data);

                this._addNotification("success", "Your ad successfully upload.");
                window.location = '/';
            })
                .catch(err => {
                    console.log(err.response);
                    this._addNotification("error", "You have an error in your form please check and resubmit again.")
                });
        } else {
            let path = this.props.match.params.id;
            axios.put('http://localhost:5000/item/ads/update/?id=' + path, formData).then(res => {
                console.log(res.data);

                this._addNotification("success", "Your ad successfully updated.");
                window.location = '/';
            })
                .catch(err => {
                    console.log(err.response);
                    this._addNotification("error", "You have an error in your form please check and resubmit again.")
                });

        }

    } 

    // Selected Category against result 
    selectCategory = () => {
        var selectBox = document.getElementById("selectcate");
        var selectedValue = selectBox.options[selectBox.selectedIndex].value;
        if (selectedValue === 'Animals' || selectedValue === 'Services') {
            this.setState({
                condition: false
            });
        } else {
            this.setState({
                condition: true
            })
        }


    }

    // Selected province index
    selectedindex = () => {
        var selectBox = document.getElementById("selectBox");
        var selectedValue = selectBox.options[selectBox.selectedIndex].value;

        this.setState({
            selectindex: selectedValue,
        });

    }

    //title, categoryname, price, condition, description,
    // photos, name, phone, selectprovince, selectcity
    render() {
        const { selectindex, allcities, allprovince, allcategory
        } = this.state;
        return (
            <div>
                <div id="container" className="container">
                
                    <div id="subbox">
                        <p>Uploading Product..</p>
                        <div id="submitform">
                            <form id="addform" encType="multipart/form-data" onSubmit={this.postAdd}>
                                <input type="hidden" name="_userId" defaultValue={_userId._id} />
                                <label><b>Title Of Your product</b><span style={{ color: 'red' }}>*</span></label>
                                <br/>
                                <input type="text" id="title"
                                    className="form-control" name="title" required maxLength='70' /><br/>
                                <small id="title" className="form-text text-muted">Maximum 120 characters</small>
                                <br /><br />
                                <label><b>Category</b><span style={{ color: 'red' }}>*</span></label><br/>
                                <select id="selectcate"
                                    onChange={this.selectCategory}

                                    className="form-control" required name="category">
                                    <option value='' >Select Category</option>
                                    {allcategory.map((item) => {
                                        return (
                                            <option value={item.cate} key={item.cate}>{item.cate}</option>
                                        );
                                    })}


                                </select>

                                <hr />

                                <label><b>Price</b><span style={{ color: 'red' }}>*</span></label>
                                <br/>

                                <input type="text" id="price"
                                    name="price" className="form-control" placeholder="Rupees" required /><br /><br />

                                {this.state.condition ?
                                    <div>
                                        <label><b>Condition</b><span style={{ color: 'red' }}>*</span></label><br/>
                                        <select className="form-control" id="selectcon"


                                            required nane="condition">
                                            <option value=''>Select Condition</option>
                                            <option value='new'>Goods + Goods</option>
                                            <option value='new'>Goods + (Goods+Cash)</option>
                                            <option value='new'>Only Cash</option>
uct                                         </select>
                                    </div> : ''}
                                <br />
                                <label><b>Post Description</b><span style={{ color: 'red' }}>*</span></label><br/>
                                <textarea cols={60} rows={8}

                                    className="form-control" name="description" placeholder="Sharing product description" required>
                                </textarea> <br /> <br />

                                <label><b>Upload Photos</b><span style={{ color: 'red' }}>*</span></label>
                               
                                <div className="custom-file mb-3" >

                                    <input type="file" className="custom-file-input" onChange={this.onchange} name="img1" id="img1" required />
                                    <label htmlFor="img1" className="custom-file-label" >{this.state.img1}</label>
                                </div>
                                <div className="custom-file mb-3" >
                                    <input type="file" className="custom-file-input" onChange={this.onchange} name="img2" id="img2" required />
                                    <label htmlFor="img2" className="custom-file-label" >{this.state.img2}</label>
                                </div>
                                


                                <hr />
                                <label><b>Name</b><span style={{ color: 'red' }}>*</span></label><br/>
                                <input type="text" id="name"

                                    name="name" className="form-control" /><br />
                                <label><b>Phone number</b><span style={{ color: 'red' }}></span></label><br/>
                                <input type="text" id="phone"


                                    name="phone" className="form-control" placeholder="+91" required /><br />
                                <hr />
                                <label><b>Location</b><span style={{ color: 'red' }}>*</span></label><br/>
                                <select id="selectBox" name="province" onChange={this.selectedindex} className="form-control" required >
                                    <option value={null}>Choose location</option>
                                    {allprovince.map((item) => {
                                        return (
                                            <option value={item} key={item}>{item}</option>
                                        );

                                    })

                                    }
                                </select><br />

                                {(selectindex === undefined ? '' :
                                    <div>
                                        <label><b>Cities</b><span style={{ color: 'red' }}>*</span></label><br/>

                                        <select className="form-control" id="selectcity"

                                            name="city" required>
                                            <option value=''>Choose location</option>

                                            {selectindex !== undefined && allcities[selectindex].map((item) => {


                                                return (
                                                    <option value={item.city} key={item.city}>{item.city}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                )}
                                <p id="agreement">By clicking 'Submit' you confirm that you have carefully read and understood all the facts, statements and conditions stated in the Terms of Use & Posting Rules of our website to which you unconditionally agree and accept as true and correct and constituting a binding agreement between us.</p>
                                <hr />
                                <input type="submit" name="submit" value="Submit" className="btn btn-warning btn-lg" />
                            </form>
                        </div>

                    </div>


                </div>
                
                <NotificationSystem ref="notificationSystem" />
            
            </div>

        );
    }
}

export default SubmitAdd;



