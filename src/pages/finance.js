import React from 'react';
import './finance.css'

const Home = () => {
    return (
        <div>
            <div class="container">
                <div class="display-3" id="money"><center>What is MONEY?</center></div>
                <hr />
                <div class="row">
                    <div class="col" id="text1">
                        <p>
                            Money is any item or medium of exchange that is accepted by people for the payment of goods and services, as well as the repayment of loans. Money makes the world go 'round. Economies rely on money to facilitate transactions and to power financial growth. Typically, it is economists who define money, where it comes from, and what it's worth.
                            In India, most popular form of money is Indian Ruppee which comes in form of bank notes and coins issued by the Reserve Bank of India (RBI).
                        </p>
                    </div>
                    <div class="col">
                        <br />
                        <center>
                            <img src="/img/money.jpg" alt="money" id="image1" />
                        </center>
                    </div>
                </div>
                <br />
                <div class="display-6"><center>More forms of MONEY</center></div>
                <br />
                <div class="row">
                    <div class="col">
                        <center>
                            <div class="card" id="card1">
                                <img src="/img/crypto.jpg" class="card-img-top" alt="crypto" id="image2" />
                                <div class="card-body">
                                    <h5 class="card-title" id="text2">Cryptocurrency</h5>
                                    <p class="card-text" id="text3">A cryptocurrency, crypto-currency, or crypto is a digital currency designed to work as a medium of exchange through a computer network that is not reliant on any...</p>
                                    <a href="https://en.wikipedia.org/wiki/Cryptocurrency" class="btn btn-success" id="button1">Learn more</a>
                                </div>
                            </div>
                        </center>
                    </div>
                    <div class="col">
                        <center>
                            <div class="card" id="card1">
                                <img src="/img/nft.jpg" class="card-img-top" alt="crypto" id="image2" />
                                <div class="card-body">
                                    <h5 class="card-title" id="text2">Non-Fungible Tokens</h5>
                                    <p class="card-text" id="text3">A non-fungible token (NFT) is a unique digital identifier that cannot be copied, substituted, or subdivided, that is recorded in a blockchain, and that is...</p>
                                    <a href="https://en.wikipedia.org/wiki/Non-fungible_token" class="btn btn-success" id="button1">Learn more</a>
                                </div>
                            </div>
                        </center>
                    </div>
                    <div class="col">
                        <center>
                            <div class="card" id="card1">
                                <img src="/img/stock.jpg" class="card-img-top" alt="crypto" id="image2" />
                                <div class="card-body">
                                    <h5 class="card-title" id="text2">Stocks</h5>
                                    <p class="card-text" id="text3">In finance, stock (also capital stock) consists of all the shares by which ownership of a corporation or company is divided. A single share of the stock means fractional...</p>
                                    <a href="https://en.wikipedia.org/wiki/Stock" class="btn btn-success" id="button1">Learn more</a>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <div class="container">
                <div class="display-3" id="money"><center>What is a BANK?</center></div>
                <hr />
                <div class="row">
                    <div class="col">
                        <br />
                        <center>
                            <img src="/img/bank.jpg" alt="bank" id="image2" />
                        </center>
                    </div>
                    <div class="col" id="text1">
                        <p>
                            A bank is a financial institution that accepts deposits from the public and creates credit. Lending activities can be performed either directly or indirectly through capital markets. Due to their importance in the financial stability of a country, banks are highly regulated in most countries. Some of the popular banks in India are State Bank of India, HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, etc.
                        </p>
                    </div>
                </div>
                <br />
                <div id="text4"><center>Yes you can take out money from your bank as physical currency and it feels good in your own hands. But, it can be stolen, burnt or deform. The solution to this is very simple due to the steps taken by our government to easily transfer funds online.</center></div>
                <section>
                    <div class="container py-5">
                        <div class="card bg-success text-white rounded-3 mb-3">
                            <div class="card-body">
                                <figure class="mb-0">
                                    <blockquote class="blockquote pb-2">
                                        <p><center>
                                            <i class="fas fa-angle-double-left">
                                                <span class="lead font-italic">"Cashless bharat      ki hai yah shuruat
                                                    sab milkar do iska saath"</span></i>
                                        </center></p>
                                    </blockquote>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
                <br />

            </div>
            <div class="container">
                <div class="display-3" id="money"><center>Digital Payment Methods</center></div>
                <hr />
                <section class="pt-5 pb-5">
                    <div class="container">
                        <div class="row">
                            
                            <div class="col-12">
                                <div id="carousel1" class="carousel slide" data-ride="carousel">

                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <div class="row">

                                                <div class="col-md-4 mb-3">
                                                    <div class="card">
                                                        <img class="img-fluid" alt="100%x280"
                                                            src="/img/bankcards.jpg" id = "image3"/>
                                                            <div class="card-body">
                                                                <h4 class="card-title" id="text4">Bank Card</h4>
                                                                <p class="card-text">A bank card is typically a plastic card issued by a bank to its clients that performs one or more of a number of services that relate to giving the client access to a bank account.</p>
                                                                <a href="https://en.wikipedia.org/wiki/Bank_card" class="btn btn-success" id="button1">Learn more</a>
                                                            </div>
                                                        
                                                    </div>
                                                </div>
                                                <div class="col-md-4 mb-3">
                                                    <div class="card">
                                                        <img class="img-fluid" alt="100%x280"
                                                            src="/img/upi.jpg" id = "image3"/>
                                                            <div class="card-body">
                                                                <h4 class="card-title" id="text4">UPI</h4>
                                                                <p class="card-text">Unified Payments Interface is an instant real-time payment system developed by National Payments Corporation of India. The interface facilitates inter-bank peer-to-peer...</p>
                                                                <a href="https://en.wikipedia.org/wiki/Unified_Payments_Interface" class="btn btn-success" id="button1">Learn more</a>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 mb-3">
                                                    <div class="card">
                                                        <img class="img-fluid" alt="100%x280"
                                                            src="/img/digitalwallet.jpg" id = "image3"/>
                                                            <div class="card-body">
                                                                <h4 class="card-title" id="text4">Digital Wallet</h4>
                                                                <p class="card-text">A digital wallet, also known as an e-wallet, is an electronic device, online service, or software program that allows one party to make electronic transactions with ...</p>
                                                                <a href="https://en.wikipedia.org/wiki/Digital_wallet" class="btn btn-success" id="button1">Learn more</a>
                                                            </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="row">

                                            <div class="col-md-4 mb-3">
                                                    <div class="card">
                                                        <img class="img-fluid" alt="100%x280"
                                                            src="/img/onlinebanking.jpg" id = "image3"/>
                                                            <div class="card-body">
                                                                <h4 class="card-title" id="text4">Online Banking</h4>
                                                                <p class="card-text">Online banking, also known as internet banking, web banking or home banking, is an electronic payment system that enables customers of a bank or other...</p>
                                                                <a href="https://en.wikipedia.org/wiki/Online_banking" class="btn btn-success" id="button1">Learn more</a>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 mb-3">
                                                    <div class="card">
                                                        <img class="img-fluid" alt="100%x280"
                                                            src="/img/mobilebanking.jpg" id = "image3"/>
                                                            <div class="card-body">
                                                                <h4 class="card-title" id="text4">Mobile Banking</h4>
                                                                <p class="card-text">Mobile banking is a service provided by a bank or other financial institution that allows its customers to conduct financial transactions remotely using...</p>
                                                                <a href="https://en.wikipedia.org/wiki/Mobile_banking" class="btn btn-success" id="button1">Learn more</a>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 mb-3">
                                                    <div class="card">
                                                        <img class="img-fluid" alt="100%x280"
                                                            src="/img/microatm.jpg" id = "image3"/>
                                                            <div class="card-body">
                                                                <h4 class="card-title" id="text4">Micro ATM</h4>
                                                                <p class="card-text">Micro ATM meant to be a device that is used by a million Business Correspondents (BC) to deliver basic banking services. The platform will enable Business Correspondents...</p>
                                                                <a href="http://cashlessindia.gov.in/micro_atms.html" class="btn btn-success" id="button1">Learn more</a>
                                                            </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" ></span>
    <span >Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
    <span class="carousel-control-next-icon" ></span>
    <span >Next</span>
  </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;