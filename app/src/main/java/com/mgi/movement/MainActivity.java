package com.mgi.movement;
import android.app.*;import android.os.*;import android.webkit.*;import android.view.*;import android.content.*;import android.widget.*;
public class MainActivity extends Activity{
 WebView web;
 @Override public void onCreate(Bundle b){super.onCreate(b);web=new WebView(this);web.setBackgroundColor(0xfff4f7fb);web.getSettings().setJavaScriptEnabled(true);web.getSettings().setDomStorageEnabled(true);web.setOverScrollMode(View.OVER_SCROLL_NEVER);web.loadUrl("file:///android_asset/index.html");setContentView(web);}
 @Override public void onBackPressed(){if(web.canGoBack())web.goBack();else new AlertDialog.Builder(this).setTitle("Exit app?").setMessage("Do you want to exit the MGI Movement Register?").setNegativeButton("No",null).setPositiveButton("Yes",(d,w)->finish()).show();}
}