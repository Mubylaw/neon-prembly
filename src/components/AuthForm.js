import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined'
import SendToMobileOutlinedIcon from '@mui/icons-material/SendToMobileOutlined'
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined'
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined'
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined'
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined'
import PhonelinkRingOutlinedIcon from '@mui/icons-material/PhonelinkRingOutlined'
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined'
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined'
import CreditCardOffOutlinedIcon from '@mui/icons-material/CreditCardOffOutlined'
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined'
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined'
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined'
import FingerprintOutlinedIcon from '@mui/icons-material/FingerprintOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import VideoStream from './Videostream'

export default class AuthForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      profileImgUrl: '',
      view: false,
      tempErr: '',
      loc: {},
      show: false,
      success: false,
      code: '',
      pin: false,
      extension: '',
      color: '',
      splash: false,
      size: true,
      home: false,
      homVal: 0,
      val: 0,
      smalVal: 0,
      cardname: '',
      cardnumber: '',
      seccode: '',
      zipcode: '',
      exdate: '',
      search: ''
    }
  }

  componentDidMount() {
    this.props.removeError()
    if (this.props.location.state) {
      this.setState({
        tempErr: this.props.location.state.err,
        logo: this.props.location.state.logo,
        color: this.props.location.state.color,
        loc: this.props.location.state,
      })
    }
    if (window.innerWidth > 600) {
      this.setState({
        size: false,
      })
    }
    var val = Math.random() * 10000000
    val = val.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    var smalVal = Math.random() * 10000
    smalVal = smalVal.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    this.setState({ val, smalVal })
    setTimeout(()=>{
      if (!this.state.splash) {
         this.setState({splash: true})
      } 
    },2500)
      
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      tempErr: '',
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // if (this.state.view === false) {
    //   this.setState({ view: true })
    // }
    // const authType = this.props.signUp ? 'register' : 'login'
    // const { email, password, firstName, profileImgUrl, lastName } = this.state
    // this.props
    //   .onAuth(authType, {
    //     email,
    //     password,
    //     school: this.props.school,
    //     firstName,
    //     lastName,
    //     profileImgUrl,
    //   })
    //   .then(() => {
    //     if (this.props.location.state) {
    //       this.props.history.push(this.props.location.state.from)
    //     } else if (this.state.loc.state) {
    //       this.props.history.push(this.state.loc.state.from)
    //     } else {
    //       this.props.history.push('/')
    //     }
    //   })
    //   .catch(() => {
    //     this.setState({ view: false })
    //     return
    //   })
    this.setState({view:true})
    setTimeout(()=>{
      this.setState({
      home: true,
        view: false
    })
    },1000)
  }

  handleBack = () => {
    this.props.history.goBack()
  }

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    })
  }

  handleCancel = () => {
    this.setState({
      success: false,
    })
  }

  handlePass = () => {
    this.setState({view:true})
    setTimeout(()=>{
      this.setState({
      homVal: this.state.homVal + 1,
        view: false
    })
    window.scrollTo({ 
      top: 0,
    });
    },1000)
  }

  handleCam = () => {
    this.setState({view:true})
    setTimeout(()=>{
      this.setState({
      homVal: this.state.homVal + 1,
        view: false
    })
    },2500)
  }

  render() {
    const {
      email,
      firstName,
      lastName,
      tempErr,
      splash,
      size,
      home,
      homVal,
      val,
      smalVal,
      cardname,
      cardnumber,
      seccode,
      zipcode,
      exdate,
      search
    } = this.state
    const { buttonText, signUp, errors, history, removeError } = this.props

    history.listen(() => {
      removeError()
    })

    return (
      <div>
        {!size ? (
          <div className="container">
            <h1>
              Please view this app on a mobile device as it's intended to be
              viewed
            </h1>
          </div>
        ) : !splash ? (
          <div
            className="splash"
            onClick={() => this.setState({ splash: true })}
          >
            <div className="image">
              <img
                src="https://png.pngtree.com/png-vector/20200121/ourmid/pngtree-orange-logo-abstract-vector-designs-png-image_2132671.jpg"
                alt="Neon auth"
              />
            </div>
          </div>
        ) : !home ? (
          <div className="bank-auth">
            <div className="nav-tag">
              <Link to="/signin" className={signUp ? '' : 'active'}>
                LOG IN
              </Link>
              <Link to="/signup" className={signUp ? 'active' : ''}>
                SIGN UP
              </Link>
            </div>
            <div className="content">
              <form onSubmit={this.handleSubmit}>
                {!errors.message ? (
                  ''
                ) : (
                  <div className="alert alert-danger">{errors.message}</div>
                )}
                {!tempErr ? (
                  ''
                ) : (
                  <div className="alert alert-danger">{tempErr}</div>
                )}
                {signUp && (
                  <div className="nam">
                    <div className="col">
                      <div className="mb-3">
                        <label htmlFor="FirstName" className="form-label">
                          First Name
                          <span>*</span>
                        </label>
                        <input
                          type="type"
                          className="form-control"
                          id="FirstName"
                          name="firstName"
                          onChange={this.handleChange}
                          value={firstName}
                          
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="mb-3">
                        <label htmlFor="LastName" className="form-label">
                          Last Name
                          <span>*</span>
                        </label>
                        <input
                          type="type"
                          className="form-control"
                          id="LastName"
                          name="lastName"
                          onChange={this.handleChange}
                          value={lastName}
                          
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Account Email
                    <span>*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    
                    id="email"
                    name="email"
                    onChange={this.handleChange}
                    value={email}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                    <span>*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    onChange={this.handleChange}
                    
                  />
                </div>
                <div className="links">
                  <button
                    type="submit"
                    className={`btn ${this.state.view ? 'btn-load' : ''}`}
                  >
                    <span className="btn_text">{buttonText}</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="background"></div>
          </div>
        ) : (
          <>
            {homVal === 0 ? (
              <div className="bank-hom orig">
                <div className="top">
                  <div
                    className="hamburger"
                    onClick={() => this.setState({ homVal: homVal + 1 })}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <img
                    src="https://png.pngtree.com/png-vector/20200121/ourmid/pngtree-orange-logo-abstract-vector-designs-png-image_2132671.jpg"
                    alt="Neon auth"
                    onClick={() => this.setState({ homVal: 7 })}
                  />
                </div>
                <div className="info">
                  <div className="account">Account 1 of 1</div>
                  <div className="title">Neon X account</div>
                  <div className="no">0012334567</div>
                  <div className="bal">
                    Balance: <span>N {val}</span>
                  </div>
                </div>
                <div className="search">
                  <div className="mb-3">
                    <span>
                      <SearchOutlinedIcon />
                    </span>
                    <input
                      type="type"
                      className="form-control"
                      id="search"
                      name="search"
                      onChange={this.handleChange}
                      value={search}
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="nav-lots">
                  <div className="nav-line">
                    <div className="nav-item">
                      <CreditScoreOutlinedIcon />
                      <span>Transfers</span>
                    </div>
                    <div className="nav-item">
                      <SendToMobileOutlinedIcon />
                      <span>Buy airtime and data</span>
                    </div>
                    <div className="nav-item">
                      <HistoryOutlinedIcon />
                      <span>Transaction history</span>
                    </div>
                    <div className="nav-item">
                      <PointOfSaleOutlinedIcon />
                      <span>Payments</span>
                    </div>
                  </div>
                  <div className="nav-line">
                    <div className="nav-item">
                      <WalletOutlinedIcon />
                      <span>Quick bills</span>
                    </div>
                    <div className="nav-item">
                      <CurrencyExchangeOutlinedIcon />
                      <span>Bank rates</span>
                    </div>
                    <div className="nav-item">
                      <PhonelinkRingOutlinedIcon />
                      <span>Requests</span>
                    </div>
                    <div className="nav-item">
                      <QrCode2OutlinedIcon />
                      <span>Pay with QR</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : homVal === 1 ? (
              <div className="bank-hom">
                <div className="up">
                  <div
                    className="back"
                    onClick={() => this.setState({ homVal: homVal - 1 })}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <h3>Cards</h3>
                </div>
                <div className="item-link">
                  <WarningAmberOutlinedIcon />
                  <span>Report dispense error</span>
                </div>
                <div className="item-link">
                  <CreditCardOffOutlinedIcon />
                  <span>Block Card</span>
                </div>
                <div className="item-link">
                  <PaymentsOutlinedIcon />
                  <span>Card Replacement</span>
                </div>
                <div
                  className="item-link"
                  onClick={() => this.setState({ homVal: homVal + 1 })}
                >
                  <CreditScoreOutlinedIcon />
                  <span>Card Protect & Control</span>
                </div>
                <div className="item-link">
                  <KeyOutlinedIcon />
                  <span>Pin Retrieval</span>
                </div>
                <div className="item-link">
                  <PriceChangeOutlinedIcon />
                  <span>Request for Dollar Card</span>
                </div>
                <div className="item-link">
                  <FingerprintOutlinedIcon />
                  <span>Biometrics</span>
                </div>
              </div>
            ) : homVal === 2 ? (
              <div className="bank-hom">
                <div className="up">
                  <div
                    className="back"
                    onClick={() => this.setState({ homVal: homVal - 1 })}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <h3>Card Protect</h3>
                </div>
                <div className="section">
                  <div className="title">Card transaction channels</div>
                  <div className="subtitle">
                    Control the channels allowed for transaction with this card
                  </div>
                  <div className="tile">
                    <div class="form-check form-switch">
                      <label className="form-check-label" htmlFor="all">
                        All
                      </label>
                      <input
                        defaultChecked
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        name="all"
                        id="all"
                      />
                    </div>
                  </div>
                  <div className="tile">
                    <div class="form-check form-switch">
                      <label className="form-check-label" htmlFor="web">
                        Web transactions
                      </label>
                      <input
                        defaultChecked
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        name="web"
                        id="web"
                      />
                    </div>
                  </div>
                  <div className="tile">
                    <div class="form-check form-switch">
                      <label className="form-check-label" htmlFor="atm">
                        ATM / POS
                      </label>
                      <input
                        defaultChecked
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        name="atm"
                        id="atm"
                      />
                    </div>
                  </div>
                </div>
                <div className="section">
                  <div className="title">Card transaction locations</div>
                  <div className="subtitle">
                    Control the location choicesfor transaction using this card.
                    This applies to ATM/POS transactions only.
                  </div>
                  <div className="tile">
                    <div class="form-check form-switch">
                      <label className="form-check-label" htmlFor="nigeria">
                        Nigeria
                      </label>
                      <input
                        defaultChecked
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        name="nigeria"
                        id="nigeria"
                      />
                    </div>
                  </div>
                  <div className="tile">
                    <div class="form-check form-switch">
                      <label
                        className="form-check-label"
                        htmlFor="international"
                      >
                        International
                      </label>
                      <input
                        defaultChecked
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        name="international"
                        id="international"
                      />
                    </div>
                  </div>
                </div>
                <div className="section null">
                  <div className="title">Face Recognition</div>
                  <div className="subtitle">
                    To enable 2-factor authentication with your facial ID and
                    keep your account more secure.
                  </div>
                  <div className="tile">
                    <div class="form-check form-switch">
                      <label className="form-check-label" htmlFor="web">
                        Web transactions
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        name="web"
                        id="web"
                        defaultChecked
                      />
                    </div>
                  </div>
                  <div className="tile">
                    <div class="form-check form-switch">
                      <label className="form-check-label" htmlFor="atm">
                        ATM / POS
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        name="atm"
                        id="atm"
                        onChange={() =>
                          setTimeout(
                            () => this.setState({ homVal: homVal + 1 }),
                            500
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : homVal === 3 ? (
              <div className="bank-hom">
                <div className="up">
                  <div
                    className="back"
                    onClick={() => this.setState({ homVal: homVal - 1 })}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <h3>Card Protect</h3>
                </div>
                <div
                  className="section mini"
                  onClick={() => this.setState({ homVal: homVal + 1 })}
                >
                  <div className="title">
                    <PermIdentityOutlinedIcon />
                    Face Recognition
                  </div>
                  <div className="subtitle">
                    Control the channels allowed for transaction with this card.
                  </div>
                </div>
                <div className="section mini">
                  <div className="title">
                    <FingerprintOutlinedIcon /> Fingerprint
                  </div>
                  <div className="subtitle">
                    Control the channels allowed for transaction with this card.
                  </div>
                </div>
              </div>
            ) : homVal === 4 ? (
              <div className="bank-hom">
                <div className="up">
                  <div
                    className="back"
                    onClick={() => this.setState({ homVal: homVal - 1 })}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <h3>Confirm Password</h3>
                </div>
                <div className="section max">
                  <div className="subtitle">Enter your password</div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div
                    type="submit"
                    className={`btn ${this.state.view ? 'btn-load' : ''}`}
                    onClick={this.handlePass}
                  >
                    <span className="btn_text">Submit</span>
                  </div>
                </div>
              </div>
            ) : homVal === 5 ? (
              <div className="bank-hom">
                <div className="up">
                  <div
                    className="back"
                    onClick={() => this.setState({ homVal: homVal - 1 })}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <h3>Face Capture</h3>
                </div>
                <div className="section max">
                  <VideoStream />
                  <div
                    type="submit"
                    className={`btn ${this.state.view ? 'btn-load' : ''}`}
                    onClick={this.handleCam}
                  >
                    <span className="btn_text">
                      <CameraAltOutlinedIcon />
                    </span>
                  </div>
                </div>
              </div>
            ) : homVal === 6 ? (
              <div className="bank-hom">
                <div className="up">
                  <div
                    className="back"
                    onClick={() => this.setState({ homVal: homVal - 1 })}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <h3>Face Capture</h3>
                </div>
                <div className="section full">
                  <div className="subtitle">
                    Face ID has been updated successfully
                  </div>
                </div>
              </div>
            ) : homVal === 7 ? (
              <div className="bank-hom store orig">
                <div className="up">
                  <img
                    src="https://png.pngtree.com/png-vector/20200121/ourmid/pngtree-orange-logo-abstract-vector-designs-png-image_2132671.jpg"
                    alt="Neon auth"
                  />
                  <h2>Neon E-store</h2>
                </div>
                <div className="image">
                  <img
                    src="https://vynetinvent.com.ng/wp-content/uploads/2019/03/BulkSMSPro-Mastercard-VISA-Verve-Logo-e1552298507841-1.png"
                    alt=""
                    className="flier"
                  />
                </div>
                <h2>Payment Amount</h2>
                <div className="amount">N {smalVal}</div>
                <form>
                  <div className="mb-3">
                    <label htmlFor="cardname" className="form-label">
                      Name on Card
                      <span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cardname"
name="cardname"
                      onChange={this.handleChange}
                      value={cardname}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="cardnumber" className="form-label">
                      Card Number
                      <span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cardnumber"
                      name="cardnumber"
                      onChange={this.handleChange}
                      value={cardnumber}
                    />
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <label htmlFor="exdate" className="form-label">
                        Expiry Date
                        <span>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exdate"
                        name="exdate"
                        onChange={this.handleChange}
                        value={exdate}
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="seccode" className="form-label">
                        Security Code
                        <span>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="seccode"
                        name="seccode"
                        onChange={this.handleChange}
                        value={seccode}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="zipcode" className="form-label">
                      ZIP/Postal Code
                      <span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="zipcode"
                      name="zipcode"
                      onChange={this.handleChange}
                      value={zipcode}
                    />
                  </div>

                  <div className="submit-links">
                    <div
                      className={`btn ${this.state.view ? 'btn-load' : ''}`}
                      onClick={this.handlePass}
                  >
                    <span className="btn_text">
                      
                      <LockOutlinedIcon /> Pay N {smalVal}</span>
                    </div>
                  </div>
                </form>
              </div>
            ) : homVal === 8 ? (
              <div className="bank-hom">
                <div
                  className="aler"
                  onClick={() => {
                    this.setState({
                      homVal: homVal + 1,
                    })
                  }}
                >
                  <div className="top">
                    <div className="left">
                      <img
                        src="data:image/jpeg;base64,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"
                        alt=""
                        srcset=""
                      />
                      <span>MESSAGES</span>
                    </div>
                    <div className="right">now</div>
                  </div>
                  <div className="title">Face ID link</div>
                  <div className="subtitle">Today at 2:00PM</div>
                </div>
                <div className="full">
                  <div className="inner">
                    <div className="title">Face ID Verification</div>
                    <p>
                      For added security, please verify your Face ID with the
                      link sent to your phone number ending in 3845.
                    </p>
                    <div
                      className="btn"
                      onClick={() => {
                        this.setState({
                          homVal: homVal + 1,
                        })
                      }}
                    >
                      <img
                        src="https://media.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif"
                        alt=""
                      />
                      <span>Authenticating Face ID</span>
                    </div>
                    <div
                      className="go-back"
                      onClick={() => {
                        this.setState({
                          homVal: homVal - 1,
                        })
                      }}
                    >
                      go back and request another link?
                    </div>
                  </div>
                </div>
              </div>
            ) : homVal === 9 ? (
              <div className="bank-hom">
                <div className="up">
                  <div
                    className="back"
                    onClick={() => this.setState({ homVal: homVal - 1 })}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <h3>Face Capture</h3>
                </div>
                <div className="section max">
                  <VideoStream />
                  <div
                    type="submit"
                    className={`btn ${this.state.view ? 'btn-load' : ''}`}
                    onClick={this.handleCam}
                  >
                    <span className="btn_text">
                      <CameraAltOutlinedIcon />
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bank-hom">
                <div className="up">
                  <div
                    className="back"
                    onClick={() => this.setState({ homVal: homVal - 1 })}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <h3>Face Capture</h3>
                </div>
                <div className="section full">
                  <div className="subtitle">
                    Face ID has been updated successfully
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    )
  }
}
