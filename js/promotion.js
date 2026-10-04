$(function () {
    for (
        var t = $("html").attr("lang").toLowerCase(),
            o = "en",
            r = ["tw", "cn", "jp", "kr", "th", "id", "vn"],
            e = { en: "Buy Now", tw: "立即購買", cn: "立即购买", jp: "購入する", kr: "구매하기", th: "สั่งซื้อตอนนี้", id: "Belanja sekarang", vn: "Mua ngay" },
            a = 0,
            i = r.length;
        a < i;
        a++
    )
        if (-1 != t.indexOf(r[a]) || -1 != window.location.origin.toLowerCase().indexOf(r[a])) {
            o = r[a];
            break;
        }
    $("dl.color-con dd").each(function () {
        var t = $(this).attr("data-sn"),
            r = $(this).attr("data-color"),
            a = $(this).index(),
            i = $(this).parents().eq(2).find("img").eq(a).attr("alt");
        $(this)
            .css("background-color", r)
            .attr("data-ga-title", "color - " + i);
        r = "";
        (r += "<div>"),
            (r += '<a href="#spec" data-ga-title="' + i + '" class="cta-button dark normal learn-more">' + e[o] + "</a>"),
            (r += "</div>"),
            $(this).parents().eq(2).find(".price-con").append(r),
            $(this).hasClass("active") && $(this).parents().eq(2).find(".price-con>div").eq(a).addClass("active");
    }),



    prices = {};
    pricesTax = {};
    currencyFormat = "";
    var location = $('html').attr('data-locale').toLowerCase();
    var _buy_country = location.substr(-2);
    var G_exclude = "";
    var G_products = [];
    var G_api = "";


    $(".products .color-con>*").each(function() {
        var _this_sn = $(this).data("sn");
        if (_this_sn == "000-00000-00") {
            $(this).remove();
        } else {
            G_products.push(_this_sn);
        }
    });

    function applyPrices() {
        $("#spec thead td").each(function(){
            var thisSn = $(this).find(".color-con>*.active").attr("data-sn");
            var pPrice = currencyFormat + " " +  prices[thisSn];
            var pPriceTax = currencyFormat + " " + pricesTax[thisSn];

            if ( thisSn in prices ){
                if (_buy_country === "jp") {
                    $(this).find(".sale-price span").html(pPrice + " <small class='priceTax'>(税込 " + pPriceTax + ")</small>");
                } else if (_buy_country === "vn") {
                    $(this).find(".sale-price span").html(pPrice + " <small>(Bao gồm VAT)</small>");
                }else{
                    $(this).find(".sale-price span").html( pPrice );
                }
            }else{
                $(this).find(".sale-price span").text("");
            }
        });


        $("dl.color-con dd").click(function(){
            var thisSn = $(this).attr("data-sn");
            var pPrice = currencyFormat + " " +  prices[thisSn];
            var pPriceTax = currencyFormat + " " + pricesTax[thisSn];

            if ( thisSn in prices ){
                if ( _buy_country === "jp" ){
                    $("#spec .products.active .promo-product .sale-price span").html(pPrice + " <small class='priceTax'>(税込 " + pPriceTax + ")</small>");
                }else if ( _buy_country === "vn" ){
                    $("#spec .products.active .promo-product .sale-price span").html( pPrice + " <small>(Bao gồm VAT)</small>" );
                }else{
                    $("#spec .products.active .promo-product .sale-price span").html( pPrice );
                }
            }else{
                $("#spec .products.active .promo-product .sale-price span").text("");
            }
        });
    }

    if (G_api) {
        $.ajax({
            type: "GET",
            url: G_api + "?gpns="+ G_products.toString()+ "&country=" + _buy_country ,
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "minisite",
            cache: !0,
            success:function(data) {
                var _isOK = data.status;
                if (_isOK) {
                    $.each(data.products, function(i, item) {
                        if (typeof item.gpn != "undefined" && item.gpn) {
                            if (typeof item.price != "undefined" && item.price){
                                if (typeof item.priceTax != "undefined" && item.priceTax) {
                                    if (typeof item.pricePromotionTax != "undefined" && item.pricePromotionTax) {
                                        prices[item.gpn] = parseFloat(item.pricePromotion).toLocaleString();
                                        pricesTax[item.gpn] = parseFloat(item.pricePromotionTax).toLocaleString();
                                    } else {
                                        prices[item.gpn] = parseFloat(item.price).toLocaleString();
                                        pricesTax[item.gpn] = parseFloat(item.priceTax).toLocaleString();
                                    }
                                }
                                if (typeof item.currencyFormat != "undefined") {
                                    currencyFormat = item.currencyFormat;
                                }
                            }
                        } else {
                            console.log("missing data");
                        }
                    });
                }
            }
        }).done(applyPrices);
    } else {
        applyPrices();
    }


    $("dl.color-con dd").click(function () {
        var thisEq = $(this).index();

        $(this).parent().find('dd').removeClass('active');
        $(this).parents().eq(2).find('.products-image').attr('style', '').removeClass('active');
        $(this).parents().eq(2).find('.size-con>p').removeClass('active');
        $(this).parents().eq(2).find('.price-con>div').removeClass('active');
        $(this).parents().eq(2).find(".series-name span").removeClass("active")

        $(this).addClass('active');
        $(this).parents().eq(2).find('.products-image').eq( thisEq ).fadeIn();
        $(this).parents().eq(2).find('.size-con>p').eq( thisEq ).addClass('active').addClass('size');
        $(this).parents().eq(2).find('.price-con>div').eq( thisEq ).addClass('active');
        $(this).parents().eq(2).find(".series-name span").eq(thisEq).addClass("active");
    });
});
