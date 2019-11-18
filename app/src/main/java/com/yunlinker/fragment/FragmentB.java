package com.yunlinker.fragment;


import android.app.Activity;
import android.app.Dialog;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Point;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.support.annotation.Nullable;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.baidu.location.BDAbstractLocationListener;
import com.baidu.location.BDLocation;
import com.baidu.location.LocationClient;
import com.baidu.location.LocationClientOption;
import com.baidu.mapapi.SDKInitializer;
import com.baidu.mapapi.map.BaiduMap;
import com.baidu.mapapi.map.BitmapDescriptor;
import com.baidu.mapapi.map.BitmapDescriptorFactory;
import com.baidu.mapapi.map.MapPoi;
import com.baidu.mapapi.map.MapStatus;
import com.baidu.mapapi.map.MapStatusUpdate;
import com.baidu.mapapi.map.MapStatusUpdateFactory;
import com.baidu.mapapi.map.MapView;
import com.baidu.mapapi.map.Marker;
import com.baidu.mapapi.map.MarkerOptions;
import com.baidu.mapapi.map.MyLocationConfiguration;
import com.baidu.mapapi.map.MyLocationData;
import com.baidu.mapapi.map.OverlayOptions;
import com.baidu.mapapi.map.UiSettings;
import com.baidu.mapapi.model.LatLng;
import com.baidu.mapapi.utils.CoordinateConverter;
import com.google.gson.Gson;
import com.hjq.permissions.OnPermission;
import com.hjq.permissions.Permission;
import com.hjq.permissions.XXPermissions;
import com.sunfusheng.marqueeview.MarqueeView;
import com.yunlinker.baseclass.BaseFragment;
import com.yunlinker.model.Addres;
import com.yunlinker.model.Notice;
import com.yunlinker.scc.R;
import com.yunlinker.scc.WebviewActivity;
import com.yunlinker.ulit.xUtilsImageUtils;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.FormBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

import static com.yunlinker.config.WebConfig.LHB;
import static com.yunlinker.config.WebConfig.notice;
import static com.yunlinker.config.WebConfig.path2;
import static com.yunlinker.config.WebConfig.saveKey;


public class FragmentB extends BaseFragment{
    public static FragmentB newInstance() {

        Bundle bundle = new Bundle();

        FragmentB fragment = new FragmentB();
        fragment.setArguments(bundle);
        return fragment;
    }
    private Dialog mdialog,dialog ;
    private View view;


    private BaiduMap mBaiduMap;
    private MapView mMapView;
    //定位
    public LocationClient mLocationClient = null;
    private MyLocationListeners myListener = new MyLocationListeners();
    private boolean isFirstIn = true;
    //经纬度
    private double mLatitude;
    private double mLongtitude;

    private double newmLatitude;
    private double newmLongtitude;
    //自定义定位图标
    private BitmapDescriptor mIconLocation;
   //private MyOrientationListener myOrientationListener;
    private float mCurrentX;
    //覆盖物
    private BitmapDescriptor mMarker, mMarker2,mMarker3;
    //地图选项
    private Bundle info, bundle1;


    private LatLng latLng;

    private Addres addres;

    private  MarqueeView marqueeView;

    //统计
    private RelativeLayout rlStatistics,rlSubstitutecollar,rl_hore;

    //公告model
    private Notice notices;

    private   List<String> message = new ArrayList<>();

    private Double Uplongitude1, Uplatitude1, downlongitude1, downlatitude1,Uplongitude2, Uplatitude2, downlongitude2, downlatitude2;


    private Context context;


    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        context = getActivity();
    }




    @Nullable
    @Override
    public View onCreateView(final LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        SDKInitializer.initialize(getActivity().getApplicationContext());
        mLocationClient = new LocationClient(getActivity());
        myListener = new MyLocationListeners();
        LocationClientOption option1 = new LocationClientOption();
        option1.setLocationMode(LocationClientOption.LocationMode.Hight_Accuracy);
        option1.setCoorType("bd09ll");
        option1.setIsNeedAddress(true);
        option1.setLocationNotify(true);//可选，设置是否当GPS有效时按照1S/1次频率输出GPS结果，默认false
        option1.setWifiCacheTimeOut(5 * 60 * 1000);
        option1.setOpenGps(true);
        option1.setScanSpan(1000);
        mLocationClient.setLocOption(option1);
        //初始化图标

        view = inflater.inflate(R.layout.fragment_b, null);
        mMapView = (MapView) view.findViewById(R.id.bmapView);
        marqueeView = (MarqueeView) view.findViewById(R.id.marqueeView1);
        rlStatistics = (RelativeLayout)view.findViewById(R.id.rlStatistics);
        rlSubstitutecollar=(RelativeLayout)view.findViewById(R.id.rlSubstitutecollar);
        rl_hore = (RelativeLayout)view.findViewById(R.id.rl_hore);
        mLocationClient = new LocationClient(getActivity().getApplicationContext()); //声明LocationClient类
        // 开启定位图层
        mBaiduMap = mMapView.getMap();
        mBaiduMap.setMapType(BaiduMap.MAP_TYPE_NORMAL);
        mLocationClient.registerLocationListener(myListener);


        UiSettings mapUiSettings = mBaiduMap.getUiSettings();
        mapUiSettings.setCompassEnabled(false);
        mapUiSettings.setOverlookingGesturesEnabled(false);
        mapUiSettings.setRotateGesturesEnabled(false);
        mMapView.showZoomControls(false);

        MapStatusUpdate mus=  MapStatusUpdateFactory
                .zoomBy(5.0f);
        mBaiduMap.setMapStatus(mus);
        mBaiduMap.setMyLocationEnabled(true);//显示定位层并且可以触发定位,默认是flase

        //地图点击
        mBaiduMap.setOnMarkerClickListener(new BaiduMap.OnMarkerClickListener() {
            @Override
            public boolean onMarkerClick(Marker marker) {
                info = marker.getExtraInfo();
                SharedPreferences sp = getActivity().getSharedPreferences(saveKey, Context.MODE_APPEND);
                String userinfo = sp.getString("userinfo","");
                String token = sp.getString("token","");
                if (!userinfo.equals("")&&!token.equals("")){
                    showhongbao();
                }else {
                   showdialog();
                }

                return true;
            }
        });
        mBaiduMap.setOnMapClickListener(new BaiduMap.OnMapClickListener() {
            @Override
            public void onMapClick(LatLng latLng) {

            }

            @Override
            public void onMapPoiClick(MapPoi mapPoi) {
            }
        });
        //统计
        rlStatistics.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                SharedPreferences sp = getActivity().getSharedPreferences(saveKey, Context.MODE_APPEND);
                String userinfo = sp.getString("userinfo","");
                String token = sp.getString("token","");
                if (!userinfo.equals("")&&!token.equals("")){
                    Intent intent = new Intent(getActivity(),WebviewActivity.class);
                    intent.putExtra("url","redBagRList.html?type=SD");
                    startActivity(intent);
                }else {
                    showdialog();
                }

            }
        });
        //代领
        rlSubstitutecollar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                SharedPreferences sp = getActivity().getSharedPreferences(saveKey, Context.MODE_APPEND);
                String userinfo = sp.getString("userinfo","");
                String token = sp.getString("token","");
                if (!userinfo.equals("")&&!token.equals("")){
                    Intent intent = new Intent(getActivity(),WebviewActivity.class);
                    intent.putExtra("url","redBagView.html");
                    startActivity(intent);
                }else {
                    showdialog();
                }

            }
        });
        //发红包
        rl_hore.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                SharedPreferences sp = getActivity().getSharedPreferences(saveKey, Context.MODE_APPEND);
                String userinfo = sp.getString("userinfo","");
                String token = sp.getString("token","");
                if (!userinfo.equals("")&&!token.equals("")){
                    Intent intent = new Intent(getActivity(),WebviewActivity.class);
                    intent.putExtra("url","addNewRedBag.html");
                    startActivity(intent);
                }else {
                    showdialog();
                }

            }
        });
        initMarkers();
        getCoordinates();
        getNotice();

        XXPermissions.with((Activity)context)
                //.constantRequest() //可设置被拒绝后继续申请，直到用户授权或者永久拒绝
                //.permission(Permission.SYSTEM_ALERT_WINDOW, Permission.REQUEST_INSTALL_PACKAGES) //支持请求6.0悬浮窗权限8.0请求安装权限
                .permission(Permission.Group.LOCATION) //不指定权限则自动获取清单中的危险权限
                .request(new OnPermission() {

                    @Override
                    public void hasPermission(List<String> granted, boolean isAll) {
                        if (!mLocationClient.isStarted()){
                            mLocationClient.start();
                        }
                        if (isAll) {
                            //  Toast.makeText(HomepageActivity.this, "获取权限成功", Toast.LENGTH_SHORT).show();
                        }else {
                            //   Toast.makeText(HomepageActivity.this, "获取权限成功，部分权限未正常授予", Toast.LENGTH_SHORT).show();
                        }
                    }

                    @Override
                    public void noPermission(List<String> denied, boolean quick) {
                        if(quick) {
                            //  Toast.makeText(HomepageActivity.this, "被永久拒绝授权，请手动授予权限", Toast.LENGTH_SHORT).show();
                            //如果是被永久拒绝就跳转到应用权限系统设置页面
                            XXPermissions.gotoPermissionSettings(context);
                        }else {
                            //  Toast.makeText(HomepageActivity.this, "获取权限失败", Toast.LENGTH_SHORT).show();
                        }
                    }
                });

        return view;
    }

    /**
     * 公告栏数据请求
     */
    private void getNotice(){
        SharedPreferences sp = getActivity().getSharedPreferences(saveKey,Context.MODE_APPEND);
        String customerId = sp.getString("customerId","");
        if (!customerId.equals("")){
            OkHttpClient okHttpClient = new OkHttpClient();
            final Request request=new Request.Builder()
                    .url(notice+"customerId="+customerId)
                    .get()
                    .build();
            Call call=okHttpClient.newCall(request);
            call.enqueue(new Callback() {
                @Override
                public void onFailure(Call call, IOException e) {
                    ShowToast("请检查您的网络");
                }

                @Override
                public void onResponse(Call call, Response response) throws IOException {
                    try{
                        if (response.isSuccessful()){
                            String responseData=response.body().string();
                            Gson gson=new Gson();
                            notices=gson.fromJson(responseData, Notice.class);
                            if (notices.getData()!=null){
                                if (notices.getData()!=null){
                                    Log.e("滴滴滴滴滴", "onResponse: "+notices.getData());

                                    getNoticeValue(notices);
                                }
                            }
                        }
                    }catch (Exception e){

                    }
                }
            });
        }else {
            OkHttpClient okHttpClient = new OkHttpClient();
            final Request request=new Request.Builder()
                    .url(notice)
                    .get()
                    .build();
            Call call=okHttpClient.newCall(request);
            call.enqueue(new Callback() {
                @Override
                public void onFailure(Call call, IOException e) {
                    ShowToast("请检查您的网络");
                }

                @Override
                public void onResponse(Call call, Response response) throws IOException {
                    try{
                        if (response.isSuccessful()){
                            String responseData=response.body().string();
                            Gson gson=new Gson();
                            notices=gson.fromJson(responseData, Notice.class);
                            if (notices.getData()!=null){
                                if (notices.getData()!=null){
                                    Log.e("滴滴滴滴滴", "onResponse: "+notices.getData());

                                    getNoticeValue(notices);
                                }
                            }
                        }
                    }catch (Exception e){

                    }
                }
            });
        }


    }
      //设置公告数据
    private void getNoticeValue(final Notice notice){
           if (notice!=null){
               final Runnable runnable = new Runnable() {
                   @Override
                   public void run() {
                    String stores = String.valueOf(notice.getData().getStores());
                    String members = String.valueOf(notice.getData().getMembers());
                    String parteners  = String.valueOf(notice.getData().getParteners());
                    String rebateMoney = changeF2Y(notice.getData().getRebateMoney());

                    message.add("会员数"+members+"，"+"店铺数"+stores+"，"+"合伙人"+parteners);
                    message.add("会员数"+members+"，"+"店铺数"+stores+"，"+"合伙人"+parteners);
                    Integer flag = notice.getData().getIsPartener();
                       Log.e("111111", "run: "+flag);
                    if (flag==0){
                        rl_hore.setVisibility(View.GONE);
                    }else {
                        rl_hore.setVisibility(View.VISIBLE);
                    }
                    marqueeView.startWithList(message);
                   }
               };
               new Thread() {
                   public void run() {
                       new Handler(Looper.getMainLooper()).post(runnable);
                   }
               }.start();
           }
    }

    /**
     * 分转元
     */

    public static String changeF2Y(int price) {
        return BigDecimal.valueOf(Long.valueOf(price)).divide(new BigDecimal(100)).toString();
    }

    /**
     * 设置markers图标
     */
    private void initMarkers() {
       mMarker = BitmapDescriptorFactory.fromResource(R.mipmap.yhbao);
    }

    /**
     * 获取定位
     */
    private class MyLocationListeners extends BDAbstractLocationListener {
        @Override
        public void onReceiveLocation(BDLocation bdLocation) {
            MyLocationData data = new MyLocationData.Builder()
                    .accuracy(bdLocation.getRadius())
                    .latitude(bdLocation.getLatitude())
                    .longitude(bdLocation.getLongitude())
                    .build();
            //设置自定义图标
            MyLocationConfiguration config=new MyLocationConfiguration(MyLocationConfiguration.LocationMode.FOLLOWING,true,null);
            mBaiduMap.setMyLocationConfiguration(config);
            mBaiduMap.setMyLocationData(data);

            mLatitude = bdLocation.getLatitude();
            mLongtitude = bdLocation.getLongitude();
            //更新经纬度
            float radius = bdLocation.getRadius();
            if (isFirstIn){
                isFirstIn=false;
                latLng = new LatLng(bdLocation.getLatitude(),bdLocation.getLongitude());
               // Log.e("mlnglat", "onReceiveLocation: "+mLatitude+mLongtitude);
                MapStatusUpdate msu = MapStatusUpdateFactory.newLatLng(latLng);
                mBaiduMap.animateMapStatus(msu);



//                Point pt = new Point();
//                pt.x = 0;
//                pt.y = 0;
//                DisplayMetrics dm = new DisplayMetrics();
//                getActivity().getWindowManager().getDefaultDisplay().getMetrics(dm);
//                Point pty = new Point();
//                pty.x = dm.widthPixels;
//                pty.y = dm.heightPixels;
//                if (mBaiduMap.getProjection().fromScreenLocation(pt)!=null&&mBaiduMap.getProjection().fromScreenLocation(pty)!=null){
//                    LatLng upLeft = mBaiduMap.getProjection().fromScreenLocation(pt);
//                    //获取到左上角的经纬度
//                    Uplongitude2 = upLeft.longitude;
//                    Uplatitude2 = upLeft.latitude;
//                    //右下角经纬度
//                    LatLng downRight = mBaiduMap.getProjection().fromScreenLocation(pty);
//                    //获取到右下角的经纬度
//                    downlongitude2 = downRight.longitude;
//                    downlatitude2 = downRight.latitude;
//                }

                if (Uplongitude1!=null&&Uplatitude1!=null&&downlongitude1!=null&&downlatitude1!=null){
                    LatLng zslatlng = new LatLng(Uplongitude1,Uplatitude1);
                    CoordinateConverter converter = new CoordinateConverter();
                    converter.from(CoordinateConverter.CoordType.BD09LL);
                    // sourceLatLng为待转换坐标
                    converter.coord(zslatlng);
                    LatLng desLatLng = converter.convert();

                    LatLng yxlatlng = new LatLng(downlongitude1,downlatitude1);
                    CoordinateConverter converter1 = new CoordinateConverter();
                    converter1.from(CoordinateConverter.CoordType.BD09LL);
                    // sourceLatLng为待转换坐标
                    converter1.coord(yxlatlng);
                    LatLng desLatLng1 = converter1.convert();
                    getServiceData(desLatLng1.longitude,desLatLng1.latitude,desLatLng.longitude,desLatLng.latitude,mLongtitude,mLatitude);
                }


            }
            }
        }


    @Override
    public void onStart() {
        //开启定位
        super.onStart();
        mBaiduMap.setMyLocationEnabled(true);
        //开启方向传感器
        //myOrientationListener.start();

    }

    @Override
    public void onStop() {
        super.onStop();
        //mBaiduMap.setMyLocationEnabled(false);
        //mLocationClient.stop();
        //myOrientationListener.stop();
    }

    @Override
    public void onPause() {
        super.onPause();
        // activity 暂停时同时暂停地图控件
        //mMapView.onPause();
    }


    @Override
    protected void initView() {

    }

    @Override
    protected void setUpView() {

    }

    @Override
    public void onResume() {
        super.onResume();
        // activity 恢复时同时恢复地图控件
        mMapView.onResume();
        getNotice();

    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        // activity 销毁时同时销毁地图控件
        mMapView.onDestroy();
        mLocationClient.stop();//关闭定位
        mBaiduMap.setMyLocationEnabled(false);
    }

    /**
     * 线程更新Toast
     */
    private void ShowToast(final String msg) {
        final Runnable runnable = new Runnable() {
            @Override
            public void run() {
                Toast.makeText(view.getContext(), msg, Toast.LENGTH_SHORT).show();
            }
        };
        new Thread() {
            public void run() {
                new Handler(Looper.getMainLooper()).post(runnable);
            }
        }.start();

    }
    /**
     * 获取左上角和右下角的坐标
     */
    private void getCoordinates(){
        mBaiduMap.setOnMapStatusChangeListener(new BaiduMap.OnMapStatusChangeListener() {
            //在地图状态改变开始
            @Override
            public void onMapStatusChangeStart(MapStatus mapStatus) {
                //左上角经纬度
                Point pt = new Point();
                pt.x = 0;
                pt.y = 0;
                LatLng upLeft = new LatLng(0, 0);
                if (mBaiduMap != null && mBaiduMap.getProjection() != null) {
                    upLeft = mBaiduMap.getProjection().fromScreenLocation(pt);
                }
                //获取到左上角的经纬度
                Uplongitude1 = upLeft.longitude;
                Uplatitude1 = upLeft.latitude;
                //右下角经纬度
                DisplayMetrics dm = new DisplayMetrics();
                getActivity().getWindowManager().getDefaultDisplay().getMetrics(dm);
                Point pty = new Point();
                pty.x = dm.widthPixels;
                pty.y = dm.heightPixels;
                LatLng downRight = new LatLng(0, 0);
                if (mBaiduMap != null && mBaiduMap.getProjection() != null) {
                    downRight = mBaiduMap.getProjection().fromScreenLocation(pty);
                }
                //获取到右下角的经纬度
                downlongitude1 = downRight.longitude;
                downlatitude1 = downRight.latitude;
                LatLng zslatlng = new LatLng(Uplongitude1,Uplatitude1);
                CoordinateConverter converter = new CoordinateConverter();
                converter.from(CoordinateConverter.CoordType.BD09LL);
                // sourceLatLng为待转换坐标
                converter.coord(zslatlng);
                LatLng desLatLng = converter.convert();

                LatLng yxlatlng = new LatLng(downlongitude1,downlatitude1);
                CoordinateConverter converter1 = new CoordinateConverter();
                converter1.from(CoordinateConverter.CoordType.BD09LL);
                // sourceLatLng为待转换坐标
                converter1.coord(yxlatlng);
                LatLng desLatLng1 = converter1.convert();

                //地图当前缩放等级

                getServiceData(desLatLng1.longitude,desLatLng1.latitude,desLatLng.longitude,desLatLng.latitude,mLongtitude,mLatitude);
            }

            @Override
            public void onMapStatusChangeStart(MapStatus mapStatus, int i) {

            }

            @Override
            public void onMapStatusChange(MapStatus mapStatus) {

            }

            @Override
            public void onMapStatusChangeFinish(MapStatus mapStatus) {

            }
        });
    }

    /**
     * 地图拖动时，获取返回的值
     */
    private void getServiceData(Double Uplongitude,Double Uplatitude,
    Double downlongitude,Double downlatitude,Double mlng,Double mlat){

        SharedPreferences sp = getActivity().getSharedPreferences(saveKey,Context.MODE_APPEND);
        String customerId = sp.getString("customerId","");

        FormBody.Builder params=new FormBody.Builder();
        params.add("maxlng", Uplatitude.toString());
        Log.e("滴滴滴滴滴", "getServiceData: "+Uplatitude.toString());
        params.add("minlat", Uplongitude.toString());
        Log.e("滴滴滴滴滴", "getServiceData: "+Uplongitude.toString());
        params.add("minlng", downlatitude.toString());
        Log.e("滴滴滴滴滴", "getServiceData: "+downlatitude.toString());
        params.add("maxlat", downlongitude.toString());
        Log.e("滴滴滴滴滴", "getServiceData: "+downlongitude.toString());
        params.add("lng",mlng.toString());
        Log.e("滴滴滴滴滴", "getServiceData: "+mlng.toString());
        params.add("lat",mlat.toString());
        Log.e("滴滴滴滴滴", "getServiceData: "+mlat.toString());
        if (!customerId.equals("")){
            params.add("customerId",customerId.toString());
            Log.e("滴滴滴滴滴", "getServiceData: "+customerId.toString());
        }
        FormBody form = params.build();
        final StringBuilder sb = new StringBuilder(path2);
        for (int i = 0; i < form.size(); i++) {
            sb.append(form.name(i)).append("=").append(form.value(i)).append("&");
        }
        sb.deleteCharAt(sb.length() - 1);

        OkHttpClient okHttpClient=new OkHttpClient();
        final Request request=new Request.Builder()
                .url(sb.toString())
                .get()
                .build();
        Call call=okHttpClient.newCall(request);
        call.enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                ShowToast("请检查您的网络");
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                if (response.isSuccessful()){
                    String responseData=response.body().string();
                    Gson gson=new Gson();
                    addres=gson.fromJson(responseData, Addres.class);
                    if (addres.getData()!=null){
                        if (addres.getData().size()!=0){
                            Log.e("滴滴滴滴滴", "onResponse: "+addres.getData());
                             addOverlays(addres);
                        }

                    }
                }
            }
        });
    }
    /**
     * 添加覆盖物
     * @param addres
     */
    private void addOverlays(Addres addres) {
        mBaiduMap.clear();
        List<OverlayOptions> options=new ArrayList<>();
        LatLng positon[] = new LatLng[addres.getData().size()];
        for (int i=0;i<addres.getData().size();i++) {
            positon[i] = new LatLng(addres.getData().get(i).getLat(), addres.getData().get(i).getLng());
            newmLatitude = addres.getData().get(i).getLat();
            newmLongtitude = addres.getData().get(i).getLng();
            bundle1 = new Bundle();
            bundle1.putDouble("lat",addres.getData().get(i).getLat());
            bundle1.putDouble("lng",addres.getData().get(i).getLng());
            if (addres.getData().get(i).getFace().contains("http")){
                bundle1.putString("image",addres.getData().get(i).getFace());
            }else {
                bundle1.putString("image","http://shuicheche.oss-cn-hangzhou.aliyuncs.com/"+addres.getData().get(i).getFace());
            }
            bundle1.putString("name",addres.getData().get(i).getNickName());
            bundle1.putInt("redpacketid", addres.getData().get(i).getRpacketId());
            Log.e("id", "addOverlays: "+addres.getData().get(i).getRpacketId());
            CoordinateConverter converter = new CoordinateConverter();
            converter.from(CoordinateConverter.CoordType.BD09LL);
            // sourceLatLng为待转换坐标
            converter.coord(positon[i]);
            LatLng desLatLng = converter.convert();

            options.add(new MarkerOptions().position(desLatLng).icon(mMarker).extraInfo(bundle1));
        }
        mBaiduMap.addOverlays(options);
    }


    /**
     * 红包弹出框
     */
    private void showhongbao() {
        LayoutInflater inflater = getActivity().getLayoutInflater();
        View view = inflater.inflate(R.layout.layout_hongbao, null);
        ImageView bt_close = (ImageView) view.findViewById(R.id.ic_close);
        TextView play = (TextView) view.findViewById(R.id.playhongbao);
        TextView name = (TextView) view.findViewById(R.id.name);

        ImageView myimg = (ImageView) view.findViewById(R.id.myimage);
        xUtilsImageUtils.display(myimg, info.getString("image"), true);

        name.setText(info.getString("name"));

        bt_close.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                mdialog.dismiss();
            }
        });
        play.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
               // Intent intent = new Intent(getActivity(), WebviewActivity.class);
               // intent.putExtra("url", Path + id);
               // startActivity(intent);
                int rpacketId = info.getInt("redpacketid");
                getHB(rpacketId);
                mdialog.dismiss();
            }
        });
        mdialog = new Dialog(getActivity(), R.style.loadingDialogStyle);
        mdialog.setContentView(view);
        mdialog.show();
    }


    private void getHB(final int redpacketid){
        SharedPreferences sp = getActivity().getSharedPreferences(saveKey, Context.MODE_APPEND);
        String token = sp.getString("token","");
        if (token!=null){
            FormBody.Builder params=new FormBody.Builder();
            params.add("_token",token.toString());
            params.add("rpacketId",String.valueOf(redpacketid).toString());
            FormBody form = params.build();
            final StringBuilder sb = new StringBuilder(LHB);
            for (int i = 0; i < form.size(); i++) {
                sb.append(form.name(i)).append("=").append(form.value(i)).append("&");
            }
            sb.deleteCharAt(sb.length() - 1);
            OkHttpClient okHttpClient = new OkHttpClient();
            final Request request=new Request.Builder()
                    .url(sb.toString())
                    .get()
                    .build();
            Call call=okHttpClient.newCall(request);
            call.enqueue(new Callback() {
                @Override
                public void onFailure(Call call, IOException e) {
                    ShowToast("请检查您的网络");
                }

                @Override
                public void onResponse(Call call, Response response) throws IOException {
                    try{
                        if (response.isSuccessful()){
                           // ShowToast("请求成功");

                            Intent intent = new Intent(getActivity(),WebviewActivity.class);
                            intent.putExtra("url","redBagDetail.html?rid="+redpacketid);
                            startActivity(intent);
                        }
                    }catch (Exception e){

                    }
                }
            });


        }

    }



    public void showdialog(){
        LayoutInflater inflater = getLayoutInflater();
        View view = inflater.inflate(R.layout.layout_popupt,null);
        TextView notto=(TextView)view.findViewById(R.id.zanbu);
        TextView upgradenow=(TextView)view.findViewById(R.id.xianzai);
        //取消
        notto.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dialog.dismiss();
            }
        });
        //确定
        upgradenow.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getActivity(),WebviewActivity.class);
                intent.putExtra("url","login.html");
                startActivity(intent);
                dialog.dismiss();
                getActivity().finish();

            }
        });
        dialog=new Dialog(getActivity(),R.style.loadingDialogStyle);
        dialog.setContentView(view);
        dialog.show();

    }




}





