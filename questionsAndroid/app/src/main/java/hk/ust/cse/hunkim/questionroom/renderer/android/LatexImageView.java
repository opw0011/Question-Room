package hk.ust.cse.hunkim.questionroom.renderer.android;

import android.view.View;
import android.content.Context;
import android.content.res.TypedArray;
import android.util.AttributeSet;

import hk.ust.cse.hunkim.questionroom.R;
import hk.ust.cse.hunkim.questionroom.renderer.android.graphics.ColorA;
import hk.ust.cse.hunkim.questionroom.renderer.android.graphics.Graphics2DA;
import hk.ust.cse.hunkim.questionroom.renderer.share.TeXConstants;
import hk.ust.cse.hunkim.questionroom.renderer.share.TeXFormula;
import hk.ust.cse.hunkim.questionroom.renderer.share.TeXIcon;
import hk.ust.cse.hunkim.questionroom.renderer.share.exception.ParseException;
import hk.ust.cse.hunkim.questionroom.renderer.share.platform.FactoryProvider;
import hk.ust.cse.hunkim.questionroom.renderer.share.platform.graphics.Color;
import hk.ust.cse.hunkim.questionroom.renderer.share.platform.graphics.Insets;

/**
 * Created by CHENZiqi on 23/11/15.
 */
public class LatexImageView extends View {
    private TeXFormula mFormula;
    private TeXIcon mTexIcon;
    private TeXFormula.TeXIconBuilder mTexIconBuilder;

    private Graphics2DA mGraphics;

    private String mLatexText = "";
    private float mHeight = 20;
    private int mStyle = TeXConstants.STYLE_DISPLAY;
    private Color mForegroundColor = new ColorA(android.graphics.Color.BLACK);
    private int mBackgroundColor = android.graphics.Color.TRANSPARENT;
    private int mType = TeXFormula.SERIF;

    private float mSizeScale;

    public LatexImageView(Context context) {
        super(context);
        mSizeScale = context.getResources().getDisplayMetrics().scaledDensity;
        initFactoryProvider();
        ensureTeXIconExists();
    }

    public LatexImageView(Context context, AttributeSet attrs) {
        super(context, attrs);
        mSizeScale = context.getResources().getDisplayMetrics().scaledDensity;
        initFactoryProvider();
        readAttributes(context, attrs, 0);
    }

    public LatexImageView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        mSizeScale = context.getResources().getDisplayMetrics().scaledDensity;
        initFactoryProvider();
        readAttributes(context, attrs, defStyleAttr);
    }

    private void initFactoryProvider() {
        if (FactoryProvider.INSTANCE == null) {
            FactoryProvider.INSTANCE = new FactoryProviderAndroid(getContext().getAssets());
        }
    }

    private void readAttributes(Context context, AttributeSet attrs, int defStyleAttr) {
        TypedArray a = context.getTheme().obtainStyledAttributes(
                attrs,
                R.styleable.LatexImageView,
                defStyleAttr, 0);

        try {
            mLatexText = a.getString(R.attr.latexText);
            mHeight = a.getFloat(R.attr.layout_height, 20);
        } finally {
            a.recycle();
        }
        ensureTeXIconExists();
    }

    private void ensureTeXIconExists() {
        if (mFormula == null) {
            try {
                mFormula = new TeXFormula(mLatexText);
            } catch (ParseException exception) {
                mFormula = TeXFormula.getPartialTeXFormula(mLatexText);
            }
        }
        if (mTexIconBuilder == null) {
            mTexIconBuilder = mFormula.new TeXIconBuilder();
        }
        if (mTexIcon == null) {
            mTexIconBuilder.setSize(mHeight * mSizeScale).setStyle(mStyle).setType(mType);  //TODO
            mTexIcon = mTexIconBuilder.build();
        }
        mTexIcon.setInsets(new Insets(
                getPaddingTop(),
                getPaddingLeft(),
                getPaddingBottom(),
                getPaddingRight()
        ));
    }
}
