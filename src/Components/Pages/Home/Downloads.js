import React from 'react'
import "./HomeStyle/DownloadStyle.css"
import mobileApp from "./mobileApp.png"
function Downloads() {
    return (
        <div class="container">
            <div class="row">
                <h2 class="text-start" id='downloadsh2'>Downloads</h2>
                <div class="col-4">
                    <div class="card">
                        <img src="https://idsb.tmgrup.com.tr/ly/uploads/images/2020/11/22/73845.jpg" class="card-img-top downloadimg" alt="art-gallery" id='artgallery' />
                        <div class="card-body" className='deneme' id="firstcard">
                        <div class="text-start" id='textfirst'>
                            <h5 class="card-title">Art Gallert</h5>
                            <p class="card-text">Explore digital art in a way you've never experienced before in our exclusive Virtual Art Gallery</p>
                            <a href="#" class="btn btn-primary" id='firstbtn2'>Download PC</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <img src="https://img-s1.onedio.com/id-623984bcedfd8f7a14ae468f/rev-0/w-620/f-jpg/s-8743a5031ccf8a8aa250f7cbe6ffcc7127cf62dc.jpg" class="card-img-top downloadimg" alt="virtual-dome" />
                        <div class="card-body"  className='deneme'id="secondcard">
                            <div class="text-start" id='textsecond'>
                            <h5 class="card-title">Virtual Dome</h5>
                            <p class="card-text">Display your incredible digital collectibles within your very own customizable Fancave or for bigger collectibles take advantage of our insane futuristic Virtual Dome.</p>
                            <a href="#" class="btn btn-primary"  id='secondbtn'>Download PC</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <img src="https://mockupfreedownloads.com/wp-content/uploads/edd/2020/02/7a26d676055717.5c5f77b7efc7f-600x450.jpg" class="card-img-top downloadimg" alt="mobile-app" />
                        <div class="card-body"  className='deneme'id="thirdcard">
                        <div class="text-start" id='textthird'>
                            <h5 class="card-title">Mobile App</h5>
                            <p class="card-text">Hold your entire collection in the palm of your hand. With the Virtual Mobile App you can view all your collectibles in next Augmented Reality</p>
                            <a href="#" class="btn btn-primary" id='thirdbtn'>Google Play</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Downloads