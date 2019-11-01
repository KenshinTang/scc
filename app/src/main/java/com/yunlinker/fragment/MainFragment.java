//package com.yunlinker.fragment;
//
//import android.app.Dialog;
//import android.content.Context;
//import android.content.Intent;
//import android.content.SharedPreferences;
//import android.os.Bundle;
//import android.support.annotation.Nullable;
//import android.view.LayoutInflater;
//import android.view.View;
//import android.view.ViewGroup;
//import android.widget.ImageView;
//import android.widget.TextView;
//
//import com.yunlinker.baseclass.BaseFragment;
//
//import com.yunlinker.interfaces.HomeInterface;
//import com.yunlinker.ulit.StartBrotherEvent;
//import com.yunlinker.view.BottomBar;
//import com.yunlinker.scc.Main2Activity;
//import com.yunlinker.scc.R;
//import com.yunlinker.scc.WebviewActivity;
//
//import org.greenrobot.eventbus.EventBus;
//import org.greenrobot.eventbus.Subscribe;
//
//
//import me.yokeyword.fragmentation.SupportFragment;
//
//import static com.yunlinker.config.WebConfig.saveKey;
//
//
//public class MainFragment extends BaseFragment  {
//    private Main2Activity activity;
//    private static final int FIRST = 0;
//    private static final int SECOND = 1;
//    private static final int FOURTH = 2;
//    private static final int  FORE = 3;
//    public final String URl="ewm.html";
//
//    private static  final  String URL="login.html";
//    private String val;
//    private Dialog dialog;
//    private BottomBar mBottomBar;
//    private ImageView mCenterImage;
//    private SupportFragment[] mFragments = new SupportFragment[5];
//
//    public static int mSelectPosition,mCurrentPosition=0;
//
//    public static MainFragment newInstance() {
//
//        Bundle bundle = new Bundle();
//
//        MainFragment fragment = new MainFragment();
//        fragment.setArguments(bundle);
//        return fragment;
//    }
//
//
//
//    @Nullable
//    @Override
//    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
//        View view = inflater.inflate(R.layout.fragment_main, container, false);
//        mCenterImage = (ImageView) view.findViewById (R.id.center_img);
//        if (savedInstanceState == null) {
//            mFragments[FIRST] = FragmentA.newInstance();
//            mFragments[SECOND] = FragmentB.newInstance();
//            mFragments[FOURTH] = FragmentC.newInstance();
//            mFragments[FORE]=FragmentD.newInstance();
//            loadMultipleRootFragment(R.id.fl_tab_container, FIRST,
//                    mFragments[FIRST],
//                    mFragments[SECOND],
//                    mFragments[FORE],
//                    mFragments[FOURTH]);
//        } else {
//            // 这里库已经做了Fragment恢复,所有不需要额外的处理了, 不会出现重叠问题
//            // 这里我们需要拿到mFragments的引用,也可以通过getChildFragmentManager.getFragments()自行进行判断查找(效率更高些),用下面的方法查找更方便些
//            mFragments[FIRST] = findChildFragment(FragmentA.class);
//            mFragments[SECOND] = findChildFragment(FragmentB.class);
//            mFragments[FOURTH] = findChildFragment(FragmentC.class);
//            mFragments[FORE]  = findChildFragment(FragmentD.class);
//        }
//
//
//
//
//        // FragmentA fragmentA = new FragmentA();
//        //fragmentA.reloadPage();
//        //注册
//        EventBus.getDefault().register(this);
//        initView(view);
//        return view;
//
//    }
//
//
//    private void initView(final View view) {
//
//        mBottomBar = (BottomBar) view.findViewById(R.id.bottomBar);
//        final SharedPreferences sp = getActivity().getSharedPreferences(saveKey, Context.MODE_APPEND);
//        mBottomBar.setOnBottombarOnclick(new BottomBar.OnBottonbarClick() {
//            @Override
//            public void onFirstClick() {
//                mSelectPosition = 0;
//                showHideFragment(mFragments[mSelectPosition], mFragments[mCurrentPosition]);
//                mCurrentPosition = 0;
//            }
//
//            @Override
//            public void onSecondClick() {
//                mSelectPosition = 1;
//                showHideFragment(mFragments[mSelectPosition], mFragments[mCurrentPosition]);
//                mCurrentPosition = 1;
//            }
//
//            @Override
//            public void onThirdClick() {
//                if (WebviewActivity.val==null|| sp.getString("userinfo","").equals("")){
//                    showdialog();
//                }else {
//                    mSelectPosition = 2;
//                    showHideFragment(mFragments[mSelectPosition], mFragments[mCurrentPosition]);
//                    mCurrentPosition = 2;
//                }
//            }
//
//            @Override
//            public void onFouthClick() {
//                if (WebviewActivity.val==null|| sp.getString("userinfo","").equals("")){
//                    showdialog();
//                }else {
//                    mSelectPosition = 3;
//                    showHideFragment(mFragments[mSelectPosition], mFragments[mCurrentPosition]);
//                    mCurrentPosition = 3;
//                }
//            }
//
//            @Override
//            public void onCenterClick() {
//
//                if (WebviewActivity.val==null|| sp.getString("userinfo","").equals("")){
//                    showdialog();
//                }else {
//                    Intent intent = new Intent(getActivity(),WebviewActivity.class);
//                    intent.putExtra("url",URl);
//                    startActivity(intent);
//                }
//            }
//
//
//        });
//
//    }
//
//
//    public void showdialog(){
//        LayoutInflater inflater = getActivity().getLayoutInflater();
//        View view = inflater.inflate(R.layout.layout_popupt,null);
//        TextView notto=(TextView)view.findViewById(R.id.zanbu);
//        TextView upgradenow=(TextView)view.findViewById(R.id.xianzai);
//        //取消
//        notto.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
//                dialog.dismiss();
//            }
//        });
//        //确定
//        upgradenow.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
//                Intent intent = new Intent(getActivity(),WebviewActivity.class);
//                intent.putExtra("url",URL);
//                getActivity().startActivity(intent);
//                dialog.dismiss();
//                //activity.finish();
//
//            }
//        });
//        dialog=new Dialog(getActivity(),R.style.loadingDialogStyle);
//        dialog.setContentView(view);
//        dialog.show();
//
//    }
//    /**
//     * start other BrotherFragment
//     */
//    @Subscribe
//    public void startBrother(StartBrotherEvent event) {
//        start(event.targetFragment);
//    }
//    @Override
//    public void onDestroy() {
//        super.onDestroy();
//        EventBus.getDefault().unregister(this);
//    }
//
//
//
//    @Override
//    protected void initView() {
//
//    }
//
//    @Override
//    protected void setUpView() {
//
//    }
//
//    @Override
//    public void onResume() {
//        super.onResume();
//    }
//}
