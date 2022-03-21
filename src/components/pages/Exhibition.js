import React from 'react';
import './Exhibition.css';
// import ExhibitItem from './ExhibitItem';

function Exhibition() {
    return (
        <div className='container'>
            <h1> FEATURED EXHIBITION </h1>
            {/* <div className='col-4'> */}

            <div className="col">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img className="card-img-top" src="images/Bhairava.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="card-title" style={{ color: "blue" }}>Product title</h4>
                                <p style={{ color: "red" }}>Price: Rs. 999</p>

                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="row">
                                    <div className="col">
                                        <p className="btn btn-danger btn-block">View Detail</p>
                                    </div>
                                    <div className="col">
                                        <a href="#" className="btn btn-success btn-block">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img className="card-img-top" src="images/Wood_Mandala.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="card-title"><a href="product.html" title="View Product">Product title</a></h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="row">
                                    <div className="col">
                                        <p className="btn btn-danger btn-block">99.00 $</p>
                                    </div>
                                    <div className="col">
                                        <a href="#" className="btn btn-success btn-block">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img className="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="card-title"><a href="product.html" title="View Product">Product title</a></h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="row">
                                    <div className="col">
                                        <p className="btn btn-danger btn-block">99.00 $</p>
                                    </div>
                                    <div className="col">
                                        <a href="#" className="btn btn-success btn-block">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img className="card-img-top" src="images/khukuri.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="card-title"><a href="product.html" title="View Product">Product title</a></h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="row">
                                    <div className="col">
                                        <p className="btn btn-danger btn-block">99.00 $</p>
                                    </div>
                                    <div className="col">
                                        <a href="#" className="btn btn-success btn-block">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img className="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="card-title"><a href="product.html" title="View Product">Product title</a></h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="row">
                                    <div className="col">
                                        <p className="btn btn-danger btn-block">99.00 $</p>
                                    </div>
                                    <div className="col">
                                        <a href="#" className="btn btn-success btn-block">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img className="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="card-title"><a href="product.html" title="View Product">Product title</a></h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="row">
                                    <div className="col">
                                        <p className="btn btn-danger btn-block">99.00 $</p>
                                    </div>
                                    <div className="col">
                                        <a href="#" className="btn btn-success btn-block">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img className="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="card-title"><a href="product.html" title="View Product">Product title</a></h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="row">
                                    <div className="col">
                                        <p className="btn btn-danger btn-block">99.00 $</p>
                                    </div>
                                    <div className="col">
                                        <a href="#" className="btn btn-success btn-block">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}


            {/* <div className='exhibit__container'>
                <div className='exhibit__wrapper'>
                    <div className='exhibit-container'>
                        <div className='col-sm-4'>
                            <ul className='exhibit__items'>
                            <ExhibitItem
                                src='images/Dipankara_buddha.jpg'
                                text='DIPANKARA BUDDHA, the destroyer of evil, protector of merchants'
                                label='Acrylic on Canvas'
                                path='/item_detail'
                            />
                            <ExhibitItem
                                src='images/Dharmapala Mahakala.jpg'
                                text='Embrace the wrathful and terrifying looking DHARMAPALA MAHAKALA'
                                label='Sculpture'
                                path='/item_detail'
                            />
                            <ExhibitItem
                                src='images/Bhairava.jpg'
                                text='BHAIRAVA, The face of Bhairava with the standing figure'
                                label='Mineral Pigment on Canvas'
                                path='/item_detail'
                            />
                            <ExhibitItem
                                src='images/gods in moonlight.jpeg'
                                text='Refresh yourself in the Moonlight with LORD KRISHNA'
                                label='Canvas Art'
                                path='/item_detail'
                            />
                            <ExhibitItem
                                src='images/Bhairava.jpg'
                                text='BHAIRAVA, The face of Bhairava with the standing figure'
                                label='Mineral Pigment on Canvas'
                                path='/item_detail'
                            />
                            <ExhibitItem
                                src='images/gods in moonlight.jpeg'
                                text='Refresh yourself in the Moonlight with LORD KRISHNA'
                                label='Canvas Art'
                                path='/item_detail'
                            />
                        </div>
                        </ul>
                    </div>
                    <ul className='exhibit__items'>
                    <ExhibitItem
                        src='images/Wood_Mandala.jpg'
                        text='Wood Mandala, Apartment Decor, Elegant Wall Art'
                        label='Wood Craft'
                        path='/item_detail'
                    />
                    <ExhibitItem
                        src='images/TOB.jpg'
                        text='TEACHING OF BUDDHA'
                        label='Oil on Canvas'
                        path='/item_detail'
                    />
                    <ExhibitItem
                        src='images/Mountain.jpg'
                        text='Mount Kantega, Himalaya, Nepal Watercolor Painting, Himalaya Painting '
                        label='Original Watercolor Painting'
                        path='/item_detail'
                    />
                    <ExhibitItem
                        src='images/madal.jpg'
                        text='माडालको धुनमा'
                        label='Musical Instrument'
                        path='/item_detail'
                    />
                    </ul>
                    <ul className='exhibit__items'>
                        <ExhibitItem
                            src='images/Sarangi.jpg'
                            text='The sound of Sarangi is believed to resemble a human voice'
                            label='Acrylic on Canvas'
                            path='/item_detail'
                        />
                        <ExhibitItem
                            src='images/PB.jpg'
                            text='Traditional paintbrush made from the “tufi” or broom'
                            label='Paintbrush'
                            path='/item_detail'
                        />
                        <ExhibitItem
                            src='images/SriHari.jpg'
                            text='SHREE HARI VISHNU, the "Preserver" of the Universe'
                            label='Black Stone'
                            path='/item_detail'
                        />
                        <ExhibitItem
                            src='images/AY.jpg'
                            text='Enrich yourself with wisdom goddess, AKASH YOGINI'
                            label='Canvas Art'
                            path='/item_detail'
                        />
                    </ul>
                    <ul className='exhibit__items'>
                        <ExhibitItem
                            src='images/mithila.jpg'
                            text='Madhubani Style'
                            label='Mithila Art'
                            path='/item_detail'
                        />
                        <ExhibitItem
                            src='images/lalitkala.jpg'
                            text='नेपालीको हँसिलो अनुहार'
                            label='Oil Color'
                            path='/item_detail'
                        />
                        <ExhibitItem
                            src='images/PNS.jpg'
                            text='मैले मेरो सानो राज्य सिर्जना गर्न धेरै त्याग गरें'
                            label='Painting'
                            path='/item_detail'
                        />
                        <ExhibitItem
                            src='images/Kali on shiva.jpg'
                            text='Standing Kaali On The Top Of Shiva'
                            label='Statue'
                            path='/item_detail'
                        />
                    </ul>
                    <ul className='exhibit__items'>
                        <ExhibitItem
                            src='images/khukuri.jpg'
                            text='Nepalese Khukuri'
                            label='Antique'
                            path='/item_detail'
                        />
                        <ExhibitItem
                            src='images/handi.jpg'
                            text='Gautama Buddha'
                            label='Handicraft'
                            path='/item_detail'
                        />
                        <ExhibitItem
                            src='images/Gayatri.jpg'
                            text='Recite the most chanted mantra of GAYATRI'
                            label='Canvas Art'
                            path='/item_detail'
                        />
                        <ExhibitItem
                            src='images/Jambala.jpg'
                            text='Explore JAMBALA, the showerer of wealth, wisdom and intelligence'
                            label='Gold Statue'
                            path='/item_detail'
                        />
                    </ul>
                </div>
            </div> */}
        </div>
    );
}

export default Exhibition;