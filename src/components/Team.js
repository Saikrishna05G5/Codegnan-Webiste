import React from 'react';

const Team = () => {
    return (
        <>
            <style>{`
                * {
                    padding: 0px;
                    margin: 0px;
                    box-sizing: border-box;
                    font-family: sans-serif;
                }

                .pics {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    margin-left: 15%;
                }

                .img-text {
                    margin-top: 10%;
                }

                .founder-name {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    margin-left: 50%;
                    margin-right: auto;
                    margin-top: 2%;
                }

                .founder {
                    border-radius: 0px 90px;
                    margin-right: 30%;
                }

                .bold {
                    font-weight: bolder;
                }

                .gray {
                    color: grey;
                    font-size: medium;
                }

                .red {
                    color: #ed2543;
                }

                .note {
                    font-size: 36px;
                }

                .list-item {
                    list-style: none;
                    font-size: larger;
                    word-spacing: 1px;
                    margin-bottom: 2%;
                    margin-left: -20%;
                    margin-top: 5%;
                }

                .content {
                    width: 80%;
                    margin-left: 5%;
                }

                .team {
                    width: 100vw;
                    margin-left: 15%;
                    margin-top: 5%;
                }

                .list-style {
                    color: #ed2543;
                    font-size: 25px;
                    font-weight: bolder;
                    margin-right: 3%;
                }

                @media screen and (max-width: 768px) {
                    .pics {
                        margin-left: 0%;
                    }

                    .content {
                        width: 90%;
                        margin-left: 5%;
                    }
                }

                @media screen and (max-width: 576px) {
                    .pics {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .founder-name {
                        margin-left: 0;
                        justify-content: flex-start;
                    }

                    .founder {
                        margin-right: 0;
                    }

                    .content {
                        width: 100%;
                        margin-left: 0%;
                    }
                }
            `}</style>
            <section className='team'>
                <section>
                    <div className='head-section'>
                        <h4 className='bold gray'>OUR TEAM</h4>
                        <p className='bold note'>Our Top Notch Teams<br /> Involved In Helping <span className='red'>You Learn Programming</span>,<br />  Not Just Coding.</p>
                        <img src='https://codegnan.com/wp-content/uploads/2023/05/heading-separator.png' alt='png' />
                    </div>
                </section>
                <section className='content'>
                    <div className='container'>
                        <div className='row' style={{marginTop:"-5%"}}>
                            <div className='col-12 col-md-4 d-flex justify-content-center flex-column' style={{marginRight:"30pxpx"}}>
                                <ul>
                                    <li className='list-item'><i className="fa-solid fa-check-double list-style"></i>Embark on a Journey with Elite Mentors - IIT Alumni and Top MNC Experts.</li>
                                    <li className='list-item'><i className="fa-solid fa-check-double list-style"></i>Experience Doubt-Free Learning from Product Developers.</li>
                                    <li className='list-item'><i className="fa-solid fa-check-double list-style"></i>Elevate Your Skills with Expert Masterclasses.</li>
                                </ul>
                            </div>
                            <div className='col-12 col-md-4 pics'>
                                <img className='founder' src='https://codegnan.com/wp-content/uploads/2024/03/sairam.webp' alt='Mr.sairam' />
                                <img className='founder' src='https://codegnan.com/wp-content/uploads/2024/03/saketh.webp' alt='Mr.saketh' />
                            </div>
                            <div className='col-12 col-md-4 founder-name'>
                                <p className='bold' style={{ textAlign: "center" }}>Mr.SaiRam</p>
                                <p className='bold' style={{ marginLeft: "65%" }}>Mr.Saketh</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default Team;