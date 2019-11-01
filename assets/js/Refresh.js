//上拉
//下拉
//请求地址  / 请求类型
//数据返回
//空数据图片 、空数据提示文字、空数据按钮文字 、 空数据按钮事件

//一个主动调用的下拉刷新的事件

function example() {

    var model = {
        i: 0,
        mescrolls: [],
        parm: [],
        init: function(i) {
            if (!model.mescroll[0]) {
                var url = "";
                if (i == 0) {
                    model.parm[i] = {
                        url: '',
                        data: {

                        },
                    }
                }
                var me = new myMeScroll({ box: 'box' + i, listdata: 'listdata' + i, url: model.parm[i].url, data: model.parm[i].data }, {}, function(page, mescroll) {

                });
                me.i = i;
                model.mescrolls.push(me);
            }
            model.mere = model.mescrolls[i];
            model.mere.i = i;

            var curNavDom = $('#nav li')[i];
            //菜单项居中动画
            var scrollxContent = Comm.g("scrollxContent");
            var star = scrollxContent.scrollLeft; //当前位置

            var end = curNavDom.offsetLeft + curNavDom.clientWidth / 2 - document.body.clientWidth / 2; //居中
            model.mere.MeRefScroll.getStep(star, end, function(step, timer) {
                scrollxContent.scrollLeft = step; //从当前位置逐渐移动到中间位置,默认时长300ms
            });
        }
    }

    model.init(0);

}

function myMeScroll(option, config, callback) {

    //是否为PC端,如果是scrollbar端,默认自定义滚动条
    var isPC = typeof window.orientation == 'undefined';
    var defaultconfig = {
        //下拉刷新的所有配置项
        down: {
            use: true, //是否初始化下拉刷新; 默认true
            auto: true, //是否在初始化完毕之后自动执行下拉回调callback; 默认true
            autoShowLoading: true, //如果在初始化完毕之后自动执行下拉回调,是否显示下拉刷新进度; 默认false. (需配置down的callback才生效)
            isLock: false, //是否锁定下拉,默认false;
            isBoth: false, //下拉刷新时,如果滑动到列表底部是否可以同时触发上拉加载;默认false,两者不可同时触发;
            callback: function(mescroll) {
                console.log("down --> callback");
                //加载轮播数据
                //loadSwiper();
                //下拉刷新的回调,默认重置上拉加载列表为第一页(down的auto默认true,初始化Mescroll之后会自动执行到这里,而mescroll.resetUpScroll会触发up的callback)
                mescroll.resetUpScroll();
            },
            offset: 60, //触发刷新的距离,默认80
            outOffsetRate: 0.2, //超过指定距离范围外时,改变下拉区域高度比例;值小于1且越接近0,越往下拉高度变化越小;
            bottomOffset: 20, //当手指touchmove位置在距离body底部20px范围内的时候结束上拉刷新,避免Webview嵌套导致touchend事件不执行
            minAngle: 45, //向下滑动最少偏移的角度,取值区间  [0,90];默认45度,即向下滑动的角度大于45度则触发下拉;而小于45度,将不触发下拉,避免与左右滑动的轮播等组件冲突;
            hardwareClass: "mescroll-hardware", //硬件加速样式;解决iOS下拉因隐藏进度条而闪屏的问题,参见mescroll.css
            mustToTop: false, // 是否滚动条必须在顶部,才可以下拉刷新.默认false. 当您发现下拉刷新会闪白屏时,设置true即可修复.
            warpId: null, //可配置下拉刷新的布局添加到指定id的div;默认不配置,默认添加到mescrollId
            warpClass: "mescroll-downwarp", //容器,装载布局内容,参见mescroll.css
            resetClass: "mescroll-downwarp-reset", //高度重置的动画,参见mescroll.css
            textInOffset: '下拉刷新', // 下拉的距离在offset范围内的提示文本
            textOutOffset: '释放更新', // 下拉的距离大于offset范围的提示文本
            textLoading: '加载中 ...', // 加载中的提示文本
            htmlContent: '<p class="downwarp-progress"></p><p class="downwarp-tip"></p>', // 布局内容
            inited: function(mescroll, downwarp) {
                console.log("down --> inited");
                //初始化完毕的回调,可缓存dom
                mescroll.downTipDom = downwarp.getElementsByClassName("downwarp-tip")[0];
                mescroll.downProgressDom = downwarp.getElementsByClassName("downwarp-progress")[0];
            },
            inOffset: function(mescroll) {
                console.log("down --> inOffset");
                //进入指定距离offset范围内那一刻的回调
                if (mescroll.downTipDom) mescroll.downTipDom.innerHTML = mescroll.optDown.textInOffset;
                if (mescroll.downProgressDom) mescroll.downProgressDom.classList.remove("mescroll-rotate");
            },
            outOffset: function(mescroll) {
                console.log("down --> outOffset");
                //下拉超过指定距离offset那一刻的回调
                if (mescroll.downTipDom) mescroll.downTipDom.innerHTML = mescroll.optDown.textOutOffset;
            },
            onMoving: function(mescroll, rate, downHight) {
                //下拉过程中的回调,滑动过程一直在执行; rate下拉区域当前高度与指定距离offset的比值(inOffset: rate<1; outOffset: rate>=1); downHight当前下拉区域的高度
                console.log("down --> onMoving --> mescroll.optDown.offset=" + mescroll.optDown.offset + ", downHight=" + downHight + ", rate=" + rate);
                if (mescroll.downProgressDom) {
                    var progress = 360 * rate;
                    mescroll.downProgressDom.style.webkitTransform = "rotate(" + progress + "deg)";
                    mescroll.downProgressDom.style.transform = "rotate(" + progress + "deg)";
                }
            },
            beforeLoading: function(mescroll, downwarp) {
                console.log("down --> beforeLoading");
                //准备触发下拉刷新的回调
                return false; //如果要完全自定义下拉刷新,那么return true,此时将不再执行showLoading(),callback();
            },
            showLoading: function(mescroll) {
                console.log("down --> showLoading");
                //触发下拉刷新的回调
                if (mescroll.downTipDom) mescroll.downTipDom.innerHTML = mescroll.optDown.textLoading;
                if (mescroll.downProgressDom) mescroll.downProgressDom.classList.add("mescroll-rotate");
            },
            afterLoading: function(mescroll) {
                console.log("down --> afterLoading");
                // 结束下拉之前的回调. 返回延时执行结束下拉的时间,默认0ms; 常用于结束下拉之前再显示另外一小段动画,才去结束下拉的场景, 参考案例【dotJump】
                return 0
            }
        },
        //上拉加载的所有配置项
        up: {
            use: true, //是否初始化上拉加载; 默认true
            auto: true, //是否在初始化时以上拉加载的方式自动加载第一页数据; 默认true
            isLock: false, //是否锁定上拉,默认false
            isBoth: true, //上拉加载时,如果滑动到列表顶部是否可以同时触发下拉刷新;默认false,两者不可同时触发; 这里为了演示改为true,不必等列表加载完毕才可下拉;
            isBounce: false, //是否允许ios的bounce回弹;默认true,允许回弹; 此处配置为false,可解决微信,QQ,Safari等等iOS浏览器列表顶部下拉和底部上拉露出浏览器灰色背景和卡顿2秒的问题
            callback: function(page, mescroll) { //上拉回调,此处可简写; 相当于 callback: function (page, mescroll) { getListData(page); }


                AJAX.GET(mescroll.option.url, function(d) {
                    if (d.code == 1) {
                        console.log("接口请求成功 --> code=1");
                    } else {
                        console.log("接口请求失败 --> code=" + d.code);
                    }
                })
            },
            page: {
                num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
                size: 10, //每页数据条数
                time: null //加载第一页数据服务器返回的时间; 防止用户翻页时,后台新增了数据从而导致下一页数据重复;
            },
            noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
            offset: 100, //离底部的距离
            toTop: {
                //回到顶部按钮,需配置src才显示
                warpId: null, //父布局的id; 默认添加在body中
                src: "../res/img/mescroll-totop.png", //图片路径,默认null;
                html: null, //html标签内容,默认null; 如果同时设置了src,则优先取src
                offset: 1000, //列表滚动多少距离才显示回到顶部按钮,默认1000
                warpClass: "mescroll-totop", //按钮样式,参见mescroll.css
                showClass: "mescroll-fade-in", //显示样式,参见mescroll.css
                hideClass: "mescroll-fade-out", //隐藏样式,参见mescroll.css
                duration: 300, //回到顶部的动画时长,默认300ms
                supportTap: false, //默认点击事件用onclick,会有300ms的延时;如果您的运行环境支持tap,则可配置true;
                btnClick: null // 点击按钮的回调; 小提示:如果在回调里return true,将不执行回到顶部的操作.
            },
            loadFull: {
                use: false, //列表数据过少,不足以滑动触发上拉加载,是否自动加载下一页,直到满屏或者无更多数据为止;默认false,因为可通过调高page.size或者嵌套mescroll-bounce的div避免这个情况
                delay: 500 //延时执行的毫秒数; 延时是为了保证列表数据或占位的图片都已初始化完成,且下拉刷新上拉加载中区域动画已执行完毕;
            },
            empty: {
                //列表第一页无任何数据时,显示的空提示布局; 需配置warpId或clearEmptyId才生效;
                warpId: null, //父布局的id; 如果此项有值,将不使用clearEmptyId的值;
                icon: "../res/img/mescroll-empty.png", //图标,默认null
                tip: "暂无相关数据~", //提示
                btntext: "去逛逛 >", //按钮,默认""
                btnClick: function() { //点击按钮的回调,默认null
                    alert("点击了按钮,具体逻辑自行实现");
                },
                supportTap: false //默认点击事件用onclick,会有300ms的延时;如果您的运行环境支持tap,则可配置true;
            },
            clearId: null, //加载第一页时需清空数据的列表id; 如果此项有值,将不使用clearEmptyId的值;
            clearEmptyId: "dataList", //相当于同时设置了clearId和empty.warpId; 简化写法;默认null; 注意vue中不能配置此项
            hardwareClass: "mescroll-hardware", //硬件加速样式,动画更流畅,参见mescroll.css
            warpId: null, //可配置上拉加载的布局添加到指定id的div;默认不配置,默认添加到mescrollId
            warpClass: "mescroll-upwarp", //容器,装载布局内容,参见mescroll.css
            htmlLoading: '<p class="upwarp-progress mescroll-rotate"></p><p class="upwarp-tip">加载中..</p>', //上拉加载中的布局
            htmlNodata: '<p class="upwarp-nodata">-- END --</p>', //无数据的布局
            inited: function(mescroll, upwarp) {
                console.log("up --> inited");
                //初始化完毕的回调,可缓存dom 比如 mescroll.upProgressDom = upwarp.getElementsByClassName("upwarp-progress")[0];
            },
            showLoading: function(mescroll, upwarp) {
                console.log("up --> showLoading");
                //上拉加载中.. mescroll.upProgressDom.style.display = "block" 不通过此方式显示,因为ios快速滑动到底部,进度条会无法及时渲染
                upwarp.innerHTML = mescroll.optUp.htmlLoading;
            },
            showNoMore: function(mescroll, upwarp) {
                console.log("up --> showNoMore");
                //无更多数据
                upwarp.innerHTML = mescroll.optUp.htmlNodata;
            },
            onScroll: function(mescroll, y, isUp) { //列表滑动监听,默认onScroll: null;
                //y为列表当前滚动条的位置
                console.log("up --> onScroll 列表当前滚动的距离 y = " + y + ", 是否向上滑动 isUp = " + isUp);
            },
            scrollbar: {
                use: isPC, //默认只在PC端自定义滚动条样式
                barClass: "mescroll-bar"
            },
            lazyLoad: {
                use: true, // 是否开启懒加载,默认false
                attr: 'imgurl', // html标签中,临时存放网络图片地址的属性名: <img src='占位图' imgurl='网络图'/>
                showClass: 'mescroll-lazy-in', // 显示样式,参见mescroll.css
                delay: 500, // 列表滚动的过程中每500ms检查一次图片是否在可视区域,如果在可视区域则加载图片
                offset: 200 // 超出可视区域200px的图片仍可触发懒加载,目的是提前加载部分图片
            }
        }
    }

    //合并对象
    var d = $.extend({}, defaultconfig, config);
    var obj = new MeScroll(option.box, d);
    obj.option = option;
    return obj;
}




var api = 'more-ren';

function MERefresh() {

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
        nodataTip: '暂无相关数据',
        nodataButtonTex: '点击刷新',
        nodataClicked: function(d) { //点击按钮的回调,默认null
            t.MeRefScroll.triggerDownScroll();
        },
        hasHeadRefCb: false,
        hasfootRefCb: false,
    };

    function initMeScroll(mescrollId, clearEmptyId) {
        var opt = t.refreshOption;
        opt.hasHeadRefCb = opt.refresh_cb ? true : false;
        opt.hasHeadRef = opt.more_cb ? true : false;

        opt.clearEmptyId = clearEmptyId || opt.clearEmptyId;
        opt.mescrollId = mescrollId || opt.mescrollId;

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
                use: opt.needFootRefresh, //是否初始化上拉加载; 默认true
                callback: moreFunction, //上拉回调,此处可简写; 相当于 callback: function (page, mescroll) { getListData(page); }
                page: {
                    num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
                    size: opt.pagesize, //每页数据条数
                    time: null //加载第一页数据服务器返回的时间; 防止用户翻页时,后台新增了数据从而导致下一页数据重复;
                },
                empty: {
                    icon: "st/stIconfile/mescroll-empty.png", //图标,默认null
                    tip: "暂无相关数据~", //提示
                    btntext: "点击刷新", //按钮,默认""
                    btnClick: function() { //点击按钮的回调,默认null
                        mescroll.triggerDownScroll()
                    }
                },
                autoShowLoading: true,
                auto: true, //是否在初始化时以上拉加载的方式自动加载第一页数据; 默认true
                clearId: opt.clearEmptyId, //加载第一页时需清空数据的列表id; 如果此项有值,将不使用clearEmptyId的值;
                clearEmptyId: opt.clearEmptyId, //相当于同时设置了clearId和empty.warpId; 简化写法,默认null;
                noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看

                offset: 60, //离底部的距离
                isBounce: false, //是否允许ios的bounce回弹;默认true,允许回弹; 此处配置为false,可解决微信,QQ,Safari等等iOS浏览器列表顶部下拉和底部上拉露出浏览器灰色背景和卡顿2秒的问题
            }
        }

        if (!t.refreshOption.refresh_cb) {
            optionParm.down = null;
        }

        var mescroll = new MeScroll(opt.mescrollId, optionParm);
        t.MeRefScroll = mescroll;
        return mescroll;
    }

    t.refreshOption = refreshOption;
    t.configurationDone = function initRefresh(mescrollId, clearEmptyId) {
        console.log(refreshOption);
        initMeScroll(mescrollId, clearEmptyId);
    }

    //刷新调用
    function refreshFunction(mscroll) {
        if (!t.refreshOption.more_cb) {
            t.MeRefScroll.resetUpScroll();
            return;
        }
        console.log('准备调用刷新的请求');
        var pageParams = {};
        pageParams.pageno = 1,
            pageParams.pagesize = t.refreshOption.pagesize;

        var netType = t.refreshOption.refreshTypeGet ? 'get' : 'post';
        var netApi = t.refreshOption.refreshUrl;
        var netParms = t.refreshOption.refreshParm;

        var newNetParms = $.extend({}, netParms, pageParams);

        SLNetwork(netType, netApi, newNetParms, function(data) {
            console.log('完成刷新的请求');
            endRefresh();
            if (data.code == 1) {
                if (data){
                    data.data = data.data||[];
                }
                t.refreshOption.refresh_cb && t.refreshOption.refresh_cb(t, data);
                t.MeRefScroll.resetUpScroll();
            } else {}
        });
    }

    //加载更多调用
    function moreFunction(page) {

        if (!t.refreshOption.refresh_cb && !t.refreshOption.more_cb) {
            setTimeout(function() {
                t.MeRefScroll.endErr();
            }, 300)
            return;
        }
        console.log('准备调用 <加载> 的请求');
        var pageParams = {};
        pageParams.pageno = page.num || 1;
        pageParams.pagesize = t.refreshOption.pagesize;

        var netType = (t.refreshOption.moreUrl && t.refreshOption.moreUrl.length) ? (t.refreshOption.moreTypeGet ? 'get' : 'post') : (t.refreshOption.refreshTypeGet ? 'get' : 'post');
        var netApi = t.refreshOption.moreUrl || t.refreshOption.refreshUrl || '';

        var netParms = (t.refreshOption.moreUrl && t.refreshOption.moreUrl.length) ? t.refreshOption.moreParm : t.refreshOption.refreshParm;

        // var newNetParms = Object.assign(netParms, pageParams); //合并两个对象
        var newNetParms = $.extend({}, netParms, pageParams);

        SLNetwork(netType, netApi, newNetParms, function(data) {
            console.log('完成调用 <加载> 的请求');
            endRefresh();
            if (data.code == 1) {
                if (data){
                    data.data = data.data||[];
                }
                if (t.refreshOption.more_cb) {
                    t.refreshOption.more_cb(t, data);
                } else if (t.refreshOption.refresh_cb) {
                    t.refreshOption.refresh_cb(t, data);
                }
            } else {
                //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
                t.MeRefScroll.endErr();
            }
        });
    }

    //完成刷新和加载动作
    function endRefresh() {
        //结束下拉刷新和上拉加载
        //t.MeRefScroll.endErr();
    }

    function receiveNew(listHtml) {
        var listQuery = '#' + t.refreshOption.clearEmptyId;
        $(listQuery).append(listHtml);
    }

    t.appendHtml = function(contentHtml) {
        receiveNew(contentHtml);
    }

    t.successEndRef = function(curCount, totleCount) {
        t.MeRefScroll.endBySize(curCount, totleCount); //必传参数(当前页的数据个数, 总数据量)	
    }
    return t;
}






//实例

/*
 需要引用的文件
 
 	<link rel="stylesheet" type="text/css" href="js/mescroll/mescroll.min.css" />
 	
 	<script src="js/z.js"></script>
	<script src="js/mescroll/mescroll.min.js"></script>
	<script src="js/Refresh.js"></script>
		
 * */




function example() {

    {
        var merefresh = new MERefresh();
        merefresh.refreshOption.refreshUrl = API_InfoMatino_List; //(必须)
        merefresh.refreshOption.mescrollId = 'refresh';
        merefresh.refreshOption.clearEmptyId = 'list';
        merefresh.refreshOption.refreshTypeGet = true; //(默认为true)
        merefresh.refreshOption.refreshParm = { //不需要参数可以不配置
            type: '1',
        };
        merefresh.refreshOption.refresh_cb = function(refresh, d) {
            var hhhtml = infoNewsList(d.data);
            refresh.successEndRef(d.data.length, d.totalCount);
            refresh.appendHtml(hhhtml);
        };
        merefresh.configurationDone();
    }

    var merefresh = new MERefresh();
    /* 配置刷新参数 */
    //分页参数  每页显示数据条数
    merefresh.refreshOption.pagesize = 2; //(默认10)
    //网络请求类型  GET = true ||  POST = false --- (刷新) 
    merefresh.refreshOption.refreshTypeGet = true; //(默认为true)

    //网络请求接口 --- (刷新)
    merefresh.refreshOption.refreshUrl = API_InfoMatino_List; //(必须)
    //网络请求参数
    merefresh.refreshOption.refreshParm = { //不需要参数可以不配置
        type: '1',
    };
    //页面 <刷新> 的回调
    merefresh.refreshOption.refresh_cb = function(refresh, d) {
        //infoNewsList 这里是返回一个拼接 html字符串 例： '<div></div>'
        var hhhtml = infoNewsList(d.data);
        //参数分别为 当前返回数据的条数 ，数据库可取得的总共的条数   
        refresh.successEndRef(d.data.length, d.totalCount);
        refresh.appendHtml(hhhtml);
    };

    //refresh,list 
    {
        //		merefresh.configurationDone('refresh', 'list');	
    } {
        merefresh.refreshOption.mescrollId = 'refresh'; //(必须)
        merefresh.refreshOption.clearEmptyId = 'list'; //(必须)
        merefresh.configurationDone();
    }

    var merefresh = new MERefresh();
    merefresh.configurationDone('refresh', 'list');

}