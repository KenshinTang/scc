/**
 * Copyright (C) 2016 Hyphenate Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.hyphenate.easeui.ui;

import android.app.AlertDialog;
import android.app.ProgressDialog;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.DialogInterface;
import android.content.DialogInterface.OnCancelListener;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.FrameLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.baidu.location.BDLocation;
import com.baidu.location.BDLocationListener;
import com.baidu.location.LocationClient;
import com.baidu.location.LocationClientOption;
import com.baidu.mapapi.SDKInitializer;
import com.baidu.mapapi.map.BaiduMap;
import com.baidu.mapapi.map.BaiduMapOptions;
import com.baidu.mapapi.map.BitmapDescriptor;
import com.baidu.mapapi.map.BitmapDescriptorFactory;
import com.baidu.mapapi.map.MapStatus;
import com.baidu.mapapi.map.MapStatusUpdate;
import com.baidu.mapapi.map.MapStatusUpdateFactory;
import com.baidu.mapapi.map.MapView;
import com.baidu.mapapi.map.MarkerOptions;
import com.baidu.mapapi.map.MyLocationConfiguration;
import com.baidu.mapapi.map.MyLocationConfiguration.LocationMode;
import com.baidu.mapapi.map.OverlayOptions;
import com.baidu.mapapi.model.LatLng;
import com.baidu.mapapi.search.core.SearchResult;
import com.baidu.mapapi.search.geocode.GeoCodeOption;
import com.baidu.mapapi.search.geocode.GeoCodeResult;
import com.baidu.mapapi.search.geocode.GeoCoder;
import com.baidu.mapapi.search.geocode.OnGetGeoCoderResultListener;
import com.baidu.mapapi.search.geocode.ReverseGeoCodeOption;
import com.baidu.mapapi.search.geocode.ReverseGeoCodeResult;
import com.baidu.mapapi.search.poi.OnGetPoiSearchResultListener;
import com.baidu.mapapi.search.poi.PoiCitySearchOption;
import com.baidu.mapapi.search.poi.PoiDetailResult;
import com.baidu.mapapi.search.poi.PoiIndoorResult;
import com.baidu.mapapi.search.poi.PoiResult;
import com.baidu.mapapi.search.poi.PoiSearch;
import com.baidu.mapapi.search.sug.OnGetSuggestionResultListener;
import com.baidu.mapapi.search.sug.SuggestionResult;
import com.baidu.mapapi.search.sug.SuggestionSearch;
import com.baidu.mapapi.search.sug.SuggestionSearchOption;
import com.baidu.mapapi.utils.CoordinateConverter;
import com.hyphenate.easeui.R;
import com.hyphenate.easeui.jxcontrol.CommonUtils;
import com.hyphenate.easeui.model.LocationChange;

import java.io.File;

//import com.baidu.mapapi.MKSearch;

public class EaseBaiduMapActivity extends EaseBaseActivity {

	private final static String TAG = "map";
	private MapView mMapView = null;
	FrameLayout mMapViewContainer = null;
	LocationClient mLocClient;
	public MyLocationListenner myListener = new MyLocationListenner();
	private String LocalAddress,city;

	EditText indexText = null;
	int index = 0;
	// LocationData locData = null;
	static BDLocation lastLocation = null;
	public static EaseBaiduMapActivity instance = null;
	ProgressDialog progressDialog;
	private BaiduMap mBaiduMap;


	private TextView user_info_title,user_info_delete_txt;
	private RelativeLayout user_info_delete,user_info_back;
	private RelativeLayout address_go;
	private TextView txt_address;



	public class BaiduSDKReceiver extends BroadcastReceiver {
		public void onReceive(Context context, Intent intent) {
			String s = intent.getAction();
			String st1 = getResources().getString(R.string.Network_error);
			if (s.equals(SDKInitializer.SDK_BROADTCAST_ACTION_STRING_PERMISSION_CHECK_ERROR)) {
				
				String st2 = getResources().getString(R.string.please_check);
				Toast.makeText(instance, st2, Toast.LENGTH_SHORT).show();
			} else if (s.equals(SDKInitializer.SDK_BROADCAST_ACTION_STRING_NETWORK_ERROR)) {
				Toast.makeText(instance, st1, Toast.LENGTH_SHORT).show();
			}
		}
	}

	private BaiduSDKReceiver mBaiduReceiver;

	boolean isSign;
	LatLng p;
	String address;
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		instance = this;
		//initialize SDK with context, should call this before setContentView
        SDKInitializer.initialize(getApplicationContext());
		setContentView(R.layout.ease_activity_baidumap);

		user_info_title=(TextView)findViewById(R.id.user_info_title);
		user_info_delete_txt=(TextView)findViewById(R.id.user_info_delete_txt);
		user_info_delete=(RelativeLayout)findViewById(R.id.user_info_delete);
		user_info_back=(RelativeLayout)findViewById(R.id.user_info_back);
		address_go=(RelativeLayout)findViewById(R.id.address_go);
		address_go.setVisibility(View.GONE);
		findViewById(R.id.address_go_img).setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				selectMap();
			}
		});
		txt_address=(TextView) findViewById(R.id.txt_address);
		txt_address.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				selectMap();
			}
		});
		txt_address.setVisibility(View.GONE);
		user_info_title.setText("位置信息");
		CommonUtils.bold(user_info_title);
		user_info_delete_txt.setText("发送");
		user_info_back.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				finish();
			}
		});
		user_info_delete.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				sendLocation();
			}
		});
		mMapView = (MapView) findViewById(R.id.bmapView);
		Intent intent = getIntent();
		LocalAddress=intent.getStringExtra("LocalAddress");
		city=intent.getStringExtra("city");
		if(TextUtils.isEmpty(LocalAddress)&&TextUtils.isEmpty(city)){
			double latitude = intent.getDoubleExtra("latitude", 0);
			isSign=intent.getBooleanExtra("isSign",false);
			initMap1();
			if (latitude == 0) {
				mapClickLocal();
				initMap2();
			} else {
				txt_address.setVisibility(View.VISIBLE);
				address_go.setVisibility(View.VISIBLE);
				double longtitude = intent.getDoubleExtra("longitude", 0);
				address = intent.getStringExtra("address");
				txt_address.setText(address);
				p = new LatLng(latitude, longtitude);
				if(mMapView==null)
					mMapView = new MapView(this,
							new BaiduMapOptions().mapStatus(new MapStatus.Builder()
									.target(p).build()));
				showMap(latitude, longtitude, address);
			}
		}else {
			//searchKey();
			searchkey2();
			//search3();
		}

		IntentFilter iFilter = new IntentFilter();
		iFilter.addAction(SDKInitializer.SDK_BROADTCAST_ACTION_STRING_PERMISSION_CHECK_ERROR);
		iFilter.addAction(SDKInitializer.SDK_BROADCAST_ACTION_STRING_NETWORK_ERROR);
		mBaiduReceiver = new BaiduSDKReceiver();
		registerReceiver(mBaiduReceiver, iFilter);

		//关闭手势拖动
		if(isSign){
			mBaiduMap.getUiSettings().setAllGesturesEnabled(false);
		}

	}
	 private String move_address=null;
	private Double move_la=null;
	private Double move_lon=null;

	void mapClickLocal(){
		mBaiduMap.setOnMapStatusChangeListener(new BaiduMap.OnMapStatusChangeListener() {
			@Override
			public void onMapStatusChangeStart(MapStatus mapStatus) {

			}

			@Override
			public void onMapStatusChange(MapStatus mapStatus) {
				mBaiduMap.clear();
				OverlayOptions ooA = new MarkerOptions().position(new LatLng(mapStatus.target.latitude,mapStatus.target.longitude)).icon(BitmapDescriptorFactory
						.fromResource(R.drawable.ease_icon_marka))
						.zIndex(4).draggable(true);
				mBaiduMap.addOverlay(ooA);
			}

			@Override
			public void onMapStatusChangeFinish(MapStatus mapStatus) {
				Log.e("state1:",mapStatus.toString());

				if(mapStatus.target!=null){
					Log.e("state2:",mapStatus.target.latitude+","+mapStatus.target.longitude);
					mBaiduMap.clear();
					OverlayOptions ooA = new MarkerOptions().position(new LatLng(mapStatus.target.latitude,mapStatus.target.longitude)).icon(BitmapDescriptorFactory
							.fromResource(R.drawable.ease_icon_marka))
							.zIndex(4).draggable(true);
					mBaiduMap.addOverlay(ooA);
					GeoCoder geoCoder=GeoCoder.newInstance();
					geoCoder.reverseGeoCode(new ReverseGeoCodeOption().location(mapStatus.target));
					geoCoder.setOnGetGeoCodeResultListener(new OnGetGeoCoderResultListener() {
						@Override
						public void onGetGeoCodeResult(GeoCodeResult geoCodeResult) {

						}

						@Override
						public void onGetReverseGeoCodeResult(ReverseGeoCodeResult reverseGeoCodeResult) {

							if(reverseGeoCodeResult!=null && reverseGeoCodeResult.getLocation()!=null){

								move_address=reverseGeoCodeResult.getAddress();
								move_la=reverseGeoCodeResult.getLocation().latitude;
								move_lon=reverseGeoCodeResult.getLocation().longitude;
							}
						}
					});
				} else {
					runOnUiThread(new Runnable() {
						@Override
						public void run() {
							Toast.makeText(EaseBaiduMapActivity.this," 位置信息异常，请退出重试！",Toast.LENGTH_SHORT).show();
						}
					});
				}

			}
		});

	}
	LocationMode mCurrentMode;
	private void initMap1(){
		if(mMapView==null)
			mMapView = new MapView(this, new BaiduMapOptions());
		mCurrentMode = LocationMode.NORMAL;
		mBaiduMap = mMapView.getMap();
		MapStatusUpdate msu = MapStatusUpdateFactory.zoomTo(15.0f);
		mBaiduMap.setMapStatus(msu);
		initMapView();
	}
	private void initMap2(){
		mBaiduMap.setMyLocationConfiguration(new MyLocationConfiguration(
				mCurrentMode, true, null));
		showMapWithLocationClient();
	}

	SuggestionSearch mSuggestionSearch;
	GeoCoder search;
	LatLng localLaLng;
	private void searchkey2(){
		search=GeoCoder.newInstance();
		OnGetGeoCoderResultListener listener = new OnGetGeoCoderResultListener() {
			public void onGetGeoCodeResult(GeoCodeResult result) {
				if (result == null || result.error != SearchResult.ERRORNO.NO_ERROR) {
					//没有检索到结果
				}
				//Toast.makeText(EaseBaiduMapActivity.this,"onGetGeoCodeResult",Toast.LENGTH_SHORT).show();
				if(result!=null){
					txt_address.setText(LocalAddress);
					txt_address.setVisibility(View.VISIBLE);
					address_go.setVisibility(View.VISIBLE);
					user_info_delete.setVisibility(View.INVISIBLE);
					user_info_delete_txt.setVisibility(View.INVISIBLE);
					LatLng latLng=result.getLocation();
					localLaLng=latLng;

					//latLng=pianyi(latLng.longitude,latLng.latitude);
					//localLaLng=latLng;
					if(latLng!=null)
					{
						LocationMode mCurrentMode = LocationMode.NORMAL;
						mBaiduMap = mMapView.getMap();
						MapStatusUpdate msu = MapStatusUpdateFactory.zoomTo(15.0f);
						mBaiduMap.setMapStatus(msu);
						mMapView = new MapView(EaseBaiduMapActivity.this,
								new BaiduMapOptions().mapStatus(new MapStatus.Builder()
										.target(latLng).build()));

						showMap(latLng.latitude,latLng.longitude,LocalAddress);

					}

					else
					{
						Toast.makeText(EaseBaiduMapActivity.this,"没有搜索到此位置",Toast.LENGTH_SHORT).show();
						mBaiduMap = mMapView.getMap();
						MapStatusUpdate msu = MapStatusUpdateFactory.zoomTo(15.0f);
						mBaiduMap.setMapStatus(msu);
						initMapView();
						LocationMode mCurrentMode = LocationMode.NORMAL;
						mBaiduMap.setMyLocationConfigeration(new MyLocationConfiguration(
								mCurrentMode, true, null));
						showMapWithLocationClient();
						user_info_delete.setVisibility(View.INVISIBLE);
						user_info_delete_txt.setVisibility(View.INVISIBLE);
					}

				}else {
					Toast.makeText(EaseBaiduMapActivity.this,"没有搜索到此位置",Toast.LENGTH_SHORT).show();
				}
				//获取地理编码结果
			}
			@Override
			public void onGetReverseGeoCodeResult(ReverseGeoCodeResult result) {
				if (result == null || result.error != SearchResult.ERRORNO.NO_ERROR) {
					//没有找到检索结果
				}
				//Toast.makeText(EaseBaiduMapActivity.this,"onGetReverseGeoCodeResult:",Toast.LENGTH_SHORT).show();
				//获取反向地理编码结果
			}
		};
		search.setOnGetGeoCodeResultListener(listener);
		search.geocode(new GeoCodeOption().city(city).address(LocalAddress));
				//.city(“北京”)
				//.address(“北京”);
}
	private LatLng pianyi(double lon,double lat)
	{
		double x = lon; double y = lat;
		double z = Math.sqrt(x*x+y*y) + 0.00002 *Math.sin(y*Math.PI) ;
		double temp =Math.atan2(y, x)  + 0.000003 * Math.cos(x*Math.PI);

		double bdLon = z * Math.cos(temp) + 0.0065;
		double bdLat = z * Math.sin(temp) + 0.006;
		LatLng newcenpt = new LatLng(bdLat, bdLon);
		return newcenpt;
	}

	PoiSearch poiSearch;
	void search3(){
		poiSearch = PoiSearch.newInstance();
		OnGetPoiSearchResultListener poiListener = new OnGetPoiSearchResultListener(){
			@Override
			public void onGetPoiIndoorResult(PoiIndoorResult poiIndoorResult) {

			}

			public void onGetPoiResult(PoiResult result){
				//获取POI检索结果
			}
			public void onGetPoiDetailResult(PoiDetailResult result){
				//获取Place详情页检索结果
			}
		};
		poiSearch.setOnGetPoiSearchResultListener(poiListener);
		poiSearch.searchInCity((new PoiCitySearchOption())

				.keyword(LocalAddress)
				);
	}
	private void searchKey(){


		mSuggestionSearch = SuggestionSearch.newInstance();
		OnGetSuggestionResultListener listener = new OnGetSuggestionResultListener() {
			public void onGetSuggestionResult(SuggestionResult res) {
				if (res == null || res.getAllSuggestions() == null) {
					Toast.makeText(EaseBaiduMapActivity.this,"未找到相关结果",Toast.LENGTH_SHORT).show();
					return;
					//未找到相关结果
				}

				for(int i=0;i<res.getAllSuggestions().size();i++){
					if(res.getAllSuggestions().get(i).pt!=null){
					//	addressList.add(res.getAllSuggestions().get(i));
					}
				}

			}
		};
		mSuggestionSearch.setOnGetSuggestionResultListener(listener);
		mSuggestionSearch.requestSuggestion((new SuggestionSearchOption()).keyword(LocalAddress));
				//.city("成都"));
	}

	private void showMap(double latitude, double longtitude, String address) {
		user_info_delete.setVisibility(View.GONE);



		//定义Maker坐标点
		LatLng point = new LatLng(latitude, longtitude);
		//构建Marker图标
		BitmapDescriptor bitmap = BitmapDescriptorFactory
				.fromResource(R.drawable.ease_icon_marka);
		//构建MarkerOption，用于在地图上添加Marker
		OverlayOptions option = new MarkerOptions()
				.position(point)
				.icon(bitmap);
		//在地图上添加Marker，并显示
		mBaiduMap.addOverlay(option);

		MapStatusUpdate u = MapStatusUpdateFactory.newLatLngZoom(point, 17.0f);
		mBaiduMap.animateMapStatus(u);

//		LatLng llA = new LatLng(latitude, longtitude);
//		CoordinateConverter converter= new CoordinateConverter();
//		converter.coord(llA);
//		converter.from(CoordinateConverter.CoordType.COMMON);
//		LatLng convertLatLng = converter.convert();
//		OverlayOptions ooA = new MarkerOptions().position(convertLatLng).icon(BitmapDescriptorFactory
//				.fromResource(R.drawable.ease_icon_marka))
//				.zIndex(4).draggable(true);
//		mBaiduMap.addOverlay(ooA);
//		MapStatusUpdate u = MapStatusUpdateFactory.newLatLngZoom(convertLatLng, 17.0f);
//		mBaiduMap.animateMapStatus(u);
	}

	private void showMapWithLocationClient() {
		String str1 = getResources().getString(R.string.Making_sure_your_location);
		progressDialog = new ProgressDialog(this);
		progressDialog.setCanceledOnTouchOutside(false);
		progressDialog.setProgressStyle(ProgressDialog.STYLE_SPINNER);
		progressDialog.setMessage(str1);

		progressDialog.setOnCancelListener(new OnCancelListener() {

			public void onCancel(DialogInterface arg0) {
				if (progressDialog.isShowing()) {
					progressDialog.dismiss();
				}
				Log.d("map", "cancel retrieve location");
				finish();
			}
		});

		progressDialog.show();

		mLocClient = new LocationClient(this);
		mLocClient.registerLocationListener(myListener);

		LocationClientOption option = new LocationClientOption();
		option.setOpenGps(true);// open gps
		  option.setCoorType("bd09ll");
		// Johnson change to use gcj02 coordination. chinese national standard
		// so need to conver to bd09 everytime when draw on baidu map
		//option.setCoorType("gcj02");
		option.setScanSpan(300000);
		//option.setAddrType("all");
		mLocClient.setLocOption(option);
		mLocClient.start();
	}

	private void  selectMap(){
		//private LinearLayout map_baidu,map_gaode;
		View view= View.inflate(this,R.layout.selectmap,null);
		final View map_baidu=view.findViewById(R.id.map_baidu);
		final View map_gaode=view.findViewById(R.id.map_gaode);
		final AlertDialog.Builder builder=new AlertDialog.Builder(this);
		final AlertDialog dialog=builder.create();
		dialog.setView(view);
		dialog.setCancelable(true);
		map_baidu.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				goBaiduMap(1);
				dialog.dismiss();
			}
		});
		map_gaode.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				goBaiduMap(2);
				dialog.dismiss();
			}
		});
		dialog.show();
	}
	private void goBaiduMap(int type){
		//调起百度地图客户端
		try {
			Intent intent;
			//高的
			//intent = Intent.getIntent("androidamap://path?sourceApplication=GasStation&sid=BGVIS1&slat=34.264642646862&slon=108.95108518068&sname=当前位置&did=BGVIS2&dlat=36.3&dlon=116.2&dname=终点位置&dev=1&m=2&t=0");
			//百度
			if(!TextUtils.isEmpty(LocalAddress)){
				if(localLaLng==null)
				{
					Toast.makeText(EaseBaiduMapActivity.this,"没有搜索到此位置",Toast.LENGTH_SHORT).show();
					return;
				}else {
					p=localLaLng;
					address=LocalAddress;
				}
			}
			if(type==1){
				intent = Intent.getIntent("intent://map/direction?destination=latlng:"+p.latitude+","+p.longitude+"|name:"+address+"&referer=Autohome|GasStation#Intent;scheme=bdapp;package=com.baidu.BaiduMap;end");
				if(isInstallByread("com.baidu.BaiduMap")){
					startActivity(intent); //启动调用
					Log.e("GasStation", "百度地图客户端已经安装") ;
				}else{
					Toast.makeText(this,"请安装百度地图",Toast.LENGTH_SHORT).show();
				}
			}else if (type==2){
				double[] nlo =LocationChange.bd09_To_Gcj02(p.latitude,p.longitude);
				//lastLocation
				 //intent = new Intent("android.intent.action.VIEW",android.net.Uri.parse("androidamap://navi?sourceApplication=建信&lat="+p.latitude+ "&lon="+ p.longitude+ "&dev=0"));
				intent = Intent.getIntent("androidamap://viewMap?sourceApplication=建信&poiname=" + address + "&lat=" + nlo[0] + "&lon=" + nlo[1] + "&dev=0");
				intent.setPackage("com.autonavi.minimap");
				if(isInstallByread("com.autonavi.minimap")){
					startActivity(intent); //启动调用
					Log.e("GasStation", "高德地图客户端已经安装") ;
				}else{
					Toast.makeText(this,"请安装高德地图",Toast.LENGTH_SHORT).show();
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	/**
	 * 判断是否安装目标应用
	 * @param packageName 目标应用安装后的包名
	 * @return 是否已安装目标应用
	 */
	private boolean isInstallByread(String packageName) {
		return new File("/data/data/" + packageName).exists();
	}
	@Override
	protected void onPause() {
		mMapView.onPause();
		if (mLocClient != null) {
			mLocClient.stop();
		}
		super.onPause();
		lastLocation = null;
	}

	@Override
	protected void onResume() {
		mMapView.onResume();
		if (mLocClient != null) {
			mLocClient.start();
		}
		super.onResume();
	}

	@Override
	protected void onDestroy() {
		if (mLocClient != null)
			mLocClient.stop();
		if(search!=null)
			search.destroy();

		mMapView.onDestroy();
		unregisterReceiver(mBaiduReceiver);
		mMapView = null;
		mBaiduMap = null;
		super.onDestroy();
	}
	private void initMapView() {
		mMapView.setLongClickable(true);
	}

	/**
	 * format new location to string and show on screen
	 */
	public   class MyLocationListenner  implements BDLocationListener {
		@Override
		public void onReceiveLocation(BDLocation location) {
			if (location == null) {
				return;
			}

			//Log.e("map", location.getLatitude()+","+location.getLongitude());
			/*Log.d("map", "addr:" + location.getAddrStr());*/
			runOnUiThread(new Runnable() {
				@Override
				public void run() {
					user_info_delete.setVisibility(View.VISIBLE);
				}
			});
			if (progressDialog != null) {
				progressDialog.dismiss();
			}

			if (lastLocation != null) {
				if (lastLocation.getLatitude() == location.getLatitude() && lastLocation.getLongitude() == location.getLongitude()) {
					Log.d("map", "same location, skip refresh");
					// mMapView.refresh(); //need this refresh?
					return;
				}
			}
			lastLocation = location;
			mBaiduMap.clear();
			LatLng llA=new LatLng(lastLocation.getLatitude(), lastLocation.getLongitude());

			//LatLng llA = new LatLng(lastLocation.getLatitude(), lastLocation.getLongitude());
//			CoordinateConverter converter= new CoordinateConverter();
//			converter.coord(llA);
//			converter.from(CoordinateConverter.CoordType.COMMON);
//			LatLng convertLatLng = converter.convert();
			OverlayOptions ooA = new MarkerOptions().position(llA).icon(BitmapDescriptorFactory
					.fromResource(R.drawable.ease_icon_marka))
					.zIndex(4).draggable(true);
			mBaiduMap.addOverlay(ooA);
			MapStatusUpdate u = MapStatusUpdateFactory.newLatLngZoom(llA, 17.0f);
			mBaiduMap.animateMapStatus(u);


			GeoCoder geoCoder=GeoCoder.newInstance();
			LatLng ptCenter = new LatLng(location.getLatitude(), location.getLongitude());
			geoCoder.reverseGeoCode(new ReverseGeoCodeOption().location(ptCenter));
			geoCoder.setOnGetGeoCodeResultListener(new OnGetGeoCoderResultListener() {
				@Override
				public void onGetGeoCodeResult(GeoCodeResult geoCodeResult) {

				}

				@Override
				public void onGetReverseGeoCodeResult(ReverseGeoCodeResult reverseGeoCodeResult) {

					if(reverseGeoCodeResult!=null && reverseGeoCodeResult.getLocation()!=null){
						move_address=reverseGeoCodeResult.getAddress();
						move_la=reverseGeoCodeResult.getLocation().latitude;
						move_lon=reverseGeoCodeResult.getLocation().longitude;
					}
				}
			});

		}

		public void onReceivePoi(BDLocation poiLocation) {
			if (poiLocation == null) {
				return;
			}
		}

		@Override
		public void onConnectHotSpotMessage(String s, int i) {

		}
	}




	public void sendLocation( ) {
		Intent intent = this.getIntent();
		/*if(move_address!=null&&move_lon!=null&&move_la!=null){
			intent.putExtra("latitude", move_la);
			intent.putExtra("longitude",move_lon);
			intent.putExtra("address",move_address);
		}else {
			intent.putExtra("latitude", lastLocation.getLatitude());
			intent.putExtra("longitude", lastLocation.getLongitude());
			intent.putExtra("address", lastLocation.getAddrStr());
		}*/
		if(move_la==null || move_lon==null) {
			Toast.makeText(instance, "正在加载位置信息，请稍后", Toast.LENGTH_SHORT).show();
			return;
		}
		intent.putExtra("latitude", move_la);
		intent.putExtra("longitude",move_lon);
		intent.putExtra("address",move_address);

		intent.putExtra("isSign",isSign);
		this.setResult(RESULT_OK, intent);
		finish();
		overridePendingTransition(R.anim.slide_in_from_left, R.anim.slide_out_to_right);
	}

}
