
var config = {
    root: 'http://api.shuicheche.com/', //服务器
    // root: 'http://192.168.0.65:8080/', //服务器

    webroot: "", //网址地址(调试模式下的地址前缀)
    base: '', //线上
    baseimg: '', //线上
    isTest: false,
    SLTest: false,

    SLShareBase: 'http://app.shuicheche.com/',

    ossroot: 'http://shuicheche.oss-cn-hangzhou.aliyuncs.com/',
    appOss: '/common/oss/app/getUploadToken',
    pagesize: 10,
    appName: '全民瓜分',
    notDeal: false,
}



{
    (function () {
        // if (location.href.indexOf('192.168')>-1 || Comm.db('BD')>1 || Comm.isweixin()) {
        if (location.href.indexOf('192.168')>-1 || Comm.db('BD')>1) {
            config.isTest = true;
            config.SLTest = true;
        }


        if (Comm.isweixin()){
            $('.wxShow').show();
            $('.wxHide').hide();
            // wx.hideOptionMenu();
        }

    })();
}






function SLDebuggerPageRoot(root) {
    Comm.db('root', root ? root : null);
    location.reload();
}




var UserJWD = new function () {

    this.lng = function () {
        var JWD = this.JWD();
        return JWD.lng || '104.07';
    }

    this.lat = function () {
        var JWD = this.JWD();
        return JWD.lat || '30.67';
    }

    this.dis = function () {
        var JWD = this.JWD();
        return JWD.dis || '武侯区';
    }

    this.aid = function () {
        var JWD = this.JWD();
        return JWD.aid || '510107';
    }

    this.hasGetPosition = function () {
        var JWD = this.JWD();
        if (JWD.code == 1 || JWD.code == 2) {
            return true;
        }
        return false;
    }

    this.saveJWDValue = function (obj) {
        Comm.db('JWD', obj);
    }

    this.updateJWDValue = function (obj) {
        var JWD = this.JWD();
        JWD.lat = obj.lat;
        JWD.lng = obj.lng;
        Comm.db('JWD', JWD);
    }

    this.JWD = function () {
        var JWD = Comm.db('JWD') || {};
        JWD.lat = JWD.lat || this.defaultJWD().lat;
        JWD.lng = JWD.lng || this.defaultJWD().lng;
        JWD.dis = JWD.dis || this.defaultJWD().dis;

        return JWD;
    }


    this.defaultJWD = function () {
        var JWD =  {};
        JWD.lat = JWD.lat || 30.632531;
        JWD.lng = JWD.lng || 104.044401;
        JWD.dis = JWD.dis || '武侯区';

        return JWD;
    }

}


/*app 公用方法处理器*/
var app = new function () {
    /*密码框切换显示和关闭*/
    /*o 参数是点击图片*/
    /*调用 app.checkimg(this)*/
    this.checkimg = function (o) {
        if (o.src.indexOf("eye_y") >= 0) {
            o.src = "img/generalIcon/eye_n.png"
            $(o).parent().parent().find("input[type='text']").attr("type", "password")
        } else {
            o.src = "img/generalIcon/eye_y.png"
            $(o).parent().parent().find("input[type='password']").attr("type", "text")
        }
    };

    /*发送验证码公用方法*/
    /*o 点击发送验证码按钮*/
    /*phone 发送短信手机号*/
    /*type 验证码类型*/
    /*imgcode 图片验证码，可不传*/
    /*调用 app.timeCountDown(this,15928877394,1,5421)*/
    //按钮倒计时
    var wait = 60,
        timeCountDownclick = true;
    waitTime = 4;
    wait = waitTime;
    this.timeCountDown = function (o, phone, type, imgcode, cb) {
        imgcode = imgcode == undefined ? '' : imgcode;
        if (!phone) {
            Comm.message("请输入手机号");
            return;
        }
        var reg = /^1\d{10}$/;
        if (phone && !reg.test(phone)) {
            Comm.message("手机格式错误");
            return;
        }

        if (timeCountDownclick) {
            timeCountDownclick = false;
            o.setAttribute("disabled", true);
            AJAX.GET('/api/customer/loginSendMsg?phone=' + phone + '&type=' + type + "&imgcode=" + imgcode, function (d) {
                if (d.code == 1 || d.code == 2) {
                    cb && cb(d.code)
                    Comm.message('短信已发送，请注意查收');
                    var i = setInterval(function () {
                        if (wait == 0) {
                            o.removeAttribute("disabled");
                            o.innerText = "重新发送";
                            o.style.color = 'white';
                            o.classList.remove('bg_disable');
                            o.classList.add('bg_trans');
                            wait = 60;
                            clearInterval(i);
                        } else {
                            o.style.color = 'black';
                            o.classList.remove('bg_trans');
                            o.classList.add('bg_disable');
                            o.innerText = wait + '秒后重发';
                            // o.style.background = '#E4E4E4';
                            wait--;

                        }
                    }, 1000);
                    o.style.color = 'black';
                    // o.style.background = '#E4E4E4';
                    o.classList.remove('bg_trans');
                    o.classList.add('bg_disable');
                } else {
                    o.removeAttribute("disabled");
                    Comm.message(d.msg);
                }
                timeCountDownclick = true;
            });
        }
    };

    /* 去掉字符串首位空格 */
    this.trim = function (s) {
        return s.replace(/(^\s*)|(\s*$)/g, "");
    };

    //验证是否登录
    this.isLogin = function () {
        var user = Comm.db('userinfo');
        var token = Comm.db('_token');
        if ((!user || !token)) {
            return false;
        }
        return true;
    };
    //验证是否登录，并且提示登录
    this.checkIslogin = function (show, url) {
        var user = Comm.db('userinfo');
        if ((!user)) {
            if (show == true) {

            }
            return false;
        }

        return true;
    };

    //处理时间函数
    this.formatDate = function (timestamp, formats) {
        // formats格式包括
        // 1. Y-m-d
        // 2. Y-m-d H:i:s
        // 3. Y年m月d日
        // 4. Y年m月d日 H时i分
        formats = formats || 'Y-m-d';

        var zero = function (value) {
            if (value < 10) {
                return '0' + value;
            }
            return value;
        };

        if (typeof (timestamp) == typeof ("")) {
            timestamp = timestamp.replace(/-/g, "/").replace(/\.0/g, "")
        }

        var myDate = timestamp ? new Date(timestamp) : new Date();

        var year = myDate.getFullYear();
        var month = zero(myDate.getMonth() + 1);
        var day = zero(myDate.getDate());

        var hour = zero(myDate.getHours());
        var minite = zero(myDate.getMinutes());
        var second = zero(myDate.getSeconds());

        return formats.replace(/Y|m|d|H|i|s/ig, function (matches) {
            return ({
                Y: year,
                m: month,
                d: day,
                H: hour,
                i: minite,
                s: second
            })[matches];
        });
    };

    //处理头像加载失败
    this.herrorimg = function (a) {
        a.src = config.baseimg + 'img/generalIcon/head.png'
    };
    //处理图片加载失败
    this.errorimg = function (a) {
        a.src = config.baseimg + 'img/error.png'
    };
    //验证空字符串
    this.nullReplace = function (str) {
        if (!str || isEmpty(str)) return '';
        return str;
    };

    //合并数组
    this.assign = function (obj1, obj2) {

        var tmp = {};
        for (var i in arguments) {
            for (var key in arguments[i]) {
                if(arguments[i][key])tmp[key] = arguments[i][key];
            }
        }
        return tmp;;
    };
    //处理数字工具
    /*
        v:转换的数字
        d:保留的位数
    */
    this.conunm = function (v, d) {
        if (v == undefined) {
            return 0;
        }
        if (v == 0) {
            return v;
        }
        if (d == undefined) {
            d = 3;
        }
        if (v > 10000) {
            return (Number(v) / 10000).toFixed(d) + "万"
        }
        if (v != null && v != "" && v != undefined) {
            if (v.toString().indexOf(".") >= 0) {
                //四舍五入
                return Number(v).toFixed(d);
            } else {
                return v;
            }
        }
    };
    this.price = function (v) {
        if (v == 0) {
            return v;
        }
        if (v != null && v != "" && v != undefined) {
            var f = parseFloat(v);
            var result = Math.round(f * 100) / 10000;
            return result.toFixed(2);
        }
    };

    //获取配置系统信息；
    this.getSys = function (keys, cb) {
        AJAX.GET('/api/config/bykeys?keys=' + keys, function (d) {
            if (d.code == 1 && d.data.length > 0) {
                cb && cb(d.data);
            }
        });
    };

    this.bitunencode = function (t, w) { //反解析 位运算的值
        var l = [];
        for (var i = 0; i < w; i++) {
            if (t & Math.round(Math.pow(2, i))) {
                console.log(i + 1)
                l.push(i + 1);
            }
        }
        return l;
    };
    this.bitencode = function (d) {
        //d:[1, 2, 4, 9, 12, 20, 26, 29, 30, 31]; 需要位运算的值
        var t = 0;
        for (var i = 0; i < d.length; i++) {
            t += Math.round(Math.pow(2, d[i] - 1))
            console.log(t)
        }
        return t;
    };
}

//输入框输入格式限制
//tag传入值：'number'(只能输入和粘贴数字)
function inputLimit(tag) {
    var arr = document.querySelectorAll('input[' + tag + ']');
    for (var i = 0; i < arr.length; i++) {
        var inputE = arr[i]
        inputE.oninput = chnu;
        inputE.onafterpaste = chnu;
    }

    function chnu(e) {
        e = (event || e).target;
        e.value = e.value.replace(/\D/g, '');
    }
}

//数组删除扩展
Array.prototype.del = function (n) {
    //n表示第几项，从0开始算起。
    //prototype为对象原型，注意这里为对象增加自定义方法的方法。
    if (n < 0) //如果n<0，则不进行任何操作。
        return this;
    else
        return this.slice(0, n).concat(this.slice(n + 1, this.length));
}

//底部v  Foot.init 渲染
var Foot = new function () {
    var list = [{
            cls: 'tabPage1',
            name: '首页',
            imgName: 'home',
        },
        {
            cls: 'tabPage2',
            name: '店铺',
            imgName: 'shop',
        },
        // {
        //     cls: 'tabPage5',
        //     name: '红包',
        //     imgName: 'reward',
        // },
        {
            cls: 'tabPage3',
            name: '商城',
            imgName: 'mall',
        },
        {
            cls: 'tabPage4',
            name: '我的',
            imgName: 'mine',
        },
    ];

    var user = Comm.db('userinfo');

    this.init = function () {
        if (Comm.w9()) return;
        Comm.setAndroidHome();
        var oUL = document.createElement('ul');
        var frag = document.createDocumentFragment();
        oUL.className = 'footer-con';

        //判断链接是否存在
        function check(t) {
            return location.href.indexOf(t) >= 0;
        };


        var isclose = 0;
        if (location.href.indexOf('index') > 0) {
            isclose = 1;
        }
        for (var i = 0, l = list.length; i < l; i++) {
            var itemM = list[i];
            var oLi = document.createElement('li');
            oLi.setAttribute('class', 'footer-item ' + itemM.cls + " " + (check(itemM.cls + ".htm") ? 'colorred' : ''));
            if (itemM.cls == "tabPage4" || itemM.cls == "mine") {
                oLi.setAttribute('onclick', 'clickedTabbar(\'' + itemM.cls + '.html\')');
            } else {
                oLi.setAttribute('onclick', 'Comm.goself(\'' + itemM.cls + '.html\')');

                // oLi.setAttribute('onclick', 'tabdidselected(\'' + (i+1) + '\')');
            }
            oLi.style.backgroundImage = "url(img/tabbar/" + ((check(itemM.cls + ".html") ? itemM.imgName + "_y" : itemM.imgName)) + ".png)"
            oLi.innerHTML = itemM.name;
            frag.appendChild(oLi);
        }
        oUL.appendChild(frag);
        $('.shared').html(oUL);
        Comm.resizeSection();
    }
};

function clickedTabbar(page) {
    if (needLoginCheck(true)) return;
    Comm.goself(page);
}


//上拉
//下拉
//请求地址  / 请求类型
//数据返回
//空数据图片 、空数据提示文字、空数据按钮文字 、 空数据按钮事件
//一个主动调用的下拉刷新的事件
function MERefresh(selector, config) {

    var t = this;

    var refreshOption = {
        mescrollId: '', //刷新容器的id----------------------必须
        clearEmptyId: '', //list列表的id----------------------必须

        //下拉刷新配置
        needHeadRefresh: true, //是否支持下拉刷新
        refreshUrl: null, //刷新的接口----------------------必须
        refreshParm: {}, //刷新的参数
        refreshTypeGet: true, //下拉是否为get请求----------------------必须
        refresh_cb: null,

        //上拉加载配置
        needFootRefresh: true, //是否支持上拉加载
        moreUrl: null, //加载更多的接口 -- 如果没有默认为刷新的接口
        moreParm: {}, //上拉加载的参数
        moreTypeGet: true, //上拉是否为get请求
        more_cb: null,
        pagesize: 10,

        //没有数据时的配置
        nodataIcon: 'inc/mescroll/mescroll-empty1.png',
        nodataTip: '抱歉，没有找到相关信息~',
        nodataButtonTex: '点击刷新',
        nodataClicked: function (d) { //点击按钮的回调,默认null
            t.MeRefScroll.triggerDownScroll();
        },
        hasHeadRefCb: false,
        hasfootRefCb: false,
    };
    //合并参数 json 
    refreshOption = app.assign(refreshOption, config);

    //ajax 
    function SLNetwork(rqType, apistr, params, cb, addMore) {
        var newParms = params;
        var PgInfo = {
            pagesize: 10,
            pageno: 1
        };

        if (params.pagesize > 0) {
            newParms.pagesize = params.pagesize;
        } else {
            newParms.pagesize = PgInfo.pagesize;
        }
        if (params.pageno > 0) {
            newParms.pageno = params.pageno;
        } else {
            newParms.pageno = PgInfo.pageno;
        }
        skipNullValueKey(newParms);

        //将字典中的空值或空字符串的 key-value删除
        function skipNullValueKey(params) {
            // for (var key in params) {
            //     if (params[key] == '' || params[key] == null) {
            //         delete params[key];
            //     }
            // }
            return params;
        };

        if (rqType == 'post') {
            AJAX.POST(apistr, newParms, function (data) {
                data.data = data.data || [];
                if (cb) {
                    cb(data);
                }
                if (data.code == 1 && addMore) {
                    if (newParms.pagesize * newParms.pageno >= data.totalCount) {
                        newParms.pageno -= 1;
                    }
                } else {
                    newParms.pageno = data.curPage;
                }
            });
        } else if (rqType == 'get') {
            AJAX.GET(appendApi(apistr, newParms), function (data) {
                data.data = data.data || [];
                if (cb) {
                    cb(data)
                }
                if (data.code == 1 && addMore) {
                    if (newParms.pagesize * newParms.pageno >= data.totalCount) {
                        newParms.pageno -= 1;
                    }
                } else {
                    newParms.pageno = data.curPage;
                }
            });
        }
    }

    //initScroll
    function initMeScroll(mescrollId, clearEmptyId) {
        var opt = t.refreshOption;
        opt.hasHeadRefCb = opt.refresh_cb ? true : false;
        opt.hasHeadRef = opt.more_cb ? true : false;

        opt.clearEmptyId = clearEmptyId || opt.clearEmptyId;
        opt.mescrollId = mescrollId || opt.mescrollId;

        opt.nodataTip = opt.nodataTip ? opt.nodataTip : '抱歉，没有找到相关信息~';
        opt.nodataButtonTex = opt.nodataButtonTex ? opt.nodataButtonTex : '点击刷新';
        opt.btnClick = opt.btnClick || function () { //点击按钮的回调,默认null
            mescroll.triggerDownScroll()
        };


        var optionParm = {
            //下拉刷新的所有配置项
            down: {
                use: opt.needHeadRefresh, //是否初始化下拉刷新; 默认true
                callback: refreshFunction,
                offset: 60, //触发刷新的距离,默认80
                auto: false,
                autoShowLoading: true,

                outOffsetRate: 0.2, //超过指定距离范围外时,改变下拉区域高度比例;值小于1且越接近0,越往下拉高度变化越小;
                bottomOffset: 20, //当手指touchmove位置在距离body底部20px范围内的时候结束上拉刷新,避免Webview嵌套导致touchend事件不执行
                minAngle: 45, //向下滑动最少偏移的角度,取值区间  [0,90];默认45度,即向下滑动的角度大于45度则触发下拉;而小于45度,将不触发下拉,避免与左右滑动的轮播等组件冲突;
                hardwareClass: "mescroll-hardware", //硬件加速样式;解决iOS下拉因隐藏进度条而闪屏的问题,参见mescroll.css
            },
            //上拉加载的所有配置项
            up: {
                // isLock: true,
                use: opt.needFootRefresh, //是否初始化上拉加载; 默认true
                auto: opt.needFootRefresh ? true : false, //是否在初始化时以上拉加载的方式自动加载第一页数据; 默认true
                callback: moreFunction, //上拉回调,此处可简写; 相当于 callback: function (page, mescroll) { getListData(page); }
                page: {
                    num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
                    size: opt.pagesize, //每页数据条数
                    time: null //加载第一页数据服务器返回的时间; 防止用户翻页时,后台新增了数据从而导致下一页数据重复;
                },
                empty: {
                    icon: opt.nodataIcon, //图标,默认null
                    tip: opt.nodataTip, //提示
                    //btntext: opt.nodataButtonTex, //按钮,默认""
                    //btnClick: opt.btnClick,
                },

                clearId: opt.clearEmptyId, //加载第一页时需清空数据的列表id; 如果此项有值,将不使用clearEmptyId的值;
                clearEmptyId: opt.clearEmptyId, //相当于同时设置了clearId和empty.warpId; 简化写法,默认null;
                noMoreSize: 1, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
                offset: 60, //离底部的距离
                isBounce: false, //是否允许ios的bounce回弹;默认true,允许回弹; 此处配置为false,可解决微信,QQ,Safari等等iOS浏览器列表顶部下拉和底部上拉露出浏览器灰色背景和卡顿2秒的问题
                lazyLoad: {
                    use: true, // 是否开启懒加载,默认false
                    attr: 'imgurl', // 网络地址的属性名 (图片加载成功会移除该属性): <img imgurl='网络图  src='占位图''/>
                    showClass: 'mescroll-lazy-in', // 图片加载成功的显示动画: 渐变显示,参见mescroll.css
                    delay: 500, // 列表滚动的过程中每500ms检查一次图片是否在可视区域,如果在可视区域则加载图片
                    offset: 200 // 超出可视区域200px的图片仍可触发懒加载,目的是提前加载部分图片
                }
            }
        }

        if (!t.refreshOption.refresh_cb && !t.refreshOption.refresh_cb_doNothing) {
            optionParm.down = null;
        }

        var mescroll = new MeScroll(opt.mescrollId, optionParm);
        t.MeRefScroll = mescroll;
        return mescroll;
    }

    t.refreshOption = refreshOption;
    var _selector = selector ? selector.split(',') : ''; //Document element元素 
    t.configurationDone = (typeof _selector == 'object') ? initMeScroll(_selector[0], _selector[1]) : function initRefresh(mescrollId, clearEmptyId) {
        initMeScroll(mescrollId, clearEmptyId);
    }
    //刷新调用
    t.refreshFunction = refreshFunction;
    t.downRefresh = function () {
        t.MeRefScroll.triggerDownScroll();
    }

    function refreshFunction() {
        console.log('——————————————————————————————————————————————————————刷新');

        if ((!t.refreshOption.refresh_cb && !t.refreshOption.more_cb) || t.refreshOption.refresh_cb_doNothing) {
            setTimeout(function () {
                // t.MeRefScroll.endErr();
                merefresh.endRefresh();
                t.refreshOption.refresh_cb_doNothing && t.refreshOption.refresh_cb_doNothing();
            }, 400);
            return;
        }
        console.log('准备调用刷新的请求');
        var pageParams = {};
        pageParams.pageno = 1,
            pageParams.curpage = 1;
        pageParams.pagesize = t.refreshOption.pagesize;

        var netType = t.refreshOption.refreshTypeGet ? 'get' : 'post';
        var netApi = t.refreshOption.refreshUrl;
        var netParms = t.refreshOption.refreshParm;

        var newNetParms = app.assign(netParms, pageParams); //合并两个对象

        SLNetwork(netType, netApi, newNetParms, function (data) {
            console.log('完成刷新的请求');
            if (!data.data) {
                data.data = [];
            }
            if (data.code == 1) {
                t.refreshOption.refresh_cb && t.refreshOption.refresh_cb(t, data);
                // t.MeRefScroll.resetUpScroll();
            } else {
                t.refreshOption.refresh_cb(t, data);
                //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
                t.MeRefScroll.endErr();
            }
        });

    }

    //加载更多调用
    function moreFunction(page, d, v) {
        console.log('——————————————————————————————————————————————————————加载更多');

        if (!t.refreshOption.refresh_cb && !t.refreshOption.more_cb) {
            setTimeout(function () {
                t.MeRefScroll.endErr();
            }, 300)
            return;
        }
        console.log('准备调用 <加载> 的请求');
        var pageParams = {};
        pageParams.pageno = page.num || 1;
        pageParams.curpage = page.num || 1;
        pageParams.pagesize = t.refreshOption.pagesize;
        var netType = (t.refreshOption.moreUrl && t.refreshOption.moreUrl.length) ? (t.refreshOption.moreTypeGet ? 'get' : 'post') : (t.refreshOption.refreshTypeGet ? 'get' : 'post');
        var netApi = t.refreshOption.moreUrl || t.refreshOption.refreshUrl || '';

        var netParms = (t.refreshOption.moreUrl && t.refreshOption.moreUrl.length) ? t.refreshOption.moreParm : t.refreshOption.refreshParm;

        var newNetParms = app.assign(netParms, pageParams); //合并两个对象

        SLNetwork(netType, netApi, newNetParms, function (data) {
            console.log('完成调用 <加载> 的请求');

            if (data.code == 1) {
                if (data.curPage == 1) {
                    t.refreshOption.temptotalCount = data.totalCount
                } else {
                    data.totalCount = t.refreshOption.temptotalCount;
                }
                if (t.refreshOption.more_cb) {
                    t.refreshOption.more_cb(t, data);
                } else if (t.refreshOption.refresh_cb) {
                    t.refreshOption.refresh_cb(t, data);
                }
            } else {
                data.data = [];
                t.refreshOption.refresh_cb(t, data);
                //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
                t.MeRefScroll.endErr();
            }
        }, true);
    }

    //完成刷新和加载动作
    t.endRefresh = function endRefresh() {
        //结束下拉刷新和上拉加载
        t.MeRefScroll.endErr();
    }

    function receiveNew(listHtml) {
        var listQuery = '#' + t.refreshOption.clearEmptyId;
        $(listQuery).append(listHtml);
    }

    t.appendHtml = function (contentHtml) {
        receiveNew(contentHtml);
    }

    t.successEndRef = function (curCount, totleCount) {
        t.MeRefScroll.endBySize(curCount, totleCount); //必传参数(当前页的数据个数, 总数据量)	
    }

    return t;
}

/*MeRefScroll End*/

var marr = [];
var times = 1;
var nextbc = null;

function next(t, id) {
    if (isNaN(t.value)) {
        t.value = "";
        return;
    }
    if (t.value.length == 1) {
        if (t.nextElementSibling) {
            t.nextElementSibling.focus();
        }
        marr.push(t.value);
    }

    if (t.value.length == 0) {
        if (t.previousElementSibling) {
            t.previousElementSibling.focus();
        }
        marr.pop();
        console.log(marr.join(""));
    }
    if (marr.length == 6) {
        t.blur();
        var psw = marr.join("");
        //h回调函数
        var _rid = (Comm.db('userinfo').roleid + 1);
        nextbc && nextbc('', _rid, psw);
    }
}


// 导航初始化
function init(el, target, classname) {
    for (var i = 0; i < el.length; i++) {
        el[i].className = "";
    }
    target.className = classname;
}

//拼接Get接口和参数
function appendApi(api, parmas) {
    var string = api || '';
    string = string.length ? (api + '?') : '';
    for (var attr in parmas) {
        var param = attr + '=' + parmas[attr] + '&';
        string += param;
    }
    return string;
};

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>大链盟项目sl添加

//点击li（.class） 下的 b(.class) 执行cb回调
//在cb回调里面进行点击操作
function clickList(li, b, cb) {
    var sel = li + ' ' + b;
    if (li && b) {
        $(sel).unbind("click").die("click").undelegate("click").click(function () {
            if (cb) {
                var index = $(sel).index(this);
                cb(this, index);
            }
        })
    } else if (b) {
        $(b).unbind("click").die("click").undelegate("click").click(function () {
            if (cb) {
                var index = $(sel).index(this);
                cb(this, index);
            }
        });
    }
}

function unBind(sel) {
    $(sel).bind("click").die("click").undelegate("click");
}


//多个选项 点击某一个后为选中 其他为为选中
function meauChooseClick(li, b, cb, sidx) {
    clickList(li, b, function (o, index) {
        var d = li + ' ' + b;
        // $(d).removeClass('active');

        $(o).parent().find(b).removeClass('active');
        $(o).addClass('active');
        if (cb) {
            cb(o, index);
        }
    });
}

function checkBoxChoose(li, b, cb, sidx) {
    clickList(li, b, function (o, index) {
        var d = li + ' ' + b;
        if ($(o).hasClass('active')) {
            $(o).removeClass('active');
        } else {
            $(o).addClass('active');
        }

        if (cb) {
            cb(o, index);
        }
    });
}

//转2位小数
function $to2(v, len) {
    len = len || 2;
    //return parseFloat(num).toFixed(2);
    if (v == 0) {
        return parseFloat(v).toFixed(2);
    }
    if (v != null && v != "" && v != undefined) {
        return parseFloat(v).toFixed(2);
    }
}


Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}


//***********************************************************************

var SLDebug = true;

function debugAlert(m,cb) {
    if (config.SLTest) {
        Comm.alert(JSON.stringify(m),cb);
    }

}

versionJS();

function versionJS() {
    var arr = $('script');
    for (var i = 0; arr && i < arr.length; i++) {
        var sriptE = arr[i];
        var ss = sriptE.src.split('?');
        var date = new Date;
        var timespan = date.getTime();
        sriptE.src = ss[0] + '?' + timespan;
        console.log(sriptE.src);
    }
}


function selfblur() {
    document.activeElement.blur();
}


function share() {
    pageShare();
}

function pageShare(des, page, img) {

    var url = 'https://www.baidu.com';
    var picUrl = config.SLShareBase + 'img/appLogoIcon.png';

    var shareModel = {
        pic: picUrl,
        title: '水车车',
        desc: '一起来拿红包',
        url: url
    };


    console.log(shareModel.url);
    Comm.shareUrl(shareModel, function (d) {
        if (d && d.code == 1) {
            Comm.message('分享成功！');
        }
    });
}

function regPush() {

    if (Comm.w9()) {
        var type = 0;
        if (Comm.ios()) {
            type = 2;
        } else {
            type = 1;
        }
        //注册推送
        Comm.registerPush({
            state: 1,
            devicetype: type,
            token: Comm.db('_token'),
            url: config.root + '/store/staff/doMyDeviceTokens'
        }, function (e) {});
    }


    // Comm.getPushToken(function (t) {
    //     var params = {
    //         devicetoken:t.token||'none',
    //         devicetype:t.type||2//1安卓 2iOS
    //     }
    //
    //     // Comm.alert(JSON.stringify(params),function (d) {
    //         SLNetwork('post','/api/customer/bingDeviceInfo',params,function (data) {
    //             if (data.code==1) {
    //                 nslog(data);
    //             } else {
    //                 Comm.message(data.msg);
    //             }
    //         });
    //     // })
    //
    // });
}


function clearUserData() {
    signOut();
}


function exitToken(cb) {
    var params = {
        devicetoken: '',
        devicetype: Comm.ios() ? '2' : '1'
    }

    AJAX.POST("/api/customer/bingDeviceInfo", params, function (data) {
        cb && cb();
    });
}


function slertJson(obj) {
    Comm.alert(JSON.stringify(obj), function (t) {

    })
}

function iosTime(time) {
    return time.replace(/-/g, '/');
}


function regPrice(money,show) {
    var reg = /^\d+(\.\d{0,2})?$/;
    var right = reg.test(money)
    if (!right && show) {
        Comm.message('金额请输入数字或小数，小数点后最多两位');
    }
    return right;
}

function point2Num(num) {
    num = num.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
    num = num.replace(/^\./g, ""); //验证第一个字符是数字
    num = num.replace(/\.{2,}/g, "."); //只保留第一个, 清除多余的
    num = num.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    num = num.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //只能输入两个小数
    return num;
}

//两位小数
function num(obj) {
    obj.value = point2Num(obj.value);
}

//两位小数
function replaceSpecialChar(obj) {
    event.returnValue = false;
    var str = obj.value;
    var value = str.replace(/[~'!<>@#$%^&*()-+_=:\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]]/g, "");
    obj.value = value;
}


//整数
function intergerNum(obj) {
    obj.value = obj.value.replace(/[^\d]/g, ""); //清除"数字"和"."以外的字符
}

function logText(msg) {
    Comm.message(msg);
}


//处理输入框中的内容 防止代码注入
function DealInputText(text) {
    return text;
}

//将元转化为分
function moneyFen(p) {
    return Math.round(p * 100);
}

function timeReplace(time) {
    time = time.replace(/-/g, "/").replace(/\.0/g, "")
    return time;
}


/*****************************************************************************/

var RPageKey = 'refreshPagesModel';

//添加需要刷新的页面
function addNeedRefPage(needRefPage, data) {
    var refreshPages = Comm.db(RPageKey) || {};

    var page = needRefPage || '';
    var dataModel = {};
    dataModel.code = 1;
    dataModel.data = data || {};
    refreshPages[page] = dataModel;

    Comm.db(RPageKey, refreshPages);
}

//删除需要刷新的页面记录
function deleteNeedRefPage(page) {
    var refreshPages = Comm.db(RPageKey) || {};

    var dataModel = refreshPages[page] || {};
    if (dataModel.code == 1) {
        delete refreshPages[page];
    }

    Comm.db(RPageKey, refreshPages);
}

//检查当前页面是否需要刷新
function checkNeedRefreshPage(cb) {
    var curPage = location.href;

    var str = curPage.split('.html')[0];
    var arr = str.split('/');
    var curPage = arr[arr.length - 1];

    var refreshPages = Comm.db(RPageKey) || {};


    var dataModel = refreshPages[curPage] || {};
    if (dataModel.code == 1) {
        deleteNeedRefPage(curPage);
        cb && cb(dataModel.data);
    }

    nslog(curPage);
}

/*****************************************************************************/


//获取店铺状态并是否跳转
function getStoreState(isGo, cb) {

    if (!app.isLogin()) {
        if (isGo) {
            needLoginCheck(true)
        }
        cb && cb(0);
        return;
    }
    var userinfo = Comm.db('userinfo');
    if (userinfo);
    SLNetwork('get', 'api/store/myStoreState', userinfo, function (a) {
        if (a.code == 1) {
            var data = a.data;
            var storeState = data.code || '';
            var pid = data.data || '';

            /*

           「1:审核通过
            2:申请开店审核中
            3:审核未通过
            4:修改信息审核
            5:修改信息未通过
            」

            6:没有店铺

            7:店铺禁用

            * */

            if (isGo) {

                switch (storeState) {
                    case 1: { //1:审核通过
                        Comm.go('storeMain.html'); //我的店铺
                        // Comm.go('storeInfo.html');//我的店铺
                    }
                    break;
                case 2: { //2:申请开店审核中
                    Comm.go("examine.html?type=1"); //申请开店审核中
                }
                break;
                case 3: { //3:审核未通过
                    Comm.go('examineFild.html?type=1');
                }
                break;
                case 4: { //4:修改店铺信息审核
                    Comm.go("examine.html?type=4"); //修改店铺信息审核中
                }
                break;
                case 5: { //5:修改信息未通过
                    Comm.go('examineFild.html?type=4'); //修改店铺信息未通过
                }
                break;
                case 6: { //没有店铺

                    Comm.db('opt',null);
                    Comm.go('myAddStore.html'); //申请开店
                }
                break;

                case 7: { //店铺禁用
                    Comm.message(a.data.msg);
                }
                break;

                default:
                    break;

                }
            }
            cb && cb(storeState);

        } else {
            Comm.message(data.msg);
        }
    });
}


//获取合伙人状态并是否跳转
function getPartnerState(isGo, cb) {

    // 合伙人信息正常  1
    // 合伙人不存在 2
    // 合伙人已禁用 3
    // 信息错误，合伙主体不存在 4
    // 合伙人审核中  5
    // 已拒绝      6

    if (!app.isLogin()) {
        if (isGo) {
            if (needLoginCheck(true)) return;
        } else {
            cb && cb(0);
            return;
        }
    }

    var params = {};
    SLNetwork('get', '/api/partner/getMyPartnerState', params, function (a) {
        if (a.code == 1) {
            var data = a.data;
            var partnerState = data.code || '';
            var pid = data.data || '';

            cb && cb(partnerState);

            if (isGo) {

                switch (partnerState) {
                    case 1: {
                        Comm.go('PartnersHome.html');
                    }
                    break;
                case 2: {
                    Comm.go('Startup.html');
                }
                break;
                case 3: {
                    Comm.message(data.msg);
                }
                break;
                case 4: {
                    Comm.message(data.msg);
                }
                break;
                case 5: {
                    Comm.go("examine.html?type=2")
                }
                break;
                case 6: {
                    Comm.go('examineFild.html?type=2');
                }
                break;

                default:
                    break;

                }
            }

        } else {
            Comm.message(data.msg);
        }
    });
}


/*************显示广告详情*************/
function showAdver(aid) {
    var params = {
        advertId: aid
    }
    SLNetwork('get', '/api/advert/detail', params, function (data) {
        if (data.code == 1) {

            var model = data.data || {};
            var itemId = model.itemId || '';
            var itemType = model.itemType || '';

            if (!itemId) return;


            switch (itemType) {
                case 1: { //商品
                    Comm.go('goodsDetail.html?gid=' + itemId);
                }
                break;
            case 2: { //店铺
                Comm.go('store.html?storeId=' + itemId);
            }
            break;
            case 3: { //文章
                Comm.go('artical.html?aid=' + itemId);
            }
            break;

            default:
                break;
            }


        } else {
            Comm.message(data.msg);
        }
    });
}


//扫码付款
function scanCode(caseIdx) {
    var userinfo = Comm.db('userinfo');
    if (needLoginCheck(true)) return;

    Comm.OSS.getImgUrl()
    if (caseIdx == 1) { //收款
        Comm.go('paymentCode.html?type=get');
        return;
    } else if (caseIdx == 2) { //付款
        Comm.go('paymentCode.html?type=pay')
        return;
    } else { //扫描二维码

        Comm.scanf(function (a) {
            var uid = a.uid || '';
            var sid = a.sid || '';

            if (sid) { //扫描了商家的二维码
                Comm.go('codeScanPay.html?sid=' + sid + '&type=FK');
            } else if (uid) { //扫描了用户的二维码
                //获取用户id
                //如果当前用户是商家 则 商家收款 否则不处理 给用户提示
                if (userinfo && userinfo.myStoreId) { //商家
                    //商家收款
                    Comm.go('codeScanPay.html?sid=' + userinfo.myStoreId + '&uid=' + uid + '&type=SK');
                } else { //用户、或没有用户信息
                    Comm.message('您不是商家，不能发起收款');
                }
            } else {
                Comm.message('不能识别的二维码');
            }
            console.log(JSON.stringify(a));
        });
    }
}


/*************比较时间先后*************/
//
function checkDays(t2, t1) {
    if (t1 && t2) {
        var days = datedifference(t1, t2);
        return days;
    }
    return 0;
}

//比较两个时间
function datedifference(sDate1, sDate2) { //sDate1和sDate2是2006-12-18格式
    var dateSpan,
        tempDate,
        iDays;
    sDate1 = Date.parse(sDate1);
    sDate2 = Date.parse(sDate2);
    dateSpan = sDate2 - sDate1;
    dateSpan = (dateSpan); //Math.abs
    iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
    return iDays
};

/*************比较时间先后*************/




//保存用户信息
function saveUserinfo(info, cb) {
    if (!info) {
        Comm.message('缺少用户信息');
        return;
    }
    Comm.db('userinfo', info);
    Comm.db('account', info.phone || '');
    if (info.token) {
        Comm.storageValue('_token', info.token, function () {});
    }
    Comm.storageValue('userinfo', info, function () {
        cb && cb();
    });


}


//退出后清空数据
function signOut() {
    Comm.db('userinfo', null);
    Comm.db('account', '');
    AJAX.setTag(null);
    Comm.storageValue('userinfo', null, function () {});
    Comm.storageValue('_token', null, function () {});
}


//验证登录
function needLoginCheck(showLoginPage, showAlert) {
    if (!app.isLogin()) {
        Comm.confirm('您还未登录,请先进行登录', function (t) {
            if (t == 1) {
                Comm.goLogin();
            }
        });
        return true;
    }
    return false;
}


//将list处理成{}
function dealListWithModel(list, keyWord, model) {
    var model = model || {};
    if (list && list.length) {
        list.forEach(function (a) {
            if (!a) return;
            model[a[keyWord]] = a;
        });
    }
    return model;
}


function validPrice(value) {
    var reg = /^\d+(\.\d{0,2})?$/;

    return reg.test(value);
}


//筛选出小数数字
function filterFloat(value) {
    if (/^\-?([0-9]+(\.[0-9]+)?|Infinity)$/
        .test(value))
        return Number(value);
    return -1;
}


//预防重复点击
var repeadModel = {};

function preventRepeadClickDeal(cb, code, time) {

    //if false 直接返回
    //else true 延迟1s
    var clickType = repeadModel[code] || 0;


    switch (clickType) {
        case 0: { //第一次触发、或间隔一段时间后的第一次触发该时间
            repeadModel[code] = 1;
            cb && cb();
            setTimeout(function () {
                repeadModel[code] = 0;
            }, time || 1000);
            return;
        }
        break;
    case 1: { //
        return;
    }
    break;
    case 2: { //

    }
    break;

    default:
        break;

    }


}


//显示客服电话
function showKFText(sel) {
    var tempU = Comm.db('userinfo') || {};
    var tel = tempU.password || '';
    $(sel).text(tel);
}

//拨打客服电话
function contactKF() {
    preventRepeadClickDeal(function () {
        var tempU = Comm.db('userinfo') || {};
        var tel = tempU.password || '';
        if (tel && tel.length) {
            location.href = 'tel:' + tel;
        }
    }, 100, 1500);
}


function canSendRB() {
    var tUser = Comm.db('userinfo');
    if (tUser.myPartnerId == -1) {
        return false;
    }
    return true;
}


var ts = new Date().getTime();
var downLoadUrl = '';

function showDownLoad() {
    Comm.openUrlStr(downLoadUrl);

}



var footCt = '<div class="flex_start m10" onclick="window.open(\''+downLoadUrl+'\')">\n' +
    '        <img src="img/appLogoIcon.png" width="50px" alt="">\n' +
    '        <div class="ml10 lh25 flex_between flex1">\n' +
    '            <div class="grow3">水车车,一个心系农村的电商平台</div>\n' +
    '            <div class="br5 col_white grow2 lh40 center bg_theme">点击下载</div>\n' +
    '        </div>\n' +
    '    </div>';


var SLReg = new function () {

    this.isTel = function (tel) {
        debugger
        var reg= /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
        return reg.test(tel);
    }

    this.isIdCardNo = function (str) {
        var reg = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
        return reg.test(str);
    }


    /*是否带有小数*/
    function    isDecimal(strValue )  {
        var  objRegExp= /^\d+\.\d+$/;
        return  objRegExp.test(strValue);
    }

    /*校验是否中文名称组成 */
    function ischina(str) {
        var reg=/^[\u4E00-\u9FA5]{2,4}$/;   /*定义验证表达式*/
        return reg.test(str);     /*进行验证*/
    }

    /*校验是否全由8位数字组成 */
    function isStudentNo(str) {
        var reg=/^[0-9]{8}$/;   /*定义验证表达式*/
        return reg.test(str);     /*进行验证*/
    }

    /*校验电话码格式 */
    function isTelCode(str) {
        var reg= /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
        return reg.test(str);
    }

    /*校验邮件地址是否合法 */
    function IsEmail(str) {
        var reg=/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
        return reg.test(str);
    }
}
