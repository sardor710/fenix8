var lang = $('html').attr('data-locale').toLowerCase().substr(-2);
var value = {
'homepage': {
'tw': '#',
'sg': '#',
'in': '#',
'ph': '#',
'hk': '#',
'my': '#',
'th': '#',
'kr': '#',
'vn': '#',
'id': '#',
'cn': '#',
'jp': '#'
},
}
var productLink = {
'amoled': '#spec',
'solar': '#spec',
}
var pdNav = new Vue({
el: '#pd-nav',
data: {
text: `
<div class="pd-list-con dark-gray">
    <div class="container">
        <h2 class="main-pd">FĒNIX 8 Series</h2>
        <ul class="pd-list" v-html="text"></ul>
        <div class="buy-now-all mobile-show">
            <a class="btn-white-empty btn-size-small" href="${productLink['amoled']}" data-name="sub-nav" aria-label="sub-nav" data-ga-title="sub-nav fēnix 8 Amoled buy-now">BUY AMOLED</a>
            <a class="btn-white-empty btn-size-small" href="${productLink['solar']}" data-name="sub-nav" aria-label="sub-nav" data-ga-title="sub-nav fēnix 8 Solar buy-now">BUY SOLAR</a>
        </div>
    </div>
</div>
<div class="sub-nav-con dark">
    <div class="container">
        <ul class="sub-nav">
            <li><a href="#device" data-ua-event="sub-nav Device" class="device">Introduction</a></li>
            <li><a href="#voice" data-ua-event="sub-nav Voice">Voice</a></li>
            <li><a href="#training" data-ua-event="sub-nav Training">Training</a></li>
            <li><a href="#outdoor" data-ga-title="sub-nav Outdoor">Outdoor</a></li>
            <li><a href="#sports" data-ua-event="sub-nav Sports">Multisports</a></li>
            <li><a href="#health" data-ua-event="sub-nav Health">Health</a></li>
            <li><a href="#spec" data-ua-event="sub-nav Spec">Spec</a></li>
        </ul>
        <div class="buy-now-all pc-show">
            <a class="btn-black-empty btn-size-small subnav-amoled" href="${productLink['amoled']}" data-name="sub-nav" aria-label="sub-nav" data-ga-title="sub-nav fēnix 8 Amoled buy-now">AMOLED</a>
            <a class="btn-black-empty btn-size-small subnav-solar" href="${productLink['solar']}" data-name="sub-nav" aria-label="sub-nav" data-ga-title="sub-nav fēnix 8 Solar buy-now">SOLAR</a>
        </div>
    </div>
</div>
`
}
})
var featureItem = new Vue({
el: '#hero',
data: {
text: `

`
}
})
var Device = new Vue({
el: '#device',
data: {
text: `
<div class="amoled" id="amoled">
    <div class="container">
        <div class="watch">
            <video playsinline autoplay muted loop style="z-index: 1" class="watch-video">
                <source src="video/amoled-screen.mp4" type='video/mp4' />
            </video>
            <img src="images/fenix8-amoled-product-main.png" alt="" id="fenix-8">
        </div>
        <div class="text">
            <h2>FĒNIX 8 AMOLED</h2>
            <p>Features a bright and vibrant AMOLED screen while maintaining a robust battery life up to 29 days in Smartwatch mode mode!</p>
            <div class="compare">
                <ol>
                    <li>Smartwatch mode<br><span>29</span>days</li>
                    <li class="line"></li>
                    <li>GPS Only mode<br><span>84</span>hours</li>
                </ol>
            </div>
           
        </div>
    </div>
</div>
<div class="solar">
    <div class="container">
        <div class="watch">
            <video playsinline autoplay muted loop style="z-index: 1" class="watch-video">
                <source src="video/solar-screen.mp4" type='video/mp4' />
            </video>
            <img src="images/fenix8-solar-product-main.png" alt="" id="fenix-8">
        </div>
        <div class="text">
            <h2>FĒNIX 8 SOLAR</h2>
            <p>Garmin Solar Power Technology Evolution!<br>Features Garmin Gen 3 Power Sapphire Solar lens for 50% more solar power, extends battery life by 30% for up to 48*days of performance!</p>
            <div class="compare">
                <ol>
                    <li>Smartwatch mode<br><span>48</span>days</li>
                     <li class="line"></li>
                    <li>GPS Only mode<br><span>149</span>hours</li>
                </ol>
            </div>
           
        </div>
    </div>
</div>
<div class="bg-wording"><img data-src="images/main-wording.png" alt="" class="lazyload"></div>
<div class="all-bg">
    <div class="black-top"></div>
    <div class="black-bottom"></div>
    <div class="black-left"></div>
    <div class="black-right"></div>
</div>
<div class="bg"></div>
`
}
})
var featureItem = new Vue({
el: '#overview',
data: {
text:
`
<div class="container">
    <h2 class="title fade-in">Don't blindly accept your limits.<br>With fēnix 8, you can be limitless.</h2>
    <div class="all-items fade-in">
        <a href="#voice" data-ga-title="overview-voice" class="item show-item">
            <div class="main">
                <p>Upgraded voice control <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg></p>
                <img src="images/overview-01.png" alt="" class="pc-show">
                <img src="images/overview-01-m.png" alt="" class="mobile-show">
            </div>
        </a>
        <!-- 四項 -->
        <div class="four-items">
            <!-- 一項 -->
            <a href="#training" data-ga-title="overview-training">
                <div class="one item training show-item">
                    <p>Sport - Specific <br>Training Plan <br>Integration <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg> </p>
                    <img data-src="images/overview-02.png" alt="" class="lazyload ">
                </div>
            </a>
            <!-- 三項 -->
            <div class="three">
                <a href="#outdoor" data-ga-title="overview-outdoor" class="item show-item">
                    <div class="one-big ">
                        <p>Ultra-prepared, race-ready！<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg></p>
                        <img data-src="images/overview-03.png" alt="" class="lazyload">
                    </div>
                </a>
                <a href="#sports" data-ga-title="overview-sports" class="item sports show-item">
                    <div class="one-small ">
                        <p>Dive Activity / 100+ Sports Modes<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg></p>
                        <img src="images/overview-04.png" alt="" class="pc-show">
                        <img src="images/overview-04-m.png" alt="" class=" mobile-show">
                    </div>
                </a>
                <a href="#health" data-ga-title="overview-health" class="item show-item">
                    <div class="one-small">
                        <p>ECG App<br>Health Monitoring
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg></p>
                        <img data-src="images/overview-05.png" alt="" class="lazyload">
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
`
}
})
var featureItem = new Vue({
el: '#design',
data: {
text: `
<div class="title">
    <h2>Design & Materials</h2>
    <p>Elegantly crafted with a titanium alloy bezel and sapphire glass, featuring a dual-tone metallic contrast that seamlessly blends different materials.Perfectly suited for both business and adventure.</p>
</div>
<div class="container">
   
    <div class="content-01">
        <div class="alltext-01">
            <div class="line"></div>
            <div class="text-01">
                <h3>DUAL MICROPHONES</h3>
                    <p>Built-in dual microphones – by analyzing the similarity and differences in received signals, our algorithm effectively removes environmental background noise, capturing crystal clear and detailed audio.</p>
            </div>
        </div>
        <div class="alltext-01-2">
            <div class="line-01-2"></div>
            <div class="text-01-2">
                <h3>Speaker</h3>
            </div>
        </div>
    </div>
    <!-- 分項 -->
    <div class="content-02">
        <div class="alltext-02">
            <div class="line-02"></div>
            <div class="text-02">
                <h3>SENSOR GUARD</h3>
                <p>Enhance the protection of the watch's internal sensors to strengthen water resistance.</p>
            </div>
        </div>
        <div class="alltext-03">
            <div class="line-03"></div>
            <div class="text-03">
                <h3>Dive Watch-Grade Inductive Button</h3>
                <p>Water pressure-resistant and leak-proof design. Unibody construction with precise tactile feedback.</p>
            </div>
        </div>
    </div>
    <div class="bg"></div>
    `
    }
    })
    var featureItem = new Vue({
    el: '#voice',
    data: {
    text:
    `
    <div class="container">
        <div class="text">
            <h2>Speak to it!</h2>
            <h3>Voice Command｜Phone Assistant｜Voice Notes</h3>
        </div>
    </div>
    <div id="pin-container" class="pc">
        <div class="panel voice-command" id="panel1">
            <div class="video scroll-play">
                <video playsinline autoplay loop muted style="min-width:100%; min-height:100%; z-index: 1" class="lazyload" id="show-video">
                    <source src="video/voice-listen.mp4" type='video/mp4' />
                </video>
            </div>
            <div class="text">
                <img src="images/voice-icon-01.png" alt="">
                <h2>Voice Command</h2>
                <p>Phone-free voice commands for you to easily activate running records, set alarms for the next morning, or turn on the flashlight, making your experience seamless and convenient</p>
            </div>
        </div>
        <div class="panel voice-control" id="panel2">
            <div class="video scroll-play">
                <video playsinline autoplay loop muted style="min-width:100%; min-height:100%; z-index: 1" class="lazyload" id="show-video">
                    <source src="video/voice-control.mp4" type='video/mp4' />
                </video>
            </div>
            <div class="text">
                <img src="images/voice-icon-02.png" alt="">
                <h2>Phone Assistant</h2>
                <p>Supports multiple communication apps! Enjoy the convenience of making and receiving phone calls directly from your watch. Use the voice assistant to send text messages and manage daily tasks effortlessly.</p>
            </div>
        </div>
        <div class="panel voice-command" id="panel3">
            <div class="video scroll-play">
                <video playsinline autoplay loop muted style="min-width:100%; min-height:100%; z-index: 1" class="lazyload" id="show-video">
                    <source src="video/voice-memo.mp4" type='video/mp4' />
                </video>
            </div>
            <div class="text">
                <img src="images/voice-icon-03.png" alt="">
                <h2>VOICE NOTES</h2>
                <p>Record your outdoor passion with your voice</p>
            </div>
        </div>
    </div>
    `
    }
    })
    var featureItem = new Vue({
    el: '#training',
    data: {
    text:
    `
    <div class="container ">
        <div class="text fade-in">
            <h2>Be Prepared to Unshackle Limits</h2>
            <p>Integrates with Firstbeat Analytics, a world-renowned physiological data analytics team, to provide you with more detailed performance insights through sports science and physiological data! Garmin Coach creates specialized workouts tailored to your goals, helping you plan ahead and be fully prepared!</p>
        </div>
        <img data-src="images/training-product.png" alt="" class="lazyload product">
        <div class="all-text fade-in">
            <div class="text">
                <h2>Sport-Specific Strength Workouts</h2>
                <p>
                    Sport-specific strength workouts target specific muscle groups for different sports.Help train the corresponding muscles progressively. 
                    (On Garmin Connect, select the sport you want to train for and the specific workouts will be sent to your watch. )
                </p>
            </div>
            <div class="text">
                <h2>Strength Training Plans</h2>
                <p>Comprehensive weight and body weight training plans.Whether it's weight training or body weight training, you can always find the training plans you need on Garmin Connect.</p>
            </div>
        </div>
    </div>
    <div class="bg-app"></div>
    `
    }
    })
    var featureItem = new Vue({
    el: '#outdoor',
    data: {
    text:
    `
    <div class="container">
        <div class="title fade-in">
            <h2>Make your plans ahead of changes</h2>
            <p>Anticipate and simulate every detail of the competition. Once on the field, simply follow your instincts, conquer effortlessly, and enjoy every thrilling moment</p>
        </div>
        <div class="content-01 fade-in">
            <div class="up-ahead">
                <div class="bg"></div>
                <div class="text">
                    <h2>Up Ahead</h2>
                    <p>Plan your route with details like aid stations, rest stops, checkpoint distances, and estimated finish time—right at your fingertips</p>
                </div>
            </div>
            <div class="drop-course-point">
                <div class="bg"></div>
                <div class="text">
                    <h2>SAVE LOCATION</h2>
                    <p>Easily mark location along the route! The saved location will appear directly on the map for easy reference and better navigation.</p>
                </div>
            </div>
        </div>
        <div class="content-02 fade-in">
            <div class="climb-pro">
                <div class="text">
                    <h2>Climb Pro</h2>
                    <p>Climb information at a glance! View current and upcoming climbs in real time.</p>
                    <img data-src="images/prodoct-climbpro.png" alt="" class="watch lazyload">
                </div>
            </div>
            <div class="pace-pro">
                <div class="text">
                    <h2>Pace Pro</h2>
                    <p>Plan your pace strategically with Pace Pro to achieve your goal for the race!</p>
                    <img data-src="images/prodoct-pacepro.png" alt="" class="watch lazyload">
                </div>
            </div>
        </div>
    </div>
    `
    }
    })
    var featureItem = new Vue({
    el: '#flashlight',
    data: {
    text:
    `
    <div class="container">
        <div class="text fade-in">
            <h2>Even Brighter LED Flashlight</h2>
            <p>Utilizing every inch of available space, super bright LED module now in all models.Supports red and white light with multiple flash modes and SOS signals, enhancing safety and convenience in low-light conditions.<br>
            
            </p>
        </div>
    </div>
    <div class="bg"></div>
    <img src="images/light.png" alt="" class="light" >
    <img src="images/prodoct-flashlight.png" alt="" class="watch">
    <img src="images/button.png" alt="" class="button" >
    
    `
    }
    })
    var featureItem = new Vue({
    el: '#sports',
    data: {
    text:
    `
    <div class="shadow"></div>
    <div class="container">
        <div class="title">
            <h2>Discover the Depths of Adventure</h2>
        </div>
        <div class="subtitle">
            <h3>New Recreational<br>Diving Mode Supports <br>Depths up to</h3>
            <h2>40M</h2>
            <!-- <h3 class="h3-2">精彩可期</h3> -->
        </div>
    </div>
    <div class="bg"></div>
    <div class="container-2">
        <div class="all-text">
            <div class="title">
                <h3>Explore More Widely with <span class="blue">100＋</span> Sports Modes</h3>
            </div>
            <div class="all-category">
                <div class="category">
                    <img src="images/sport-icon-01.png" alt="" class="icon">
                    <div class="text">
                        <h3>Outdoor Pros</h3>
                        <p>Diving, Trail Running, Mountaineering, Surfing, Skiing, Rock Climbing, Archery</p>
                    </div>
                </div>
                <div class="category">
                    <img src="images/sport-icon-02.png" alt="" class="icon">
                    <div class="text">
                        <h3>Team Spirit</h3>
                        <p>Baseball, Basketball, Football (Soccer), Squash</p>
                    </div>
                </div>
                <div class="category">
                    <img src="images/sport-icon-03.png" alt="" class="icon">
                    <div class="text">
                        <h3>Extreme Sports</h3>
                        <p>BMX, Water Skiing, Obstacle Running</p>
                    </div>
                </div>
                <div class="category">
                    <img src="images/sport-icon-04.png" alt="" class="icon">
                    <div class="text">
                        <h3>Urban Fitness</h3>
                        <p>HIIT, Pilates, Yoga, Boxing</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    }
    })
    var featureItem = new Vue({
    el: '#map',
    data: {
    text:
    `
    <h2>Explore the World with Global Dynamic Navigation</h2>
    <div class="container fade-in">
        <img src="images/dynamic-map-product.png" alt="" class="product">
        <div class="dynamic-round-trip ">
            <div class="text">
                <h2>
                    Dynamic Round Trip</h2>
                <p>Explore Freely, Return Safely.Select your distance and explore freely.Your watch will provide dynamic navigation according to your current route.Put the finish point of your training at the starting point</p>
            </div>
        </div>
    </div>
    <div class="container-2 fade-in">
        <div class="all-text">
            <div class="map-01">
                <div class="text">
                    <h2>A Rich Collection of Free Maps</h2>
                    <p>Select the map layers you need with one touch, including contours, Segments, Spot Soundings and more.Built-in golf courses x ski resorts maps plus free Topo maps via download.</p>
                </div>
            </div>
            <div class="map-02">
                <div class="text">
                    <h2>Multi-Band GNSS</h2>
                    <p>Supports multiple satellite positioning systems (GPS,  GLONASS and Galileo).Supports multi-band (L1 and L5 frequencies), greatly improving positioning speed and accuracy</p>
                </div>
            </div>
        </div>
        <div class="watch-change">
            <div class="ui">
                <img src="images/map-01.png" alt="" class="watchui">
                <img src="images/map-02.png" alt="" class="watchui">
                <img src="images/map-03.png" alt="" class="watchui">
                <img src="images/map-04.png" alt="" class="watchui">
            </div>
            <img src="images/product-map.png" alt="" class="product">
        </div>
    </div>
    `
    }
    })
    var featureItem = new Vue({
    el: '#share',
    data: {
    text:
    `
    <div class="title">
        <h2>TOGETHER,<br>EXPLORE MORE！</h2>
        <p>Great teammates create the best scenery. Our new team features ensure every outing is safer and more enjoyable. Join us and enhance your adventures with the support of the Garmin community.</p>
    </div>
    <div class="container">
        <div class="text">
            <h2>Garmin Share</h2>
            <p>Share your activity routes, important location information and training plans in real time<br>
            Quickly share your private routes with your friends without the need to pair with your phone first. </p>
        </div>
    </div>
    <div class="bg"></div>
    `
    }
    })
    var featureItem = new Vue({
    el: '#message-app',
    data: {
    text:
    `
    <div class="container">
        <div class="text fade-in">
            <img data-src="images/garmin-message-app.png" alt="" class="lazyload icon">
            <h2>Garmin Messenger app</h2>
            
            <p>Easily connect with your friends: Share your training results, activity routes and current location information.</p>
            <!-- <a class="btn-white-fill btn-size-default" href="#message-app" data-ga-title="message-app">Learn More</a> -->
        </div>
    </div>
    `
    }
    })
    var featureItem = new Vue({
    el: '#health',
    data: {
    text:
    `
    <div class="container-top">
        <div class="text">
            <h2>Manage Health,<br>24/7 Big-Data Analysis</h2>
            <p>Tracks key health metrics such as heart rate, blood oxygen, stress, sleep, calories, and Body Battery.</p>
            <p class="small">*Supports exclusive women's health features, such as menstrual cycle and pregnancy tracking.</p>
        </div>
        <img data-src="images/product-health.png" alt="" class="lazyload product">
    </div>
    <div class="container">
        <div class="swiper mySwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide card__one">
                    <div class="all">
                        <img data-src="images/health-bg01.jpg" alt="" class="lazyload pc-show">
                        <img data-src="images/health-bg01-m.png" alt="" class="lazyload mobile-show">
                        <div class="text">
                            <div class="tag">&nbsp;</div>
                            <h2>Garmin ECG App</h2>
                            <p>In just 30 seconds, you can record your heart rate and check for signs of atrial fibrillation (AFib) or normal sinus rhythm.</p>
                            <a class="btn-black-fill btn-size-default" href="#health" data-ga-title="health-ecg">Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide bg03 card__one">
                    <div class="all">
                        <img data-src="images/health-bg04.jpg" alt="" class="lazyload pc-show">
                        <img data-src="images/health-bg04-m.png" alt="" class="lazyload mobile-show">
                        <div class="text">
                            <div class="tag">&nbsp;</div>
                            <h2>Sleep Tracking</h2>
                            <p>Sleep monitoring technology analyzes heart rate, HRV, blood oxygen, respiration and activity level data. Every night, you go through different sleep stages that alternate in cyclic waves: light sleep, deep sleep and REM (Rapid Eye Movement) sleep.</p>
                            <a class="btn-black-fill btn-size-default" href="#health" data-ga-title="health-sleep-tracking">Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide bg02 card__one">
                    <div class="all">
                        <img data-src="images/health-bg02.jpg" alt="" class="lazyload pc-show">
                        <img data-src="images/health-bg02-m.png" alt="" class="lazyload mobile-show">
                        <div class="text">
                            <div class="tag">＃KeyToTheSummit</div>
                            <h2>All-Day Blood Oxygen Sensing</h2>
                            <p>Monitoring your blood oxygen fluctuations day and night is a key to evaluating your readiness for high-altitude challenges. Check your fitness status in real time to be better prepared for your alpine adventures.</p>
                            <a class="btn-black-fill btn-size-default" href="#health" data-ga-title="health-pulse-ox">Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide bg03 card__one">
                    <div class="all">
                        <img data-src="images/health-bg03.jpg" alt="" class="lazyload pc-show">
                        <img data-src="images/health-bg03-m.png" alt="" class="lazyload mobile-show">
                        <div class="text">
                            <div class="tag"># UnlockYourPotential</div>
                            <h2>Analyzing your heart rate variability (HRV)</h2>
                            <p>HRV is a key index for professional athletes, who can rely on HRV to avoid over-training or injuries and be reminded to relax during heightened stress, allowing them to reach their fullest potential.</p>
                            <a class="btn-black-fill btn-size-default" href="#health" data-ga-title="health-hrv">Learn More</a>
                        </div>
                    </div>
                </div>
                
                <div class="swiper-slide bg03 card__one">
                    <div class="all">
                        <img data-src="images/health-bg05.jpg" alt="" class="lazyload pc-show">
                        <img data-src="images/health-bg05-m.png" alt="" class="lazyload mobile-show">
                        <div class="text">
                            <div class="tag">&nbsp;</div>
                            <h2>BODY BATTERY</h2>
                            <p>Body Battery energy monitoring makes the combined influences of physical activity, stress, rest and the restorative power of sleep visible in a powerful way. </p>
                            <a class="btn-black-fill btn-size-default" href="#health" data-ga-title="health-body-battery">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
    <div class="link">
        <a class="" href="#health" data-ga-title="more-health-tech">
            <h2 class="fade-in">More Health Technology > </h2>
        </a>
    </div>
    `
    }
    })
    var featureItem = new Vue({
    el: '#smartlife',
    data: {
    text:
    `
    <div class="container">
        <div class="text">
            <h2 class="fade-in">Smart Tech Makes the Outdoors <br>More Accessible Than Ever</h2>
            
            <div class="white-group fade-in">
                <div class="white">
                    <img data-src="images/icon-pay.png" alt="" class="lazyload">
                    <h3>Garmin Pay</h3>
                    <p><span class="small">Contactless Cards / Mobile Payments</span> </p>
                </div>
                <div class="white">
                    <img data-src="images/icon-notification.png" alt="" class="lazyload">
                    <h3>Smart notifications</h3>
                    <p>Connected with important messages from your phone in real-time.</p>
                </div>
                <div class="white">
                    <img data-src="images/icon-jetlag.png" alt="" class="lazyload">
                    <h3>Jet Lag Adviser</h3>
                    <p>Get advice on light exposure, sleep and exercise.<br>
                        <span class="small">(Requires Garmin Connect)</span>
                    </p>
                </div>
                <div class="white">
                    <img data-src="images/icon-find.png" alt="" class="lazyload">
                    <h3>Find my phone</h3>
                    <p>Automatically Locating a Phone Lost During a GPS Activity</p>
                </div>
                <div class="white">
                    <img data-src="images/icon-accident.png" alt="" class="lazyload">
                    <h3>Incident Detection</h3>
                    <p>Assistance Alerts</p>
                </div>
                <div class="white">
                    <img data-src="images/icon-music.png" alt="" class="lazyload">
                    <h3>Take Your Favorite Music on the Go</h3>
                    <p>Youtube premium / spotify</p>
                </div>
            </div>

        </div>
    </div>
    `
    }
    })
    var featureItem = new Vue({
    el: '#bands',
    data: {
    text:
    `
    <div class="container">
        <div class="text fade-in">
            <h2>Elevate your look with interchangeable watch straps to complement your suit and seasonal styles</h2>
            <p>The QuickFit band can be quickly removed without the need for tools; it comes in leather, titanium, nylon weave, and silicone, so it can be freely and easily  matched with your individual style.</p>
        </div>
    </div>
    `
    }
    })
    var spec = new Vue({
    el: '#spec',
    data: {
    tbody: `
    <tr class="main">
        <td class="row-label"></td>
        <td class="text">AMOLED</td>
        <td class="text">Solar Charging<br><span class="small">Sunlight-visible, transflective memory-in-pixel (MIP)</span></td>
    </tr>
    <tr>
        <td class="row-label">Display resolution</td>
        <td class="text" style="text-align: left;">
            <ul>
                <li>51mm / 47mm<br>
                    <span>1.4” (454 x 454 Pixels)</span></li>
                <li>43mm<br>
                    <span>1.3” (416 x 416 Pixels)</span></li>
            </ul>
        </td>
        <td class="text" style="text-align: left;">
            <ul>
                <li>51mm<br>
                    <span>1.4” (280 x 280 Pixels)</span></li>
                <li>47mm<br>
                    <span>1.3”(260 x 260 Pixels)</span></li>
            </ul>
        </td>
    </tr>
    <tr>
        <td class="row-label">Physical size</td>
        <td class="text" style="text-align: left;">
            <ul>
                <li>51mm <br>
                    <span>51 x 51 x14.7mm</span></li>
                <li>47mm<br>
                    <span>47x 47x 13.8mm</span></li>
                <li>43mm<br>
                    <span>43x 43x 13.8mm</span></li>
            </ul>
        </td>
        <td class="text" style="text-align: left;">
            <ul>
                <li>51mm <br>
                    <span>51 x 51x 15.4mm</span></li>
                <li>43mm<br>
                    <span>47 x 47x 15.2mm</span></li>
            </ul>
        </td>
    </tr>
    <tr>
        <td class="row-label">Weight</td>
        <td class="text" style="text-align: left;">
            <ul>
                <li>51mm<br>
                    <span>92g（case only 64g）</span></li>
                <li>47mm<br>
                    <span>73g（case only 52g）</span></li>
                <li>43mm<br>
                    <span>stainless steel 66g（case only 50g）<br>
                    titanium 60g（case only 44g）</span></li>
            </ul>
        </td>
        <td class="text" style="text-align: left;">
            <ul>
                <li>51mm<br>
                    <span>95g（case only 67g）</span></li>
                <li>47mm<br>
                    <span>80g（case only 57g）</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td class="row-label">Quickfit watch band compatible</td>
        <td class="text" style="text-align: left;">
            <ul>
                <li>51mm：<span>26mm</span></li>
                <li>47mm：<span>22mm</span></li>
                <li>43mm：<span>20mm</span></li>
            </ul>
        </td>
        <td class="text" style="text-align: left;">
            <ul>
                <li>51mm：<span>26mm</span></li>
                <li>47mm：<span>22mm</span></li>
            </ul>
        </td>
    </tr>
    <tr>
        <td class="row-label">Lens material</td>
        <td class="text">Sapphire Crystal</td>
        <td class="text">Sapphire Crystal</td>
    </tr>
    <tr>
        <td class="row-label">Bezel material</td>
        <td class="text">Titanium / stainless steel</td>
        <td class="text">Titanium</td>
    </tr>
    <tr>
        <td class="row-label">Water rating</td>
        <td class="text">10 ATM</td>
        <td class="text">10 ATM</td>
    </tr>
    <tr>
        <td class="row-label">Memory</td>
        <td class="text">32 GB</td>
        <td class="text">32 GB</td>
    </tr>
    <tr>
        <td class="row-label">Leakproof inductive buttons</td>
        <td class="dot">•</td>
        <td class="dot">•</td>
    </tr>
    <tr>
        <td class="row-label">Dual microphone & Speaker</td>
        <td class="dot">•</td>
        <td class="dot">•</td>
    </tr>
    <tr>
        <td class="row-label">Dynamic round trip</td>
        <td class="dot">•</td>
        <td class="dot">•</td>
    </tr>
    <tr>
        <td class="row-label">Quick map layer selection</td>
        <td class="dot">•</td>
        <td class="dot">•</td>
    </tr>
    <tr>
        <td class="row-label">Garmin share</td>
        <td class="dot">•</td>
        <td class="dot">•</td>
    </tr>
    <tr>
        <td class="row-label">Messenger APP</td>
        <td class="dot">•</td>
        <td class="dot">•</td>
    </tr>
    <tr>
        <td class="row-label">Rec dive</td>
        <td class="dot">•</td>
        <td class="dot">•</td>
    </tr>
    <tr>
        <td class="row-label">ABC Sensors</td>
        <td class="dot">•</td>
        <td class="dot">•</td>
    </tr>
    <tr>
        <td class="row-label">Built in led flashlight</td>
        <td class="dot">•</td>
        <td class="dot">•</td>
    </tr>
    <tr>
        <td class="row-label">Multisports</td>
        <td class="dot">•</td>
        <td class="dot">•</td>
    </tr>
    <tr>
        <td class="row-label">Garmin ECG</td>
        <td class="dot">•</td>
        <td class="dot">•</td>
    </tr>
    <tr>
        <td class="row-label">Heart Rate Variability</td>
        <td class="dot">•</td>
        <td class="dot">•</td>
    </tr>
    <tr>
        <td class="row-label">Pulse Ox</td>
        <td class="dot">•</td>
        <td class="dot">•</td>
    </tr>
    <tr>
        <td class="row-label">Sleep Score and insights</td>
        <td class="dot">•</td>
        <td class="dot">•</td>
    </tr>
    <tr>
        <td class="row-label">Smart notifications</td>
        <td class="dot">•</td>
        <td class="dot">•</td>
    </tr>
    <tr>
        <td class="row-label">Garmin Pay</td>
        <td class="dot">•</td>
        <td class="dot">•</td>
    </tr>
    <tr>
        <td class="row-label">Battery life<span style="color: #777777;">（Up to）</span></td>
        <td class="text">
            <!-- 51mm -->
            <div class="flip7 battery-title" data-ga-title="amoled-battery-51mm">
                <span class="1">51mm
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#000000" viewBox="0 0 24 24">
                        <path d="M12 21l-12-18h24z" /></svg>
                </span>
            </div>
            <div class="panel7 battery-content">
                <ul>
                    <li>Smartwatch mode：29days</li>
                    <li>GPS Only mode：84hours</li>
                    <li>Expedition GPS mode：31days</li>
                    <!-- <li>最大電量模式：31days</li> -->
                </ul>
            </div>
            <!-- 47mm -->
            <div class="flip2 battery-title" data-ga-title="amoled-battery-47mm">
                <span class="1">47mm
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#000000" viewBox="0 0 24 24">
                        <path d="M12 21l-12-18h24z" /></svg>
                </span>
            </div>
            <div class="panel2 battery-content">
                <ul>
                    <li>Smartwatch mode：16days</li>
                    <li>GPS Only mode：47hours</li>
                    <li>Expedition GPS mode：17days</li>
                    <!-- <li>最大電量模式：17days</li> -->
                </ul>
            </div>
            <!-- 43mm -->
            <div class="flip3 battery-title" data-ga-title="amoled-battery-43mm">
                <span class="1">43mm
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#000000" viewBox="0 0 24 24">
                        <path d="M12 21l-12-18h24z" /></svg>
                </span>
            </div>
            <div class="panel3 battery-content">
                <ul>
                    <li>Smartwatch mode：10days</li>
                    <li>GPS Only mode：28hours</li>
                    <li>Expedition GPS mode：10days</li>
                    <!-- <li>最大電量模式：10days</li> -->
                </ul>
            </div>
        </td>
        <!-- SOLAR -->
        <td class="text">
            <div class="flip4 battery-title" data-ga-title="solar-battery-51mm">
                <span class="1">51mm
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#000000" viewBox="0 0 24 24">
                        <path d="M12 21l-12-18h24z" /></svg>
                </span>
            </div>
            <div class="panel4 battery-content">
                <ul>
                    <li>Smartwatch mode：48days<sup>*</sup></li>
                    <li>GPS Only mode：149hours<sup>**</sup></li>
                    <li>Expedition GPS mode：118days<sup>*</sup></li>
                    <!-- <li>最大電量模式：134days</li> -->
                </ul>
            </div>
            <div class="flip5 battery-title" data-ga-title="solar-battery-47mm">
                <span class="1">47mm
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#000000" viewBox="0 0 24 24">
                        <path d="M12 21l-12-18h24z" /></svg>
                </span>
            </div>
            <div class="panel5 battery-content">
                <ul>
                    <li>Smartwatch mode：28days<sup>*</sup></li>
                    <li>GPS Only mode：92hours<sup>**</sup></li>
                    <li>Expedition GPS mode：58days<sup>*</sup></li>
                </ul>
            </div>
        </td>
    </tr>
    `
    }
    })